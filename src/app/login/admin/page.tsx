import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-10rem)]">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <ShieldCheck className="h-12 w-12 mx-auto text-primary mb-4" />
          <CardTitle className="text-3xl font-headline text-primary">Admin Login</CardTitle>
          <CardDescription className="text-foreground/70 mt-1">
            Access the control panel.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" placeholder="admin_user" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="********" />
          </div>
          <Button className="w-full mt-4" disabled>Login (Coming Soon)</Button>
           <p className="text-sm text-center text-muted-foreground pt-2">
            Login functionality is under development.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
