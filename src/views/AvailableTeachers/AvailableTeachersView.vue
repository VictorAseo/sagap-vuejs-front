<template>
  <div id="available-teachers-view">
    <header-screens-text
        screen-name="Criar solicitação"
        header-title="Professores disponiveis"
        header-first-sub-title="Lista com todos os professores que estão disponíveis a aceitar propostas de orientação"
    />


    <div class="available-teachers-view__header-content">
      <form-input input-label="" :input-value="inputSearch" @update:input-value="(newValue) => (inputSearch = newValue)" @keyup="filterRequests" :input-status="true" />
    </div>

    <div class="available-teachers-view__teachers-list">
      <AvailableTeacherCard
          class="available-teachers-view__teacher-item"
          v-for="(teacher, index) in availableTeachers"
          :key="`teacher-${index}`"
          :teacher="teacher"
      />
    </div>

  </div>
</template>

<script setup lang="ts">

import HeaderScreensText from "@/components/header-dashboard-text/header-screens-text.vue";
import AvailableTeacherCard from "@/views/AvailableTeachers/components/available-teacher-card/AvailableTeacherCard.vue";
import {ref} from "vue";
import type {RequestCardProps} from "@/@types/components/RequestCard";
import FormInput from "@/components/form-input/FormInput.vue";

const inputSearch = ref<string>("");
const availableTeachersBackup = ref<any[]>([
  {
    id: 1,
    name: 'aa',
    area: 'aaa'
  }
]);

const availableTeachers = ref<any[]>([
  {
    id: 1,
    name: 'aa',
    area: 'aaa'
  }
]);

const filterRequests = () => {
  availableTeachers.value = availableTeachersBackup.value.filter(teacher => {
    return teacher.name.includes(inputSearch.value) || teacher.area.includes(inputSearch.value);
  })
};
</script>

<style lang="scss">
#available-teachers-view {
    .available-teachers-view__header-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 16px;
    }

    .available-teachers-view__teachers-list {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      margin-top: 24px;

      .available-teachers-view__teacher-item {
        max-width: calc(50% - 12px);
        min-width: calc(50% - 12px);
      }
  }
}
</style>
