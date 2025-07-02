'use client'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion} from "framer-motion";
import {FadeInDiv} from '../motion/FadeInDiv';

export default function HeroSection() {

  return (
    <>
      <section className="relative py-10 px-1 md:px-10 md:py-0
    gap-6 md:gap-0  flex flex-col md:flex-row items-center justify-between w-full h-full bg-white">
        {/* This is the left content */}
        <div className="relative">
          <FadeInDiv
       
          className="container mx-auto px-4 text-center">
            <h1
           
            className="text-6xl md:text-5xl lg:text-8xl font-bold font-headline mb-6 text-neutral-700 text-left ">
              Welcome to <span className='text-primary/80'>Julitola Intl School,</span> Lokoja.
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto text-left">
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
          </FadeInDiv>
          {/* <div className="absolute inset-0 -z-10 overflow-hidden">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="School campus background"
              layout="fill"
              objectFit="cover"
              className="opacity-5"
              data-ai-hint="school campus"
            />
          </div> */}
        </div>
        {/* !This is the right i.e the Image Container  */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1], // sweet easing curve
            delay: 0.2,
          }}
        className='image-container flex md:flex justify-center items-center w-full rounded-md'>
          <div className='flex md:flex justify-center items-center w-full rounded-md w-[420px] h-[400px] md:h-[600px] lg:w-[500px] relative '>
            <Image
              src={"/img/students-holding-book.png"}
              fill
              alt='Students holding a book'
              className='object-contain rounded-md'
            >

            </Image>
          </div>
        </motion.div>
      </section>
    </>
  );
}
