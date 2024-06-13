<template>
    <div id="task-form">
      <header-dashboard-text
          header-title="Trabalho de Conclusão de Curso:"
          :students="[]"
          name-project="IAawfawnjfawofawnlkdnawldawfaa11Sjawda"
          screen-name="Criar tarefa"
      />

      <div class="task-form__content">
        <form-input
            input-label="Nome da tarefa"
            :input-value="fields.taskName"
            :input-status="validations.taskName.status"
            :input-feedback="validations.taskName.feedback"
            @update:input-value="value => fields.taskName = value"
        />

        <form-input
            input-label="Data de entrega"
            :input-value="fields.taskDeadline"
            :input-status="validations.taskDeadline.status"
            :input-feedback="validations.taskDeadline.feedback"
            input-type="date"
            @update:input-value="value => fields.taskDeadline = value"
        />

        <form-input
            input-label="Descrição da tarefa"
            input-model="textarea"
            :input-value="fields.taskDescription"
            :input-status="validations.taskDescription.status"
            :input-feedback="validations.taskDescription.feedback"
            @update:input-value="value => fields.taskDescription = value"
        />

        <div class="task-form__attachment-container">
          <span class="task-form__attachment-title">Anexos:</span>
          <div class="task-form__attachments">
            <div
                class="task-form__attachment"
                v-for="(attachment, index) in fields.taskAttachments"
                :key="`attachment-${index}`"
            >
              <Paperclip />
              <span class="task-form__attachment-name">{{ attachment.name}}</span>
            </div>
          </div>
          <button  class="task-form__add-attachment-button" @click="openFileInput">
            <CloudUpload />
            <span>Adicionar anexo</span>
          </button>
        </div>

        <div class="task-form__footer">
          <app-button @click="createTask">Criar tarefa</app-button>
          <input type="file" id="fileInput" @change="uploadFile" ref="fileInput">
        </div>
      </div>

    </div>
</template>

<script setup lang="ts">
import FormInput from "@/components/form-input/FormInput.vue";
import {Paperclip, CloudUpload} from "lucide-vue-next"
import HeaderDashboardText from "@/components/header-dashboard-text/header-dashboard-text.vue";
import AppButton from "@/components/app-button/AppButton.vue";
import {onMounted, ref, type VNodeRef} from "vue";
import {createTaskService} from "@/services/task";
import router from "@/router";
import type {UserInfos} from "@/@types/services/auth";

const fields = ref<any>({
  taskName: "",
  taskDescription: "",
  taskDeadline: "",
  taskAttachments: []
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
  }
})

const validateFields = () => {
  const validationsList = [];

  for(let field of requiredFields.value) {
    const value = fields.value[field]

    validations.value[field].status = !!value
    validations.value[field].feedback = !!value ? "" : "Campo obrigatório";
    validationsList.push(!!value);
  }

  return !validationsList.includes(false);
}

const openFileInput = () => {
  fileInput.value.click();
}
const uploadFile = () => {
  const file = fileInput.value.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {

      fields.value.taskAttachments.push({name: file.name, attachment: event!.target!.result});
      fileInput.value.value = "";
    };
    reader.readAsDataURL(file);
  }
}


const userInfos = ref<UserInfos>({});

const createTask = async () => {
  const resultValidation = validateFields();

  if(!resultValidation) return;
console.log(fields.value.taskDeadline)
  const payload = {
    title: fields.value.taskName,
    description: fields.value.taskDescription,
    deadline: fields.value.taskDeadline,
    attachments: fields.value.taskAttachments
  }

  try {
    await createTaskService(Number(router!.currentRoute!.value!.params!.id), userInfos.value.id, payload);
    router.push({name: "project-tasks", params: {id:router!.currentRoute!.value!.params!.id }})
  } catch (e) {
    console.error(e);
  }
}

onMounted(() => {
  userInfos.value =  JSON.parse(localStorage.getItem("userInfos") || "");
})
</script>

<style lang="scss">
#task-form {
  display: flex;
  flex-direction: column;
  flex: 1;

  .task-form__content {
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    gap: 12px;
    flex: 1;

    .task-form__footer {
      margin: auto 0 0 auto;
    }

    #fileInput {
      opacity: 0;
      position: fixed;
      left: 100%;
    }

    .task-form__attachment-container {
      display: flex;
      flex-direction: column;
      gap: 8px;

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
          }

          .task-form__attachment-date {
            font-size: 12px;
            font-weight: 400;
            line-height: normal;
            color: #666666;
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
}
</style>

