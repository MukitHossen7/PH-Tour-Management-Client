/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router";
import googleIcon from "../../../assets/icons/google.png";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Password from "@/components/ui/Password";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import config from "@/config";

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8, {
    error: "password is short!",
  }),
});
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      // console.log(userInfo);
      const result = await login(userInfo).unwrap();
      if (result.success) {
        toast.success("Login Successfully");
        navigate("/");
      }
    } catch (error: any) {
      console.error(error);
      if (error.data.message === "Password is incorrect") {
        toast.error("Invalid credentials");
        return;
      }
      if (error.data.message === "Your account is not Verified") {
        toast.error("Your account is not Verified");
        navigate("/verify", { state: data.email });
      }
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-6", className)}
        {...props}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@gamil.com" type="email" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                This is your public display email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Password {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                This is your public display password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-6">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              Or continue with
            </span>
          </div>
          <Button
            onClick={() =>
              (window.location.href = `${config.base_url}/auth/google`)
            }
            variant="outline"
            type="button"
            className="w-full"
          >
            <img src={googleIcon} alt="Image" className="w-6" />
            Login with Google
          </Button>
        </div>
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="underline underline-offset-4">
            Register
          </Link>
        </div>
      </form>
    </Form>
  );
}
