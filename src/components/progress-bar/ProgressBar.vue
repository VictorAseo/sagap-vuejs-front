<template>
  <div class="progress-bar__container">
    <div class="progress-bar__bar-container">
      <div
        class="progress-bar__bar"
        :style="`width: ${percentage}%`"
      />
    </div>

    <p class="progress-bar__progress">
      <span>{{ percentage }}%</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
import type { ProgressBarProps } from "@/@types/components/ProgressBar";

const { percentage } = defineProps<ProgressBarProps>();
</script>

<style lang="scss" scoped>


.progress-bar__container {
  display: flex;
  flex-direction: column;
  gap: 6px;

  .progress-bar__progress {
    color: #3C3C3C;
    transition: color 0.6s ease;
    text-align: right;

    &,
    span {
      font-size: 12px;
      font-weight: 400;
      line-height: normal;
    }

    span {
      color: #3C3C3C;
      transition: color 0.6s ease;

    }
  }

  .progress-bar__bar-container {
    width: 100%;
    height: 7px;
    background: #B8B8B8;
    display: flex;
    border-radius: 20px;
    transition: background-color 0.6s ease;

    .progress-bar__bar {
      height: 100%;
      background: #0E921B;
      border-radius: 20px;
    }
  }
}
</style>
