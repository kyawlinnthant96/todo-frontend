export const taskKey = {
  getAllTask: (limit: number, userId: string, page: number) => ['Task', 'GetAllTasks', limit, userId, page] as const,
};
