export type GETVerifyIfHasProject = number;

export type GETTasks = {
    tasks: {
        id: number;
        title: string;
        completed: boolean;
    }[]
}
export type GETOrientationProjects = {
    projects: [
        {
            name: string,
            students: string[],
            leaders: number,
            id: number
        }
    ]
}

export type GETEvaluationProjects = GETOrientationProjects;

export type CreateProjectPayload = {
    creatorId: number,
    name: string,
    description: string,
    leaderId: number,
    group: number[]
}

export type GETProjectInfos = {
    id: number,
    name: string,
    description: string,
    status: number,
    students: {
        id: number,
        name: string,
        enrollment: number,
    }[],
    teacherAdvisor:  {
        id: number,
        name: string,
        enrollment: number,
    }[],
    teacherEvaluators: any[]
}
