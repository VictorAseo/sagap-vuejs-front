<template>
  <div class="form-input__container">
    <label>{{ inputLabel }}</label>

    <input
      v-if="inputModelLocal === 'input'"
      :class="[{ 'is-invalid': !inputStatus }]"
      :type="inputType"
      :value="inputValue"
      :placeholder="inputPlaceholder"
      @input="updateInputValue"
      :disabled="disabled"
    />

    <textarea
      v-if="inputModelLocal === 'textarea'"
      rows="5"
      :class="[{ 'is-invalid': !inputStatus }]"
      :type="inputType"
      :value="inputValue"
      :placeholder="inputPlaceholder"
      @input="updateInputValue"
      style="resize: vertical"
      :disabled="disabled"
    />
    <span class="inputFeedback_Status" v-if="!inputStatus && !!inputFeedback">{{ inputFeedback }}</span>
  </div>
</template>

<script lang="ts" setup>
import { type EmitsProps, type InputProps } from "@/@types/components/FormInput";
import { ref } from "vue";

const {
  inputLabel,
  inputValue,
  inputType,
  inputFeedback,
  inputStatus,
  inputPlaceholder,
  inputModel,
  disabled
} = defineProps<InputProps>();

const inputModelLocal = ref(inputModel || "input");

const emit = defineEmits<EmitsProps>();

const updateInputValue = (e: Event) => {
  emit("update:inputValue", (e.target as HTMLInputElement).value);
};
</script>

<style lang="scss" scoped>
.form-input__container {
  background: #ffffff;
  width: fit-content;
  display: flex;
  flex-direction: column;

  label {
    background: #ffffff;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 4px;
  }

  .inputFeedback_Status{
    padding-left: 5px;
  }

  input {
    height: 37px;
  }

  textarea {
    height: fit-content;
  }

  input,
  textarea {
    width: 516px;
    max-height: 1231231px;
    padding: 12px 12px;
    border-radius: 5px;
    background-color: #fff;
    border: 2px solid rgb(205, 205, 205);
    color: #212121;
    font-size: 14px;
    line-height: normal;
    font-weight: 400;
    outline: none;


    &:disabled {
      background: #e1e1e1;
    }

    &::placeholder {
      color: #a8a8a8;
    }

    &.is-invalid {
      border-color: #ff6363;
    }
  }

  span {
    color: #ff6363;
    background: #ffffff;
    font-size: 9px;
    font-weight: 400;
    margin-top: 4px;
  }
}
</style>
