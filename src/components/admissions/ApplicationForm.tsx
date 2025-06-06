
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const applicationFormSchema = z.object({
  studentFullName: z.string().min(2, { message: "Student's full name must be at least 2 characters." }),
  studentDateOfBirth: z.date({ required_error: "Student's date of birth is required." }),
  studentGender: z.string({ required_error: "Please select student's gender." }),
  parentFullName: z.string().min(2, { message: "Parent's full name must be at least 2 characters." }),
  parentEmail: z.string().email({ message: "Invalid email address." }),
  parentPhone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  previousSchool: z.string().min(2, { message: "Previous school name is required." }),
  gradeLevel: z.string({ required_error: "Please select desired grade level." }),
  personalStatement: z.string().min(50, { message: "Personal statement must be at least 50 characters." }).max(1000, { message: "Personal statement must not exceed 1000 characters." }),
});

type ApplicationFormValues = z.infer<typeof applicationFormSchema>;

const gradeLevels = ["Grade 9", "Grade 10", "Grade 11", "Grade 12"];
const genders = ["Male", "Female", "Other", "Prefer not to say"];

export default function ApplicationForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      studentFullName: "",
      parentFullName: "",
      parentEmail: "",
      parentPhone: "",
      previousSchool: "",
      personalStatement: "",
    },
    mode: "onChange",
  });

  async function onSubmit(data: ApplicationFormValues) {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Application Data:", data);

    toast({
      title: "Application Submitted!",
      description: "Thank you for applying. We will review your application and get back to you soon.",
      variant: "default",
    });
    form.reset();
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <h3 className="text-xl font-headline text-accent border-b pb-2 mb-6">Student Information</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="studentFullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student's Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Jane Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="studentDateOfBirth"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Student's Date of Birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="studentGender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student's Gender</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {genders.map((gender) => (
                    <SelectItem key={gender} value={gender}>{gender}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <h3 className="text-xl font-headline text-accent border-b pb-2 mb-6 pt-4">Parent/Guardian Information</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="parentFullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parent/Guardian's Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., John Smith" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="parentEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parent/Guardian's Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="e.g., parent@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="parentPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parent/Guardian's Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="e.g., (123) 456-7890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <h3 className="text-xl font-headline text-accent border-b pb-2 mb-6 pt-4">Academic Information</h3>
        <FormField
          control={form.control}
          name="previousSchool"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Previous School Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Springfield Elementary" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gradeLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Desired Grade Level of Entry</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {gradeLevels.map((level) => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <h3 className="text-xl font-headline text-accent border-b pb-2 mb-6 pt-4">Personal Statement</h3>
        <FormField
          control={form.control}
          name="personalStatement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Personal Statement</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about the student's aspirations, interests, and why they want to join SchoolHub Connect (min. 50 characters)."
                  className="min-h-[150px] resize-y"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Help us understand the student better.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading} className="w-full mt-8">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting Application...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Submit Application
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
