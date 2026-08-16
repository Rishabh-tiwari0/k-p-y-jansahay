"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const facultyMembers = [
  { name: "Abhishek Singh", image: "/images/faculty/Abhishek Singh.webp" },
  { name: "Akash Kushwaha", image: "/images/faculty/Akash Kushwaha.webp" },
  { name: "Alok Tiwari", image: "/images/faculty/Alok Tiwari.webp" },
  { name: "Aman Sachan", image: "/images/faculty/Aman Sachan.webp" },
  { name: "Amita Mishra", image: "/images/faculty/Amita Mishra.webp" },
  {
    name: "Anamika Prajapati",
    image: "/images/faculty/Anamika Prajapati.webp",
  },
  { name: "Anita", image: "/images/faculty/Anita.webp" },
  { name: "Anjana Mishra", image: "/images/faculty/Anjana Mishra.webp" },
  { name: "Awantika", image: "/images/faculty/Awantika.webp" },
  { name: "Dr Rajeev Mishra", image: "/images/faculty/Dr Rajeev Mishra.webp" },
  { name: "GS Sharma", image: "/images/faculty/GS Sharma.webp" },
  { name: "Hasnain", image: "/images/faculty/Hasnain.webp" },
  { name: "JN Yaday", image: "/images/faculty/JN Yaday.webp" },
  {
    name: "Jagdish Rajpoot, CTO-NCC",
    image: "/images/faculty/Jagdish Rajpoot, CTO-NCC.webp",
  },
  { name: "Jyoti Pandey", image: "/images/faculty/Jyoti Pandey.webp" },
  { name: "KP Singh", image: "/images/faculty/KP Singh.webp" },
  { name: "Layer 0", image: "/images/faculty/Layer 0.jpg" },
  { name: "Madhu Rajpoot", image: "/images/faculty/Madhu Rajpoot.webp" },
  { name: "Mahima Gupta", image: "/images/faculty/Mahima Gupta.webp" },
  { name: "Mayank Shukla", image: "/images/faculty/Mayank Shukla.webp" },
  { name: "Poonam Mishra", image: "/images/faculty/Poonam Mishra.webp" },
  { name: "Poonam Srivastav", image: "/images/faculty/Poonam Srivastav.webp" },
  { name: "Ram Avtar Verma", image: "/images/faculty/Ram Avtar Verma.webp" },
  { name: "RinkiPal", image: "/images/faculty/RinkiPal.webp" },
  { name: "Ruchi Tripathi", image: "/images/faculty/Ruchi Tripathi.webp" },
  { name: "SP Savita", image: "/images/faculty/SP Savita.webp" },
  { name: "Shane Gomes", image: "/images/faculty/Shane Gomes.webp" },
  { name: "Sidhant Tiwari", image: "/images/faculty/Sidhant Tiwari.webp" },
  { name: "Sujata Banerjee", image: "/images/faculty/Sujata Banerjee.webp" },
  { name: "Sujata Verma", image: "/images/faculty/Sujata Verma.webp" },
  { name: "Sunil Pandey", image: "/images/faculty/Sunil Pandey.webp" },
  { name: "Vaishnavi Tiwari", image: "/images/faculty/Vaishnavi Tiwari.webp" },
  { name: "Vinay Tiwari", image: "/images/faculty/Vinay Tiwari.webp" },
  { name: "ajit Yadav", image: "/images/faculty/ajit Yadav.webp" },
  { name: "munni", image: "/images/faculty/munni.webp" },
];

export default function FacultyGalleryPage() {
  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialTheme =
      storedTheme === "dark" || (!storedTheme && prefersDark)
        ? "dark"
        : "light";
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    document.documentElement.classList.toggle(
      "light",
      initialTheme === "light",
    );
  }, []);

  return (
    <main className="min-h-screen bg-secondary/30">
      {/* Back link: compact on mobile, roomier from sm up */}
      <Link
        href="/"
        className="fixed left-3 top-3 z-50 inline-flex items-center rounded-full border border-border bg-background/95 px-3 py-1.5 text-xs font-semibold text-foreground shadow-lg backdrop-blur transition-all duration-300 ease-out transform-gpu will-change-transform hover:-translate-y-0.5 hover:bg-muted/80 motion-reduce:transition-none motion-reduce:transform-none sm:left-4 sm:top-4 sm:px-4 sm:py-2 sm:text-sm"
      >
        ← Back to Main Website
      </Link>

      {/* Section padding: tight on mobile, expands on larger screens */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
        <SectionHeading
          eyebrow="Faculty Gallery"
          title="Meet Our Dedicated Educators"
          description="A glimpse of the teachers and mentors who shape every learner’s journey with care and commitment."
        />

        <Reveal className="mt-8 sm:mt-12">
          {/* Mobile-first grid: 2 cols on smallest screens, scaling up */}
          <div className="grid grid-cols-2 gap-4 xs:gap-5 sm:grid-cols-3 sm:gap-8 lg:grid-cols-4 xl:grid-cols-5">
            {facultyMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center gap-2 sm:gap-4"
              >
                {/* Photo frame: smaller on mobile, grows with breakpoints */}
                <div className="relative aspect-[3/4] w-full max-w-[140px] overflow-hidden rounded-full border-2 border-border bg-white shadow-md sm:max-w-[200px] sm:border-4 sm:shadow-lg lg:max-w-[224px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 480px) 140px, (max-width: 640px) 160px, (max-width: 1024px) 200px, 224px"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h2 className="font-heading text-sm font-semibold leading-tight text-primary sm:text-base lg:text-lg">
                    {member.name}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
