// src/components/ui/ApplyForm.jsx
"use client";

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
} from "@/components/ui/form";
import { Input } from "@/components/ui/Input";
import Button from "./Button";
// Define your form schema using Zod for validation
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  // You can add more fields like a resume upload, cover letter, etc.
});

export function ApplyForm({ onApply }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  function onSubmit(values) {
    // This is where you would handle the form submission
    console.log(values);
    onApply(values); // Call a function to close the dialog or show a success message
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">First Name</FormLabel>
              <FormControl>
                <Input placeholder="John" className="bg-neutral-800 border-neutral-700 text-white" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Doe" className="bg-neutral-800 border-neutral-700 text-white" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" className="bg-neutral-800 border-neutral-700 text-white" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
      </form>
    </Form>
  );
}