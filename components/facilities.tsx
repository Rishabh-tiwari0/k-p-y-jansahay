"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Library,
  MonitorSmartphone,
  Sparkles,
  Bus,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

type Facility = {
  icon: typeof Library;
  title: string;
  description: string;
  images?: string[];
};

const facilities: Facility[] = [
  {
    icon: Library,
    title: "Library",
    description:
      "A quiet, well-stocked library with textbooks, references, and story collections that nurture a lifelong love of reading.",
    images: [
      "/images/library/library.webp",
      "/images/library/library2.webp",
      "/images/library/library3.webp",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "Computer Lab",
    description:
      "Modern computers and internet access where students build essential digital literacy and coding foundations.",
    images: [
      "/images/computer lab/computer lab.webp",
      "/images/computer lab/computer lab2.webp",
      "/images/computer lab/computer lab3.webp",
      "/images/computer lab/computer lab4.webp",
      "/images/computer lab/computer lab5.webp",
      "/images/computer lab/computer lab6.webp",
    ],
  },
  {
    icon: Sparkles,
    title: "Robotics",
    description:
      "A future-ready robotics lab where students explore design, coding, logic, and hands-on innovation.",
    images: [
      "/images/Robotics/robotics.webp",
      "/images/Robotics/r 1.webp",
      "/images/Robotics/r 2.webp",
      "/images/Robotics/r3.webp",
      "/images/Robotics/r4.webp",
      "/images/Robotics/r5.webp",
      "/images/Robotics/r6.webp",
      "/images/Robotics/r7.webp",
      "/images/Robotics/r8.webp",
    ],
  },
  {
    icon: Bus,
    title: "Transport",
    description:
      "Safe, reliable school transport covering key routes so every child reaches school and returns home securely.",
    images: ["/images/campus.webp"],
  },
];

function FacilityModal({
  facility,
  onClose,
}: {
  facility: Facility;
  onClose: () => void;
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const hasImages = facility.images && facility.images.length > 0;

  useEffect(() => {
    closeButtonRef.current?.focus();

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goPrev = () => {
    if (!facility.images) return;
    setImageIndex(
      (prev) => (prev - 1 + facility.images!.length) % facility.images!.length,
    );
  };
  const goNext = () => {
    if (!facility.images) return;
    setImageIndex((prev) => (prev + 1) % facility.images!.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="facility-modal-title"
    >
      <div
        className="w-full max-w-md overflow-hidden rounded-2xl bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {hasImages ? (
          <div className="relative aspect-4/3 w-full bg-secondary">
            <Image
              src={facility.images![imageIndex]}
              alt={`${facility.title} photo ${imageIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 448px"
              priority
            />

            {facility.images!.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md active:scale-95"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md active:scale-95"
                >
                  <ChevronRight className="size-5" />
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="flex aspect-4/3 w-full items-center justify-center bg-secondary">
            <facility.icon
              className="size-16 text-primary/40"
              aria-hidden="true"
            />
          </div>
        )}

        <button
          type="button"
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md active:scale-95"
        >
          <X className="size-4" />
        </button>

        <div className="p-5">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
            <facility.icon className="size-6" aria-hidden="true" />
          </span>
          <h3
            id="facility-modal-title"
            className="mt-3 font-heading text-lg font-bold text-primary"
          >
            {facility.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {facility.description}
          </p>

          {hasImages && facility.images!.length > 1 && (
            <div className="mt-4 flex justify-center gap-1.5">
              {facility.images!.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setImageIndex(index)}
                  aria-label={`Go to photo ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    imageIndex === index ? "w-4 bg-primary" : "w-1.5 bg-border"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Facilities() {
  const [activeFacility, setActiveFacility] = useState<Facility | null>(null);
  const [expandedFacility, setExpandedFacility] = useState<string | null>(null);
  const [showGalleryFor, setShowGalleryFor] = useState<string | null>(null);
  const [mobileImageIndex, setMobileImageIndex] = useState<
    Record<string, number>
  >({});

  const toggleMobileFacility = (title: string) => {
    setExpandedFacility((prev) => (prev === title ? null : title));
    setShowGalleryFor((prev) => (prev === title ? null : null));
  };

  const goPrevMobile = (facility: Facility) => {
    if (!facility.images || facility.images.length === 0) return;

    setMobileImageIndex((prev) => ({
      ...prev,
      [facility.title]:
        ((prev[facility.title] ?? 0) - 1 + facility.images!.length) %
        facility.images!.length,
    }));
  };

  const goNextMobile = (facility: Facility) => {
    if (!facility.images || facility.images.length === 0) return;

    setMobileImageIndex((prev) => ({
      ...prev,
      [facility.title]:
        ((prev[facility.title] ?? 0) + 1) % facility.images!.length,
    }));
  };

  return (
    <section
      id="facilities"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24"
    >
      <SectionHeading
        eyebrow="Facilities"
        title="Everything Your Child Needs to Thrive"
        description="Modern infrastructure and safe amenities that support learning inside and beyond the classroom."
      />

      <div className="mt-12 space-y-3 sm:hidden">
        {facilities.map((facility) => {
          const isExpanded = expandedFacility === facility.title;
          const isGalleryVisible = showGalleryFor === facility.title;
          const currentMobileIndex = mobileImageIndex[facility.title] ?? 0;
          const currentMobileImage =
            facility.images && facility.images.length > 0
              ? facility.images[currentMobileIndex]
              : null;

          return (
            <div
              key={facility.title}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <button
                type="button"
                onClick={() => toggleMobileFacility(facility.title)}
                className="flex w-full items-center justify-between gap-3 p-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                    <facility.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-heading text-base font-bold text-primary">
                    {facility.title}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {isExpanded ? "Hide" : "Show"}
                </span>
              </button>

              {isExpanded && (
                <div className="border-t border-border p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {facility.description}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setShowGalleryFor((prev) =>
                        prev === facility.title ? null : facility.title,
                      )
                    }
                    className="mt-4 rounded-full bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
                  >
                    {isGalleryVisible ? "Hide photos" : "View photos"}
                  </button>

                  {isGalleryVisible &&
                    facility.images &&
                    facility.images.length > 0 && (
                      <div className="mt-4 space-y-3">
                        <div className="relative overflow-hidden rounded-xl border border-border bg-secondary">
                          <div className="relative aspect-4/3 w-full">
                            {currentMobileImage && (
                              <Image
                                src={currentMobileImage}
                                alt={`${facility.title} photo ${currentMobileIndex + 1}`}
                                fill
                                className="object-cover"
                                sizes="100vw"
                              />
                            )}
                          </div>

                          {facility.images.length > 1 && (
                            <>
                              <button
                                type="button"
                                onClick={() => goPrevMobile(facility)}
                                className="absolute left-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm"
                                aria-label="Previous photo"
                              >
                                <ChevronLeft className="size-4" />
                              </button>
                              <button
                                type="button"
                                onClick={() => goNextMobile(facility)}
                                className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm"
                                aria-label="Next photo"
                              >
                                <ChevronRight className="size-4" />
                              </button>
                            </>
                          )}
                        </div>

                        {facility.images.length > 1 && (
                          <div className="flex justify-center gap-1.5">
                            {facility.images.map((_, index) => (
                              <button
                                key={`${facility.title}-thumb-${index}`}
                                type="button"
                                onClick={() =>
                                  setMobileImageIndex((prev) => ({
                                    ...prev,
                                    [facility.title]: index,
                                  }))
                                }
                                className={`h-1.5 rounded-full transition-all ${
                                  currentMobileIndex === index
                                    ? "w-4 bg-primary"
                                    : "w-1.5 bg-border"
                                }`}
                                aria-label={`Go to photo ${index + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-12 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
        {facilities.map((facility, i) => (
          <Reveal key={facility.title} delay={i * 100}>
            <Card className="group h-full border-border transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl active:scale-[0.98]">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-accent">
                  <facility.icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-lg font-bold text-primary">
                  {facility.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {facility.description}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveFacility(facility)}
                  className="mt-auto inline-flex w-fit items-center rounded-full bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition hover:opacity-90"
                >
                  View photos
                </button>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      {activeFacility && (
        <FacilityModal
          facility={activeFacility}
          onClose={() => setActiveFacility(null)}
        />
      )}
    </section>
  );
}
