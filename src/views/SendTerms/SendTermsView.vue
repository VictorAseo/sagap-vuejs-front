<template>

  <div id="send_terms-view">
    <header-screens-text
        screen-name="Envio de Termos/Relatorios"
        header-title="Envio de Termos/Relatorios"
        header-first-sub-title="Formulário para envio ao professor solicitando orientação"
    />
    <div class="send_terms-view__content">
        <div class="send_terms-view__content">
          <div
              v-for="(evaluator, index) in selectedEvaluators"
              :key="`evaluator-${index}`"
              class="send_terms__wrapper-select">
            <form-input
                :input-label="`Enviar para E-mail ${index + 1}`"
                :input-value="evaluator.value"
                :input-feedback="validations[index].feedback"
                :input-status="validations[index].valid"/>
            <div class="send_terms__select-actions">
              <app-button
                  v-if="index == selectedEvaluators.length - 1"
                  @click="createNewEvaluatorField"
                  variant="default">
                <Plus />
              </app-button>

              <app-button
                  v-if="(index !== 0 && selectedEvaluators.length === 1) || selectedEvaluators.length > 1"
                  @click="removeEvaluatorField(index)"
                  variant="denied">
                <Minus />
              </app-button>
            </div>
          </div>
        </div>
        <div class="send_terms-view__content">
          <div
              v-for="(evaluator1, index1) in selectedEvaluators1"
              :key="`evaluator-${index1}`"
              class="send_terms__wrapper-select">
            <form-input
                :input-label="`Cc ${index1 + 1}`"
                :input-value="evaluator1.value"
                :input-feedback="validations1[index1].feedback"
                :input-status="validations1[index1].valid"/>
            <div class="send_terms__select-actions">
              <app-button
                  v-if="index1 == selectedEvaluators1.length - 1"
                  @click="createNewEvaluatorField1"
                  variant="default">
                <Plus />
              </app-button>

              <app-button
                  v-if="(index1 !== 0 && selectedEvaluators1.length === 1) || selectedEvaluators1.length > 1"
                  @click="removeEvaluatorField1(index1)"
                  variant="denied">
                <Minus />
              </app-button>
            </div>
          </div>
        </div>
      <form-input
          input-label="Assunto"
          :input-value="fields.subject"
          :input-status="validations2.subject.status"
          :input-feedback="validations2.subject.feedback"
      />
      <form-input
          input-label="Descrição"
          :input-value="fields.description"
          :input-feedback="validations2.description.feedback"
          :input-status="validations2.description.status"
          input-model="textarea"
      />
      <div class="send-terms__attachment-container">
          <span class="send-terms__attachment-title">Anexos:</span>
          <div class="send-terms__attachments">
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
          <button  class="send-terms__add-attachment-button" @click="openFileInput">
            <CloudUpload />
            <span>Adicionar anexo</span>
          </button>
      </div>
      <input type="file" class="task-form__input-file" @change="uploadFile" ref="fileInput">
      <div class="send_terms-form__footer">
        <app-button @click="router.push({name: 'projects'})">Enviar E-mail</app-button>
      </div>

  </div>
</div>
</template>
<script setup lang="ts">

import HeaderScreensText from "@/components/header-dashboard-text/header-screens-text.vue";
import FormInput from "@/components/form-input/FormInput.vue";
import {ref, type VNodeRef} from "vue";
import AppButton from "@/components/app-button/AppButton.vue";
import {CloudUpload, Minus, Paperclip, Plus} from "lucide-vue-next";
import router from "@/router";

const students = ref([
    {
      id: 0,
      label: 'email.0@email.com'
    },
    {
      id: 1,
      label: 'email.1@email.com'
    },
    {
      id: 2,
      label: 'email.2@email.com'
    },
]);

