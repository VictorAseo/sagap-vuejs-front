<template>
  <div id="projects-orientation-view">
    <header-screens-text
        screen-name="Projetos"
        header-title="Listagem de projetos"
        header-first-sub-title="Listagem com os projetos em orientação e avaliação"
    />

      <div style="display: flex; flex: 1; flex-direction: column" v-if="projects.length">
        <h2 class="projects-orientation-view__title">Projetos em andamento</h2>
        <div class="projects-orientation-view__projects-list" >
          <ProjectBox
              class="projects-orientation-view__project-item"
              v-for="(project, index) in projects"
              :key="`project-${index}`"
              :project-id="project.id"
              :project-name="project.name"
              :alunos="project.students"
              :project-type="project.projectType"
          />
        </div>
      </div>
      <h3 class="projects-orientation-view__not-found" v-else>Nenhum projeto foi encontrado!</h3>
  </div>
</template>

<script setup lang="ts">
import ProjectBox from "@/components/project-list/ProjectBox.vue";
import {onMounted, ref} from "vue";
import type {UserInfos} from "@/@types/services/auth";
import {getEvaluationProjectsService, getOrientationProjectsService} from "@/services/project";
import HeaderScreensText from "@/components/header-dashboard-text/header-screens-text.vue";

const userInfos = ref<UserInfos>({});
const projects = ref<any[]>([]);

const getProjects = async () => {
  try {
    const orientationProjects = await getOrientationProjectsService(userInfos.value.id);
    const evaluationProjects = await getEvaluationProjectsService(userInfos.value.id);

    projects.value = [
      ...orientationProjects.data.projects.map(item => ({...item, projectType: 0})),
      ...evaluationProjects.data.projects.map(item => ({...item, projectType: 1})),
    ];
  } catch (e) {
    console.error(e);
  }
};

onMounted(() => {
  userInfos.value =  JSON.parse(localStorage.getItem("userInfos") || "");
  getProjects();
})
</script>

<style lang="scss">
#projects-orientation-view {
  display: flex;
  flex: 1;
  flex-direction: column;
  .projects-orientation-view__projects-list {
    display: flex;

    gap: 24px;
    flex-wrap: wrap;

    .projects-orientation-view__project-item {
      max-width: calc(50% - 12px);
      min-width: calc(50% - 12px);
    }
  }

  .projects-orientation-view__title{
    font-size: 15px;
    font-weight: bold;
    margin: 30px 0 30px;
  }

  .projects-orientation-view__not-found {
    display: flex;
    justify-content: center;
    font-size: 18px;
    margin: auto;
    color: #9E9E9E;
  }
}
</style>
