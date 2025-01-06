"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { contactFormSchema } from "@/lib/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "@/lib/actions/email";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleFormSubmit = async (
    values: z.infer<typeof contactFormSchema>,
  ) => {
    setIsLoading(true);
    sendEmail(values);
    setIsLoading(false);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="mx-auto flex max-w-screen-md w-full sm:w-auto sm:min-w-96 flex-col gap-6 rounded-lg border py-10 px-5 sm:px-10"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="grid w-full items-center gap-1.5">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="grid w-full items-center gap-1.5">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="grid w-full items-center gap-1.5">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {isLoading && <Loader2 className="animate-spin" />}Send Message
        </Button>
      </form>
    </Form>
  );
}
