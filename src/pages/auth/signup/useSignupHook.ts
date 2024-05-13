import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { registerValidationSchema } from '@/lib/validator';
import { zodResolver } from '@hookform/resolvers/zod';
import useRegister from '@/api/auth/useRegister';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store/hook';
import { setInfo, setIsAuthenticate } from '@/store/slices/auth.slice';

const useSignupHook = () => {
  const registerAction = useRegister();
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof registerValidationSchema>>({
    resolver: zodResolver(registerValidationSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });
  const onSubmit = (values: z.infer<typeof registerValidationSchema>) => {
    const payloadData = {
      name: values.name,
      email: values.email,
      password: values.password,
      passwordConfirm: values.passwordConfirm,
    };
    registerAction.mutate(payloadData, {
      async onSuccess(data) {
        localStorage.setItem('token', JSON.stringify(data?.token));
        localStorage.setItem('info', JSON.stringify(data?.data?.user));
        dispatch(setInfo(data?.data?.user));
        dispatch(setIsAuthenticate(true));
        toast({
          title: 'Registration successful',
        });
        navigate('/dashboard');
      },
      onError(error) {
        toast({
          title: 'Registration Fail',
          variant: 'destructive',
          description: error?.response?.data?.message,
        });
      },
    });
  };
  return {
    form,
    isLoading: registerAction.isPending,
    onSubmit,
  };
};

export default useSignupHook;
