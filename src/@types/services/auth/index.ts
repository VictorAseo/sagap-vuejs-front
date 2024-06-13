export type UserInfos = {
    token: string,
    id: number,
    name: string,
    userType: number;
    availableEvaluation: boolean;
    availableOrientation: boolean;
}

export type POSTLoginPayload = {
    login: string;
    password: string;
}

export type POSTRegisterPayload = {
    name: string,
    password: string,
    enrollment: string,
    email: string,
    typeUser: number
}