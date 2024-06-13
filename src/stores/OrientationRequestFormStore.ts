import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import { type RegisterRequestsFields } from "@/@types/stores/RegisterRequestsStore";
import type {GETOrientationContext} from "@/@types/services/request";


export const useOrientationRequestFormStore = defineStore("useOrientationRequestFormStore", () => {
    const teachers = ref<GETOrientationContext["teachers"]>([]);
    const students = ref<GETOrientationContext["students"]>([]);


    const $reset = () => {
        teachers.value = [];
        students.value = [];
    };

    return { teachers, students, $reset };
});
