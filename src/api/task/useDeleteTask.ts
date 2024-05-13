import { useMutation } from '@tanstack/react-query';
import { apiClient } from '@/api/apiClient.ts';
import { AxiosError } from 'axios';
import { DeleteTaskPayload } from '@/types/task';

const useDeleteTask = () => {
  return useMutation<any, AxiosError, DeleteTaskPayload>({
    mutationFn: async (payload) => {
      return await apiClient.delete(`/tasks/${payload.taskId}`).then((res) => res.data);
    },
    onSuccess: () => {
      // **TODO: prefetch query key
      return window.location.reload();
    },
  });
};

export default useDeleteTask;
