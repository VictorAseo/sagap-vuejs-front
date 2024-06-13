<template>
  <div class="request-card__container">
    <div class="request-card__content-left">
      <span class="request-card__text"><b>Proposta:</b> {{projectName}}</span>
      <span class="request-card__text"><b>Tipo:</b> {{ requestType }}</span>
      <span class="request-card__text"><b>Alunos:</b> {{ students }}</span>
      <span class="request-card__text"><b>Descrição:</b> {{ description }}</span>
    </div>

    <div class="request-card__content-right">
      <app-button variant="success" @click="acceptAction ? acceptAction(requestId, 1) : () => {}">Aceitar</app-button>
      <app-button variant="denied" @click="deniedAction ? deniedAction(requestId, 3) : () => {}">Recusar</app-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppButton from "@/components/app-button/AppButton.vue";
import type {RequestCardComponentProps} from "@/@types/components/RequestCard";

const { requestId, projectName, requestType, students, description, acceptAction, deniedAction } = defineProps<RequestCardComponentProps>();
</script>

<style scoped lang="scss">
.request-card__container {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  border-radius: 6px;
  border: 1px solid #E3E3E3;
  padding: 16px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);

  .request-card__content-left {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .request-card__text {
      font-size: 12px;
      font-weight: 400;
      line-height: 14.52px;
      color: #3C3C3C;

      b {
        font-weight: 700;
      }
    }
  }

  .request-card__content-right {
    display: flex;
    gap: 8px;
  }
}
</style>
