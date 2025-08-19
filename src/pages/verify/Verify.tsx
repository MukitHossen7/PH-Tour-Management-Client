/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  useSendOTPMutation,
  useVerifyOTPMutation,
} from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { toast } from "sonner";
import z from "zod";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const Verify = () => {
  const location = useLocation();
  const [email] = useState(location.state);
  const [confirm, setConfirm] = useState(false);
  const navigate = useNavigate();
  const [sendOTP] = useSendOTPMutation();
  const [verifyOTP] = useVerifyOTPMutation();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const toastId = toast.loading("Verifying OTP...");
      const userInfo = {
        email: email,
        otp: data.pin,
      };
      const res = await verifyOTP(userInfo).unwrap();
      if (res.success) {
        toast.success("OTP verified successfully", { id: toastId });
        navigate("/login");
      }
    } catch (error) {
      console.error("Failed to verify OTP:", error);
      toast.error("Failed to verify OTP");
    }
  };
  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, [email]);

  const handleConfirm = async () => {
    try {
      const toastId = toast.loading("Sending OTP...");
      const res = await sendOTP({ email: email }).unwrap();
      if (res.success) {
        toast.success("OTP sent successfully", { id: toastId });
        setConfirm(true);
      }
    } catch (error) {
      console.error("Failed to send OTP:", error);
      toast.error("Failed to send OTP");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
      {confirm ? (
        <Card className="w-full max-w-sm p-6 shadow-lg ">
          <CardHeader className="text-center">
            <CardTitle>Verify your email address</CardTitle>
            <CardDescription>
              Please enter the 6-digit code we sent to <br /> {email}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="pin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>One-Time Password</FormLabel>
                      <FormControl>
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                          </InputOTPGroup>
                          <InputOTPGroup>
                            <InputOTPSlot index={1} />
                          </InputOTPGroup>
                          <InputOTPGroup>
                            <InputOTPSlot index={2} />
                          </InputOTPGroup>
                          <InputOTPGroup>
                            <InputOTPSlot index={3} />
                          </InputOTPGroup>
                          <InputOTPGroup>
                            <InputOTPSlot index={4} />
                          </InputOTPGroup>
                          <InputOTPGroup>
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormDescription className="sr-only">
                        Please enter the one-time password sent to your phone.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="w-full" type="submit">
                  Submit
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      ) : (
        <Card className="w-full max-w-sm text-center">
          <CardHeader>
            <CardTitle>Verify Your email address</CardTitle>
            <CardDescription>
              We Will send you an OTP at <br /> {email}
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex-col gap-2">
            <Button type="submit" onClick={handleConfirm} className="w-full">
              Confirm
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default Verify;
