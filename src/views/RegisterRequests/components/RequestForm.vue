<template>
  <div class="requestForm-main-view-container">
    <div class="requestForm-input-main-view">
      <Formselect
        :input-value="registerRequestsFields.advisor.value"
        :input-status="registerRequestsFields.advisor.status"
        :input-feedback="registerRequestsFields.advisor.feedback"
        :input-placeholder="registerRequestsFields.advisor.placeholder"
        :option-list="usertypeOptions"
        :label="registerRequestsFields.advisor.label"
        @update:input-value="(newValue) => (registerRequestsFields.advisor.value = newValue)"
      />
      <FormInput
          :input-label="registerRequestsFields.projectName.label"
          :input-value="registerRequestsFields.projectName.value"
          :input-type="registerRequestsFields.projectName.type"
          :input-status="registerRequestsFields.projectName.status"
          :input-feedback="registerRequestsFields.projectName.feedback"
          :input-placeholder="registerRequestsFields.projectName.placeholder"
          @update:input-value="(newValue) => (registerRequestsFields.projectName.value = newValue)"
      />
      <FormInput
          input-model="textarea"
          :input-label="registerRequestsFields.description.label"
          :input-value="registerRequestsFields.description.value"
          :input-type="registerRequestsFields.description.type"
          :input-status="registerRequestsFields.description.status"
          :input-feedback="registerRequestsFields.description.feedback"
          :input-placeholder="registerRequestsFields.description.placeholder"
          @update:input-value="(newValue) => (registerRequestsFields.description.value = newValue)"
      />
    </div>
    <div class="requestForm-button--main-container">
      <AppButton
        class="requestForm-button-sendRequest"
        style="width: 110px; height: 30px;"
      >
        Enviar solicitação
      </AppButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import FormInput from "@/components/form-input/FormInput.vue";
import Formselect from "@/components/app-select/AppSelect.vue";
import type { RegisterRequestsFields } from "@/@types/stores/RegisterRequestsStore";
import {storeToRefs} from "pinia";
import {useRegisterRequestsStore} from "@/stores/RegisterRequestsStore";
import {ref} from "vue";
import AppButton from "@/components/app-button/AppButton.vue";

const store = useRegisterRequestsStore();
const { registerRequestsFields } = storeToRefs(store);

const usertypeOptions = ref( [{id: 0, label: 'Cassio'}, {id: 1, label: 'Saulo'}, {id: 2, label: 'Vinicios'}]);

const checkRequiredField = (requestFormFieldsParam: RegisterRequestsFields, key: string) => {
  const status = !!requestFormFieldsParam[key].value;
  requestFormFieldsParam[key].status = status;
  requestFormFieldsParam[key].feedback = status ? "" : "Campo obrigatório";

  return status;
};

const fields = {
  advisor: {
    label: "Orientador",
    value: null,
    type: "select",
    placeholder: "Selecione o nome do orientador!",
    status: true,
    feedback: "",
    validations: [checkRequiredField]
  },
  projectName: {
    label: "Projeto",
    value: "",
    type: "text",
    placeholder: "Digite aqui",
    status: true,
    feedback: "",
    validations: [checkRequiredField]
  },
  description: {
    label: "Descrição",
    value: "",
    type: "text",
    placeholder: "Digite aqui a descrição",
    status: true,
    feedback: "",
    validations: [checkRequiredField]
  }
};
  registerRequestsFields.value =
      Object.keys(registerRequestsFields.value).length === 0 ? { ...fields} : registerRequestsFields.value;

</script>
<style scoped lang="scss">

  .button-app__container{
    background: #4F4B63;
    border-color: #4F4B63
  }

  .button-app__container:hover{
    background: black;
  }

  .requestForm-main-view-container {
    width: 516px;
    border-radius: 6px;

    .requestForm-button-sendRequest {
      margin-top: 30px;
    }


    .requestForm-button--main-container {
      height: auto;
      gap: 24px;

    }
  }

  @media (max-width: 550px) {
    .requestForm-main-view-container {
      .requestForm-input-main-view {
        grid-template-columns: 1fr;
      }

      .requestForm-button--main-container {
        flex-direction: column-reverse;
        .requestForm-button-sendRequest {
          width: 100%;
        }
      }
    }
  }

</style>