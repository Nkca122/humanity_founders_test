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

import Image from "next/image";

function MagicLinkForm() {
  const MagicLinkFormSchema = z.object({
    email: z.string().email({
      message: "Enter a valid email address",
    }),
  });

  const form = useForm<z.infer<typeof MagicLinkFormSchema>>({
    resolver: zodResolver(MagicLinkFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof MagicLinkFormSchema>) {
    console.log(values);
  }

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
                <FormItem>
                  <div className="flex flex-col gap-1 justify-center items-start">
                    <FormLabel>Magic Link Login</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        {...field}
                        className="rounded-[7px] w-full"
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="text-xs leading-0" />
                </FormItem>
              );
            }}
          />
          <Button
            type="submit"
            className="bg-gradient-to-r from-[#305AFFCC] to-[#B5D2FF] w-full rounded-[7px]"
          >
            Send Magic Link
          </Button>
        </form>
      </Form>
    </>
  );
}

function LoginForm() {
  const LoginFormSchema = z.object({
    email: z.string().email({
      message: "Enter a valid email address",
    }),
    password: z.string().nonempty({
      message: "Required",
    }),
    remember: z.boolean(),
  });

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    console.log(values);
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
                          type={visible ? "itext" : "password"}
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
                    <FormMessage className="text-xs leading-0" />
                  </FormItem>
                </>
              );
            }}
          />
          <div className="flex w-full justify-between items-center">
            <FormField
              control={form.control}
              name="remember"
              render={({ field }) => {
                return (
                  <>
                    <FormItem>
                      <div className="flex gap-2 justify-center items-center">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-xs text-muted-foreground">
                          Remember Me
                        </FormLabel>
                      </div>
                    </FormItem>
                  </>
                );
              }}
            />

            <a href="#" className="text-blue-700 text-xs">
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            className="bg-gradient-to-r from-[#305AFFCC] to-[#B5D2FF] w-full rounded-[7px]"
          >
            Login
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

export default function Login() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 w-[695px]">
        <h2 className="text-xl font-bold text-muted-foreground">
          Login to ReferralHub
        </h2>
        <div className="bg-background rounded-2xl py-10 px-25 flex flex-col justify-center items-center gap-4 w-full">
          <Button
            variant={"outline"}
            className="shadow-none text-blue-500 border-blue-500 hover:text-blue-700 w-full rouned-[7px]"
          >
            Continue with Google/Microsoft
          </Button>
          <MagicLinkForm />
          <FormSeperator />
          <LoginForm />
          <FormSeperator />
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <div className="flex w-full justify-center items-center gap-2">
              <Badge
                variant={"secondary"}
                className="w-11 aspect-square rounded-full relative "
              >
                <Image src="/logos/google.png" height={28} width={28} alt="" />
              </Badge>
              <Badge
                variant={"secondary"}
                className="p-2 w-11 aspect-square rounded-full relative"
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
                className="p-2 w-11 aspect-square rounded-full relative"
              >
                <Image src="/logos/twitter.png" height={28} width={28} alt="" />
              </Badge>
              <Badge
                variant={"secondary"}
                className="p-2 w-11 aspect-square rounded-full relative"
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
                Don't have an account?{" "}
                <span className="inline-block">
                  <a href="#" className="text-blue-700">
                    Register Now
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
