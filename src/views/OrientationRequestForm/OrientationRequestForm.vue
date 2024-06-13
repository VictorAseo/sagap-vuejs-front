<template>
    <div id="orientation-request-form">
      <AvailableTeachers v-if="userView === 'teachers'" />
      <RequestForm v-if="userView === 'form'" />
    </div>
</template>

<script setup lang="ts">
import {useCreateProjectStore} from "@/stores/RegisterProjectsStore";
import AvailableTeachers from "@/views/OrientationRequestForm/components/AvailableTeachers/AvailableTeachers.vue";
import RequestForm from "@/views/OrientationRequestForm/components/RequestForm/RequestForm.vue";
import {storeToRefs} from "pinia";
import {getOrientationContextService} from "@/services/request";
import {onMounted, onUnmounted, ref} from "vue";
import type {UserInfos} from "@/@types/services/auth";

const createProjectStore = useCreateProjectStore();
const { $resetCreateProjectStores } = createProjectStore;
const { userView, teachers, students } = storeToRefs(createProjectStore);
const userInfos = ref<UserInfos>({});

const getContext = async () => {
  try {
    const { data } = await getOrientationContextService(userInfos.value.id);
    teachers.value = data.teachers.map((item => ({...item, area: "tecnologia"})));
    students.value = data.students
  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {
  userInfos.value = JSON.parse(localStorage.getItem("userInfos") || "");
  getContext();
})

onUnmounted(() => {
  $resetCreateProjectStores();
})
</script>

