import {
  Baby,
  GraduationCap,
  FlaskConical,
  BookText,
  Cpu,
  Bot,
  HeartHandshake,
  ShieldCheck,
  Award,
  FileCheck,
  CalendarDays,
  Download,
  Check,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const classes = [
  {
    icon: Baby,
    title: 'Early Childhood & Primary Wing',
    range: 'Playgroup – Class VIII',
    description:
      'A joyful, activity-based foundation focused on literacy, numeracy, curiosity, and good habits in a caring, playful environment.',
  },
  {
    icon: GraduationCap,
    title: 'High School & Intermediate Wing',
    range: 'Class IX – XII',
    description:
      'Focused board preparation with experienced faculty, structured practice, and stream specialisation to secure strong results.',
  },
]

const scienceSubjects = ['Physics', 'Chemistry', 'Biology / Mathematics', 'English', 'Hindi']
const humanitiesSubjects = ['History', 'Civics / Political Science', 'Geography', 'English', 'Hindi']

const coreSkills = [
  { icon: Cpu, label: 'Computer Literacy' },
  { icon: Bot, label: 'Robotics' },
  { icon: HeartHandshake, label: 'Moral Science' },
]

const certificates = [
  { icon: ShieldCheck, label: 'UP Board Affiliation' },
  { icon: Award, label: 'NCC Authorization' },
  { icon: Award, label: 'Academic Excellence Awards' },
  { icon: FileCheck, label: 'TC / CC Protocol' },
]

export function Academics() {
  return (
    <section id="academics" className="bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Academics"
          title="A Curriculum That Builds Scholars for Life"
          description="Structured wings, focused streams, and future-ready core skills — all under one trusted, affordable roof."
        />

        {/* Classes */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {classes.map((cls, i) => (
            <Reveal key={cls.title} delay={i * 100}>
              <Card className="h-full border-border transition-shadow hover:shadow-lg">
                <CardHeader>
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-accent">
                    <cls.icon className="size-6" aria-hidden="true" />
                  </span>
                  <CardTitle className="font-heading text-lg text-primary">{cls.title}</CardTitle>
                  <CardDescription className="font-medium text-accent">{cls.range}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{cls.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Subjects */}
        <Reveal className="mt-8">
          <h3 className="mb-4 font-heading text-xl font-bold text-primary">Streams &amp; Subjects</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-border">
              <CardHeader>
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FlaskConical className="size-5" aria-hidden="true" />
                </span>
                <CardTitle className="font-heading text-primary">Science Stream</CardTitle>
                <CardDescription>Class XI – XII</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-2">
                  {scienceSubjects.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="size-4 text-accent" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <BookText className="size-5" aria-hidden="true" />
                </span>
                <CardTitle className="font-heading text-primary">Humanities Stream</CardTitle>
                <CardDescription>Class XI – XII</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-2">
                  {humanitiesSubjects.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="size-4 text-accent" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          {/* Core skills row */}
          <div className="mt-6 rounded-2xl border border-border bg-card p-5">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Core Skills for Every Scholar
            </p>
            <div className="flex flex-wrap gap-3">
              {coreSkills.map((skill) => (
                <span
                  key={skill.label}
                  className="flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-primary"
                >
                  <skill.icon className="size-4 text-accent" aria-hidden="true" />
                  {skill.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Certificates + Calendar */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <Card className="h-full border-border">
              <CardHeader>
                <CardTitle className="font-heading text-primary">Certificates &amp; Credentials</CardTitle>
                <CardDescription>Recognised, authorised, and accountable.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  {certificates.map((cert) => (
                    <div
                      key={cert.label}
                      className="flex items-center gap-3 rounded-xl border border-border bg-secondary/40 p-3"
                    >
                      <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-accent">
                        <cert.icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-medium text-primary">{cert.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <Card className="flex h-full flex-col justify-between border-border bg-primary text-primary-foreground">
              <CardHeader>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
                  <CalendarDays className="size-6" aria-hidden="true" />
                </span>
                <CardTitle className="font-heading text-primary-foreground">Academic Calendar</CardTitle>
                <CardDescription className="text-primary-foreground/70">
                  Plan the year ahead — term dates, holidays, exams, and events.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  size="lg"
                  render={
                    <a
                      href="/academic-calendar.pdf"
                      download="academic-calendar.pdf"
                      aria-label="Download academic calendar PDF"
                    >
                      <Download data-icon="inline-start" />
                      Download Calendar (PDF)
                    </a>
                  }
                />
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
