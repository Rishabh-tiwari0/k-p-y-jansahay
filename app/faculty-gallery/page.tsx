import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const facultyMembers = [
  { name: "Abhishek Singh", image: "/images/faculty/Abhishek Singh.png" },
  { name: "Akash Kushwaha", image: "/images/faculty/Akash Kushwaha.png" },
  { name: "Alok Tiwari", image: "/images/faculty/Alok Tiwari.png" },
  { name: "Aman Sachan", image: "/images/faculty/Aman Sachan.png" },
  { name: "Amita Mishra", image: "/images/faculty/Amita Mishra.png" },
  { name: "Anamika Prajapati", image: "/images/faculty/Anamika Prajapati.png" },
  { name: "Anita", image: "/images/faculty/Anita.png" },
  { name: "Anjana Mishra", image: "/images/faculty/Anjana Mishra.png" },
  { name: "Awantika", image: "/images/faculty/Awantika.png" },
  { name: "Dr Rajeev Mishra", image: "/images/faculty/Dr Rajeev Mishra.png" },
  { name: "GS Sharma", image: "/images/faculty/GS Sharma.png" },
  { name: "Hasnain", image: "/images/faculty/Hasnain.png" },
  { name: "JN Yaday", image: "/images/faculty/JN Yaday.png" },
  {
    name: "Jagdish Rajpoot, CTO-NCC",
    image: "/images/faculty/Jagdish Rajpoot, CTO-NCC.png",
  },
  { name: "Jyoti Pandey", image: "/images/faculty/Jyoti Pandey.png" },
  { name: "KP Singh", image: "/images/faculty/KP Singh.png" },
  { name: "Layer 0", image: "/images/faculty/Layer 0.jpg" },
  { name: "Madhu Rajpoot", image: "/images/faculty/Madhu Rajpoot.png" },
  { name: "Mahima Gupta", image: "/images/faculty/Mahima Gupta.png" },
  { name: "Mayank Shukla", image: "/images/faculty/Mayank Shukla.png" },
  { name: "Poonam Mishra", image: "/images/faculty/Poonam Mishra.png" },
  { name: "Poonam Srivastav", image: "/images/faculty/Poonam Srivastav.png" },
  { name: "Ram Avtar Verma", image: "/images/faculty/Ram Avtar Verma.png" },
  { name: "RinkiPal", image: "/images/faculty/RinkiPal.png" },
  { name: "Ruchi Tripathi", image: "/images/faculty/Ruchi Tripathi.png" },
  { name: "SP Savita", image: "/images/faculty/SP Savita.png" },
  { name: "Shane Gomes", image: "/images/faculty/Shane Gomes.png" },
  { name: "Sidhant Tiwari", image: "/images/faculty/Sidhant Tiwari.png" },
  { name: "Sujata Banerjee", image: "/images/faculty/Sujata Banerjee.png" },
  { name: "Sujata Verma", image: "/images/faculty/Sujata Verma.png" },
  { name: "Sunil Pandey", image: "/images/faculty/Sunil Pandey.png" },
  { name: "Vaishnavi Tiwari", image: "/images/faculty/Vaishnavi Tiwari.png" },
  { name: "Vinay Tiwari", image: "/images/faculty/Vinay Tiwari.png" },
  { name: "ajit Yadav", image: "/images/faculty/ajit Yadav.png" },
  { name: "munni", image: "/images/faculty/munni.png" },
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {facultyMembers.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-heading text-lg font-semibold text-primary">
                    {member.name}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
