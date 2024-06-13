<template>
  <div id="grade-view">
    <header-screens-text
        header-title="Nota"
        header-first-sub-title="Essa é a nota do projeto, onde também fica quem orientou, avaliou os alunos do grupo que recebeu ou irá receber a nota"
        screen-name="Nota"
    />

    <div class="grade-view__input-form">

      <form-input
          :disabled= "true"
          input-label="Projeto"
          :input-value="project"
          :input-status="true"
      />
      <FormInput
          :disabled= "true"
          v-for="[key, student] in Object.entries(students)"
          :key="key" :input-label="student.label"
          :input-value="student.value"
          :input-status="true"
      />
      <form-input
          :disabled= "true"
          input-label="Orientador"
          :input-value="advisor"
          :input-status="true"
      />
      <FormInput
          :disabled= "true"
          v-for="[key, evaluator] in Object.entries(evaluators)"
          :key="key" :input-label="evaluator.label"
          :input-value="evaluator.value"
          :input-status="true"
      />
      <Form-input
          input-label="Nota"
          :input-value="grade"
          :input-status="true"
          input-type="number"
      />
      <div class="tasks-view__header-right-content">
        <app-button @click="router.push({name: 'projects'})">
          Salvar
        </app-button>
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">

  import HeaderScreensText from "@/components/header-dashboard-text/header-screens-text.vue";
  import FormInput from "@/components/form-input/FormInput.vue";
  import {ref} from "vue";
  import router from "@/router";
  import AppButton from "@/components/app-button/AppButton.vue";
  import type {UserInfos} from "@/@types/services/auth";

  const userInfos = ref<UserInfos>({});

  const project = ref<string>("SAGAP");
  const advisor = ref<string>("Cassio")
  const grade = ref<number>()
  const students = ref<object>({
    teste1: {
      label: "Aluno",
      value: "Victor",
  },
    teste2: {
      label: "Aluno",
      value: "Pedro",
    },
  });
  const evaluators = ref<object>({
    login: {
      label: "Avaliador",
      value: "Gustavo",
  },
  });

</script>
<style scoped lang="scss">

  #grade-view {
  .grade-view__input-form {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 12px;
    margin-top: 12px;
  }
}

</style>