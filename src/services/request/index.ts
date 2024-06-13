import type {AxiosResponse} from "@/@types/services/base";
import api from "@/plugins/axios";
import type {
    GETEvaluationContext,
    GETOrientationContext,
    GETRequest, POSTCreateRequestPayload,
    PUTChangeStatusRequestPayload
} from "@/@types/services/request";

export const getRequestService = async (userId: number): Promise<AxiosResponse<GETRequest>> => {
    const response = await api.get<AxiosResponse<GETRequest>>(`/request/pendding-list/${userId}`);
    return response.data;
};

export const changeStatusRequest = async (requestId: number, payload: PUTChangeStatusRequestPayload): Promise<AxiosResponse<void>> => {
    const response = await api.put<AxiosResponse<void>>(`/request/${requestId}/status`, payload);
    return response.data;
};

export const getOrientationContextService = async (userId: number): Promise<AxiosResponse<GETOrientationContext>> => {
    const response = await api.get<AxiosResponse<GETOrientationContext>>(`/request/orientation/context/${userId}`);
    return response.data;
};

export const getEvaluationContextService = async (userId: number): Promise<AxiosResponse<GETEvaluationContext>> => {
    const response = await api.get<AxiosResponse<GETEvaluationContext>>(`/request/evaluation/context/${userId}`);
    return response.data;
};

export const createRequestService = async (payload: POSTCreateRequestPayload): Promise<AxiosResponse<void>> => {
    const response = await api.post<AxiosResponse<void>>(`/request`, payload);
    return response.data;
};

