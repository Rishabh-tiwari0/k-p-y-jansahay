import { Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function PrincipalWelcome() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="absolute -left-4 -top-4 size-24 rounded-2xl border-4 border-accent/40" aria-hidden="true" />
          <div className="absolute -bottom-4 -right-4 size-24 rounded-2xl bg-primary/10" aria-hidden="true" />
          <img
            src="/images/principal.png"
            alt="Principal of K.P.Y. Jansahyogi Inter College"
            className="relative aspect-3/4 w-full rounded-3xl border border-border object-cover shadow-xl"
          />
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-5">
          <Quote className="size-10 text-accent" aria-hidden="true" />
          <h2 className="text-balance font-heading text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
            Welcome to K.P.Y. Jansahyogi Inter College
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Our mission is to deliver quality education balanced with discipline, confidence, and
            personality development. We believe every child deserves the tools to dream big — which
            is why we remain committed to accessible schooling for middle and lower-middle-class
            families.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Here, learning is never limited by financial circumstance. From smart classrooms and
            robotics to daily prayers and guided meditation, we nurture sharp minds and rooted
            values so our scholars grow into responsible, successful citizens.
          </p>
          <div className="mt-2 border-l-4 border-accent pl-4">
            <p className="font-heading font-bold text-primary">The Principal</p>
            <p className="text-sm text-muted-foreground">K.P.Y. Jansahyogi Inter College</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
