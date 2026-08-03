import { MapPin, Phone, MessageCircle, Mail, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { school } from '@/lib/site-data'

const details = [
  { icon: MapPin, label: 'Address', value: school.address, href: undefined },
  { icon: Phone, label: 'Phone', value: school.phoneDisplay, href: `tel:${school.phone}` },
  { icon: MessageCircle, label: 'WhatsApp', value: school.whatsappDisplay, href: school.whatsapp },
  { icon: Mail, label: 'Email', value: school.email, href: `mailto:${school.email}` },
  { icon: Clock, label: 'Visiting Hours', value: school.timing, href: undefined },
]

export function Contact() {
  const mapQuery = encodeURIComponent(`${school.name}, ${school.address}`)

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Contact Us"
        title="We'd Love to Welcome You"
        description="Reach out or visit our campus in Hanspuram, Naubasta. Our doors are always open to families."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <Card className="h-full border-border">
            <CardContent className="flex flex-col gap-5 p-6 sm:p-8">
              {details.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-accent">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-medium text-primary hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-medium text-primary">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full min-h-80 overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title={`Map showing ${school.name} location`}
              src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
              className="size-full min-h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
