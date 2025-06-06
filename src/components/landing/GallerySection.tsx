import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "Students in classroom", hint: "classroom students" },
  { src: "https://placehold.co/600x400.png", alt: "School building exterior", hint: "school building" },
  { src: "https://placehold.co/600x400.png", alt: "Science lab experiment", hint: "science lab" },
  { src: "https://placehold.co/600x400.png", alt: "Sports day event", hint: "school sports" },
  { src: "https://placehold.co/600x400.png", alt: "Library with students", hint: "school library" },
  { src: "https://placehold.co/600x400.png", alt: "Art class in progress", hint: "art class" },
];

export default function GallerySection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12 text-primary">
          Campus Life in Pictures
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </section>
  );
}
