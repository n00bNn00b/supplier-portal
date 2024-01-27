import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import supabaseAdmin from "@/dbutils/dbAdmin";
import supabase from "@/dbutils/dbutils";
import React from "react";
import { useForm } from "react-hook-form";

const UserInvite = () => {
  const form = useForm();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    console.log(formData.email);
    const email = formData.email;
    const { data, error } = await supabaseAdmin.auth.admin.generateLink({
      type: "invite",
      email: email,
      options: {
        redirectTo: `http://localhost:5173/signup/${email}`,
        data: {
          first_name: formData.firstName,
          middle_name: formData.middleName,
          last_name: formData.lastName,
        },
      },
    });

    console.log(data);
    console.log("error: ", error);
  };

  return (
    <Card className="w-96 mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-center">Invite User</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      {...field}
                      autoComplete="First Name"
                      {...register("firstName", {
                        required: {
                          value: true,
                          message: "First Name Required",
                        },
                      })}
                    />
                  </FormControl>
                  <FormDescription>Error Message if Any</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="middleName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Middle Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Middle Name"
                      {...field}
                      autoComplete="Middle Name"
                      {...register("middleName")}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      {...field}
                      autoComplete="Last Name"
                      {...register("lastName", {
                        required: {
                          value: true,
                          message: "Last Name Required",
                        },
                      })}
                    />
                  </FormControl>
                  <FormDescription>Error Message if Any</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      autoComplete="Email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email Required",
                        },
                      })}
                    />
                  </FormControl>
                  <FormDescription>Error Message if Any</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="flex mx-auto" type="submit">
              Invite
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default UserInvite;
