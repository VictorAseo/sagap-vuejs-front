<template>
  <div id="task-form">
    <header-dashboard-text
        header-title="Trabalho de Conclusão de Curso:"
        :students="students"
        :name-project="projectName"
        screen-name="Tarefa"
    />

    <div class="task-form__content">
      <div class="task-form__header">
        <span class="task-form__name">Etapa 1</span>

        <div class="task-form__date-container">
          <span>Data: {{fields.deadline}}</span>
        </div>

        <app-button class="task-form__finish-button" @click="completeTask" v-if="userInfos.userType == 2 && !fields.completed">Concluir tarefa</app-button>
      </div>

      <div class="task-form__description-container">
        <span class="task-form__description-label">Descrição da tarefa</span>
        <p class="task-form__description"> {{fields.taskDescription}} </p>
      </div>

      <div class="task-form__attachments-wrapper">
        <div class="task-form__attachment-container">
          <span class="task-form__attachment-title">Anexos Alunos:</span>
          <div class="task-form__attachments">
            <a class="task-form__attachment"
                 v-for="(attachment, index) in fields.studentsAttachments"
                 :key="`students-attachment-${index}`"
                 :href="attachment.attachment"
                 :download="attachment.name"
            >
              <Paperclip />
              <span class="task-form__attachment-name">{{ attachment.name }}</span>
              <span class="task-form__attachment-date">{{ attachment.created }}</span>
            </a>
          </div>
          <button class="task-form__add-attachment-button" @click="openFileInput" v-if="userInfos.userType == 1">
            <CloudUpload />
            <span>Adicionar anexo</span>
          </button>
        </div>

        <div class="task-form__attachment-container">
          <span class="task-form__attachment-title">Anexos Professor:</span>
          <div class="task-form__attachments">
            <a class="task-form__attachment"
                 v-for="(attachment, index) in fields.teacherAttachments"
                 :key="`teacher-attachment-${index}`"
                 :href="attachment.attachment"
                 :download="attachment.name"
            >
              <Paperclip />
              <span class="task-form__attachment-name">{{ attachment.name }}</span>
              <span class="task-form__attachment-date">{{ attachment.created }}</span>
            </a>
          </div>
          <button  class="task-form__add-attachment-button" @click="openFileInput" v-if="userInfos.userType == 2">
            <CloudUpload />
            <span>Adicionar anexo</span>
          </button>
        </div>

        <input type="file" class="task-form__input-file" @change="uploadFile" ref="fileInput">
      </div>

      <div class="tasks-form__comments-container">
        <span class="tasks-form__comments-title">
          Comentários:
        </span>

        <div class="task-form__comments-list" v-if="fields.comments.length">
          <Comment
              v-for="(comment, index) in fields.comments"
              :key="`comment-${index}`"
              :date="comment.created"
              :author="comment.userName"
              :comment="comment.comment"
              :user-type="comment.userType"
          />
        </div>

        <div class="task-form__comment-input-container">
          <form-input
              input-model="textarea"
              :input-value="fields.comment"
              :input-status="validations.comment.status"
              :input-feedback="validations.comment.feedback"
              @update:input-value="value => fields.comment = value"
          />

          <app-button @click="handleSendMessage">
            <Send />
          </app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormInput from "@/components/form-input/FormInput.vue";
import {Paperclip, CloudUpload, Send} from "lucide-vue-next"
import HeaderDashboardText from "@/components/header-dashboard-text/header-dashboard-text.vue";
import AppButton from "@/components/app-button/AppButton.vue";
import {onMounted, ref, type VNodeRef} from "vue";
import Comment from "@/views/Task/components/Comment.vue";
import router from "@/router";
import {addAttachmentService, completeTaskService, getTaskService, sendCommentService} from "@/services/task";
import type {UserInfos} from "@/@types/services/auth";
import type {POSTCommentPayload} from "@/@types/services/task";
import moment from "moment";
import { useAppStore } from "@/stores/AppStore";
import { storeToRefs } from "pinia";
import {getProjectInfosService} from "@/services/project";

