import { useMutation } from '@tanstack/react-query';
import { RegisterPayloadProps, RegisterResponsePros } from '@/types/auth';
import { AxiosError } from 'axios';
import { apiClient } from '@/api/apiClient.ts';

const useRegister = () => {
  return useMutation<RegisterResponsePros, AxiosError<any>, RegisterPayloadProps>({
    mutationFn: async (payload) => {
      return await apiClient.post('/users/signup', payload).then((res) => res.data);
    },
  });
};

export default useRegister;
