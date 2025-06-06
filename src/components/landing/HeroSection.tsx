import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6 text-primary">
          Welcome to SchoolHub Connect
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
          Empowering students, teachers, and administrators with a seamless educational experience. Discover our vision for modern learning.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow">
            <Link href="/admissions">Apply Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-accent/50 transition-shadow">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="School campus background"
          layout="fill"
          objectFit="cover"
          className="opacity-5"
          data-ai-hint="school campus"
        />
      </div>
    </section>
  );
}
