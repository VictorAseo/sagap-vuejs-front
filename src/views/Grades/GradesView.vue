<template>
  <div id="grades-view">
    <header-screens-text
        screen-name="Notas"
        header-title="Listagem de projetos finalizados"
        header-first-sub-title="Listagem com os projetos avaliados e finalizados"
    />

    <div style="display: flex; flex: 1; flex-direction: column" v-if="projects.length">
      <h2 class="grades-view__title">Projetos</h2>
      <div class="grades-view__projects-list" >
        <ProjectBox
            class="grades-view__project-item"
            v-for="(project, index) in projects"
            :key="`project-${index}`"
            :project-id="project.id"
            :project-name="project.name"
            :alunos="project.students"
            :grade="project.grade"
            :leader="project.leader"
            :evaluators="project.evaluators"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderScreensText from "@/components/header-dashboard-text/header-screens-text.vue";
import ProjectBox from "@/components/project-list/ProjectBox.vue";
import {ref} from "vue";

const projects = ref<any[]>([
  {
    id: 1,
    name: "Teste 1",
    students: ['Victor', 'Pedro'],
    grade: "10",
    leader: "Cássio",
    evaluators: ['Saulo', 'Gustavo']
  }
]);
</script>

<style scoped lang="scss">
#grades-view {
  display: flex;
  flex: 1;
  flex-direction: column;
  .grades-view__projects-list {
    display: flex;

    gap: 24px;
    flex-wrap: wrap;

    .grades-view__project-item {
      max-width: calc(50% - 12px);
      min-width: calc(50% - 12px);
    }
  }

  .grades-view__title{
    font-size: 15px;
    font-weight: bold;
    margin: 30px 0 30px;
  }

  .grades-view__not-found {
    display: flex;
    justify-content: center;
    font-size: 18px;
    margin: auto;
    color: #9E9E9E;
  }
}
</style>
