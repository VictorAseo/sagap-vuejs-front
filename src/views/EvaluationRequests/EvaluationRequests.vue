<template>
  <div id="evaluation-requests-view">
    <header-screens-text
        header-title="Lista de solicitações"
        header-first-sub-title="Essa são as propostas de orientação e avaliação disponíveis e enviadas a você"
        screen-name="Solicitações"
    />

    <div v-if="requestsList.length">
      <div class="evaluation-requests-view__header-content">
        <form-input input-label="" input-placeholder="Pesquise aqui" :input-value="inputSearch" @update:input-value="(newValue) => (inputSearch = newValue)" @keyup="filterRequests" :input-status="true" />
      </div>


      <div class="evaluation-requests-view__projects-list">
        <request-card
            v-for="(request, index) in requestsList"
            :key="`request-${index}`"
            class="evaluation-requests-view__project-item"
            :request-id="request.requestId"
            :projectName="request.projectName"
            :students="request.students"
            :request-type="request.requestType"
            :description="request.description"
            :accept-action="changeRequestStatus"
            :denied-action="changeRequestStatus"
        />
      </div>
    </div>
    <h3 class="evaluation-requests-view__not-found" v-else>Nenhuma solicitação foi encontrada!</h3>
  </div>
</template>

<script lang="ts" setup>
import HeaderScreensText from "@/components/header-dashboard-text/header-screens-text.vue";
import FormInput from "@/components/form-input/FormInput.vue";
import {onMounted, ref} from "vue";
import RequestCard from "@/components/request-card/RequestCard.vue";

import type { RequestCardProps } from "@/@types/components/RequestCard";
import {changeStatusRequest, getRequestService} from "@/services/request";
import type {UserInfos} from "@/@types/services/auth";

const inputSearch = ref<string>("");
const requestsListBackup = ref<RequestCardProps[]>([
  {
    requestId: 2442,
    projectName: "aaa",
    description: "aaa",
    requestType: "aaa",
    students: 'a, b'
  }
]);

const requestsList = ref<RequestCardProps[]>([
  {
    requestId: 2442,
    projectName: "aaa",
    description: "aaa",
    requestType: "aaa",
    students: 'a, b'
  }
]);

const filterRequests = () => {
  requestsList.value = requestsListBackup.value.filter(request => {
    return request.projectName.includes(inputSearch.value) || request.requestType.includes(inputSearch.value) || request.students.includes(inputSearch.value)
  })
};

const getRequests = async () => {
  try {
    const response = await getRequestService(userInfos.value.id);
    const listaSolicitacoes = response.data.map(item => ({...item, requestId: item.id, students: item.students.map(student => student.name)?.join(', ')}));
    requestsList.value = [...listaSolicitacoes];
    requestsListBackup.value = [...listaSolicitacoes];
  } catch (e) {
   console.error(e);
  }
}

const changeRequestStatus = async (id: number, status: number) => {
  const payload = {
    status
  }

  try {
     await changeStatusRequest(id, payload);
     await getRequests();
  } catch (e) {
    console.error(e);
  }
};

const userInfos = ref<UserInfos>({});



onMounted(() => {
  userInfos.value =  JSON.parse(localStorage.getItem("userInfos") || "");
  getRequests();
})
</script>

<style lang="scss">
#evaluation-requests-view {
  display: flex;
  flex-direction: column;
  flex: 1;

  .evaluation-requests-view__not-found {
    display: flex;
    justify-content: center;
    font-size: 18px;
    margin: auto;
    color: #9E9E9E;
  }

  .evaluation-requests-view__header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 16px;
  }

  .evaluation-requests-view__projects-list {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 24px;

    .evaluation-requests-view__project-item {
      max-width: calc(50% - 12px);
      min-width: calc(50% - 12px);
    }
  }
}
</style>
