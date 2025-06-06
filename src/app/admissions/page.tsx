import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, UserPlus } from "lucide-react";
import Link from "next/link";

export default function AdmissionsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="shadow-xl">
        <CardHeader className="text-center">
          <UserPlus className="h-16 w-16 mx-auto text-primary mb-4" />
          <CardTitle className="text-4xl font-headline text-primary">Admissions</CardTitle>
          <CardDescription className="text-lg text-foreground/70 mt-2">
            Join our vibrant learning community. Discover the steps to become a SchoolHub Connect student.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h3 className="text-2xl font-headline text-accent mb-3">Admission Process</h3>
            <ol className="list-decimal list-inside space-y-2 text-foreground/80">
              <li>Complete the Online Application Form.</li>
              <li>Submit required documents (report cards, identification).</li>
              <li>Attend an entrance assessment (if applicable).</li>
              <li>Participate in an interview with our admissions team.</li>
              <li>Receive admission decision.</li>
            </ol>
          </div>
          <div>
            <h3 className="text-2xl font-headline text-accent mb-3">Required Documents</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Student's Birth Certificate / Passport</li>
              <li>Guardian's Identification</li>
              <li>Previous School Transcripts / Report Cards (last 2 years)</li>
              <li>Passport-sized Photographs (2)</li>
              <li>Immunization Records</li>
            </ul>
          </div>
           <div>
            <h3 className="text-2xl font-headline text-accent mb-3">Important Dates</h3>
            <p className="text-foreground/80">
              Application Deadline for Fall Semester: <span className="font-semibold">July 15th</span>
              <br />
              Entrance Assessments: <span className="font-semibold">Last week of July</span>
              <br />
              Admission Decisions Released: <span className="font-semibold">Mid-August</span>
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center pt-8">
          <p className="text-foreground/70 mb-4">
            Ready to start your journey with us?
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
            <Link href="/admissions/apply">
              <FileText className="mr-2 h-5 w-5" /> Apply Online Now
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            For any queries, please contact our admissions office at <a href="mailto:admissions@schoolhub.edu" className="text-primary hover:underline">admissions@schoolhub.edu</a>.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
