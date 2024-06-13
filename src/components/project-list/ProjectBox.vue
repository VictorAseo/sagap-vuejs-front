<template>
  <div class="project-box__container" @click="handleRedirect">
      <span class="project-box__project-name">Projeto: {{ projectName }}</span>
      <span class="project-box__students" v-if="projectType?.toString()">Tipo: {{ projectType == 0 ? "Orientação" : "Avaliação" }}</span>
      <span class="project-box__students" v-if="leader">Orientador: {{ leader }}</span>
      <span class="project-box__students" v-if="evaluators">Avaliador(es): : {{ evaluators.join(", ") }}</span>
      <span class="project-box__students">Aluno(s): {{ alunos.join(", ") }}</span>
      <span class="project-box__students" v-if="grade">Nota: {{ grade }}</span>
  </div>
</template>

<script lang="ts" setup>
import type { projectsNameProps } from "@/@types/components/ProjectName";
import router from "@/router";

const { projectId, projectName, projectType, alunos, grade, evaluators, leader } = defineProps<projectsNameProps>();

const handleRedirect = () => {
  if(!!grade) return;

  router.push({
    name: projectType == 0 ? "project-tasks" : "grades",
    params: {
      id: projectId?.toString()
    }
  })
}
</script>

<style lang="scss">
.project-box__container {
  display: flex;
  flex-direction: column;
  gap: 18px;
  border: 1px solid #E3E3E3;
  border-radius: 6px;
  padding: 16px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    border-color: #4F4B63;
  }

  .project-box__project-name {
    font-size: 18px;
    font-weight: 700;
  }

  .project-box__students {
    font-size: 14px;
    color: #828282;
  }
}
</style>
