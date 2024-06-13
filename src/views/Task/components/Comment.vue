<template>
  <div class="task-form__comment-container">
    <span class="task-form__comment-header">{{ author }} - {{ date }}</span>

    <div :class="['task-form__comment-content', {'--teacher': userType === 2, '--student': userType === 1}]">
      <p>{{ comment }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const {author, date, comment} = defineProps<{
  author: string,
  date: string,
  comment: string,
  userType: number,
}>()
</script>

<style lang="scss">
.task-form__comment-container {
  display: flex;
  flex-direction: column;
  gap: 4px;

  .task-form__comment-header {
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
    color: #666666;
  }

  .task-form__comment-content {
    padding: 14px 12px;
    border: 1px solid #CDCDCD;
    border-radius: 6px;

    &.--teacher {
      background: #18FF5912;
    }

    &.--student {
      background: #FCFCFC;
    }

    p {
      font-size: 12px;
      font-weight: 400;
      line-height: normal;
      color: #3C3C3C;
    }
  }
}
</style>
