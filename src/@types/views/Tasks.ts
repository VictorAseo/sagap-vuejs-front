type TaskProps = {
  taskId: number;
  taskName: string;
  completedPercentage: number;
  isCompleted: boolean;
};

export type ModuleInfosProps = {
  moduleId: number;
  moduleName: string;
  completedPercentage: number;
  tasks: TaskProps[];
};

export type TasksCardProps = {
  tasks: TaskProps[];
};

export type ModuleTaskProps = {
  taskId: number;
  taskName: string;
  isCompleted: boolean;
};
