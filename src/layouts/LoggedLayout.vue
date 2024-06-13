<template>
  <div class="app-content">
    <Sidebar />

    <main class="main-content">
      <FormBox>
        <slot />
      </FormBox>
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "@/components/sidebar/Sidebar.vue";
import FormBox from "@/components/form-box/FormBox.vue";
</script>

<style lang="scss">
.app-content {
  display: flex;
  background: #E4E4E4;

  .main-content {
    padding: 16px 24px;
    width: 100%;
    height: 100%;
  }
}
</style>
