<template>
  <div class="form-box__container">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

.form-box__container {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffffff;
  border-radius: 6px;
  padding: 32px;
  border: 2px solid #ffffff;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
  min-height: calc(100dvh - 32px);
  height: fit-content;
}

</style>
