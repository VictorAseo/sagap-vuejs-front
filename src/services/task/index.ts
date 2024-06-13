import api from "@/plugins/axios";
import type {AxiosResponse} from "@/@types/services/base";
import type {GETVerifyIfHasProject} from "@/@types/services/project";
import type {
    GETTask,
    POSTAddAttachmentPayload,
    POSTComment,
    POSTCommentPayload,
    POSTCreateTask
} from "@/@types/services/task";

export const getTaskService = async (taskId: number): Promise<AxiosResponse<GETTask>> => {
    const response = await api.get<AxiosResponse<GETTask>>(`/task/${taskId}`);
    return response.data;
};

export const sendCommentService = async (taskId: number, payload: POSTCommentPayload): Promise<AxiosResponse<POSTComment>> => {
    const response = await api.post<AxiosResponse<POSTComment>>(`/task/${taskId}/comment`, payload);
    return response.data;
};

export const addAttachmentService = async (taskId: number, payload: POSTAddAttachmentPayload): Promise<AxiosResponse<void>> => {
    const response = await api.post<AxiosResponse<void>>(`/task/${taskId}/attachment`, payload);
    return response.data;
};

export const completeTaskService = async (taskId: number): Promise<AxiosResponse<void>> => {
    const response = await api.put<AxiosResponse<void>>(`/task/${taskId}/complete`, {});
    return response.data;
};

export const createTaskService = async (projectId: number, userId: number, payload: POSTCreateTask): Promise<AxiosResponse<void>> => {
    const response = await api.post<AxiosResponse<void>>(`/task/${projectId}/${userId}`, payload);
    return response.data;
};



