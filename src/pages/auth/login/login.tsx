import { Button } from '@/components/ui/button.tsx';
import LoginImg from '@/assets/login.png';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form.tsx';
import { Input } from '@/components/ui/input.tsx';
import useLoginHook from '@/pages/auth/login/useLoginHook.ts';


const Login = () => {
  const {form,onSubmit} = useLoginHook();

  return (
    <div className="grid grid-cols-5 grid-flow-col w-full min-h-screen">
      {/*  left */}
      <div className="col-span-2 bg-primary/50 flex justify-center items-center">
        <img src={LoginImg} alt="login-img" className="w-[500px] h-[500px] object-contain" />
        <Button />
      </div>
      {/*  right */}
      <div className="col-span-3 flex justify-center items-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex shadow-lg space-y-2 bg-white/80 rounded-md flex-col max-w-lg w-[500px] h-fit p-8">
          <h1 className="text-center mb-4 text-primary tracking-tight font-semibold text-3xl">Login</h1>

          {/*  Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} />
                </FormControl>
                <FormDescription>Enter your password</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/*  Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type={'password'} placeholder="example@gmail.com" {...field} />
                </FormControl>
                <FormDescription>Enter your login email</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
            <Button type="submit" variant="default" size="lg" className={"mt-4"}>Login</Button>
          </form>
        </Form>

      </div>
    </div>
  );
};

export default Login;
