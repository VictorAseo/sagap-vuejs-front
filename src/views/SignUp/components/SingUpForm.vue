<template>
  <div class="register-form-main-container">
    <header-screens-text header-title="Cadastro" header-first-sub-title="Cadastrar Aluno ou Professor" screen-name="Cadastro"/>
    <div class="register-form-container">
      <FormInput
        :input-label="registerFields.name.label"
        :input-value="registerFields.name.value"
        :input-type="registerFields.name.type"
        :input-status="registerFields.name.status"
        :input-feedback="registerFields.name.feedback"
        :input-placeholder="registerFields.name.placeholder"
        @update:input-value="(newValue) => (registerFields.name.value = newValue)"
      />
      <FormInput
        :input-label="registerFields.email.label"
        :input-value="registerFields.email.value"
        :input-type="registerFields.email.type"
        :input-status="registerFields.email.status"
        :input-feedback="registerFields.email.feedback"
        :input-placeholder="registerFields.email.placeholder"
        @update:input-value="(newValue) => (registerFields.email.value = newValue)"
      />
      <FormInput
        :input-label="registerFields.matricula.label"
        :input-value="registerFields.matricula.value"
        :input-type="registerFields.matricula.type"
        :input-status="registerFields.matricula.status"
        :input-feedback="registerFields.matricula.feedback"
        :input-placeholder="registerFields.matricula.placeholder"
        @update:input-value="(newValue) => (registerFields.matricula.value = newValue)"
      />
      <FormInput
        :input-label="registerFields.password.label"
        :input-value="registerFields.password.value"
        :input-type="registerFields.password.type"
        :input-status="registerFields.password.status"
        :input-feedback="registerFields.password.feedback"
        :input-placeholder="registerFields.password.placeholder"
        @update:input-value="(newValue) => (registerFields.password.value = newValue)"
      />
      <FormInput
        :input-label="registerFields.retypePassword.label"
        :input-value="registerFields.retypePassword.value"
        :input-type="registerFields.retypePassword.type"
        :input-status="registerFields.retypePassword.status"
        :input-feedback="registerFields.retypePassword.feedback"
        :input-placeholder="registerFields.retypePassword.placeholder"
        @update:input-value="(newValue) => (registerFields.retypePassword.value = newValue)"
      />
      <Formselect
          :input-value="registerFields.typeUser.value"
          :input-status="registerFields.typeUser.status"
          :input-feedback="registerFields.typeUser.feedback"
          :input-placeholder="registerFields.typeUser.placeholder"
          :option-list="usertypeOptions"
          :label="registerFields.typeUser.label"
          @update:input-value="(newValue) => (registerFields.typeUser.value = newValue)"
      />
    </div>
      <div class="register-button-container">
        <AppButton
          class="register-button-tag"
          @click="register"
        >
          Cadastrar
        </AppButton>
      </div>
  </div>
</template>

<script lang="ts" setup>
import FormInput from "@/components/form-input/FormInput.vue";
import AppButton from "@/components/app-button/AppButton.vue";
import Formselect from "@/components/app-select/AppSelect.vue";
// import TextButton from "@/components/text-button/TextButton.vue";
import { storeToRefs} from "pinia";
import { useAppStore } from "@/stores/AppStore";
import { useUserStore } from "@/stores/UserStore";
import { isEmail, hasEspecialCaracter } from "@/utils";
import { useRegisterStore } from "@/stores/RegisterStore";
// import type { UserProps } from "@/@types/services/UserService";
// import type { ProviderAppProps } from "@/@types/providers/App";
import type { RegisterFields } from "@/@types/stores/RegisterStore";
// import { getEmailOrLoginErrorService } from "@/services/user/service";
import { registerService } from "@/services/auth";
import { computed, inject, nextTick, onMounted, ref, type Ref } from "vue";
//import type {InputProps, EmitsProps} from "@/@types/components/FormInput";
import router from '@/router/index';
import HeaderScreensText from "@/components/header-dashboard-text/header-screens-text.vue";

//const { $router } = inject<ProviderAppProps>("app") || ({} as ProviderAppProps);
const usertypeOptions = ref( [{id: 1, label: 'Aluno'}, {id: 2, label: 'Professor'}, {id: 3, label: 'Admin'}]);
const selectedUsertype = ref(null);
const appStore = useAppStore();

const store = useRegisterStore();
const userStore = useUserStore();
const { handleLoading } = appStore;
const { registerFields } = storeToRefs(store); //storeToRefs(store)
const { userData } = storeToRefs(userStore);


// const { changeStep } = store;

const checkRequiredField = (registerFieldsParam: RegisterFields, key: string) => {
  const status = !!registerFieldsParam[key].value;
  registerFieldsParam[key].status = status;
  registerFieldsParam[key].feedback = status ? "" : "Campo obrigatório";

  return status;
};

const checkEqualPasswords = (registerFieldsParam: RegisterFields) => {
  if (!registerFieldsParam.password.value || !registerFieldsParam.retypePassword.value) return true;

  const isEqual: boolean =
    registerFieldsParam.password.value === registerFieldsParam.retypePassword.value;

  registerFieldsParam.password.status = isEqual;
  registerFieldsParam.password.feedback = !isEqual ? "As senhas não são iguais" : "";
  registerFieldsParam.retypePassword.status = isEqual;
  registerFieldsParam.retypePassword.feedback = !isEqual ? "As senhas não são iguais" : "";

  return isEqual;
};

