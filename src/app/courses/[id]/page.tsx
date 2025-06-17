import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowLeft, BookOpenCheck, CalendarDays, Clock, Users } from "lucide-react";
import Link from "next/link";

// Mock data for a single course. In a real app, this would come from a database.
const getCourseDetails = async (id: string) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 200)); 
  const sampleCourses = {
    "1": { 
      id: "1", 
      title: "Mathematics Grade 9", 
      description: "Comprehensive coverage of algebra, geometry, and trigonometry, preparing students for advanced studies. This course delves into foundational mathematical concepts, problem-solving strategies, and real-world applications to build a strong base for future STEM fields.",
      longDescription: "Students will explore topics such as linear equations, quadratic functions, geometric proofs, probability, and statistics. The course emphasizes logical reasoning and analytical thinking through a variety of exercises, projects, and collaborative activities. Technology integration includes graphing calculators and mathematical software to enhance understanding and visualization of complex concepts.",
      image: "https://placehold.co/800x400.png",
      imageHint: "mathematics concepts",
      category: "Core Subject",
      duration: "1 Year",
      instructor: "Dr. Emily Carter",
      prerequisites: "Mathematics Grade 8 or equivalent",
      learningOutcomes: [
        "Solve complex algebraic equations and inequalities.",
        "Apply geometric theorems to solve problems.",
        "Understand and calculate probabilities of events.",
        "Analyze data using statistical methods."
      ]
    },
  };
  // @ts-ignore
  return sampleCourses[id] || { id, title: `Course ${id} Not Found`, description: "Details for this course are not available.", image: "https://placehold.co/800x400.png", imageHint: "placeholder image", category: "N/A", duration: "N/A", instructor: "N/A", prerequisites: "N/A", learningOutcomes: [] };
};


export default async function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = await getCourseDetails(params.id);

  if (course.title.includes("Not Found")) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-destructive mb-4">Course Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">Sorry, we couldn't find details for the course you're looking for.</p>
        <Button asChild>
          <Link href="/courses">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="overflow-hidden shadow-xl">
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src={course.image}
            alt={course.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={course.imageHint}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
           <div className="absolute bottom-0 left-0 p-8">
             <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary-foreground shadow-2xl">{course.title}</h1>
             <p className="text-lg text-primary-foreground/90 mt-2">{course.category} - {course.duration}</p>
           </div>
        </div>
        <CardContent className="p-6 md:p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-headline text-accent mb-3">Course Overview</h2>
            <p className="text-foreground/80 leading-relaxed">{course.description}</p>
            {course.longDescription && <p className="text-foreground/80 leading-relaxed mt-4">{course.longDescription}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-4 border-t">
            <div>
              <h3 className="text-xl font-headline text-primary mb-2 flex items-center">
                <Users className="mr-2 h-5 w-5" /> Instructor
              </h3>
              <p className="text-foreground/70">{course.instructor}</p>
            </div>
            <div>
              <h3 className="text-xl font-headline text-primary mb-2 flex items-center">
                <BookOpenCheck className="mr-2 h-5 w-5" /> Prerequisites
              </h3>
              <p className="text-foreground/70">{course.prerequisites}</p>
            </div>
          </div>

          {course.learningOutcomes && course.learningOutcomes.length > 0 && (
            <div>
              <h3 className="text-xl font-headline text-primary mb-3 pt-4 border-t">Learning Outcomes</h3>
              <ul className="list-disc list-inside space-y-1 text-foreground/80">
                {course.learningOutcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="pt-6 text-center">
             <Button asChild size="lg">
              <Link href="/admissions/apply">
                Enroll Now
              </Link>
            </Button>
          </div>

        </CardContent>
        <CardFooter className="bg-muted/50 p-6">
          <Link href="/courses" className="flex items-center text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Courses
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

// This function is needed for Next.js to know which dynamic paths to pre-render if using SSG.
// For this example, we'll assume dynamic rendering or a small set of courses.
// export async function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }, /* ... more course ids */ ];
// }
