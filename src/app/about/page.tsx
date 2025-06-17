import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-4xl font-headline text-primary text-center">About Julitola Intl School, Lokoja.</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/img/Julitola-Schools1.jpeg" 
              alt="Diverse group of students collaborating" 
              layout="fill" 
              objectFit="cover"
              data-ai-hint="students collaborating" 
            />
          </div>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Julitola Intl School, Lokoja. is a premier international secondary school dedicated to fostering academic excellence,
            personal growth, and global citizenship. Founded on the principles of innovation and inclusivity,
            we strive to provide a dynamic learning environment where students are empowered to reach their full potential.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Our curriculum is designed to be both challenging and engaging, integrating traditional academic disciplines
            with modern pedagogical approaches. We emphasize critical thinking, creativity, and collaboration, preparing
            our students to thrive in an ever-changing world. With a diverse student body and a team of experienced educators,
            Julitola Intl School, Lokoja. offers a rich multicultural experience that broadens perspectives and encourages understanding.
          </p>
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div>
              <h3 className="text-2xl font-headline text-accent mb-3">Our Philosophy</h3>
              <p className="text-foreground/70 leading-relaxed">
                We believe in nurturing not just the academic abilities of our students, but also their character and well-being. 
                Our holistic approach to education ensures that students develop into well-rounded individuals, equipped with the skills, 
                knowledge, and values necessary for a successful and fulfilling life.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-headline text-accent mb-3">Our Community</h3>
              <p className="text-foreground/70 leading-relaxed">
                Julitola Intl School, Lokoja. is more than just a school; it's a vibrant community of learners, educators, and families. 
                We foster strong partnerships between home and school, recognizing that collaboration is key to student success. 
                Through various extracurricular activities, clubs, and community service initiatives, we encourage students to explore their passions and make a positive impact.
              </p>
            </div>
          </div>
          
        </CardContent>
      </Card>
    </div>
  );
}
