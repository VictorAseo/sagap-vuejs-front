export type GETTask = {
    id: number,
    title: string,
    description: string,
    deadline: string,
    completed: boolean,
    taskAttachments: {
        id: number,
        projectTaskId: number,
        name: string,
        attachment: string,
        userId: number,
        userName: string,
        userType: number;
        created: string;
    }[],
    taskComments: {
        comment: string;
        created: string;
        id: number;
        taskId: number;
        userId: number;
        userName: string;
        userType: number;
    }[]
}

export type POSTComment = {}

export type POSTCommentPayload = {
    userId: number,
    comment: string
}

export type POSTAddAttachmentPayload = {
    userId: number,
    name: string,
    attachment: string
}

export type POSTCreateTask = {
    title: string,
    description: string,
    deadline: string,
    attachments:  {
        name: string,
        attachment: string
    }[]
}
