"use client";

import {
  School,
  Eye,
  Target,
  MessageSquareQuote,
  UserRound,
  Users2,
  Check,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const tabs = [
  { value: "about", label: "About School", icon: School },
  { value: "vision", label: "Founder Vision", icon: Eye },
  { value: "mission", label: "Institute Mission", icon: Target },
  { value: "director", label: "Director Message", icon: MessageSquareQuote },
  { value: "principal", label: "Principal Message", icon: UserRound },
  { value: "faculty", label: "Our Faculty", icon: Users2 },
];

const missionPoints = [
  "To provide affordable, high-quality education that never compromises on standards for any family.",
  "To blend future-ready skills — Robotics, Computer Literacy, and Smart Classes — with a strong academic core.",
  "To instill discipline, moral values, and sanskar through daily prayers and guided meditation.",
  "To nurture confident, well-rounded scholars through sports, NCC, and holistic personality development.",
];

export function AboutTabs() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24"
    >
      <SectionHeading
        eyebrow="About Us"
        title="Our Story, Vision & the People Behind It"
        description="A legacy of trust built since 1999 — get to know the school, its founders, and the educators shaping young lives."
      />

      <Reveal className="mt-12">
        <Tabs defaultValue="about" className="gap-6">
          <TabsList
            variant="line"
            className="flex h-auto w-full flex-wrap justify-start gap-2 border-b border-border pb-0 mb-15 sm:mb-7 lg:mb-0"
          >
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex-none gap-1.5 rounded-full border border-border bg-card px-4 py-2 data-active:border-accent data-active:bg-accent/10 data-active:text-primary"
              >
                <tab.icon data-icon="inline-start" className="size-4" />
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <Card className="border-border">
            <CardContent className="p-6 sm:p-8">
              <TabsContent
                value="about"
                className="flex flex-col gap-4 leading-relaxed text-muted-foreground"
              >
                <h3 className="font-heading text-xl font-bold text-primary">
                  About School
                </h3>
                <p>
                  K.P.Y. Jansahyogi Inter College has been bridging quality and
                  affordability since 1999. As a UP Board-affiliated institution
                  serving Playgroup to Class XII, we have grown into a trusted
                  name for families across Hanspuram, Naubasta, and greater
                  Kanpur Nagar.
                </p>
                <p>
                  Our campus combines smart classrooms, robotics, science and
                  computer labs, a well-stocked library, and safe transport with
                  a culture of discipline and values. Generations of scholars
                  have walked out of our gates ready to build brighter, more
                  confident futures.
                </p>
              </TabsContent>

              <TabsContent
                value="vision"
                className="flex flex-col gap-4 leading-relaxed text-muted-foreground"
              >
                <h3 className="font-heading text-xl font-bold text-primary">
                  Founder Vision
                </h3>
                <p>
                  Our founders dreamed of a school where a child&apos;s
                  potential — not a family&apos;s income — decides their future.
                  The vision was simple yet powerful: eliminate financial
                  barriers to excellent education.
                </p>
                <p>
                  That belief still guides every decision we make, from our
                  affordable fee structure and scholarship programs to our
                  investment in modern, future-ready learning for every scholar
                  who walks through our doors.
                </p>
              </TabsContent>

              <TabsContent
                value="mission"
                className="flex flex-col gap-5 leading-relaxed text-muted-foreground"
              >
                <h3 className="font-heading text-xl font-bold text-primary">
                  Institute Mission
                </h3>
                <ul className="flex flex-col gap-3">
                  {missionPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <Check className="size-4" aria-hidden="true" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent
                value="director"
                className="flex flex-col gap-6 leading-relaxed text-muted-foreground"
              >
                <h3 className="font-heading text-xl font-bold text-primary">
                  Director Message
                </h3>
                <figure className="rounded-2xl border-l-4 border-accent bg-secondary/50 p-5">
                  <blockquote className="italic">
                    &ldquo;Education is the greatest equalizer in society. At
                    K.P.Y. Jansahyogi, we do not view education as a commercial
                    venture. For over 25 years, our absolute commitment has been
                    to provide middle-class and lower-middle-class families with
                    the exact same premium infrastructure—smart tools, robotics,
                    expert faculty—that expensive schools offer, but at a
                    fraction of the cost.&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 font-heading font-bold text-primary">
                    — Mr. Sandeep Mishra (Adv.), Director
                  </figcaption>
                </figure>
                <figure className="rounded-2xl border-l-4 border-maroon bg-secondary/50 p-5">
                  <blockquote className="italic">
                    &ldquo;A child’s mind requires a balance of logic and peace.
                    By starting our mornings with guided meditation alongside
                    prayers, and introducing advanced logic through robotics
                    early on, we shape well-rounded individuals. We welcome your
                    child to a safe, nurturing, and ambitious campus.&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 font-heading font-bold text-primary">
                    — Mrs. Amita Mishra (Adv.), Director
                  </figcaption>
                </figure>
              </TabsContent>

              <TabsContent
                value="principal"
                className="flex flex-col gap-4 leading-relaxed text-muted-foreground"
              >
                <h3 className="font-heading text-xl font-bold text-primary">
                  Principal Message
                </h3>
                <p>
                  Dear Parents and Students, Welcome to K.P.Y. Jansahyogi Inter
                  College. As the Principal, I take immense pride in our
                  disciplined environment. We believe that brilliant board
                  results are a natural byproduct of consistent efforts, great
                  teaching, and a focused mind. Our faculty works tirelessly,
                  providing extra attention to students who need a bit of a
                  push, ensuring no child feels left behind. We don't just teach
                  for exams; we prepare our students for life.
                </p>
                <p>
                  With dedicated teachers, smart learning, daily prayers, and
                  guided meditation, we shape scholars who excel in examinations
                  and in life. We warmly invite you to become part of our
                  growing family.
                </p>
              </TabsContent>

              <TabsContent
                value="faculty"
                className="flex flex-col gap-4 leading-relaxed text-muted-foreground"
              >
                <h3 className="font-heading text-xl font-bold text-primary">
                  Our Faculty
                </h3>
                <p>
                  Our strength lies in our 50+ expert and dedicated educators.
                  Each teacher brings experience, subject mastery, and a genuine
                  commitment to every child&apos;s progress.
                </p>
                <p>
                  Through personal attention, continuous mentoring, and modern
                  teaching methods, our faculty consistently guide students to
                  strong board results while nurturing discipline, curiosity,
                  and confidence.
                </p>
                <div className="mt-4">
                  <a
                    href="/faculty-gallery"
                    className="inline-flex items-center gap-2 font-semibold text-accent hover:underline"
                  >
                    View Faculty Gallery →
                  </a>
                </div>
              </TabsContent>
            </CardContent>
          </Card>
        </Tabs>
      </Reveal>
    </section>
  );
}
