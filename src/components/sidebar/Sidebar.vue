<template>
  <div class="sidebar__wrapper">
    <div class="sidebar__container">
      <div class="sidebar__icon">
        <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M42 21.477C42 32.9895 32.5979 42.3223 21 42.3223C9.40203 42.3223 0 32.9895 0 21.477C0 9.96448 9.40203 0.631714 21 0.631714C32.5979 0.631714 42 9.96448 42 21.477ZM21.0979 24.4397C24.9684 19.0065 25.1392 15.7136 21.0979 9.89629C16.9793 15.8378 17.5103 18.987 21.0979 24.4397ZM19.2599 31.5172C19.8751 24.8908 18.3645 21.9544 11.9343 18.9222C11.3603 26.1117 13.4064 28.5757 19.2599 31.5172ZM22.9608 31.5172C22.3456 24.8908 23.8563 21.9544 30.2865 18.9222C30.8604 26.1117 28.8144 28.5757 22.9608 31.5172Z" fill="black"/>
        </svg>
      </div>

      <ul class="sidebar__list">
        <li class="sidebar__list-item" v-if="userInfos.userType == 2 || userInfos.userType == 1" @click="$router.push({name: userInfos.userType == 1 ? 'home' : 'projects' })">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4057 15.0825H13.5371L13.5442 9.14951L8.55285 4.05518L3.56864 9.12047L3.56436 15.0825H5.7029V10.1242C5.7029 9.73247 6.02154 9.41584 6.41574 9.41584H10.6928C11.0863 9.41584 11.4057 9.73247 11.4057 10.1242V15.0825ZM9.97997 15.0825H7.12859V10.8325H9.97997V15.0825ZM14.5593 8.13022L9.06396 2.54572C8.79522 2.27301 8.31334 2.27301 8.04459 2.54572L2.54856 8.13093C2.28837 8.39655 2.13867 8.76772 2.13867 9.14951V15.0825C2.13867 15.8638 2.74245 16.4992 3.48452 16.4992H6.41574H10.6928H13.6233C14.3654 16.4992 14.9699 15.8638 14.9699 15.0825V9.14951C14.9699 8.76772 14.8202 8.39655 14.5593 8.13022Z" fill="#3C3C3C"/>
          </svg>

          <span>Dashboard</span>
        </li>

        <li class="sidebar__list-item" v-if="userInfos.userType == 2 || userInfos.userType == 1" @click="$router.push({name: 'solicitations' })">
          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6827 13.4583C15.6827 13.8493 15.364 14.1667 14.9698 14.1667C14.5756 14.1667 14.257 13.8493 14.257 13.4583C14.257 12.2867 13.2975 11.3333 12.1185 11.3333C11.6316 11.3333 11.1689 11.4991 10.7954 11.793C11.1832 12.4985 11.4056 13.3075 11.4056 14.1667C11.4056 14.5577 11.087 14.875 10.6928 14.875C10.2986 14.875 9.97992 14.5577 9.97992 14.1667C9.97992 12.2138 8.38101 10.625 6.4157 10.625C4.45038 10.625 2.85147 12.2138 2.85147 14.1667C2.85147 14.5577 2.53283 14.875 2.13863 14.875C1.74442 14.875 1.42578 14.5577 1.42578 14.1667C1.42578 11.4325 3.66483 9.20833 6.4157 9.20833C7.78935 9.20833 9.03398 9.76296 9.93715 10.6576C10.5566 10.1816 11.3194 9.91667 12.1185 9.91667C14.0838 9.91667 15.6827 11.5055 15.6827 13.4583ZM12.1185 6.375C12.5119 6.375 12.8313 6.69304 12.8313 7.08333C12.8313 7.47363 12.5119 7.79167 12.1185 7.79167C11.725 7.79167 11.4056 7.47363 11.4056 7.08333C11.4056 6.69304 11.725 6.375 12.1185 6.375ZM12.1185 9.20833C13.2975 9.20833 14.257 8.25492 14.257 7.08333C14.257 5.91175 13.2975 4.95833 12.1185 4.95833C10.9394 4.95833 9.97992 5.91175 9.97992 7.08333C9.97992 8.25492 10.9394 9.20833 12.1185 9.20833ZM6.4157 3.54167C7.20196 3.54167 7.84139 4.17704 7.84139 4.95833C7.84139 5.73963 7.20196 6.375 6.4157 6.375C5.62943 6.375 4.99001 5.73963 4.99001 4.95833C4.99001 4.17704 5.62943 3.54167 6.4157 3.54167ZM6.4157 7.79167C7.98823 7.79167 9.26708 6.52092 9.26708 4.95833C9.26708 3.39575 7.98823 2.125 6.4157 2.125C4.84316 2.125 3.56432 3.39575 3.56432 4.95833C3.56432 6.52092 4.84316 7.79167 6.4157 7.79167Z" fill="#3C3C3C"/>
          </svg>

          <span>Solicitações</span>
        </li>

        <li class="sidebar__list-item" v-if="userInfos.userType == 2 || userInfos.userType == 1" @click="$router.push({name: 'evaluated-projects' })">
          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55411 9.91663H6.41557C6.02208 9.91663 5.70273 9.59929 5.70273 9.20829C5.70273 8.81729 6.02208 8.49996 6.41557 8.49996H8.55411C8.9476 8.49996 9.26695 8.81729 9.26695 9.20829C9.26695 9.59929 8.9476 9.91663 8.55411 9.91663ZM5.70273 12.0416C5.70273 11.6506 6.02208 11.3333 6.41557 11.3333H10.6926C11.0868 11.3333 11.4055 11.6506 11.4055 12.0416C11.4055 12.4326 11.0868 12.75 10.6926 12.75H6.41557C6.02208 12.75 5.70273 12.4326 5.70273 12.0416ZM12.4351 14.1666H4.67288C4.45475 14.1666 4.27725 14.008 4.27725 13.8125V3.18746C4.27725 2.99196 4.45475 2.83329 4.67288 2.83329H8.55432V5.06454C8.55432 6.17804 9.42185 7.08329 10.489 7.08329H12.8314V13.8125C12.8314 14.008 12.6539 14.1666 12.4351 14.1666ZM9.98001 3.52604L11.9346 5.66663H10.489C10.2081 5.66663 9.98001 5.39675 9.98001 5.06454V3.52604ZM14.0717 5.89896L10.191 1.64896C10.0556 1.50092 9.86453 1.41663 9.6628 1.41663H4.67288C3.66848 1.41663 2.85156 2.21138 2.85156 3.18746V13.8125C2.85156 14.7885 3.66848 15.5833 4.67288 15.5833H12.4351C13.4395 15.5833 14.2571 14.7885 14.2571 13.8125V6.37496C14.2571 6.19858 14.1908 6.02929 14.0717 5.89896Z" fill="#3C3C3C"/>
          </svg>


          <span>Notas</span>
        </li>

        <li class="sidebar__list-item" v-if="userInfos.userType == 2 || userInfos.userType == 1" @click="$router.push({name: 'sendterms' })">
          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55411 9.91663H6.41557C6.02208 9.91663 5.70273 9.59929 5.70273 9.20829C5.70273 8.81729 6.02208 8.49996 6.41557 8.49996H8.55411C8.9476 8.49996 9.26695 8.81729 9.26695 9.20829C9.26695 9.59929 8.9476 9.91663 8.55411 9.91663ZM5.70273 12.0416C5.70273 11.6506 6.02208 11.3333 6.41557 11.3333H10.6926C11.0868 11.3333 11.4055 11.6506 11.4055 12.0416C11.4055 12.4326 11.0868 12.75 10.6926 12.75H6.41557C6.02208 12.75 5.70273 12.4326 5.70273 12.0416ZM12.4351 14.1666H4.67288C4.45475 14.1666 4.27725 14.008 4.27725 13.8125V3.18746C4.27725 2.99196 4.45475 2.83329 4.67288 2.83329H8.55432V5.06454C8.55432 6.17804 9.42185 7.08329 10.489 7.08329H12.8314V13.8125C12.8314 14.008 12.6539 14.1666 12.4351 14.1666ZM9.98001 3.52604L11.9346 5.66663H10.489C10.2081 5.66663 9.98001 5.39675 9.98001 5.06454V3.52604ZM14.0717 5.89896L10.191 1.64896C10.0556 1.50092 9.86453 1.41663 9.6628 1.41663H4.67288C3.66848 1.41663 2.85156 2.21138 2.85156 3.18746V13.8125C2.85156 14.7885 3.66848 15.5833 4.67288 15.5833H12.4351C13.4395 15.5833 14.2571 14.7885 14.2571 13.8125V6.37496C14.2571 6.19858 14.1908 6.02929 14.0717 5.89896Z" fill="#3C3C3C"/>
          </svg>


          <span>Enviar Termos</span>
        </li>
        <li class="sidebar__list-item" v-if="userInfos.userType == 3" @click="$router.push({name: 'signup' })">
          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55411 9.91663H6.41557C6.02208 9.91663 5.70273 9.59929 5.70273 9.20829C5.70273 8.81729 6.02208 8.49996 6.41557 8.49996H8.55411C8.9476 8.49996 9.26695 8.81729 9.26695 9.20829C9.26695 9.59929 8.9476 9.91663 8.55411 9.91663ZM5.70273 12.0416C5.70273 11.6506 6.02208 11.3333 6.41557 11.3333H10.6926C11.0868 11.3333 11.4055 11.6506 11.4055 12.0416C11.4055 12.4326 11.0868 12.75 10.6926 12.75H6.41557C6.02208 12.75 5.70273 12.4326 5.70273 12.0416ZM12.4351 14.1666H4.67288C4.45475 14.1666 4.27725 14.008 4.27725 13.8125V3.18746C4.27725 2.99196 4.45475 2.83329 4.67288 2.83329H8.55432V5.06454C8.55432 6.17804 9.42185 7.08329 10.489 7.08329H12.8314V13.8125C12.8314 14.008 12.6539 14.1666 12.4351 14.1666ZM9.98001 3.52604L11.9346 5.66663H10.489C10.2081 5.66663 9.98001 5.39675 9.98001 5.06454V3.52604ZM14.0717 5.89896L10.191 1.64896C10.0556 1.50092 9.86453 1.41663 9.6628 1.41663H4.67288C3.66848 1.41663 2.85156 2.21138 2.85156 3.18746V13.8125C2.85156 14.7885 3.66848 15.5833 4.67288 15.5833H12.4351C13.4395 15.5833 14.2571 14.7885 14.2571 13.8125V6.37496C14.2571 6.19858 14.1908 6.02929 14.0717 5.89896Z" fill="#3C3C3C"/>
          </svg>


          <span>Cadastrar</span>
        </li>
      </ul>

      <ul class="sidebar__footer-list">
        <div class="switch-container" v-if="userInfos.userType == 2">
          <label class="switch">
            <input type="checkbox" v-model="evaluationSwitch" @change="changeEvaluationAvailable">
            <span class="slider round"></span>
          </label>
          <label class="switch-label">Avaliar</label>
        </div>

        <div class="switch-container" v-if="userInfos.userType == 2">
          <label class="switch">
            <input type="checkbox" v-model="orientationSwitch" @change="changeOrientationAvailable" >
            <span class="slider round"></span>
          </label>
          <label class="switch-label">Orientar</label>
        </div>

        <li class="sidebar__footer-list-item" @click="$router.push({name: 'settings'})">
          <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.05713 14.8726H8.94325V14.3333C8.94325 13.6759 9.35055 13.0853 9.98025 12.8273C10.6319 12.558 11.3438 12.6902 11.8127 13.1584L12.1945 13.5388L12.8235 12.9145L12.4375 12.532C11.9678 12.0665 11.8354 11.3606 12.0996 10.7341C12.0996 10.7341 12.1003 10.7334 12.1003 10.7327L12.1081 10.713C12.3659 10.0921 12.9616 9.68715 13.6239 9.68715H14.1665V8.80826H13.6239C12.9616 8.80826 12.3659 8.40397 12.1067 7.7789C11.834 7.13203 11.9678 6.4254 12.4396 5.95924L12.8228 5.58026L12.1945 4.95659L11.8085 5.33979C11.3395 5.80525 10.6291 5.93674 9.99796 5.67518C9.35125 5.4101 8.94325 4.81949 8.94325 4.16207V3.62278H8.05713V4.16207C8.05713 4.81949 7.64984 5.4101 7.02013 5.66815C6.36917 5.93885 5.6573 5.80596 5.18767 5.33698L4.80588 4.95659L4.17688 5.58096L4.56292 5.96345C5.03184 6.42892 5.165 7.13485 4.9008 7.76132C4.63446 8.40327 4.03875 8.80826 3.37646 8.80826H2.83317V9.68715H3.37646C4.03875 9.68715 4.63446 10.0914 4.89371 10.7165C5.16642 11.3634 5.03255 12.07 4.5608 12.5362L4.17759 12.9152L4.80588 13.5388L5.19192 13.1556C5.66084 12.6902 6.3713 12.5587 7.00242 12.8202C7.64913 13.0853 8.05713 13.6759 8.05713 14.3333V14.8726ZM9.1678 16.2789H7.82763C7.17313 16.2789 6.64046 15.7501 6.64046 15.1004V14.3333C6.64046 14.23 6.55759 14.159 6.47967 14.1273C6.37767 14.0858 6.26859 14.0774 6.1935 14.1498L5.64809 14.6919C5.18342 15.1518 4.42834 15.1532 3.96438 14.6919L3.01521 13.7498C2.78996 13.5262 2.66671 13.2294 2.66671 12.913C2.66742 12.5973 2.79138 12.3006 3.01734 12.077L3.56134 11.5392C3.63571 11.4653 3.62792 11.3571 3.59463 11.279C3.55213 11.1756 3.4813 11.0934 3.37646 11.0934H2.60863C1.9513 11.0934 1.4165 10.5632 1.4165 9.91074V8.58045C1.4165 7.93007 1.94917 7.40203 2.60438 7.40203H3.37646C3.48059 7.40203 3.55213 7.31906 3.584 7.24172C3.6265 7.14047 3.635 7.03149 3.56134 6.95836L3.01521 6.41696C2.55196 5.95502 2.55196 5.2055 3.01521 4.74566L3.96438 3.80348C4.18963 3.57989 4.48784 3.45755 4.80588 3.45755H4.8073C5.12534 3.45755 5.42496 3.5806 5.6495 3.80489L6.19138 4.34559C6.26575 4.42012 6.37555 4.41168 6.45417 4.37863C6.55759 4.33574 6.64046 4.26543 6.64046 4.16207V3.3999C6.64046 2.7474 7.17525 2.21655 7.83259 2.21655H9.17275C9.82725 2.21655 10.3599 2.7453 10.3599 3.39497V4.16207C10.3599 4.26543 10.4428 4.33645 10.5207 4.36809C10.6234 4.41027 10.7325 4.41941 10.8069 4.34559L11.3523 3.80348C11.817 3.34365 12.572 3.34224 13.036 3.80348L13.9859 4.74636C14.2111 4.96925 14.3344 5.26596 14.3337 5.58237C14.3337 5.89736 14.2097 6.19478 13.9838 6.41767L13.439 6.95625C13.3647 7.03008 13.3725 7.13836 13.4058 7.21641C13.4483 7.31976 13.5191 7.40203 13.6239 7.40203H14.3918C15.0491 7.40203 15.5832 7.93218 15.5832 8.58467V9.91496C15.5832 10.5653 15.0512 11.0934 14.396 11.0934H13.6239C13.5198 11.0934 13.4483 11.1764 13.4164 11.2537C13.4157 11.2544 13.4072 11.2755 13.4065 11.2769C13.3739 11.3549 13.3654 11.4639 13.439 11.537L13.9852 12.0784C14.4484 12.5404 14.4484 13.2899 13.9852 13.7498L13.036 14.6919C12.8108 14.9155 12.5125 15.0379 12.1945 15.0379H12.1931C11.875 15.0379 11.5754 14.9148 11.3509 14.6905L10.809 14.1498C10.7346 14.076 10.6241 14.0844 10.5462 14.1168C10.4428 14.1597 10.3599 14.23 10.3599 14.3333V15.0955C10.3599 15.748 9.82513 16.2789 9.1678 16.2789ZM8.50019 8.19303C7.9144 8.19303 7.43769 8.66623 7.43769 9.24771C7.43769 9.82918 7.9144 10.3024 8.50019 10.3024C9.08598 10.3024 9.56269 9.82918 9.56269 9.24771C9.56269 8.66623 9.08598 8.19303 8.50019 8.19303ZM8.50019 11.7086C7.13311 11.7086 6.02103 10.6047 6.02103 9.24771C6.02103 7.89069 7.13311 6.7868 8.50019 6.7868C9.86728 6.7868 10.9794 7.89069 10.9794 9.24771C10.9794 10.6047 9.86728 11.7086 8.50019 11.7086Z" fill="#3C3C3C"/>
          </svg>

          <span>Configurações</span>
        </li>

        <li class="sidebar__footer-list-item" @click="logout">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.26715 9.02299C9.26715 9.4147 8.94779 9.73132 8.5543 9.73132C8.16081 9.73132 7.84146 9.4147 7.84146 9.02299V1.93966C7.84146 1.54795 8.16081 1.23132 8.5543 1.23132C8.94779 1.23132 9.26715 1.54795 9.26715 1.93966V9.02299ZM10.8631 3.03141C11.0435 2.68362 11.474 2.54833 11.8233 2.72683C14.2035 3.95012 15.6827 6.36199 15.6827 9.0232C15.6827 12.9282 12.4849 16.1065 8.55423 16.1065C4.6236 16.1065 1.42578 12.9282 1.42578 9.0232C1.42578 6.36199 2.90493 3.95012 5.28584 2.72683C5.63442 2.54762 6.06498 2.68291 6.24604 3.03141C6.4271 3.37849 6.28952 3.80562 5.94023 3.98554C4.03479 4.96374 2.85147 6.89395 2.85147 9.0232C2.85147 12.1477 5.40987 14.6899 8.55423 14.6899C11.6986 14.6899 14.257 12.1477 14.257 9.0232C14.257 6.89395 13.0737 4.96374 11.1689 3.98554C10.8189 3.80562 10.6821 3.37849 10.8631 3.03141Z" fill="#3C3C3C"/>
          </svg>

          <span>Sair</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import type {UserInfos} from "@/@types/services/auth";
