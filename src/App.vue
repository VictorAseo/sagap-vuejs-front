<template>
  <component :is="$route.meta.layout || 'div'">
    <app-loading v-if="showLoading" />
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import AppLoading from "@/components/app-loading/AppLoading.vue";
import { useAppStore } from "@/stores/AppStore";
import { storeToRefs } from "pinia";

const appStore = useAppStore();
const { showLoading } = storeToRefs(appStore);
</script>

<style lang="scss" scoped></style>
