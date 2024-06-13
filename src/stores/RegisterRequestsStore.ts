import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import { type RegisterRequestsFields } from "@/@types/stores/RegisterRequestsStore";


export const useRegisterRequestsStore = defineStore("RegisterRequestsStore", () => {

    const registerRequestsFields: Ref<RegisterRequestsFields> = ref({} as RegisterRequestsFields);

    const $reset = () => {
        registerRequestsFields.value = {} as RegisterRequestsFields;
    };

    return { registerRequestsFields, $reset };
});