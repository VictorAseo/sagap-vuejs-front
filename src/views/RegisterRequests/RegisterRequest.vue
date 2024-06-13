<template>
  <div id="registerRequest-main-view-container">

      <FormBox>
        <header-screens-text header-title="Professores disponiveis" header-first-sub-title="Enviar solicitação de orientação"/>
        <request-form/>
      </FormBox>
  </div>
</template>
<script setup lang="ts">
import {onUnmounted} from "vue";
import FormBox from "@/components/form-box/FormBox.vue";

import HeaderScreensText from "@/components/header-dashboard-text/header-screens-text.vue";
import RequestForm from "@/views/RegisterRequests/components/RequestForm.vue";
import { useRegisterRequestsStore } from "@/stores/RegisterRequestsStore";

const registerRequestsStoreStore = useRegisterRequestsStore();
const { $reset } = registerRequestsStoreStore;

onUnmounted (() => {
  $reset()
});

</script>
<style scoped lang="scss">

  #registerRequest-main-view-container {
    display: flex;
    padding: 9px;
    min-height: 100vh;
    max-height: 100%;

}

</style>
