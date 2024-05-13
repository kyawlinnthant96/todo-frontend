export type GetAllTaskProps = {
  limit: number;
  page: number;
  userId: string;
};

export type Task = {
  _id: string;
  title: string;
  description: string;
  status: string;
  userId: string;
  createdAt: string;
  __v?: number;
};

export enum Status {
  'open',
  'in_progress',
  'done',
}

export type CreateTaskResponseProps = {
  status: string;
  data: {
    task: Task;
  };
};

export type CreateTaskPayload = {
  title: string;
  description: string;
  status: string;
};

export type DeleteTaskPayload = {
  taskId: string;
};
