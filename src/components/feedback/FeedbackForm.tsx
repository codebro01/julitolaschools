"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { summarizeStudentFeedback } from "@/ai/flows/summarize-student-feedback";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Wand2 } from "lucide-react";

const feedbackFormSchema = z.object({
  feedbackText: z.string().min(10, {
    message: "Feedback must be at least 10 characters.",
  }).max(2000, {
    message: "Feedback must not be longer than 2000 characters.",
  }),
});

type FeedbackFormValues = z.infer<typeof feedbackFormSchema>;

export default function FeedbackForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [originalFeedback, setOriginalFeedback] useState<string | null>(null);
  const [summarizedFeedback, setSummarizedFeedback] = useState<string | null>(null);

  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      feedbackText: "",
    },
    mode: "onChange",
  });

  async function onSubmit(data: FeedbackFormValues) {
    setIsLoading(true);
    setOriginalFeedback(null);
    setSummarizedFeedback(null);

    try {
      const result = await summarizeStudentFeedback({ feedback: data.feedbackText });
      setOriginalFeedback(data.feedbackText);
      setSummarizedFeedback(result.summary);
      toast({
        title: "Feedback Submitted & Summarized!",
        description: "Thank you for your feedback. We've processed it.",
        variant: "default",
      });
      form.reset(); 
    } catch (error) {
      console.error("Error summarizing feedback:", error);
      toast({
        title: "Error",
        description: "Could not submit or summarize feedback. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="feedbackText"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Your Feedback</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us what you think..."
                    className="min-h-[150px] resize-y"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting & Summarizing...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Submit Feedback
              </>
            )}
          </Button>
        </form>
      </Form>

      {originalFeedback && summarizedFeedback && (
        <div className="mt-8 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-headline text-primary">Original Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 whitespace-pre-wrap">{originalFeedback}</p>
            </CardContent>
          </Card>
          <Card className="border-accent">
            <CardHeader>
              <CardTitle className="text-xl font-headline text-accent flex items-center">
                <Wand2 className="mr-2 h-5 w-5" /> AI Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 font-medium whitespace-pre-wrap">{summarizedFeedback}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
