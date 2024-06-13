import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import { type RegisterFields } from "@/@types/stores/RegisterStore";

export const useRegisterStore = defineStore("registerStore", () => {
  const registerFields: Ref<RegisterFields> = ref({} as RegisterFields);

  // const isStepOne = ref(true);

  // const changeStep = (step: number) => {
  //   isStepOne.value = step === 1;
  // };

  const $reset = () => {
    registerFields.value = {} as RegisterFields;
    // isStepOne.value = true;
  };

  return { registerFields, $reset };
});
