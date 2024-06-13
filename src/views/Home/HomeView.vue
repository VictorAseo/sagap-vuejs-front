<template>

</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {verifyIfHasProjectService} from "@/services/project";
import router from "@/router";

const verifyIfHasProject = async () => {
  const userInfos = JSON.parse(localStorage.getItem("userInfos") || "");

  try {
    const response = await verifyIfHasProjectService(userInfos.id as number);
    await router.push({
      name: "project-tasks",
      params: {
        id: response.data?.toString()
      }
    })
  } catch (e) {
    console.error(e);
    await router.push({
      name: "create-orientation-request"
    })
  }
}

onMounted(() => {
  verifyIfHasProject();
})
</script>

<style scoped lang="scss">

</style>
