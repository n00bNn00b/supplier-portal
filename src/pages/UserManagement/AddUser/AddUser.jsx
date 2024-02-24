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
import supabase from "@/dbutils/dbutils";
import { cn } from "@/lib/utils";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddUser = () => {
  const form = useForm();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            first_name: data.firstName,
            middle_name: data.middleName,
            last_name: data.lastName,
            user_name: data.username,
            org_id: 100001,
            org_type: "Supplier",
            job_title: data.jobTitle,
            org_id_column_name: "vendor_id",
            org_id_table_name: "po_suppliers_all",
            domain_name: data.domainName,
          },
        },
      });

      console.log("res: ", response);
      console.log("res: ", response.data);
      reset();
      if (response.error === null) {
        toast.success("User Added Successfully!");
      } else {
        toast.error(response.error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="w-[50%] shadow-2xl mx-auto my-5">
      <CardHeader>
        <CardTitle className="text-center">Add User</CardTitle>
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
                      autoComplete="Middle name"
                      {...register("middleName")}
                    />
                  </FormControl>
                  <FormDescription>Error Message if Any</FormDescription>
                  <FormMessage />
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
                      autoComplete="Last name"
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
            {/* username */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Userame"
                      {...field}
                      autoComplete="Username"
                      {...register("username", {
                        required: {
                          value: true,
                          message: "Username Required",
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      {...field}
                      autoComplete="Password"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password Required",
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
              name="jobTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Job Title"
                      {...field}
                      autoComplete="Job Title"
                      {...register("jobTitle", {
                        required: {
                          value: true,
                          message: "Job Title Required",
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
              name="domainName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Domain Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Domain Name"
                      {...field}
                      autoComplete="Domain Name"
                      {...register("domainName", {
                        required: {
                          value: true,
                          message: "Domain Name Required",
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
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddUser;
