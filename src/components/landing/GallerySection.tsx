import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const galleryImages = [
  // { src: "/img/Game-at-JTIS.jpeg", alt: "Students Playing Games", hint: "Students Playing Games" },
  { src: "/img/Julitola-schools-lab.jpeg", alt: "Students in lab", hint: "Students in the school lab" },
  { src: "/img/Julitola-Schools1.jpeg", alt: "Students in CBT", hint: "Students in the school ICT" },
  { src: "/img/Julitola-Arts.jpg", alt: "Students doing Art", hint: "Students Performing art" },
  { src: "/img/art-and-dance-at-julitola-schools.jpg", alt: "Students doing art and dance", hint: "Students Performing art and dance" },
 
];

export default function GallerySection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12 text-primary">
          Campus Life in Pictures
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  lg:grid-rows-2 gap-6">

        <Card className="overflow-hidden shadow-lg  hover:shadow-xl lg:row-span-2 transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-video relative">
                  <Image
                    src={"/img/Game-at-JTIS.jpeg"}
                    alt={"Students Playing Games"}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </CardContent>
        </Card>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:row-span-2 lg:grid-cols-2 gap-3">
        {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-video relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                    data-ai-hint={image.hint}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
      
        </div>
      </div>
    </section>
  );
}
