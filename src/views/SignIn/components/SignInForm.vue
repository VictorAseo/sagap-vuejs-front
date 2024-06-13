<template>
  <div class="login-main-container">
    <h1 class="login-header-title">Login</h1>
    <div class="horizontal-line"></div>
      <InvalidAlert v-show="hasLoginError">Usuário/E-mail ou senha inválidos</InvalidAlert>
    <div class="login-center-form-container">
      <div class="login-form-container">
        <FormInput
          v-for="[key, loginFields] in Object.entries(fields)"
          :key="key"
          :input-label="loginFields.label"
          :input-value="loginFields.value"
          :input-type="loginFields.type"
          :input-status="loginFields.status"
          :input-feedback="loginFields.feedback"
          :input-placeholder="loginFields.placeholder"
          @update:input-value="(newValue) => (loginFields.value = newValue)"
        />
      </div>
      <div class="login-button-container">
        <AppButton
          class="login-button-tag"
          @click="login"
        >
          Login
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import router from "@/router";
import type { UserProps } from "@/@types/services/UserService";
import { loginUserService } from "@/services/user/service";
import { useAppStore } from "@/stores/AppStore";
import { useUserStore } from "@/stores/UserStore";
import FormInput from "@/components/form-input/FormInput.vue";
import AppButton from "@/components/app-button/AppButton.vue";
import TextButton from "@/components/text-button/TextButton.vue";
import InvalidAlert from "@/views/SignIn/components/InvalidAlert.vue";
import {loginService} from "@/services/auth";

const hasLoginError = ref(false);

const fields = ref({
  login: {
    label: "Nome ou E-mail",
    value: "",
    type: "text",
    placeholder: "Digite aqui",
    status: true,
    feedback: "",
    validations: []
  },
  password: {
    label: "Senha",
    value: "",
    type: "password",
    placeholder: "********",
    status: true,
    feedback: "",
    validations: []
  }
});

const userStore = useUserStore();
const appStore = useAppStore();
const { handleLoading } = appStore;
const { userData } = storeToRefs(userStore);

const saveUserData = (infos: UserProps | undefined) => {
  if (!infos) return;

  // userData.value = {
  //   id: infos.id,
  //   firstname: infos.nome,
  //   lastname: infos.sobrenome,
  //   username: infos.auth,
  //   email: infos.email,
  //   userLevel: infos.user_level,
  //   userExp: infos.user_exp,
  //   userNextLevelExp: infos.user_next_level_exp,
  //   blocked: infos.bloqueado,
  //   lifes: infos.vidas,
  //   avatarId: infos.id_avatar,
  //   avatarSrc: infos.url_avatar,
  //   isAdmin: infos.is_admin,
  //   token: infos.token
  // };

  localStorage.setItem("token", infos.token);
};

const login = async () => {
  const payload = {
    login: fields.value.login.value,
    password: fields.value.password.value
  };

  handleLoading(true);
  try {
    const response = await loginService(payload);
  } catch (error) {
     console.error(error);
    hasLoginError.value = true;
  } finally {
      handleLoading(false);
  }
};

watch(
  () => userData.value,
  (newValue) => {
    newValue && router.push({ name: "DashboardView" });
  }
);

</script>

<style lang="scss">

</style>
