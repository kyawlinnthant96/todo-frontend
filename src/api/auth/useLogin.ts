import { useMutation } from '@tanstack/react-query';
import { LoginPayloadProps, LoginResponseProps } from '@/types/auth';
import { AxiosError } from 'axios';
import { apiClient } from '@/api/apiClient.ts';


const useLogin = () => {
  return useMutation<LoginResponseProps,AxiosError<any>, LoginPayloadProps>({
    mutationFn: async (payload: LoginPayloadProps) => {
      return await apiClient.post("/users/login",payload).then(res => res.data);
    }
  })
};

export default useLogin;


