<template>
  <div id="login-view">
      <FormBox>
        <div>
          <img alt="UVV Logo" class="UVV_LOGO" style="background: #ffffff" src="@/assets/images/UVV-Logo.png" height="42" width="133"/>
          <svg class="SAGAO_LOGO" style="background: #ffffff" width="133" height="42" viewBox="0 0 133 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.9858 17.5653C10.9176 16.8778 10.625 16.3437 10.108 15.9631C9.59091 15.5824 8.8892 15.392 8.00284 15.392C7.40057 15.392 6.89205 15.4773 6.47727 15.6477C6.0625 15.8125 5.74432 16.0426 5.52273 16.3381C5.30682 16.6335 5.19886 16.9688 5.19886 17.3438C5.1875 17.6562 5.25284 17.929 5.39489 18.1619C5.54261 18.3949 5.74432 18.5966 6 18.767C6.25568 18.9318 6.55114 19.0767 6.88636 19.2017C7.22159 19.321 7.57955 19.4233 7.96023 19.5085L9.52841 19.8835C10.2898 20.054 10.9886 20.2812 11.625 20.5653C12.2614 20.8494 12.8125 21.1989 13.2784 21.6136C13.7443 22.0284 14.1051 22.517 14.3608 23.0795C14.6222 23.642 14.7557 24.2869 14.7614 25.0142C14.7557 26.0824 14.483 27.0085 13.9432 27.7926C13.4091 28.571 12.6364 29.1761 11.625 29.608C10.6193 30.0341 9.40625 30.2472 7.9858 30.2472C6.5767 30.2472 5.34943 30.0312 4.30398 29.5994C3.2642 29.1676 2.4517 28.5284 1.86648 27.6818C1.28693 26.8295 0.982955 25.7756 0.954545 24.5199H4.52557C4.56534 25.1051 4.73295 25.5937 5.02841 25.9858C5.32955 26.3722 5.73011 26.6648 6.23011 26.8636C6.7358 27.0568 7.30682 27.1534 7.94318 27.1534C8.56818 27.1534 9.1108 27.0625 9.57102 26.8807C10.0369 26.6989 10.3977 26.446 10.6534 26.1222C10.9091 25.7983 11.0369 25.4261 11.0369 25.0057C11.0369 24.6136 10.9205 24.2841 10.6875 24.017C10.4602 23.75 10.125 23.5227 9.68182 23.3352C9.24432 23.1477 8.70739 22.9773 8.07102 22.8239L6.17045 22.3466C4.69886 21.9886 3.53693 21.429 2.68466 20.6676C1.83239 19.9062 1.40909 18.8807 1.41477 17.5909C1.40909 16.5341 1.69034 15.6108 2.25852 14.821C2.83239 14.0312 3.61932 13.4148 4.61932 12.9716C5.61932 12.5284 6.75568 12.3068 8.02841 12.3068C9.32386 12.3068 10.4545 12.5284 11.4205 12.9716C12.392 13.4148 13.1477 14.0312 13.6875 14.821C14.2273 15.6108 14.5057 16.5256 14.5227 17.5653H10.9858ZM19.8537 30H15.8991L21.9247 12.5455H26.6804L32.6974 30H28.7429L24.3707 16.5341H24.2344L19.8537 30ZM19.6065 23.1392H28.9474V26.0199H19.6065V23.1392ZM45.5518 18.1875C45.4325 17.7727 45.2649 17.4062 45.049 17.0881C44.8331 16.7642 44.5689 16.4915 44.2564 16.2699C43.9496 16.0426 43.5973 15.8693 43.1996 15.75C42.8075 15.6307 42.3729 15.571 41.8956 15.571C41.0036 15.571 40.2195 15.7926 39.5433 16.2358C38.8729 16.679 38.3501 17.3239 37.9751 18.1705C37.6001 19.0114 37.4126 20.0398 37.4126 21.2557C37.4126 22.4716 37.5973 23.5057 37.9666 24.358C38.3359 25.2102 38.8587 25.8608 39.5348 26.3097C40.2109 26.7528 41.0092 26.9744 41.9297 26.9744C42.7649 26.9744 43.478 26.8267 44.0689 26.5312C44.6655 26.2301 45.12 25.8068 45.4325 25.2614C45.7507 24.7159 45.9098 24.071 45.9098 23.3267L46.6598 23.4375H42.1598V20.6591H49.4638V22.858C49.4638 24.392 49.1399 25.7102 48.4922 26.8125C47.8445 27.9091 46.9524 28.7557 45.8161 29.3523C44.6797 29.9432 43.3786 30.2386 41.9126 30.2386C40.2763 30.2386 38.8388 29.8778 37.6001 29.1562C36.3615 28.429 35.3956 27.3977 34.7024 26.0625C34.0149 24.7216 33.6712 23.1307 33.6712 21.2898C33.6712 19.875 33.8757 18.6136 34.2848 17.5057C34.6996 16.392 35.2791 15.4489 36.0234 14.6761C36.7678 13.9034 37.6342 13.3153 38.6229 12.9119C39.6115 12.5085 40.6825 12.3068 41.8359 12.3068C42.8246 12.3068 43.745 12.4517 44.5973 12.7415C45.4496 13.0256 46.2053 13.429 46.8643 13.9517C47.5291 14.4744 48.0717 15.0966 48.4922 15.8182C48.9126 16.5341 49.1825 17.3239 49.3018 18.1875H45.5518ZM54.7053 30H50.7507L56.7763 12.5455H61.532L67.549 30H63.5945L59.2223 16.5341H59.0859L54.7053 30ZM54.4581 23.1392H63.799V26.0199H54.4581V23.1392ZM69.6499 30V12.5455H76.5362C77.8601 12.5455 78.9879 12.7983 79.9197 13.304C80.8516 13.804 81.5618 14.5 82.0504 15.392C82.5447 16.2784 82.7919 17.3011 82.7919 18.4602C82.7919 19.6193 82.5419 20.642 82.0419 21.5284C81.5419 22.4148 80.8175 23.1051 79.8686 23.5994C78.9254 24.0937 77.7834 24.3409 76.4425 24.3409H72.0533V21.3835H75.8459C76.5561 21.3835 77.1413 21.2614 77.6016 21.017C78.0675 20.767 78.4141 20.4233 78.6413 19.9858C78.8743 19.5426 78.9908 19.0341 78.9908 18.4602C78.9908 17.8807 78.8743 17.375 78.6413 16.9432C78.4141 16.5057 78.0675 16.1676 77.6016 15.929C77.1357 15.6847 76.5447 15.5625 75.8288 15.5625H73.3402V30H69.6499Z" fill="black"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M133 20.8453C133 32.3578 123.598 41.6906 112 41.6906C100.402 41.6906 91 32.3578 91 20.8453C91 9.33277 100.402 0 112 0C123.598 0 133 9.33277 133 20.8453ZM112.098 23.808C115.968 18.3748 116.139 15.0819 112.098 9.26458C107.979 15.2061 108.51 18.3553 112.098 23.808ZM110.26 30.8854C110.875 24.2591 109.365 21.3227 102.934 18.2905C102.36 25.48 104.406 27.9439 110.26 30.8854ZM113.961 30.8854C113.346 24.2591 114.856 21.3227 121.287 18.2905C121.86 25.48 119.814 27.9439 113.961 30.8854Z" fill="black"/>
          </svg>
        </div>

        <div class="login-view__content">
          <h1 class="login-view__title">Login</h1>
          <div class="login-view__form">
            <InvalidAlert v-show="hasLoginError">Matrícula ou senha inválidos</InvalidAlert>
            <FormInput
                  v-for="[key, loginFields] in Object.entries(fields)"
                  :key="key"
                  :input-label="loginFields.label"
                  :input-value="loginFields.value"
                  :input-type="loginFields.type"
                  :input-status="loginFields.status"
                  :input-feedback="loginFields.feedback"
                  :input-placeholder="loginFields.placeholder"
                  @update:input-value="(newValue) => (loginFields.value = newValue)"
            />

            <AppButton
                class="login-button-tag"
                @click="login"
                is-full
            >
              Login
            </AppButton>
          </div>
        </div>
      </FormBox>
  </div>
