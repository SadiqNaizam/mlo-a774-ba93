import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const loginFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    setIsLoading(true);
    console.log('Login form submitted:', data);
    setTimeout(() => {
      setIsLoading(false);
      // In a real application, you would handle success/error states,
      // for example, by showing a toast notification.
      alert(`Simulating login for ${data.email}`);
      form.reset();
    }, 1500);
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      disabled={isLoading}
                      {...field}
                      className="border-0 border-b border-input rounded-none px-1 h-10 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-primary bg-transparent text-card-foreground"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      disabled={isLoading}
                      {...field}
                      className="border-0 border-b border-input rounded-none px-1 h-10 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-primary bg-transparent text-card-foreground"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="button"
            variant="link"
            className="p-0 h-auto self-start mt-2 text-sm font-normal text-muted-foreground hover:text-primary"
            disabled={isLoading}
          >
            Forgot Password
          </Button>
          
          <Button type="submit" className="w-full mt-8" disabled={isLoading}>
            {isLoading ? 'Logging In...' : 'Login'}
          </Button>
        </form>
      </Form>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Don't have an account?{' '}
        <Button variant="link" className="p-0 h-auto font-medium text-primary" asChild>
          <a href="#">SignUp</a>
        </Button>
      </p>
    </div>
  );
};

export default LoginForm;
