<template>
  <button
    type="button"
    :class="['button-app__container', { full: isFull }, `--${variant || 'default'}`]"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { type AppButtonProps } from "@/@types/components/AppButton";

const { isFull, variant } = defineProps<AppButtonProps>();
</script>

<style lang="scss" scoped>
.button-app__container {
  width: fit-content;
  height: 34px;
  border: 0;
  border-radius: 5px;
  background: #4F4B63;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  outline: none;
  cursor: pointer;
  user-select: none;
  transition:
    background 0.6s ease,
    color 0.6s ease,
    border-color 0.6s ease;

  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  white-space: nowrap;
  padding: 8px 24px;

  &.--success {
    background: #40bd43;
  }

  &.--denied {
    background: #bd4040;
  }

  &.full {
    width: 100%;
  }

  svg {
    height: 12px;
  }

  &:hover {
    background: #000;
    border-color: #fff;
    color: #fff;
  }

  &:active {
    border-color: #ffffff;
    color: #ffffff;
    transition:
      background 0.2s ease,
      color 0.2s ease,
      border-color 0.2s ease;
  }
}
</style>
