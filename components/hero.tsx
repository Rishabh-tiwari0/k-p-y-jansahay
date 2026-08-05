import { MessageCircle, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { school } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      {/* Subtle pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-accent) 1.5px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <Reveal className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
            <Sparkles className="size-3.5" aria-hidden="true" />
            {school.tagline}
          </span>
          <h1 className="text-balance font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Trusted By Families Since 1999. Affordable Excellence for Every
            Child.
          </h1>
          <p className="max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
            Welcome to {school.name}. We combine future-ready learning like
            Robotics and Smart Classes with deep moral values to ensure
            financial constraints never limit your child&apos;s grand future.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 bg-accent px-6 text-base text-accent-foreground hover:bg-accent/90"
              render={
                <a href="#admission">
                  <MapPin data-icon="inline-start" />
                  Visit School
                </a>
              }
            />
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-primary-foreground/40 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              render={
                <a
                  href={school.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle data-icon="inline-start" />
                  WhatsApp Us
                </a>
              }
            />
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div
            className="absolute -inset-3 rounded-3xl bg-accent/20 blur-xl"
            aria-hidden="true"
          />
          <div className="relative aspect-4/3 w-full rounded-3xl overflow-hidden border border-primary-foreground/10 shadow-2xl">
            <Image
              src="/images/hero-students.webp"
              alt="Smiling students of K.P.Y. Jansahyogi Inter College in a bright classroom"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
