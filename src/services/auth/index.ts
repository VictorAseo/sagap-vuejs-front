import api from "@/plugins/axios";
import type { POSTLoginPayload, POSTRegisterPayload, UserInfos} from "@/@types/services/auth";
import type {AxiosResponse} from "@/@types/services/base";

export const loginService = async (payload: POSTLoginPayload): Promise<AxiosResponse<UserInfos>> => {
    const response = await api.post<AxiosResponse<UserInfos>>("/auth/login", payload);
    return response.data;
};

export const registerService = async (payload: {
    password: string;
    typeUser: number | null;
    name: string;
    email: string;
    enrollment: string
}): Promise<AxiosResponse<void>> => {
    const response = await api.post<AxiosResponse<void>>("/user", payload);
    return response.data;
};