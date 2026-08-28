"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Crown,
  GraduationCap,
  BookOpen,
  Baby,
  ShieldCheck,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type FacultyMember = {
  name: string;
  image: string;
  designation?: string;
  experience?: string;
};

type FacultySection = {
  id: string;
  title: string;
  icon: React.ElementType;
  members: FacultyMember[];
};

// Ordered by the college's official hierarchy (Management → Principal →
// Post Graduate Teachers → Trained Graduate Teachers → Primary Teachers →
// NCC & Administrative Staff), matching the seniority order supplied by
// the school. Only staff with a photo on file are listed here.
const facultySections: FacultySection[] = [
  {
    id: "leadership",
    title: "Management & Leadership",
    icon: Crown,
    members: [
      {
        name: "Amita Mishra",
        image: "/images/faculty/Amita Mishra.webp",
        designation: "Manager",
      },
      {
        name: "Dr. Rajiv Mishra",
        image: "/images/faculty/Dr Rajeev Mishra.webp",
        designation: "Principal",
      },
      {
        name: "GS Sharma",
        image: "/images/faculty/GS Sharma.webp",
        designation: "Office In-charge",
      },
    ],
  },
  {
    id: "pgt",
    title: "Post Graduate Teachers (PGT)",
    icon: GraduationCap,
    members: [
      {
        name: "Ram Avtar Verma",
        image: "/images/faculty/Ram Avtar Verma.webp",
        designation: "PGT",
        experience: "25 Years",
      },
      {
        name: "Jai Narayan Yadav",
        image: "/images/faculty/JN Yaday.webp",
        designation: "PGT",
        experience: "34 Years",
      },
      {
        name: "Poonam Srivastava",
        image: "/images/faculty/Poonam Srivastav.webp",
        designation: "PGT",
        experience: "24 Years",
      },
      {
        name: "Alok Tiwari",
        image: "/images/faculty/Alok Tiwari.webp",
        designation: "PGT",
        experience: "24 Years",
      },
      {
        name: "Sunil Pandey",
        image: "/images/faculty/Sunil Pandey.webp",
        designation: "PGT",
        experience: "20 Years",
      },
      {
        name: "Poonam Mishra",
        image: "/images/faculty/Poonam Mishra.webp",
        designation: "PGT",
        experience: "15 Years",
      },
      {
        name: "Ajeet Singh Yadav",
        image: "/images/faculty/ajit Yadav.webp",
        designation: "PGT",
        experience: "11 Years",
      },
      {
        name: "Vinay Tiwari",
        image: "/images/faculty/Vinay Tiwari.webp",
        designation: "PGT",
        experience: "10 Years",
      },
    ],
  },
  {
    id: "tgt",
    title: "Trained Graduate Teachers (TGT)",
    icon: BookOpen,
    members: [
      {
        name: "Ruchi Tripathi",
        image: "/images/faculty/Ruchi Tripathi.webp",
        designation: "TGT",
        experience: "27 Years",
      },
      {
        name: "Anjana Mishra",
        image: "/images/faculty/Anjana Mishra.webp",
        designation: "TGT",
        experience: "13 Years",
      },
      {
        name: "Aman Sachan",
        image: "/images/faculty/Aman Sachan.webp",
        designation: "TGT",
        experience: "11 Years",
      },
      {
        name: "Mayank Shukla",
        image: "/images/faculty/Mayank Shukla.webp",
        designation: "TGT",
        experience: "10 Years",
      },
      {
        name: "Sujata Verma",
        image: "/images/faculty/Sujata Verma.webp",
        designation: "TGT",
        experience: "8 Years",
      },
      {
        name: "Akash Kushwaha",
        image: "/images/faculty/Akash Kushwaha.webp",
        designation: "TGT",
        experience: "5 Years",
      },
      {
        name: "Sidhant Tiwari",
        image: "/images/faculty/Sidhant Tiwari.webp",
        designation: "TGT",
        experience: "1 Year",
      },
      {
        name: "Shane Gomes",
        image: "/images/faculty/Shane Gomes.webp",
        designation: "TGT",
        experience: "1 Year",
      },
    ],
  },
  {
    id: "prt",
    title: "Primary Teachers (PRT)",
    icon: Baby,
    members: [
      {
        name: "SP Savita",
        image: "/images/faculty/SP Savita.webp",
        designation: "PRT",
        experience: "30 Years",
      },
      {
        name: "Sujata Banerjee",
        image: "/images/faculty/Sujata Banerjee.webp",
        designation: "PRT",
        experience: "8 Years",
      },
      {
        name: "Avantika Pal",
        image: "/images/faculty/Awantika.webp",
        designation: "PRT",
        experience: "8 Years",
      },
      {
        name: "Anamika Prajapati",
        image: "/images/faculty/Anamika Prajapati.webp",
        designation: "PRT",
        experience: "5 Years",
      },
      {
        name: "Jyoti Pandey",
        image: "/images/faculty/Jyoti Pandey.webp",
        designation: "PRT",
        experience: "4 Years",
      },
      {
        name: "Madhu Rajpoot",
        image: "/images/faculty/Madhu Rajpoot.webp",
        designation: "PRT",
        experience: "4 Years",
      },
      {
        name: "Vaishnavi Tiwari",
        image: "/images/faculty/Vaishnavi Tiwari.webp",
        designation: "PRT",
        experience: "3 Years",
      },
    ],
  },
  {
    id: "admin",
    title: "NCC & Administrative Staff",
    icon: ShieldCheck,
    members: [
      {
        name: "Jagdish Rajpoot",
        image: "/images/faculty/Jagdish Rajpoot, CTO-NCC.webp",
        designation: "ANO (NCC)",
        experience: "12 Years",
      },
      {
        name: "Mohd Hasnain",
        image: "/images/faculty/Hasnain.webp",
        designation: "System Manager",
        experience: "2 Years",
      },
      {
        name: "Abhishek Singh",
        image: "/images/faculty/Abhishek Singh.webp",
        designation: "Operations In-charge",
        experience: "5 Years",
      },
    ],
  },
  {
    id: "additional",
    title: "Additional Faculty",
    icon: BookOpen,
    members: [
      { name: "Anita", image: "/images/faculty/Anita.webp" },
      { name: "KP Singh", image: "/images/faculty/KP Singh.webp" },
      { name: "Mahima Gupta", image: "/images/faculty/Mahima Gupta.webp" },
      { name: "RinkiPal", image: "/images/faculty/RinkiPal.webp" },
      { name: "Munni", image: "/images/faculty/munni.webp" },
    ],
  },
];

