import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquarePlus } from "lucide-react";
import FeedbackForm from "@/components/feedback/FeedbackForm";

export default function FeedbackPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader className="text-center">
          <MessageSquarePlus className="h-16 w-16 mx-auto text-primary mb-4" />
          <CardTitle className="text-4xl font-headline text-primary">Submit Your Feedback</CardTitle>
          <CardDescription className="text-lg text-foreground/70 mt-2">
            We value your input! Share your thoughts to help us improve.
            Our AI will help summarize your feedback for quicker review.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FeedbackForm />
        </CardContent>
      </Card>
    </div>
  );
}
