import { useMutation } from '@tanstack/react-query';
import { CreateTaskPayload, CreateTaskResponseProps } from '@/types/task';
import { AxiosError } from 'axios';
import { apiClient } from '@/api/apiClient.ts';

const useCreateTask = () => {
  return useMutation<CreateTaskResponseProps, AxiosError<any>, CreateTaskPayload>({
    mutationFn: async (payload) => {
      return await apiClient.post('/tasks', payload).then((res) => res.data);
    },
    onSuccess: async () => {
      return window.location.reload();
      // return await queryClient.invalidateQueries({
      //   queryKey: taskKey.getAllTask(10, data?.data?.task?._id,1),
      //   type: 'active',
      //   exact:true
      // });
    },
  });
};

export default useCreateTask;