const appStore = useAppStore();
const { handleLoading } = appStore
const { showLoading } = storeToRefs(appStore);

const projectName = ref<string>("");
const students = ref<any[]>([]);
const userInfos = ref<UserInfos>({} as UserInfos);

const fields = ref<{
  taskName: string,
  taskDescription: string,
  taskDeadline: string,
  teacherAttachments: any[],
  studentsAttachments: any[],
  comments: any[],
  comment: string
  deadline: string,
  completed: boolean
}>({
  taskName: "",
  taskDescription: "",
  taskDeadline: "",
  teacherAttachments: [],
  studentsAttachments: [],
  comments: [],
  comment: "",
  deadline: "00/00/0000",
  completed: false,
})

const fileInput = ref<VNodeRef | undefined>(undefined);
const requiredFields = ref<string[]>(["taskName", "taskDescription", "taskDeadline"]);

const validations = ref<any>({
  taskName: {
    status: true,
    feedback: "",
  },
  taskDescription: {
    status: true,
    feedback: ""
  },
  taskDeadline: {
    status: true,
    feedback: ""
  },
  comment: {
    status: true,
    feedback: ""
  }
})

const validateFields = () => {
  for(let [chave, valor] of Object.entries(fields.value)) {
    validations.value[chave].status = !!valor;
    validations.value[chave].feedback = !!valor ? "" : "Campo obrigatório";
  }
}

const openFileInput = () => {
  fileInput.value.click();
}

const saveAttachment = async (fileName: string, base64: string) => {
  const payload = {
    userId: userInfos.value.id,
    name: fileName,
    attachment: base64
  };

  handleLoading(true);

  try {
    await addAttachmentService(Number(router.currentRoute.value.params.taskId), payload);
    await getTask(false);
  } catch (e) {
    console.error(e);
  } finally {
    handleLoading(false);
  }
}
const uploadFile = async () => {
  const file = fileInput.value.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      saveAttachment(file.name, (event?.target!.result as any) || "");
      fileInput.value.value = "";
    };
    reader.readAsDataURL(file);
  }
}

const getProjectInfos = async () => {
  try {
    const response = await getProjectInfosService(Number(router.currentRoute.value.params.projectId))
    projectName.value = response.data.name;
    students.value = response.data.students.map(item => item.name);
  } catch (e) {
    console.error(e);
  }
}

const completeTask = async () => {
  try {
    await completeTaskService(Number(router.currentRoute.value.params.taskId));
    router.push({name: "project-tasks", params: {id: router.currentRoute.value.params.projectId}})
  } catch (e) {
    console.error(e);
  }
}

const getTask = async (hasLoading: boolean = true) => {
  hasLoading && handleLoading(true);
  try {
    const taskId = router.currentRoute.value.params.taskId;
    const { data } = await getTaskService(taskId ? Number(taskId) : -1);
    await getProjectInfos();

    fields.value.deadline = moment(data.deadline).format("DD/MM/YYYY");
    fields.value.taskName = data.title;
    fields.value.taskDescription = data.description;
    fields.value.completed = data.completed;
    fields.value.comments = data.taskComments.map(item => ({...item, created: moment(item.created).format("DD/MM/YYYY HH:mm")}));
    data.taskAttachments = data.taskAttachments.map(item => ({...item, created: moment(item.created).format("DD/MM/YYYY HH:mm")}));
    fields.value.studentsAttachments = data.taskAttachments.filter(attachment => attachment.userType == 1);
    fields.value.teacherAttachments = data.taskAttachments.filter(attachment => attachment.userType == 2);

  } catch (e) {
    console.error(e);
  } finally {
    hasLoading && handleLoading(false);
  }
}


const validateCommentField = () => {
  const value = fields.value.comment;

  validations.value.comment.status = !!value;
  validations.value.comment.feedback = !!value ? "" : "Campo obrigatório";

  return !!value;
}

