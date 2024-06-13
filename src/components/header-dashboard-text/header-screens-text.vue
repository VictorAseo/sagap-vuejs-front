<template>
  <div class="header-screens__wrapper">
    <div class="header-screens__container">
      <div class="header-screens__text-container">
        <h1 class="header-screens__text">{{ headerTitle }}</h1>
        <span class="header-screens__subtext_one">{{ headerFirstSubTitle }}</span>
        <span class="header-screens__subtext_two">{{ headerSecondSubTitle }}</span>
      </div>

    </div>
    <img alt="UVV Logo" class="UVV_LOGO" style="background: #ffffff" src="@/assets/images/UVV-Logo.png" height="42" width="133"/>
  </div>

  <div class="header-screens__screen-name-container">
    <span class="header-screens__screen-name">{{ screenName }}</span>
  </div>
</template>
<script setup lang="ts">
  import type {HeaderTextScreenProps} from "@/@types/components/HeaderText";

  const { headerTitle, headerFirstSubTitle, headerSecondSubTitle, screenName} = defineProps<HeaderTextScreenProps>();


</script>
<style scoped lang="scss">
  .header-screens__wrapper {
    display: flex;
    gap: 8px;

    .header-screens__container {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  }

  .header-screens__subtext_one, .header-screens__subtext_two{
    font-size: 14px;
  }

  .horizontal-line {
    width: auto;
    height: 1px;
    margin-top: 20px;
    margin-bottom: 21px;
    background-color: #939393;
  }

  h1{
    margin-bottom: 11px;
  }

  .header-screens__text {
    font-size: 24px;
    font-weight: 600;
    line-height: normal;
    text-align: start;
  }

  .UVV_LOGO{
  float: right;
  margin-top: 0px;
  margin-right: 19px;
  }

  .header-screens__screen-name-container {
    border-bottom: 1px solid #939393;
    margin-top: 22px;
    padding-bottom: 4px;

    .header-screens__screen-name {
      color: #9E9E9E;
      font-size: 16px;
      font-weight: 400;
    }
  }
</style>
