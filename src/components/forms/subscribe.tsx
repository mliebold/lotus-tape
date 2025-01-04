"use client";

import { subscribeFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { subscribeEmail } from "@/lib/actions/subscribe-service";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ActionResponse } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

export default function SubscribeForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof subscribeFormSchema>>({
    resolver: zodResolver(subscribeFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleFormSubmission = async (
    values: z.infer<typeof subscribeFormSchema>,
  ) => {
    const result: ActionResponse = await subscribeEmail(values);
    console.log(result.status);
    if (result.status === 201) {
      form.reset();
      toast({
        title: "Succesfully subscribed!",
        description: result.message,
        duration: 10000,
      });
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: result.message,
        duration: 10000,
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmission)}
        className="flex flex-col justify-center gap-2 sm:flex-row"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl className="sm:min-w-96 lg:min-w-72">
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Subscribe</Button>
      </form>
    </Form>
  );
}
