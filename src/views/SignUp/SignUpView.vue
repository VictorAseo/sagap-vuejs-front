<template>

    <SingUpForm></SingUpForm>

</template>

<script lang="ts" setup>
import { onUnmounted } from "vue";
import {useRegisterStore} from "@/stores/RegisterStore";
import SingUpForm from "@/views/SignUp/components/SingUpForm.vue";
import FormBox from "@/components/form-box/FormBox.vue";
//import { storeToRefs } from "pinia";
// import RegisterStepTwo from "./components/RegisterStepTwo.vue";
// import RegisterSteps from "./components/RegisterSteps.vue";
// import RegisterStepOne from "./components/RegisterStepOne.vue";


const registerStore = useRegisterStore();
//const { isStepOne, isStepTwo } = storeToRefs(registerStore);
const { $reset } = registerStore;

onUnmounted(() => {
  $reset();
});
</script>

<style lang="scss" scoped>
#register-main-view-container {
  height: 100vh;
  display: flex;
  padding: 9px;
}

.SAGAO_LOGO{
  float: left;
  margin-top: 43px;
  margin-left: 19px;
}

.UVV_LOGO{
  float: right;
  margin-top: 43px;
  margin-right: 19px;
}

</style>
