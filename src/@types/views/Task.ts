export type AttachmentProps = {
  attachmentId: number;
  fileName: string;
  fileUrl: string;
  attachmentDate: Date;
};


export type ComentsProps = {
  commentId: number;
  userId: number;
  userName: string;
  taskId: number;
  dateComment: Date;
};

export type TaskProps = {
  taskId: number;
  taskName: string;
  taskDescription: string;
  taskData: Date;
  taskComments: ComentsProps[];
  taskAttachments: AttachmentProps[];
};

export type TaskInfosProps = {
  moduleId: number;
  moduleName: string;
  completedPercentage: number;
  task: TaskProps;
};

export type TaskComponentProps = {
  taskInfos: TaskProps;
};

export type TaskCardProps = {
  title?: string;
};
