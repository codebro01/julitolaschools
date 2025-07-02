'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { SlideUp } from "../motion/SlideUp";

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12 text-primary">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
      
          <SlideUp>
             <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto p-3 bg-accent/10 rounded-full w-fit mb-2">
                 <Phone className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-xl font-headline">Call Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">(234) 90 54504321</p>
            </CardContent>
          </Card> 
          </SlideUp>
          <SlideUp delay={0.3}>
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-2">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-headline">Our Address</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">TPS 62, Block 21 Plot 1 Crusher (Gada-Shagari), Along Okene Road, Lokoja, Kogi State</p>
            </CardContent>
          </Card>
          </SlideUp>
          <SlideUp delay={0.4}>
                <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
               <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-2">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-headline">Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">info@julitolaconnect.edu</p>
            </CardContent>
          </Card>
          </SlideUp>
        
        
      
        </div>
      </div>
    </section>
  );
}
