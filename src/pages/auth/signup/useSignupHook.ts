import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { registerValidationSchema } from '@/lib/validator.ts';
import { zodResolver } from '@hookform/resolvers/zod';


const useSignupHook = () => {
  const form = useForm<z.infer<typeof registerValidationSchema>>({
    resolver: zodResolver(registerValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    }
  })
  const onSubmit = (values: z.infer<typeof registerValidationSchema>) => {
    console.log(values);
  }
  return {
    form,
    onSubmit
  }
};

export default useSignupHook;