</template>
<script setup lang="ts">
import FormBox from "@/components/form-box/FormBox.vue";
import { ref, } from "vue";
import { useAppStore } from "@/stores/AppStore";
import FormInput from "@/components/form-input/FormInput.vue";
import AppButton from "@/components/app-button/AppButton.vue";
import InvalidAlert from "@/views/SignIn/components/InvalidAlert.vue";
import {loginService} from "@/services/auth";
import router from "@/router";


const hasLoginError = ref(false);

const fields = ref({
  login: {
    label: "Matrícula",
    value: "",
    type: "text",
    placeholder: "Digite aqui",
    status: true,
    feedback: "",
    validations: []
  },
  password: {
    label: "Senha",
    value: "",
    type: "password",
    placeholder: "********",
    status: true,
    feedback: "",
    validations: []
  }
});

const appStore = useAppStore();
const { handleLoading } = appStore;

const handleRedirect = (userType: number) => {
  if (userType === 1) return "home"
  if (userType === 2) return "projects"
  if (userType === 3) return "signup"
  return ""
}

const login = async () => {
  const payload = {
    login: fields.value.login.value,
    password: fields.value.password.value
  };

  handleLoading(true);
  try {
    const response = await loginService(payload);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("userInfos", JSON.stringify(response.data));
    await router.push({name: handleRedirect(response.data.userType)})
  } catch (error) {
    console.error(error);
    hasLoginError.value = true;
  } finally {
    handleLoading(false);
  }
};
</script>

<style>
  #login-main-view-container {
    min-height: 100vh;
    max-height: 100%;
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

  #login-view {
    display: flex;
    flex-direction: column;

    .login-view__content {
     display: flex;
      flex-direction: column;
      margin: auto 0;

      .login-view__title {
        font-weight: 700;
        font-size: 32px;
        line-height: normal;
        margin: 76px auto 32px;
      }

      .login-view__form {
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: center;
        max-width: 516px;
        margin: 0 auto;

        .login-button-tag {
          margin-top: 24px;
        }
      }
    }
  }
</style>
