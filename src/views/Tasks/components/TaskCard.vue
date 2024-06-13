<template>
  <div class="task-card__container" @click="handleRedirectToTask">
      <span class="task-card__title">{{ title }}</span>
      <progress-bar :percentage="completed ? '100' : '0'" />
  </div>
</template>

<script setup lang="ts">
import ProgressBar from "@/components/progress-bar/ProgressBar.vue";
import router from "@/router";
const { taskId, title, completed } = defineProps<{
  taskId: number;
  title: string,
  completed: boolean;
}>();

const handleRedirectToTask = () => {
  router.push({name: "task", params: { projectId: router.currentRoute.value.params.id , taskId }});
}
</script>

<style lang="scss">
  .task-card__container {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-radius: 9px;
    background: #fff;
    border: 1px solid rgba(227, 227, 227, 1);
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;

    &:hover {
      border-color: #4F4B63;
    }

    .task-card__title {
      font-size: 15px;
      font-weight: 400;
      line-height: 18.15px;
    }
  }
</style>
