import { BookOpen, Users, HeartHandshake, Trophy } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const features = [
  {
    icon: BookOpen,
    title: 'Quality Education',
    description: 'Smart classrooms, robotics, and modern teaching methods that make learning engaging and future-ready.',
  },
  {
    icon: Users,
    title: 'Expert Teachers',
    description: 'Experienced faculty who give personal attention and a proven record of board-exam success.',
  },
  {
    icon: HeartHandshake,
    title: 'Discipline & Sanskar',
    description: 'Daily prayers with guided meditation for focus and strong moral roots in every child.',
  },
  {
    icon: Trophy,
    title: 'Sports & NCC',
    description: 'Archery, physical fitness, and leadership training that build confidence and character.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="A Foundation Built on Care, Discipline & Excellence"
        description="Everything we do is designed to give middle-class families a school they can trust and afford."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <Reveal key={feature.title} delay={i * 100}>
            <Card className="group h-full border-border transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-accent transition-colors group-hover:bg-accent group-hover:text-primary">
                  <feature.icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-lg font-bold text-primary">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
