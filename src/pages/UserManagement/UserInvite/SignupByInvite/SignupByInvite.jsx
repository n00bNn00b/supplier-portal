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
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const SignupByInvite = () => {
  const [user, setUser] = useState([]);
  const currentUser = useParams();
  const emailAddress = currentUser.email;
  const form = useForm();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // submit form

  useEffect(() => {
    fetchUserByEmail(emailAddress);
  }, [emailAddress]);
  async function fetchUserByEmail(email) {
    const { data, error } = await supabase
      .from("user_persons_view")
      .select("*")
      .eq("email", email)
      .single();
    console.log("user data: ", data);
    setUser(data);

    if (error) {
      console.error("Error fetching user:", error);
      return null;
    }

    return data;
  }
  console.log("user: ", user);
  const onSubmit = async (data) => {
    console.log("form data: ", data);
    try {
      if (user?.user_id === null) {
        console.log("User Doesn't exist!");
      }
      const response = await supabase.auth.updateUser({
        email: user?.email,
        password: data.password,
        options: {
          data: {
            first_name: user?.first_name,
            middle_name: user?.middle_name,
            last_name: user?.last_name,
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="w-[50%] shadow-2xl mx-auto my-5">
      <CardHeader>
        <CardTitle className="text-center">Signup</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              disabled
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={user?.first_name}
                      {...field}
                      autoComplete="First Name"
                      {...register("firstName")}
                    />
                  </FormControl>
                  <FormDescription>Error Message if Any</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled
              control={form.control}
              name="middleName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Middle Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={user?.middle_name}
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
              disabled
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={user?.last_name}
                      {...field}
                      autoComplete="Last name"
                      {...register("lastName")}
                    />
                  </FormControl>
                  <FormDescription>Error Message if Any</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              className="font-bold"
              disabled
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={emailAddress}
                      {...field}
                      autoComplete="Email"
                      {...register(emailAddress)}
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
            <Button type="submit" className="flex mx-auto">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SignupByInvite;
