"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function SignUpForm() {
  const router = useRouter();
  
  const SignUpFormSchema = z
    .object({
      email: z.string().email({
        message: "Enter a Valid Email address",
      }),
      password: z.string(),
      confirm: z.string(),
    })
    .refine((data) => data.password === data.confirm, {
      message: "Passwords do not match",
      path: ["password"],
    });

  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm: "",
    },
  });

  function onSubmit(values: z.infer<typeof SignUpFormSchema>) {
    console.log(values);
    // Navigate to /setup after form submission
    router.push("/setup");
  }

  const [visible, setVisible] = useState(false);

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <>
                  <FormItem>
                    <div className="flex flex-col gap-1 justify-center items-start">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="robert.fox@myemail.com"
                          {...field}
                          className="rounded-[7px] w-full"
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="text-xs leading-0" />
                  </FormItem>
                </>
              );
            }}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <>
                  <FormItem>
                    <div className="flex flex-col gap-1 justify-center items-start relative">
                      <FormLabel>Pasword</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Password"
                          {...field}
                          className="rounded-[7px] w-full"
                          type={visible ? "text" : "password"}
                        />
                      </FormControl>
                    </div>
                   
                    <FormMessage className="text-xs leading-0"/>
                  </FormItem>
                </>
              );
            }}
          />

          <FormField
            control={form.control}
            name="confirm"
            render={({ field }) => {
              return (
                <>
                  <FormItem>
                    <div className="flex flex-col gap-1 justify-center items-start relative">
                      <FormLabel>Pasword</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Re-enter Password"
                          {...field}
                          className="rounded-[7px] w-full"
                          type={visible ? "text" : "password"}
                        />
                      </FormControl>
                      <div className="absolute place-self-end h-full flex w-fit items-end">
                        <Button
                          className="rounded-[7px] p-2 hover:bg-transparent hover:cursor-pointer"
                          variant={"ghost"}
                          onClick={() => {
                            setVisible((prev) => !prev);
                          }}
                          type="button"
                        >
                          {!visible ? <Eye /> : <EyeClosed />}
                        </Button>
                      </div>
                    </div>
                  </FormItem>
                </>
              );
            }}
          />

          <Button
            type="submit"
            className="bg-gradient-to-r from-[#305AFFCC] to-[#B5D2FF] w-full rounded-[7px]"
          >
            Register
          </Button>
        </form>
      </Form>
    </>
  );
}

function FormSeperator() {
  return (
    <>
      <div className="flex place-content-center place-items-center w-full relative h-4">
        <p className="absolute bg-background px-4">or</p>
        <Separator />
      </div>
    </>
  );
}

export default function Register() {
  const router = useRouter();
  
  const handleSocialSignup = () => {
    // Navigate to /setup when clicking on social signup buttons
    router.push("/setup");
  };
  
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 w-[695px]">
        <h2 className="text-xl font-bold text-muted-foreground">
          Register to ReferralHub
        </h2>
        <div className="bg-background rounded-2xl py-10 px-25 flex flex-col justify-center items-center gap-4 w-full">
          <Button
            variant={"outline"}
            className="shadow-none text-blue-500 border-blue-500 hover:text-blue-700 w-full rounded-[7px]"
            onClick={handleSocialSignup}
          >
            Continue with Google/Microsoft
          </Button>
          <SignUpForm />
          <FormSeperator />
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <div className="flex w-full justify-center items-center gap-2">
              <Badge
                variant={"secondary"}
                className="w-11 aspect-square rounded-full relative cursor-pointer"
                onClick={handleSocialSignup}
              >
                <Image src="/logos/google.png" height={28} width={28} alt="" />
              </Badge>
              <Badge
                variant={"secondary"}
                className="p-2 w-11 aspect-square rounded-full relative cursor-pointer"
                onClick={handleSocialSignup}
              >
                <Image
                  src="/logos/facebook.png"
                  height={28}
                  width={28}
                  alt=""
                />
              </Badge>
              <Badge
                variant={"secondary"}
                className="p-2 w-11 aspect-square rounded-full relative cursor-pointer"
                onClick={handleSocialSignup}
              >
                <Image src="/logos/twitter.png" height={28} width={28} alt="" />
              </Badge>
              <Badge
                variant={"secondary"}
                className="p-2 w-11 aspect-square rounded-full relative cursor-pointer"
                onClick={handleSocialSignup}
              >
                <Image
                  src="/logos/linkedin.png"
                  height={28}
                  width={28}
                  alt=""
                />
              </Badge>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">
                Already have an account?{" "}
                <span className="inline-block">
                  <a href="/auth/login" className="text-blue-700">
                    Login
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}