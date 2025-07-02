'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Target } from "lucide-react";
import { SlideUp } from "../motion/SlideUp";

export default function VisionMissionSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12 text-primary">
          Our Guiding Principles
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <SlideUp>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <div className="p-3 bg-primary/10 rounded-full">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-headline">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">
                To be a leading international secondary school recognized for academic excellence, fostering global citizenship, and inspiring lifelong learning. We aim to create an inclusive and innovative environment where every student can achieve their full potential.
              </p>
            </CardContent>
          </Card>
          </SlideUp>
          <SlideUp delay={0.4}>    
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <div className="p-3 bg-accent/10 rounded-full">
                 <Target className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-2xl font-headline">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">
                To provide a challenging and supportive learning environment that cultivates critical thinking, creativity, and ethical leadership. We are committed to delivering a comprehensive curriculum that meets international standards and prepares students for success in a dynamic world.
              </p>
            </CardContent>
          </Card>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
