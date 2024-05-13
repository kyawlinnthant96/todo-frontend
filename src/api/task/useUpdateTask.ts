import { useMutation } from '@tanstack/react-query';
import { CreateTaskPayload, CreateTaskResponseProps } from '@/types/task';
import { AxiosError } from 'axios';
import { apiClient } from '@/api/apiClient.ts';

const useUpdateTask = (id: string) => {
  return useMutation<CreateTaskResponseProps, AxiosError<any>, CreateTaskPayload>({
    mutationFn: async (payload) => {
      return await apiClient.patch(`/tasks/${id}`, payload).then((res) => res.data);
    },
    onSuccess: () => {
      // **TODO: prefetch query key
      return window.location.reload();
    },
  });
};

export default useUpdateTask;
