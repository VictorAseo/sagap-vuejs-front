<template>
  <div id="tasks-view">
    <header-dashboard-text
        :name-project="projectName"
        screen-name="Tarefas"
        :students="students"
    />

    <div class="tasks-view__content">
      <div class="tasks-view__header-container">
        <div class="tasks-view__header-left-content">
          <h2 class="tasks-view__title">Desenvolvimento do TCC</h2>
        </div>
        <div class="tasks-view__header-right-content" v-if="userInfos.userType == 2">
          <app-button @click="router.push({name: 'create-task', params: { id: router?.currentRoute?.value?.params?.id }})">
            Criar tarefa
          </app-button>
          <app-button @click="router.push({name: 'evaluation-form', params: { id: router?.currentRoute?.value?.params?.id }})">
            Adicionar Avaliador
          </app-button>
        </div>
      </div>

      <div class="tasks-view__tasks-list" v-if="tasks.length">
        <TaskCard
            class="tasks-view__task-item"
            v-for="(task, index) in tasks"
            :key="`task-${index}`"
            :task-id="task.id"
            :title="task.title"
            :completed="task.completed"
        />

      </div>
    </div>
    <h3 class="tasks-view__not-found" v-if="!tasks.length">Nenhuma tarefa foi encontrada!</h3>
  </div>
</template>

<script setup lang="ts">
import HeaderDashboardText from "@/components/header-dashboard-text/header-dashboard-text.vue";
import TaskCard from "@/views/Tasks/components/TaskCard.vue";
import AppButton from "@/components/app-button/AppButton.vue";
import {onMounted, ref} from "vue";
import router from "@/router";
import {getProjectInfosService, getTasksService} from "@/services/project";
import type {UserInfos} from "@/@types/services/auth";

const tasks = ref<{
  title: string,
  completed: boolean;
  id: string;
}[]>([]);


const projectName = ref<string>("");
const students = ref<any[]>([]);

const userInfos = ref<UserInfos>({});

const getTasks = async () => {
  try {
    const projectId = router?.currentRoute?.value?.params?.id
    const response = await getTasksService(projectId ? Number(projectId) : -1);
    await getProjectInfos()

    tasks.value = response.data.tasks || [];
  } catch (e) {
    console.error(e);
  }
}

const getProjectInfos = async () => {
  try {
   const response = await getProjectInfosService(Number(router.currentRoute.value.params.id))
    projectName.value = response.data.name;
    students.value = response.data.students.map(item => item.name);
  } catch (e) {
    console.error(e);
  }
}


onMounted(() => {
  getTasks();
  userInfos.value = JSON.parse(localStorage.getItem("userInfos") || "");
})
</script>

<style lang="scss">
#tasks-view {
  display: flex;
  flex-direction: column;
  flex: 1;
  .tasks-view__content {
    display: flex;
    flex-direction: column;
    .tasks-view__header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .tasks-view__header-left-content{
        .tasks-view__title{
          font-size: 15px;
          font-weight: bold;
          margin: 30px 0 30px;
        }
      }

      .tasks-view__header-right-content {
        display: flex;
        gap: 8px;
      }
    }

  .tasks-view__tasks-list {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;

    .tasks-view__task-item {
      max-width: calc(50% - 12px);
      min-width: calc(50% - 12px);
    }
  }
  }

  .tasks-view__not-found {
    display: flex;
    justify-content: center;
    font-size: 18px;
    margin: auto;
    color: #9E9E9E;
  }
}
</style>
