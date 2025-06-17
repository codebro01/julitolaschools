import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <>
      <section className="relative py-20 px-1 md:px-10 md:py-0
    gap-6 md:gap-0  flex flex-col md:flex-row items-center justify-between w-full h-full bg-gradient-to-tl from-green-800 via-green-200 to-white">
        {/* This is the left content */}
        <div className="relative">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-6 text-primary">
              Welcome to Julitola Intl School, Lokoja.
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
              Where we show students capacities they need to change themselves, others, and our overall organizations.
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
        </div>
        {/* !This is the right i.e the Image Container  */}
        <div className='image-container flex md:flex justify-center items-center w-full rounded-md'>
          <div className='flex md:flex justify-center items-center w-full rounded-md w-[420px] h-[400px] md:h-[600px] lg:w-[500px] relative '>
            <Image
              src={"/img/students-holding-book.png"}
              fill
              alt='Students holding a book'
              className='object-contain rounded-md'
            >

            </Image>
          </div>
        </div>
      </section>
    </>
  );
}