const handleSendMessage = async () => {
  const resultValidation = validateCommentField();

  if(!resultValidation) return;

  const payload: POSTCommentPayload = {
    userId: userInfos.value.id,
    comment: fields.value.comment
  }

  try {
    await sendCommentService(Number(router?.currentRoute?.value?.params?.taskId), payload);
    fields.value.comment = "";
    getTask();
  } catch (e) {
    console.error(e);
  } finally {

  }
}


onMounted(() => {
  userInfos.value =  JSON.parse(localStorage.getItem("userInfos") || "");
  getTask();
})
</script>

<style lang="scss">
#task-form {
  display: flex;
  flex-direction: column;
  flex: 1;

  .task-form__input-file {
    position: fixed;
    opacity: 0;
    left: 100%;
  }

  .task-form__content {
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    gap: 12px;
    flex: 1;

    .task-form__description-container {
      margin: 24px 0;
      display: flex;
      flex-direction: column;
      gap: 4px;

      .task-form__description-label {
        font-size: 12px;
      }

      .task-form__description {

        padding: 12px;
        border: 1px solid #b9b9b9;
        border-radius: 6px;
      }
    }

    .task-form__header {
      display: flex;
      align-items: center;

      .task-form__name {
        font-size: 15px;
        font-weight: 700;
        line-height: normal;
      }

      .task-form__date-container {
        display: flex;
        align-items: center;
        background: #4F4B63;
        border-radius: 6px;
        padding: 8px;
        margin-left: 16px;

        span {
          font-size: 10px;
          font-weight: 400;
          line-height: normal;
          height: fit-content;
          color: #fff;
        }
      }

      .task-form__finish-button {
        margin-left: auto;
      }
    }

    .task-form__description {
      width: 100%;
      textarea {
        width: 100%;
      }
    }

    .task-form__footer {
      margin: auto 0 0 auto;
    }

    #fileInput {
      opacity: 0;
      position: fixed;
      left: 100%;
    }

    .task-form__attachments-wrapper {
      display: flex;
      gap: 24px;
      .task-form__attachment-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-width: 400px;
        min-width: 400px;

        .task-form__attachment-title {
          font-size: 16px;
          font-weight: 400;
          line-height: normal;
          text-align: left;
          color: #3C3C3C;
        }

        .task-form__attachments {
          display: flex;
          flex-direction: column;
          gap: 4px;

          .task-form__attachment {
            display: flex;
            gap: 4px;
            align-items: center;
            cursor: pointer;
            text-decoration: none;
            svg {
              min-height: 15px;
              max-height: 15px;
              min-width: 15px;
              max-width: 15px;
              color: #3B3B3B;
            }

            .task-form__attachment-name {
              font-size: 14px;
              font-weight: 400;
              line-height: normal;
              color: #3C3C3C;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }

            .task-form__attachment-date {
              font-size: 12px;
              font-weight: 400;
              line-height: normal;
              color: #666666;
              white-space: nowrap;
            }
          }
        }

        .task-form__add-attachment-button {
          display: flex;
          gap: 4px;
          background: transparent;
          border: 0;
          outline: none;
          align-items: center;
          cursor: pointer;
          padding: 0;

          svg {
            height: 18px;
            min-height: 18px;
            width: 18px;
            max-width: 18px;
            color: #3B3B3B;
          }

          span {
            font-size: 12px;
            font-weight: 400;
            line-height: normal;
            color: #3C3C3C;
          }
        }
      }
    }

    .tasks-form__comments-container {
      display: flex;
      flex-direction: column;
      margin-top: 48px;

      .task-form__comments-list {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-top: 24px;
      }

      .task-form__comment-input-container {
        margin-top: 36px;
        display: flex;
        gap: 36px;

        .form-input__container {
          flex: 1;
          textarea {
            width: 100%;
          }
        }

        .button-app__container {
          padding: 9px 32px;

          svg {
            height: 18px;
            width: 18px;
          }
        }
      }
    }
  }
}
</style>

