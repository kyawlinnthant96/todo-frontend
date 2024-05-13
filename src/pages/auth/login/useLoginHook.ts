import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { loginValidationSchema } from '@/lib/validator.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import useLogin from '@/api/auth/useLogin.ts';
import { useToast } from '@/components/ui/use-toast.ts';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store/hook.ts';
import { setInfo, setIsAuthenticate } from '@/store/slices/auth.slice.ts';

const useLoginHook = () => {
  const loginAction = useLogin();
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof loginValidationSchema>>({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof loginValidationSchema>) => {
    const payloadData = {
      email: values.email,
      password: values.password,
    };
    loginAction.mutate(payloadData, {
      onSuccess: (data) => {
        localStorage.setItem('info', JSON.stringify(data?.data?.user));
        localStorage.setItem('token', JSON.stringify(data?.token));
        dispatch(setInfo(data?.data?.user));
        dispatch(setIsAuthenticate(true));
        toast({
          title: 'Login successful',
        });
        navigate('/dashboard');
      },
      onError: (error) => {
        console.log(error);
        toast({
          title: 'Login failed',
          variant: 'destructive',
          description: error?.response?.data?.message,
        });
      },
    });
  };

  return {
    form,
    isLoading: loginAction.isPending,
    onSubmit,
  };
};

export default useLoginHook;