import router from "@/router";
import {changeEvaluationAvailableService, changeOrientationAvailableService} from "@/services/teacher";

const userInfos = ref<UserInfos>({});
const evaluationSwitch = ref<boolean>(false);
const orientationSwitch = ref<boolean>(false);


const logout = () => {
  localStorage.clear();
  router.push({name: "signin"});
}

const changeOrientationAvailable = async () => {
  const payload = {
    status: orientationSwitch.value
  }
  try {
    await changeOrientationAvailableService(userInfos.value.id, payload);
  } catch (e) {
    console.error(e);
  }
}

const changeEvaluationAvailable = async () => {
  const payload = {
    status: evaluationSwitch.value
  }
  try {
    await changeEvaluationAvailableService(userInfos.value.id, payload);
  } catch (e) {
    console.error(e);
  }
}

onMounted(() => {
  userInfos.value = JSON.parse(localStorage.getItem("userInfos") || "");

  if(userInfos.value.userType == 2) {
    evaluationSwitch.value = userInfos.value.availableEvaluation;
    orientationSwitch.value = userInfos.value.availableOrientation;
  }
})
</script>

<style scoped lang="scss">

.sidebar__wrapper {
  min-width: 200px;
  max-width: 200px;
  .sidebar__container{
    min-height: 100dvh;
    min-width: 200px;
    max-width: 200px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    border-right: 2px solid #E3E3E3;
    padding: 12px 8px;
    position: fixed;

    .switch-container {
      display: flex;
      gap: 4px;
      align-items: center;
      margin: 4px 12px;

      .switch-label {
        font-size: 12px;
      }
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 35px;
      height: 19px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 11px;
      width: 11px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }

    input:checked + .slider {
      background-color: #2196F3;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(15px);
      -ms-transform: translateX(15px);
      transform: translateX(15px);
    }

    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }

    .sidebar__icon {
      margin: 50px auto;
    }

    .sidebar__list {
      display: flex;
      flex-direction: column;
      gap: 4px;

      .sidebar__list-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 12px;
        border-radius: 7px;
        cursor: pointer;

        &:hover {
          background: #4F4B63;

          span {
            color: #fff;
          }

          svg path {
            fill: #fff;
          }
        }

        span {
          font-size: 12px;
          font-weight: 400;
          line-height: normal;
          color: #3C3C3C;
        }
      }
    }

    .sidebar__footer-list {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-top: auto;

      .sidebar__footer-list-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 12px;
        border-radius: 7px;
        cursor: pointer;

        &:hover {
          background: #4F4B63;

          span {
            color: #fff;
          }

          svg path {
            fill: #fff;
          }
        }

        span {
          font-size: 12px;
          font-weight: 400;
          line-height: normal;
          color: #3C3C3C;
        }
      }
    }
  }
}
</style>
