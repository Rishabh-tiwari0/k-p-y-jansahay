import { GraduationCap, Users, Sparkles, Wallet } from 'lucide-react'

const chips = [
  { icon: Users, label: 'Experienced Faculty' },
  { icon: Sparkles, label: 'Smart Learning' },
  { icon: Wallet, label: 'Affordable Fee Structure & Scholarships for Every Scholar' },
]

export function AdmissionsBanner() {
  return (
    <section className="bg-accent text-accent-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:justify-between">
        <p className="flex items-center gap-2 text-center font-heading text-sm font-bold sm:text-base lg:text-left">
          <GraduationCap className="size-5 shrink-0" aria-hidden="true" />
          Admissions Open — Playgroup to Class XI (Science &amp; Humanities)
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-2">
          {chips.map((chip) => (
            <li
              key={chip.label}
              className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
            >
              <chip.icon className="size-3.5 shrink-0" aria-hidden="true" />
              {chip.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
