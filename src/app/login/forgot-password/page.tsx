import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { KeyRound } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-10rem)]">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <KeyRound className="h-12 w-12 mx-auto text-primary mb-4" />
          <CardTitle className="text-3xl font-headline text-primary">Forgot Password</CardTitle>
          <CardDescription className="text-foreground/70 mt-1">
            Enter your email to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your.email@example.com" />
          </div>
          <Button className="w-full mt-4" disabled>Send Reset Link (Coming Soon)</Button>
           <p className="text-sm text-center text-muted-foreground pt-2">
            Password reset functionality is under development.
          </p>
          <div className="text-center text-sm">
            <Link href="/login/student" legacyBehavior>
              <a className="text-primary hover:underline">Back to Login</a>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
