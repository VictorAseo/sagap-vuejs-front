<template>
  <div class="dashboard-header__container">
    <div class="dashboard-header__content">
      <div class="dashboard-header__content-left">
        <h1 class="dashboard-header__title"><b>Trabalho de Conclusão de Curso:</b> {{ nameProject }}</h1>
        <span class="dashboard-header__students">Alunos: {{ students.join(", ") }}</span>
      </div>

      <div class="dashboard-header__content-right">
        <img alt="UVV Logo" class="dashboard-header__uvv-logo" src="@/assets/images/UVV-Logo.png" height="42" width="133"/>
      </div>
    </div>

    <div class="dashboard-header__screen-name-container">
      <span class="dashboard-header__screen-name">{{ screenName }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type {HeaderTextDashboardProps} from "@/@types/components/HeaderText";
  const { students, nameProject, screenName } = defineProps<HeaderTextDashboardProps>();
</script>

<style scoped lang="scss">
  .dashboard-header__container {
    display: flex;
    flex-direction: column;

    .dashboard-header__content {
      display: flex;
      gap: 8px;
      justify-content: space-between;

      .dashboard-header__content-left {
        display: flex;
        flex-direction: column;

        .dashboard-header__title {
          font-size: 20px;
          color: #3C3C3C;

          b {
            font-weight: 700;
          }
        }

        .dashboard-header__students {
          color: #3C3C3C;
          font-size: 15px;
          margin-top: 10px;
        }
      }
    }

    .dashboard-header__screen-name-container {
      border-bottom: 1px solid #939393;
      margin-top: 22px;
      padding-bottom: 4px;

      .dashboard-header__screen-name {
        color: #9E9E9E;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
</style>