const selectedEvaluators = ref<{value: string | number | string[] | undefined}[]>([{value: undefined}])
const validations = ref<{valid: boolean, feedback: string}[]>([{valid: true, feedback: ""}])
const selectedEvaluators1 = ref<{value: string | number | string[] | undefined}[]>([{value: undefined}])
const validations1 = ref<{valid: boolean, feedback: string}[]>([{valid: true, feedback: ""}])
const handleOptionListEvaluators = (selectedItem: string | number | string[] | undefined) => {
  return students.value
      .filter(item => !selectedEvaluators.value
          .some(selectedEvaluator => selectedEvaluator.value == item.id) || item.id === selectedItem);
}
const createNewEvaluatorField = () => {
  selectedEvaluators.value.push({value: undefined});
  validations.value.push({valid: true, feedback: ""});
}
const removeEvaluatorField = (index: number) => {
  selectedEvaluators.value.splice(index, 1);
  validations.value.splice(index, 1);
}
const createNewEvaluatorField1 = () => {
  selectedEvaluators1.value.push({value: undefined});
  validations1.value.push({valid: true, feedback: ""});
}
const removeEvaluatorField1 = (index: number) => {
  selectedEvaluators1.value.splice(index, 1);
  validations1.value.splice(index, 1);
}


const fields = ref<{
  subject: string,
  description: string,
  teacherAttachments: any[],
}>({
  teacherAttachments: [],
  subject: "",
  description: "",
})
const fileInput = ref<VNodeRef | undefined>(undefined);
const openFileInput = () => {
  fileInput.value.click();
}
const validations2 = ref<any>({
  subject: {
    status: true,
    feedback: "",
  },
  description: {
    status: true,
    feedback: ""
  }
})

const validateFields = () => {
  // for(let [chave, valor] of Object.entries(fields.value)) {
  //   validations2.value[chave].status = !!valor;
  //   validations2.value[chave].feedback = !!valor ? "" : "Campo obrigatório";
  // }
  const validationResult = validateFields2();

  if(!validationResult) return;
  router.push({name: 'projects'})
}

const uploadFile = () => {
  const file = fileInput.value.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      console.log(event!.target!.result)
      fileInput.value.value = "";
    };
    reader.readAsDataURL(file);
  }
}

const validateFields2 = () => {
  const validationsLocal = [];

  for (let i = 0; i < selectedEvaluators.value.length; i++) {
    validations.value[i] = {
      valid: selectedEvaluators.value[i].value != null,
      feedback: selectedEvaluators.value[i].value == null ? "Campo obrigatório" : ""
    }

    validationsLocal.push(selectedEvaluators.value[i].value != null);
  }

  return !validationsLocal.includes(false);
}

</script>
<style scoped lang="scss">


   #send_terms-view {
    .send_terms-view__content {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 12px;
      margin-top: 12px;
      .send_terms__wrapper-select {
        display: flex;
        gap: 8px;
        .send_terms__select-actions {
          display: flex;
          align-items: flex-end;
          gap: 8px;

          button {
            height: 37px;
            width: 37px;

            svg {
              min-height: 18px;
              min-width: 18px;
            }
          }
        }
      }
      .task-form__input-file {
        position: fixed;
        opacity: 0;
        left: 100%;
      }

      #fileInput {
      opacity: 0;
      position: fixed;
      left: 100%;
    }

    .send-terms__attachment-container {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .send-terms__attachment-title {
        font-size: 16px;
        font-weight: 400;
        line-height: normal;
        text-align: left;
        color: #3C3C3C;
      }

      .send-terms__attachments {
        display: flex;
        flex-direction: column;
        gap: 4px;

        .send-terms__attachment {
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

          .send-terms__attachment-name {
            font-size: 14px;
            font-weight: 400;
            line-height: normal;
            color: #3C3C3C;
          }

          .send-terms__attachment-date {
            font-size: 12px;
            font-weight: 400;
            line-height: normal;
            color: #666666;
          }
        }
      }

      .send-terms__add-attachment-button {
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
