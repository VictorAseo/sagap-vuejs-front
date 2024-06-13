<template>
  <div class="available-teacher-card__container">
    <div class="available-teacher-card__header-card">
      <span class="available-teacher-card__teacher">Professor: {{ teacher.label }}</span>
      <app-button @click="handleFillRequest">Preencher solicitação</app-button>
    </div>

    <div class="available-teacher-card__area-container">
      <span class="available-teacher-card__area">
        Área: Tecnologia
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppButton from "@/components/app-button/AppButton.vue";
import type {AvailableTeacherCardProps} from "@/@types/components/AvailableTeacherCard";
import {useCreateProjectStore} from "@/stores/RegisterProjectsStore";
import {storeToRefs} from "pinia";
const { teacher } = defineProps<AvailableTeacherCardProps>();

const createProjectStore = useCreateProjectStore();
const { selectedTeacher } = storeToRefs(createProjectStore);

const handleFillRequest = () => {
  selectedTeacher.value = teacher;
  createProjectStore.handleShow("form");
}
</script>

<style lang="scss">
.available-teacher-card__container {
  display: flex;
  flex-direction: column;


  .available-teacher-card__header-card {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: space-between;

    .available-teacher-card__teacher {
      font-size: 14px;
      font-weight: 400;
      line-height: 14.52px;
      color: #3C3C3C;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .available-teacher-card__area-container {
    margin-top: 8px;
    border-radius: 6px;
    border: 1px solid #E3E3E3;
    padding: 16px;

    .available-teacher-card__area {
      font-size: 12px;
      font-weight: 400;
      line-height: 14.52px;
      text-align: left;
      color: #3C3C3C;
    }
  }
}
</style>
