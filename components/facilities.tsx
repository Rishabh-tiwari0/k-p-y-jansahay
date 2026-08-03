import { Library, MonitorSmartphone, FlaskConical, Bus } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const facilities = [
  {
    icon: Library,
    title: 'Library',
    description:
      'A quiet, well-stocked library with textbooks, references, and story collections that nurture a lifelong love of reading.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Computer Lab',
    description:
      'Modern computers and internet access where students build essential digital literacy and coding foundations.',
  },
  {
    icon: FlaskConical,
    title: 'Science Lab',
    description:
      'Fully equipped physics, chemistry, and biology labs that turn theory into hands-on, memorable experiments.',
  },
  {
    icon: Bus,
    title: 'Transport',
    description:
      'Safe, reliable school transport covering key routes so every child reaches school and returns home securely.',
  },
]

export function Facilities() {
  return (
    <section id="facilities" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Facilities"
        title="Everything Your Child Needs to Thrive"
        description="Modern infrastructure and safe amenities that support learning inside and beyond the classroom."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {facilities.map((facility, i) => (
          <Reveal key={facility.title} delay={i * 100}>
            <Card className="group h-full border-border transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-accent">
                  <facility.icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-lg font-bold text-primary">{facility.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{facility.description}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
