<template>
  <div id="request-form">
    <header-screens-text
        screen-name="Criar solicitação"
        header-title="Formulário de orientação"
        header-first-sub-title="Formulário para envio de termos e relatórios para entidade responsável da universidade via e-mail"
    />

    <div class="request-form__content">
      <form-input
          input-label="Professor"
          :input-value="selectedTeacher.label"
          :input-status="true"
          disabled
      />

      <form-input
          input-label="Projeto"
          :input-value="fields.project"
          :input-status="validationsFields.project.status"
          :input-feedback="validationsFields.description.feedback"
          @update:input-value="value => fields.project = value"
      />
      <form-input
          input-label="Descrição"
          :input-value="fields.description"
          :input-status="validationsFields.description.status"
          :input-feedback="validationsFields.description.feedback"
          input-model="textarea"
          @update:input-value="value => fields.description = value"
      />

      <div
          v-for="(evaluator, index) in selectedEvaluators"
          :key="`evaluator-${index}`"
          class="request-form__wrapper-select"
      >
        <app-select
            :label="`Aluno ${index + 1}`"
            :input-value="evaluator.value"
            :option-list="handleOptionListEvaluators(evaluator.value)"
            @update:input-value="value => handleUpdateEvaluatorField(value, index)"
            :input-status="true"
        />

        <div class="request-form__select-actions">
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

      <div class="request-form__footer">
        <app-button @click="addEvaluators">Enviar solicitação</app-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import HeaderScreensText from "@/components/header-dashboard-text/header-screens-text.vue";
import {onMounted, ref} from "vue";
import FormInput from "@/components/form-input/FormInput.vue";
import {Minus, Plus} from "lucide-vue-next";
import AppSelect from "@/components/app-select/AppSelect.vue";
import AppButton from "@/components/app-button/AppButton.vue";
import type {CreateProjectPayload} from "@/@types/services/project";
import type {UserInfos} from "@/@types/services/auth";
import {createProjectService} from "@/services/project";
import {useCreateProjectStore} from "@/stores/RegisterProjectsStore";
import { useAppStore } from "@/stores/AppStore";
import {storeToRefs} from "pinia";
import router from "@/router";

const appStore = useAppStore();
const { handleLoading } = appStore
const { showLoading } = storeToRefs(appStore);

const createProjectStore = useCreateProjectStore();
const { $resetCreateProjectStores } = createProjectStore;
const { userView, selectedTeacher, teachers, students } = storeToRefs(createProjectStore);

const fields = ref<any>({
  project: "",
  description: ""
})
const validationsFields = ref<any>(
    {
      project: {
        status: true,
        feedback: ""
      },
      description: {
        status: true,
        feedback: ""
      }
    }
)

const selectedEvaluators = ref<{value: number | null}[]>([{value: null}])

const createNewEvaluatorField = () => {
  selectedEvaluators.value.push({value: null});
}

const removeEvaluatorField = (index: number) => {
  selectedEvaluators.value.splice(index, 1);
}

const handleUpdateEvaluatorField = (value: number, index: number) => {
  selectedEvaluators.value[index].value = value;
}

const handleOptionListEvaluators = (selectedItem: number | null) => {
  return students.value
      .filter(item => !selectedEvaluators.value
          .some(selectedEvaluator => selectedEvaluator.value == item.id) || item.id === selectedItem);
}

const validateFields = () => {
  const validationsLocal = [];

  for(let item of Object.keys(fields.value)) {
    const value = fields.value[item]
    validationsFields.value[item].status = !!value;
    validationsFields.value[item].feedback = !!value ? "" : "Campo obrigatório";
    validationsLocal.push(!!value);
  }

  return !validationsLocal.includes(false);
}

const addEvaluators = async () => {
  const validationResult = validateFields();

  if(!validationResult) return;

  const payload: CreateProjectPayload = {
    creatorId: userInfos.value.id,
    name: fields.value.project,
    description: fields.value.description,
    leaderId: selectedTeacher.value.id,
    group: selectedEvaluators.value.filter(item => !!item?.value?.toString()).map(item => item.value)
  }

  handleLoading(true);

  try {
    await createProjectService(payload);
    router.push({name: "home"});
  } catch (e) {
    console.error(e);
  } finally {
    handleLoading(false);
  }
}

const userInfos = ref<UserInfos>({});

onMounted(() => {
  userInfos.value = JSON.parse(localStorage.getItem("userInfos") || "");
})

</script>

<style lang="scss">
#orientation-request-form {
  display: flex;
  flex-direction: column;
  flex: 1;

  #request-form {
    display: flex;
    flex-direction: column;
    flex: 1;

    .request-form__content {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 12px;
      margin-top: 12px;

      .request-form__wrapper-select {
        display: flex;
        gap: 8px;

        .request-form__select-actions {
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

      .request-form__footer {
        margin-top: auto;

        button {
          margin-left: auto;
        }
      }
    }
  }
}

</style>
