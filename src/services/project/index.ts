import api from "@/plugins/axios";
import type {AxiosResponse} from "@/@types/services/base";
import type {
    CreateProjectPayload,
    GETEvaluationProjects,
    GETOrientationProjects, GETProjectInfos,
    GETTasks,
    GETVerifyIfHasProject
} from "@/@types/services/project";

export const verifyIfHasProjectService = async (userId: number): Promise<AxiosResponse<GETVerifyIfHasProject>> => {
    const response = await api.get<AxiosResponse<GETVerifyIfHasProject>>(`/project/${userId}/verify`);
    return response.data;
};

export const getTasksService = async (projectId: number): Promise<AxiosResponse<GETTasks>> => {
    const response = await api.get<AxiosResponse<GETTasks>>(`/project/${projectId}/tasks`);
    return response.data;
};

export const getOrientationProjectsService = async (userId: number): Promise<AxiosResponse<GETOrientationProjects>> => {
    const response = await api.get<AxiosResponse<GETOrientationProjects>>(`/project/${userId}/orientations`);
    return response.data;
};

export const getEvaluationProjectsService = async (userId: number): Promise<AxiosResponse<GETEvaluationProjects>> => {
    const response = await api.get<AxiosResponse<GETEvaluationProjects>>(`/project/${userId}/evaluations`);
    return response.data;
};

export const createProjectService = async (payload: CreateProjectPayload): Promise<AxiosResponse<void>> => {
    const response = await api.post<AxiosResponse<void>>(`/project/`, payload);
    return response.data;
};

export const getProjectInfosService = async (projectId: number): Promise<AxiosResponse<GETProjectInfos>> => {
    const response = await api.get<AxiosResponse<GETProjectInfos>>(`/project/${projectId}`);
    return response.data;
};
