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
  return (
    <main className="min-h-screen bg-secondary/30">
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 inline-flex items-center rounded-full border border-border bg-background/95 px-4 py-2 text-sm font-semibold text-primary shadow-lg backdrop-blur transition-all duration-300 ease-out transform-gpu will-change-transform hover:-translate-y-0.5 hover:bg-background motion-reduce:transition-none motion-reduce:transform-none"
      >
        ← Back to Main Website
      </Link>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Faculty Gallery"
          title="Meet Our Dedicated Educators"
          description="A glimpse of the teachers and mentors who shape every learner’s journey with care and commitment."
        />

        <Reveal className="mt-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {facultyMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center gap-4"
              >
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-border bg-card shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h2 className="font-heading text-lg font-semibold text-primary">
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