function FacultyCard({ member }: { member: FacultyMember }) {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div className="relative aspect-[3/4] w-full max-w-[140px] overflow-hidden rounded-full border-2 border-border bg-white shadow-md transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl sm:max-w-[180px] sm:border-4 sm:shadow-lg lg:max-w-[200px]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 480px) 140px, (max-width: 640px) 160px, (max-width: 1024px) 180px, 200px"
          className="object-cover object-center"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="font-heading text-sm font-semibold leading-tight text-primary sm:text-base">
          {member.name}
        </h3>
        {(member.designation || member.experience) && (
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {member.designation && (
              <Badge variant="secondary" className="text-[10px] sm:text-xs">
                {member.designation}
              </Badge>
            )}
            {member.experience && (
              <Badge variant="outline" className="text-[10px] sm:text-xs">
                {member.experience}
              </Badge>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

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
        ← Back
      </Link>

      {/* Section padding: tight on mobile, expands on larger screens */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
        <SectionHeading
          eyebrow="Faculty Gallery"
          title="Meet Our Dedicated Educators"
          description="A glimpse of the teachers and mentors who shape every learner’s journey with care and commitment."
        />

        <div className="mt-12 flex flex-col gap-14 sm:mt-16 sm:gap-20">
          {facultySections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={section.id}>
                <Reveal
                  as="div"
                  className="mb-6 flex items-center gap-3 sm:mb-8"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent sm:h-11 sm:w-11">
                    <Icon
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      aria-hidden="true"
                    />
                  </span>
                  <div className="flex items-center gap-3">
                    <h2 className="font-heading text-lg font-bold text-primary sm:text-xl lg:text-2xl">
                      {section.title}
                    </h2>
                    <span
                      className="hidden h-px flex-1 bg-border sm:block"
                      aria-hidden="true"
                    />
                  </div>
                </Reveal>

                <Reveal delay={80}>
                  <div
                    className={cn(
                      "grid grid-cols-2 gap-4 xs:gap-5 sm:grid-cols-3 sm:gap-8 lg:grid-cols-4 xl:grid-cols-5",
                    )}
                  >
                    {section.members.map((member) => (
                      <FacultyCard key={member.name} member={member} />
                    ))}
                  </div>
                </Reveal>

                {index < facultySections.length - 1 && (
                  <div
                    className="mt-14 h-px w-full bg-border/60 sm:mt-20"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
