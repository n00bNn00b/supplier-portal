import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import { Input } from "@/components/ui/input";
import supabase from "@/dbutils/dbutils";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const form = useForm();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(watch("data: ", data));
    console.log(data.email);
    console.log(data.password);
    const response = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    console.log("responses: ", response);
    localStorage.setItem("sp_auth", response.data?.user?.aud);
    localStorage.setItem(
      "sp_access_token",
      response?.data?.session?.access_token
    );
    if (response.error === null) {
      navigate("/");
    }
    console.log("responsesData: ", response.data);
  };
  return (
    <Card className="w-1/2 mx-auto mt-20 shadow-lg">
      <CardHeader>
        <CardTitle className="text-center">Supplier Portal</CardTitle>
        <CardDescription className="text-center">
          Login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-2/3 space-y-2 mx-auto"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      // type="email"
                      placeholder="Email"
                      {...field}
                      autoComplete="email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email address required!",
                        },
                        pattern: {
                          value: /[a-z0-9]+\.[a-z]{2,3}/,
                          message: "Required Valid Email",
                        },
                      })}
                    />
                  </FormControl>
                  {/* <FormDescription className={cn("text-red-500 ")}>
                    {errors.email?.type === "required" && errors.email.message}
                    {errors.email?.type === "pattern" && errors.email.message}
                  </FormDescription> */}
                  <FormMessage>
                    {errors.email?.type === "required" && errors.email.message}
                    {errors.email?.type === "pattern" && errors.email.message}
                  </FormMessage>
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
                    <Input
                      type="password"
                      placeholder="Password"
                      {...field}
                      autoComplete="current-password"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password Required!",
                        },
                      })}
                    />
                  </FormControl>

                  {/* <FormDescription className={cn("text-red-500")}>
                    Error Message if any
                  </FormDescription> */}

                  <FormMessage>
                    {errors.password?.type === "required" &&
                      errors.password.message}
                    {errors.password?.type === "pattern" &&
                      errors.password.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <Button type="submit" className="flex mx-auto">
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Login;
