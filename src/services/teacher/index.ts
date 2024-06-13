import api from "@/plugins/axios";
import type {AxiosResponse} from "@/@types/services/base";
import type {PUTchangeOrientationAvailablePayload} from "@/@types/services/teacher";

export const changeOrientationAvailableService = async (userId: number, payload: PUTchangeOrientationAvailablePayload): Promise<AxiosResponse<void>> => {
    const response = await api.put<AxiosResponse<void>>(`/teacher/orientation-available/${userId}`, payload);
    return response.data;
};

export const changeEvaluationAvailableService = async (userId: number, payload: PUTchangeOrientationAvailablePayload): Promise<AxiosResponse<void>> => {
    const response = await api.put<AxiosResponse<void>>(`/teacher/evaluation-available/${userId}`, payload);
    return response.data;
};


