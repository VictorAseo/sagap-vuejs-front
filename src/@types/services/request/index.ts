export type GETRequest = {
    id: number,
    projectName: string,
    description: string,
    requestType: string,
    students: {
        id: number,
        name: string,
        enrollment: number
    }[]
}[]

export type PUTChangeStatusRequestPayload = {
    status: number;
}

export type GETOrientationContext = {
    students:   {
        id: number,
        label: string
    }[],
    teachers:  {
        id: number,
        label: string
    }[]
}

export type GETEvaluationContext = {
    teachers:  {
        id: number,
        label: string
    }[]
}

export type POSTCreateRequestPayload = {
    projectId: number,
    creatorId: number,
    usersId: number[]
}
