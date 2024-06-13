import { ref } from "vue";
import { defineStore } from "pinia";
import type { ModuleProps } from "@/@types/views/Dashboard";
import type {GETOrientationContext} from "@/@types/services/request";

export const useCreateProjectStore = defineStore("useCreateProjectStore", () => {
  const userView = ref<any>("teachers");
  const selectedTeacher = ref<any>(null);
  const teachers = ref<{id: number, label: string, area: string}[]>([]);
  const students = ref<GETOrientationContext["students"]>([]);

  const $resetCreateProjectStores = () => {
    userView.value = "teachers";
    teachers.value = [];
    students.value = [];
  };

  const handleShow = (userViewParam: "teachers" | "form") => {
    userView.value = userViewParam;

    if(userViewParam === "teachers") {
      selectedTeacher.value = null;
    }
  };

  return { teachers, students, userView, selectedTeacher, handleShow, $resetCreateProjectStores };
});