const checkEmail = (registerFieldsParam: RegisterFields, key: string) => {
  if (!registerFieldsParam[key].value) return;

  const isValidEmail: boolean = isEmail(registerFieldsParam[key].value?.toString() || '');
  registerFieldsParam[key].status = isValidEmail;
  registerFieldsParam[key].feedback = isValidEmail ? "" : "E-mail inválido";

  return isValidEmail;
};

const checkUsername = (registerFieldsParam: RegisterFields, key: string) => {
  if (!registerFieldsParam[key].value) return;

  const isValidUsername: boolean = !hasEspecialCaracter(registerFieldsParam[key].value?.toString() || '');
  registerFieldsParam[key].status = isValidUsername;
  registerFieldsParam[key].feedback = isValidUsername
    ? ""
    : "Não utilize caracteres espcecias. Ex: !,@,#, etc...";

  return isValidUsername;
};

const validateFields = () => {
  let isValid = true;
  for (const key in registerFields.value) {
    for (const action of registerFields.value[key].validations) {
      let validation = action(registerFields.value, key);
      isValid = isValid && !validation ? false : isValid;
    }
  }
  return isValid;
};

const validateLoginAndEmail = async () => {
  const payload = {
    email: registerFields.value.email.value?.toString().toLowerCase(),
    login: registerFields.value.name.value?.toString().toLowerCase()
  };

  handleLoading(true);

  // try {
  //   const response = await getEmailOrLoginErrorService(payload);
  //   if (registerFields.value.name.status) {
  //     registerFields.value.name.status = !response.name;
  //     registerFields.value.name.feedback = response.name;
  //   }
  //
  //   if (registerFields.value.email.status) {
  //     registerFields.value.email.status = !response.email;
  //     registerFields.value.email.feedback = response.email;
  //   }
  //
  //   return !response.email && !response.name;
  // } catch (error) {
  //   console.error(error);
  // } finally {
  //   handleLoading(false);
  // }
};
// const saveUserData = (infos: UserProps | undefined) => {
//   if (!infos) return;
//
//   userData.value = {
//     id: infos.id,
//     name: infos.name,
//     email: infos.email,
//     matricula: infos.matricula,
//     typeUser: infos.typeUser,
//     isAdmin: infos.is_admin,
//     token: infos.token
//   };
//
//   localStorage.setItem("token", infos.token);
// };

const register = async () => {
  const isValid = validateFields();
  if (!isValid) return;
  const payload = {
      name: registerFields.value.name.value,
      password: registerFields.value.password.value,
      enrollment: registerFields.value.matricula.value,
      email: registerFields.value.email.value,
      typeUser: registerFields.value.typeUser.value
  };
    handleLoading(true);
    try {
        await registerService(payload);
         registerFields.value.name.value = ""
         registerFields.value.password.value = ""
         registerFields.value.retypePassword.value = ""
         registerFields.value.matricula.value  = ""
         registerFields.value.email.value = ""
         registerFields.value.typeUser.value = -1
    } catch (error) {
      console.error(error);
    } finally {
      handleLoading(false);
    }
}

const fields = {
  name: {
    label: "Nome",
    value: "",
    type: "text",
    placeholder: "Digite aqui",
    status: true,
    feedback: "",
    validations: [checkRequiredField]
  },
  email: {
    label: "E-mail",
    value: "",
    type: "text",
    placeholder: "Digite aqui",
    status: true,
    feedback: "",
    validations: [checkRequiredField, checkEmail]
  },
  matricula: {
    label: "Matricula",
    value: "",
    type: "number",
    placeholder: "Digite aqui",
    status: true,
    feedback: "",
    validations: [checkRequiredField]
  },
  password: {
    label: "Senha",
    value: "",
    type: "password",
    placeholder: "********",
    status: true,
    feedback: "",
    validations: [checkRequiredField]
  },
  retypePassword: {
    label: "Confirme a senha",
    value: "",
    type: "password",
    placeholder: "********",
    status: true,
    feedback: "",
    validations: [checkRequiredField, checkEqualPasswords]
  },
  typeUser: {
    label: "Tipo de usuário",
    value: null, //
    type: "select",
    placeholder: "Selecione o tipo de usuário!",
    status: true,
    feedback: "",
    validations: [checkRequiredField]
  }
};
  registerFields.value = Object.keys(registerFields.value).length === 0 ? { ...fields } : registerFields.value;



</script>

<style lang="scss" scoped>

  .register-form-main-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 12px;
    margin-top: 12px;
    .register-form-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 12px;
      flex: 0;
    }

    .register-button-container {
      margin-top: auto;
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }

  @media (max-width: 550px) {
    .register-form-main-container {
      .register-form-container {
        grid-template-columns: 1fr;
      }

      .register-button-container {
        flex-direction: column-reverse;
        .register-button-tag {
          width: 100%;
        }
      }
    }
  }
</style>
