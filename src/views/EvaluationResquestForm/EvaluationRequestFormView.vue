<template>
  <div id="evaluation-request-form-view">
    <header-dashboard-text
        header-title="Trabalho de Conclusão de Curso:"
        :students="[]"
        name-project="IAawfawnjfawofawnlkdnawldawfaa11Sjawda"
        screen-name="Formulário para avaliação"
    />

    <div class="evaluation-request-form__content">
      <div class="evaluation-request-form__form">
        <div
            v-for="(evaluator, index) in selectedEvaluators"
            :key="`evaluator-${index}`"
            class="evaluation-request-form__wrapper-select"
        >
          <app-select
              :label="`Avaliador ${index + 1}`"
              :input-value="evaluator.value"
              :option-list="handleOptionListEvaluators(evaluator.value)"
              :input-feedback="validations[index].feedback"
              :input-status="validations[index].valid"
              @update:input-value="value => handleUpdateEvaluatorField(value, index)"
          />

          <div class="evaluation-request-form__actions-select">
            <app-button
                v-if="index == selectedEvaluators.length - 1"
                @click="createNewEvaluatorField"
                variant="default"
            >
              <Plus />
            </app-button>

            <app-button
                v-if="(index !== 0 && selectedEvaluators.length === 1) || selectedEvaluators.length > 1"
                @click="removeEvaluatorField(index)"
                variant="denied"
            >
              <Minus />
            </app-button>
          </div>
        </div>
      </div>

      <div class="evaluation-request-form__footer">
        <app-button @click="addEvaluators">Adicionar avaliadores</app-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderDashboardText from "@/components/header-dashboard-text/header-dashboard-text.vue";
import AppSelect from "@/components/app-select/AppSelect.vue";
import {onMounted, ref} from "vue";
import { Plus, Minus } from 'lucide-vue-next';
import AppButton from "@/components/app-button/AppButton.vue";
import {createRequestService, getEvaluationContextService} from "@/services/request";
import type {UserInfos} from "@/@types/services/auth";
import type { POSTCreateRequestPayload} from "@/@types/services/request";
import router from "@/router";
import { useAppStore } from "@/stores/AppStore";
import { storeToRefs } from "pinia";
const appStore = useAppStore();
const { handleLoading } = appStore
const { showLoading } = storeToRefs(appStore);

const evaluators = ref([{id: 4, label: 'aa'}]);
const evaluatorsBackup = ref([{id: 4, label: 'aa'}]);
const selectedEvaluators = ref<{value: number | null}[]>([{value: null}])
const validations = ref<{valid: boolean, feedback: string}[]>([{valid: true, feedback: ""}])


const createNewEvaluatorField = () => {
  selectedEvaluators.value.push({value: null});
  validations.value.push({valid: true, feedback: ""});
}

const removeEvaluatorField = (index: number) => {
  selectedEvaluators.value.splice(index, 1);
  validations.value.splice(index, 1);
}

const handleUpdateEvaluatorField = (value: number, index: number) => {
  selectedEvaluators.value[index].value = value;
}

const handleOptionListEvaluators = (selectedItem: number | null) => {
  return evaluators.value
      .filter(item => !selectedEvaluators.value
          .some(selectedEvaluator => selectedEvaluator.value == item.id) || item.id === selectedItem);
}

const validateFields = () => {
  const validationsLocal = [];

  for (let i = 0; i < selectedEvaluators.value.length; i++) {
    validations.value[i] = {
      valid: selectedEvaluators.value[i].value != null,
      feedback: selectedEvaluators.value[i].value == null ? "Campo obrigatório" : ""
    }

    validationsLocal.push(selectedEvaluators.value[i].value != null);
  }
    return !validationsLocal.includes(false);
}

const addEvaluators = async () => {
  const validationResult = validateFields();

  if(!validationResult) return;

  const payload: POSTCreateRequestPayload = {
    creatorId: userInfos.value.id,
    projectId: Number(router.currentRoute.value.params.id),
    usersId: selectedEvaluators.value.map(item => item.value)
  };

  handleLoading(true);

  try {
    await createRequestService(payload);
    router.push({name: "projects"})
  } catch (e) {
    console.error(e)
  } finally {
    handleLoading(false);
  }
}


const getContext = async () => {
  try {
  const {data} = await getEvaluationContextService(userInfos.value.id);
  evaluators.value = [...data.teachers];
  evaluatorsBackup.value = [...data.teachers];
  } catch (e) {
    console.error(e);
  }
}

const userInfos = ref<UserInfos>({});
onMounted(() => {
  userInfos.value = JSON.parse(localStorage.getItem("userInfos") || "");
  getContext();
})
</script>

<style lang="scss">
#evaluation-request-form-view {
  flex: 1;
  display: flex;
  flex-direction: column;
  .evaluation-request-form__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    .evaluation-request-form__form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 24px;
      .evaluation-request-form__wrapper-select {
        display: flex;
        gap: 8px;
      }


      .evaluation-request-form__actions-select {
        display: flex;
        align-items: flex-end;
        gap: 8px;

        button {
          height: 37px;
          width: 37px;

          svg {
            min-height: 18px;
            min-width: 18px;
          }
        }
      }
    }

    .evaluation-request-form__footer {
      margin-top: auto;

      button {
        margin-left: auto;
      }
    }
  }
}

</style>
