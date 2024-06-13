<template>

  <div id="settings-view">
    <header-screens-text
        screen-name="Configuração"
        header-title="Configuração"
        header-first-sub-title="Configuração de senha e e-mail"
    />
    <div class="settings-view">
      <div class="settings-view__content">
        <div class="settings-view__content_left">
          <Form-input
              input-label="E-mail"
              :input-value="email"
              :input-status="true"
          />

          <Form-input
              input-label="Senha Atual"
              :input-value="currentPass"
              :input-status="true"
          />
          <Form-input
              input-label="Senha nova"
              :input-value="newPass"
              :input-status="true"
          />
          <Form-input
              input-label="Confirmar senha nova"
              :input-value="validationNewPass"
              :input-status="true"
          />
        </div>
      </div>
      <div class="settings-form__footer">
        <app-button @click="">Salvar</app-button>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">

  import HeaderScreensText from "@/components/header-dashboard-text/header-screens-text.vue";
  import FormInput from "@/components/form-input/FormInput.vue";
  import { ref } from "vue";
  import AppButton from "@/components/app-button/AppButton.vue";

  const email = ref<string>("")
  const currentPass = ref<string>("")
  const newPass = ref<string>("")
  const validationNewPass = ref<string>("")

</script>

<style scoped lang="scss">
#settings-view {
  display: flex;
  flex-direction: column;
  flex: 1;
  .settings-view {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;

    .settings-view__content {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 20px;
      width: 100%;
      max-width: 1200px;
      margin-top: 24px;
    }

    .settings-view__content_left,
    .settings-view__content_right {
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-top: 12px;
      flex: 0;
    }

    .settings-form__footer {
      margin-top: auto;
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
  }
}
</style>
