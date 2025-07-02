import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Atom, Palette, BookText } from "lucide-react";

const academicCategories = [
  {
    title: "Science & Technology",
    description: "Our science curriculum fosters inquiry and innovation. Students engage in hands-on experiments in physics, chemistry, and biology, while our technology track covers everything from coding fundamentals to advanced computer science concepts.",
    icon: <Atom className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/600x400.png",
    imageHint: "science laboratory",
  },
  {
    title: "Arts & Design",
    description: "Creativity flourishes in our arts program. We offer courses in visual arts, music, drama, and digital design, encouraging students to express themselves and develop their unique artistic voice in a supportive environment.",
    icon: <Palette className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/600x400.png",
    imageHint: "art studio",
  },
  {
    title: "Humanities & Social Studies",
    description: "Students explore the human experience through literature, history, geography, and civics. Our humanities courses develop critical thinking, empathy, and a nuanced understanding of global cultures and historical contexts.",
    icon: <BookText className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/600x400.png",
    imageHint: "library books",
  },
  {
    title: "Mathematics & Logic",
    description: "We build strong analytical and problem-solving skills through a rigorous mathematics program. From algebra to calculus, our curriculum is designed to challenge students and prepare them for STEM careers and beyond.",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <path d="M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Z"/>
            <path d="M4 12a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2Z"/>
            <path d="M4 19a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2Z"/>
            <path d="M8 4v16"/>
            <path d="m14 4 4 8-4 8"/>
        </svg>
    ),
    image: "https://placehold.co/600x400.png",
    imageHint: "mathematics equation",
  },
];

export default function AcademicsPage() {
  return (
    <div className="container mx-auto px-4 py-16 lg:px-20">
      <Card className=" mb-12 bg-card">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-headline text-primary">Our Academic Programs</CardTitle>
          <CardDescription className="text-lg text-foreground/70 mt-2 max-w-3xl mx-auto">
            At Julitola Intl School, Lokoja, our academic philosophy is centered on providing a holistic, challenging, and engaging education. We empower students to become critical thinkers, lifelong learners, and compassionate global citizens through a curriculum that balances rigor with creativity.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="space-y-16">
        {academicCategories.map((category, index) => (
          <Card key={category.title} className="overflow-hidden  transition-shadow duration-300 hover:shadow-2xl bg-card">
            <div className={`grid md:grid-cols-2 items-center gap-6`}>
              <div className={`relative h-64 md:h-full w-full ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                <Image
                  src={category.image}
                  alt={category.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={category.imageHint}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-full mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-3xl font-headline text-accent">{category.title}</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
