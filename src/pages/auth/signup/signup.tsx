import useSignupHook from '@/pages/auth/signup/useSignupHook.ts';
import SignupImg from '@/assets/signup.png';
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
import { Button } from '@/components/ui/button.tsx';

const Signup = () => {
  const { form, onSubmit, isLoading } = useSignupHook();
  return (
    <div className="grid grid-cols-5 grid-flow-col w-full min-h-screen">
      {/*  left */}
      <div className="col-span-2 bg-primary/50 flex justify-center items-center">
        <img src={SignupImg} alt="login-img" className="w-[500px] h-[500px] object-contain" />
      </div>
      {/*  right */}
      <div className="col-span-3 flex justify-center items-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex shadow-lg space-y-2 bg-white/80 rounded-md flex-col max-w-lg w-[500px] h-fit p-8"
          >
            <h1 className="text-center mb-4 text-primary tracking-tight font-semibold text-3xl">Signup</h1>

            {/*  name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="name" {...field} />
                  </FormControl>
                  <FormDescription>Enter your username</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type={'password'} placeholder="password" {...field} />
                  </FormControl>
                  <FormDescription>Enter your password</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*  Password */}
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type={'password'} placeholder="example@gmail.com" {...field} />
                  </FormControl>
                  <FormDescription>Enter your confirm password</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button isLoading={isLoading} type="submit" variant="default" size="lg">
              Register
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
