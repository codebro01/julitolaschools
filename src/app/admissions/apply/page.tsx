import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

export default function ApplyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="shadow-xl max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <Info className="h-16 w-16 mx-auto text-primary mb-4" />
          <CardTitle className="text-4xl font-headline text-primary">Online Admission Form</CardTitle>
          <CardDescription className="text-lg text-foreground/70 mt-2">
            Our online admission form is currently under development.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-foreground/80">
            We are working hard to bring you a seamless online application experience. 
            Please check back soon or contact our admissions office for alternative ways to apply.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Contact Admissions: <a href="mailto:admissions@schoolhub.edu" className="text-primary hover:underline">admissions@schoolhub.edu</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
