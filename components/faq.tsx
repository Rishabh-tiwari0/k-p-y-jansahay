import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const faqs = [
  {
    question: 'Which classes and mediums do you offer?',
    answer:
      'We offer classes from Playgroup all the way to Class XII, following the UP Board curriculum. Students can choose between Hindi and English medium of instruction based on their comfort and preference.',
  },
  {
    question: 'What streams are offered at the Intermediate level?',
    answer:
      'At the Intermediate level (Class XI–XII) we offer both the Science Stream (Physics, Chemistry, Biology/Mathematics) and the Humanities Stream (History, Civics, Geography), along with core subjects like English and Hindi.',
  },
  {
    question: 'What sports and extracurricular activities are available?',
    answer:
      'Students take part in Archery, physical fitness training, and NCC for leadership and discipline. We also run cultural celebrations, robotics, and a range of activities that build confidence and all-round personality.',
  },
  {
    question: 'Do you provide financial support for middle-class families?',
    answer:
      'Absolutely. Our affordable fee structure is designed for middle and lower-middle-class families, and we offer merit and need-based scholarships so that financial constraints never limit a deserving child\u2019s future.',
  },
]

export function FAQ() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers for Parents"
          description="The questions we hear most from families considering our school."
        />
        <Reveal className="mt-10">
          <Accordion className="rounded-2xl border border-border bg-card px-5">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="font-heading text-base font-semibold text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
