"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type Category = "activities" | "sports" | "ncc" | "celebrations";

interface GalleryImage {
  src: string;
  alt: string;
}

const gallery: Record<Category, GalleryImage[]> = {
  activities: [
    {
      src: "/images/activities/IMG_4953.JPG",
      alt: "Students participating in a school activity",
    },
    {
      src: "/images/activities/IMG_4955.JPG",
      alt: "Students participating in a school activity",
    },
    {
      src: "/images/activities/IMG_4959.JPG",
      alt: "Students participating in a school activity",
    },
    {
      src: "/images/activities/IMG_4962.JPG",
      alt: "Students participating in a school activity",
    },
    {
      src: "/images/activities/IMG_4962a.jpg",
      alt: "Students participating in a school activity",
    },
    {
      src: "/images/activities/IMG_4973.JPG",
      alt: "Students participating in a school activity",
    },
    {
      src: "/images/activities/IMG_4973a.jpg",
      alt: "Students participating in a school activity",
    },
    {
      src: "/images/activities/IMG_4974a.jpg",
      alt: "Students participating in a school activity",
    },
    {
      src: "/images/activities/gallery-activities-1.png",
      alt: "Students doing a hands-on robotics and science activity",
    },
    {
      src: "/images/activities/gallery-activities-2.png",
      alt: "Students learning in a modern smart classroom",
    },
  ],
  sports: [
    {
      src: "/images/sports/gallery-sports-1.png",
      alt: "Student practicing archery on the sports ground",
    },
    {
      src: "/images/sports/gallery-sports-2.png",
      alt: "Children doing physical fitness drills on the playground",
    },
  ],
  ncc: [
    {
      src: "/images/ncc/IMG_4591.JPG",
      alt: "NCC cadets in a school event",
    },
    {
      src: "/images/ncc/IMG_4591.png",
      alt: "NCC cadets in a school event",
    },
    {
      src: "/images/ncc/IMG_4598.JPG",
      alt: "NCC cadets in a school event",
    },
    {
      src: "/images/ncc/IMG_4598.png",
      alt: "NCC cadets in a school event",
    },
    {
      src: "/images/ncc/IMG_4609.JPG",
      alt: "NCC cadets in a school event",
    },
    {
      src: "/images/ncc/IMG_4609.png",
      alt: "NCC cadets in a school event",
    },
    {
      src: "/images/ncc/IMG_4633.JPG",
      alt: "NCC cadets in a school event",
    },
    {
      src: "/images/ncc/IMG_4633.png",
      alt: "NCC cadets in a school event",
    },
    {
      src: "/images/ncc/IMG_4665.JPG",
      alt: "NCC cadets in a school event",
    },
    {
      src: "/images/ncc/IMG_4665.png",
      alt: "NCC cadets in a school event",
    },
    {
      src: "/images/ncc/IMG_4669.JPG",
      alt: "NCC cadets in a school event",
    },
    {
      src: "/images/ncc/IMG_4669.png",
      alt: "NCC cadets in a school event",
    },
    {
      src: "/images/ncc/IMG_4673.JPG",
      alt: "NCC cadets in a school event",
    },
    {
      src: "/images/ncc/IMG_4682.JPG",
      alt: "NCC cadets in a school event",
    },
    {
      src: "/images/ncc/IMG_5118.JPG",
      alt: "NCC cadets in a school event",
    },
    {
      src: "/images/ncc/IMG_5730.JPG",
      alt: "NCC cadets in a school event",
    },
    {
      src: "/images/ncc/gallery-ncc-1.png",
      alt: "NCC cadets standing in disciplined formation",
    },
    {
      src: "/images/ncc/gallery-ncc-2.png",
      alt: "NCC cadets marching in a parade with the flag",
    },
  ],
  celebrations: [
    {
      src: "/images/celebrations/gallery-celebrations-1.png",
      alt: "Students performing a cultural dance at the annual function",
    },
    {
      src: "/images/celebrations/gallery-celebrations-2.png",
      alt: "Students receiving trophies at an award ceremony",
    },
  ],
};

const tabs: { value: Category; label: string }[] = [
  { value: "activities", label: "Activities" },
  { value: "sports", label: "Sports" },
  { value: "ncc", label: "NCC" },
  { value: "celebrations", label: "Celebrations" },
];

export function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState<
    Record<Category, number>
  >({
    activities: 0,
    sports: 0,
    ncc: 0,
    celebrations: 0,
  });

  const goToPreviousImage = (category: Category) => {
    const images = gallery[category];
    setCurrentImageIndex((prev) => ({
      ...prev,
      [category]: (prev[category] - 1 + images.length) % images.length,
    }));
  };

  const goToNextImage = (category: Category) => {
    const images = gallery[category];
    setCurrentImageIndex((prev) => ({
      ...prev,
      [category]: (prev[category] + 1) % images.length,
    }));
  };

  return (
    <section id="gallery" className="bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Gallery"
          title="Life & Learning at Our Campus"
          description="A glimpse into the moments that make our school special — from robotics to the parade ground."
        />

        <Reveal className="mt-12">
          <Tabs defaultValue="activities" className="gap-8">
            <TabsList className="mx-auto flex h-auto w-fit flex-wrap justify-center gap-1 bg-card p-1.5">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="rounded-lg px-4 py-2 data-active:bg-primary data-active:text-primary-foreground"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabs.map((tab) => {
              const images = gallery[tab.value];
              const currentImage =
                images[currentImageIndex[tab.value]] ?? images[0];

              return (
                <TabsContent key={tab.value} value={tab.value}>
                  <div className="mx-auto flex max-w-4xl flex-col gap-4">
                    <div className="relative overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
                      <div className="relative block aspect-[4/3] w-full overflow-hidden">
                        <img
                          src={currentImage.src || "/placeholder.svg"}
                          alt={currentImage.alt}
                          className="size-full object-cover"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={() => goToPreviousImage(tab.value)}
                        className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur-sm transition hover:bg-background"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="size-5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => goToNextImage(tab.value)}
                        className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur-sm transition hover:bg-background"
                        aria-label="Next image"
                      >
                        <ChevronRight className="size-5" />
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        {images.map((image, index) => (
                          <button
                            key={image.src}
                            type="button"
                            onClick={() =>
                              setCurrentImageIndex((prev) => ({
                                ...prev,
                                [tab.value]: index,
                              }))
                            }
                            className={cn(
                              "h-16 w-24 overflow-hidden rounded-lg border-2 border-transparent bg-muted/50 transition",
                              currentImageIndex[tab.value] === index &&
                                "border-primary",
                            )}
                          >
                            <img
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              className="size-full object-cover"
                            />
                          </button>
                        ))}
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {currentImageIndex[tab.value] + 1}/{images.length}
                      </p>
                    </div>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
