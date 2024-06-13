import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import SignInView from "@/views/SignIn/SignInView.vue";
import SignUpView from "@/views/SignUp/SignUpView.vue";
import LoggedLayout from "@/layouts/LoggedLayout.vue";
import OrientationProjectsView from "@/views/Projects/ProjectsOrientationView.vue";
import TasksView from "@/views/Tasks/TasksView.vue";
import EvaluationRequests from "@/views/EvaluationRequests/EvaluationRequests.vue";
import EvaluationRequestFormView from "@/views/EvaluationResquestForm/EvaluationRequestFormView.vue";
import SettingsView from "@/views/Settings/SettingsView.vue"
import SendTermsView from "@/views/SendTerms/SendTermsView.vue"
import AvailableTeachersView from "@/views/AvailableTeachers/AvailableTeachersView.vue";
import RegisterRequest from "@/views/RegisterRequests/RegisterRequest.vue";
import OrientationRequestForm from "@/views/OrientationRequestForm/OrientationRequestForm.vue";
import EvaluatedProjects from "@/views/EvaluatedProjects/evaluatedProjects.vue"
import GradeView from "@/views/Grade/GradeView.vue"
import TaskForm from "@/views/TaskForm/TaskForm.vue";
import TaskView from "@/views/Task/TaskView.vue";
import HomeView from "@/views/Home/HomeView.vue";
import GradesView from "@/views/Grades/GradesView.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      layout: LoggedLayout,
      authenticate: true,
      allowedUsers: [1]
    }
  },
  {
    path:"/signin",
    name:"signin",
    component: SignInView
  },
  {
    path:"/signup",
    name:"signup",
    component: SignUpView,
    meta: {
      layout: LoggedLayout,
      authenticate: true,
      allowedUsers: [3]
    }
  },
  {
    path: "/projetos",
    name: "projects",
    component: OrientationProjectsView,
    meta: {
      layout: LoggedLayout,
      authenticate: true,
      allowedUsers: [2]
    }
  },
  {
    path: "/projeto/:id/tarefas",
    name: "project-tasks",
    component: TasksView,
    meta: {
      layout: LoggedLayout,
      authenticate: true,
      allowedUsers: [1,2]
    }
  },
  {
    path: "/solicitacoes",
    name: "solicitations",
    component: EvaluationRequests,
    meta: {
      layout: LoggedLayout,
      authenticate: true,
      allowedUsers: [1,2]
    }
  },
  {
    path: "/projeto/:id/formulario-avaliacao",
    name: "evaluation-form",
    component: EvaluationRequestFormView,
    meta: {
      layout: LoggedLayout,
      authenticate: true,
      allowedUsers: [2]
    }
  },
  {
    path: "/criar-solicitacao-orientacao",
    name: "create-orientation-request",
    component: OrientationRequestForm,
    meta: {
      layout: LoggedLayout,
      authenticate: true,
      allowedUsers: [1]
    }
  },
  {
    path: "/projeto/:id/criar-tarefa",
    name: "create-task",
    component: TaskForm,
    meta: {
      layout: LoggedLayout,
      authenticate: true,
      allowedUsers: [2]
    }
  },
  {
    path: "/project/:projectId/tarefa/:taskId",
    name: "task",
    component: TaskView,
    meta: {
      layout: LoggedLayout,
      authenticate: true,
      allowedUsers: [1,2]
    }
  },
  {
    path: "/avaliacao",
    name: "grades",
    component: GradeView,
    meta: {
      layout: LoggedLayout,
      authenticate: true,
      allowedUsers: [2]
    }
  },
  {
    path: "/configuracoes",
    name: "settings",
    component: SettingsView,
    meta: {
      layout: LoggedLayout,
      authenticate: true,
      allowedUsers: [1,2,3]
    }
  },
  {
    path: "/sendterms",
    name: "sendterms",
    component: SendTermsView,
    meta: {
      layout: LoggedLayout,
      authenticate: true,
      allowedUsers: [1,2]
    }
  },
  {
    path: "/notas",
    name: "evaluated-projects",
    component: GradesView,
    meta: {
      layout: LoggedLayout,
      authenticate: true,
      allowedUsers: [1,2]
    }
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
