
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ApplicationForm from "@/components/admissions/ApplicationForm";
import { FileText } from "lucide-react";

export default function ApplyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="shadow-xl max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <FileText className="h-16 w-16 mx-auto text-primary mb-4" />
          <CardTitle className="text-4xl font-headline text-primary">Online Admission Application</CardTitle>
          <CardDescription className="text-lg text-foreground/70 mt-2">
            Please complete the form below to apply for admission to Julitola Intl School, Lokoja..
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ApplicationForm />
        </CardContent>
      </Card>
    </div>
  );
}
