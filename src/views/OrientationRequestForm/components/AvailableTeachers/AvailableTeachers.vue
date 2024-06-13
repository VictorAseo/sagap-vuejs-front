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
import {onMounted, ref, watch} from "vue";
import type {RequestCardProps} from "@/@types/components/RequestCard";
import FormInput from "@/components/form-input/FormInput.vue";
import {useCreateProjectStore} from "@/stores/RegisterProjectsStore";
import {storeToRefs} from "pinia";
import type {UserInfos} from "@/@types/services/auth";
import router from "@/router";
const createProjectStore = useCreateProjectStore();
const { teachers } = storeToRefs(createProjectStore);
const userInfos = ref<UserInfos>({});

const inputSearch = ref<string>("");


const availableTeachers = ref<any[]>([]);

const filterRequests = () => {
  availableTeachers.value = teachers.value.filter(teacher => {
    return teacher.label.includes(inputSearch.value) || teacher.area.includes(inputSearch.value);
  })
};

watch(
    () => teachers.value,
    (newValue) => {
      availableTeachers.value = newValue
    }
);

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
