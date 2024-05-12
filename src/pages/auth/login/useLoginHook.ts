import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { loginValidationSchema } from '@/lib/validator.ts';
import { zodResolver } from '@hookform/resolvers/zod';




const useLoginHook = () => {


  const form = useForm<z.infer<typeof loginValidationSchema>>(
    {
      resolver: zodResolver(loginValidationSchema),
      defaultValues: {
        email: "",
        password: ""
      }
    }
  )

  const onSubmit = (values: z.infer<typeof loginValidationSchema>) => {
    console.log(values);
  }

  return {
    form,
    onSubmit
  }
};

export default useLoginHook;
