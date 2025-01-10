"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { contactFormSchema } from "@/lib/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { ActionResponse } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import Link from "next/link";
import { sendEmail } from "@/lib/actions/email-service";

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleFormSubmission = async (
    values: z.infer<typeof contactFormSchema>,
  ) => {
    const result: ActionResponse = await sendEmail(values);
    if (result.status === 200) {
      form.reset();
      setFormSubmitted(true);
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: result.message,
        duration: 10000,
      });
    }
  };

  if (!formSubmitted)
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmission)}
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
            Send Message
          </Button>
        </form>
      </Form>
    );

  return (
    <div className="flex flex-col gap-5 items-center lg:items-start">
      <h3 className="text-2xl">Thank you for reaching out!</h3>
      <p className="text-muted-foreground">
        Your form submission has been received and we'll get back to you as soon
        as possible.
      </p>
      <div>
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
      </div>
    </div>
  );
}
