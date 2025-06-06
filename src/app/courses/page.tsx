import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

const coursesData = [
  {
    id: 1,
    title: "Mathematics Grade 9",
    description: "Comprehensive coverage of algebra, geometry, and trigonometry, preparing students for advanced studies.",
    image: "https://placehold.co/600x400.png",
    imageHint: "mathematics textbook",
    category: "Core Subject",
    duration: "1 Year"
  },
  {
    id: 2,
    title: "Physics for Innovators",
    description: "Exploring classical and modern physics with hands-on experiments and real-world applications.",
    image: "https://placehold.co/600x400.png",
    imageHint: "physics experiment",
    category: "Science",
    duration: "1 Year"
  },
  {
    id: 3,
    title: "World Literature & Composition",
    description: "A journey through global literary masterpieces, honing analytical and writing skills.",
    image: "https://placehold.co/600x400.png",
    imageHint: "classic books",
    category: "Humanities",
    duration: "1 Year"
  },
  {
    id: 4,
    title: "Introduction to Programming",
    description: "Learn the fundamentals of coding with Python, developing problem-solving abilities.",
    image: "https://placehold.co/600x400.png",
    imageHint: "coding screen",
    category: "Technology",
    duration: "6 Months"
  },
  {
    id: 5,
    title: "Visual Arts & Design",
    description: "Cultivate creativity through various art forms, from drawing and painting to digital design.",
    image: "https://placehold.co/600x400.png",
    imageHint: "art supplies",
    category: "Arts",
    duration: "1 Year"
  },
  {
    id: 6,
    title: "Global History & Civics",
    description: "Understanding pivotal historical events and the principles of civic engagement.",
    image: "https://placehold.co/600x400.png",
    imageHint: "historical map",
    category: "Social Studies",
    duration: "1 Year"
  },
];

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <BookOpen className="h-16 w-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl font-bold font-headline text-primary">Our Courses</h1>
        <p className="text-lg text-foreground/70 mt-2 max-w-2xl mx-auto">
          Explore a diverse range of subjects designed to inspire curiosity and foster academic growth.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesData.map((course) => (
          <Card key={course.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src={course.image}
                alt={course.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={course.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-headline text-primary">{course.title}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">{course.category} - {course.duration}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-foreground/80 text-sm leading-relaxed">
                {course.description}
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href={`/courses/${course.id}`}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
