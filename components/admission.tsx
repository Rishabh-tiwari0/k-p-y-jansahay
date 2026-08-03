'use client'

import { useState, type FormEvent } from 'react'
import { Wallet, GraduationCap, PhoneCall, School, ClipboardCheck, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
  FieldSet,
  FieldLegend,
} from '@/components/ui/field'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const steps = [
  { icon: PhoneCall, title: 'Inquire', description: 'Call, WhatsApp, or submit the form below to share your interest.' },
  { icon: School, title: 'Visit', description: 'Tour our campus, meet the faculty, and see our facilities first-hand.' },
  { icon: ClipboardCheck, title: 'Register', description: 'Complete the simple registration and secure your child\u2019s seat.' },
]

const classOptions = [
  'Playgroup', 'Nursery', 'LKG', 'UKG',
  'Class I', 'Class II', 'Class III', 'Class IV', 'Class V',
  'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X', 'Class XI',
]

export function Admission() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [selectedClass, setSelectedClass] = useState('')
  const [mediums, setMediums] = useState<{ hindi: boolean; english: boolean }>({
    hindi: false,
    english: false,
  })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const nextErrors: Record<string, string> = {}

    const guardian = String(data.get('guardian') ?? '').trim()
    const mobile = String(data.get('mobile') ?? '').trim()
    const student = String(data.get('student') ?? '').trim()

    if (!guardian) nextErrors.guardian = 'Please enter the parent/guardian full name.'
    if (!/^[0-9]{10}$/.test(mobile)) nextErrors.mobile = 'Enter a valid 10-digit mobile number.'
    if (!student) nextErrors.student = 'Please enter the student name.'
    if (!selectedClass) nextErrors.class = 'Please select a class.'

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      // Placeholder submit handler — no backend wired up.
      console.log('[v0] Admission inquiry submitted:', {
        guardian,
        mobile,
        student,
        applyingFor: selectedClass,
        mediums,
        query: String(data.get('query') ?? ''),
      })
      setSubmitted(true)
      form.reset()
      setSelectedClass('')
      setMediums({ hindi: false, english: false })
    }
  }

  return (
    <section id="admission" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Admissions"
        title="Give Your Child a Premium Future Within Your Budget"
        description="Quality schooling should be a right, not a privilege. Here is how we make it happen for your family."
      />

      {/* Assurance blocks */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal>
          <Card className="h-full border-border bg-secondary/50">
            <CardHeader>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-accent">
                <Wallet className="size-6" aria-hidden="true" />
              </span>
              <CardTitle className="font-heading text-primary">Fee Assurance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A transparent, affordable fee structure designed specifically for middle and
                lower-middle-class families — with no hidden charges and no compromise on quality.
              </p>
            </CardContent>
          </Card>
        </Reveal>
        <Reveal delay={120}>
          <Card className="h-full border-border bg-secondary/50">
            <CardHeader>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-maroon text-maroon-foreground">
                <GraduationCap className="size-6" aria-hidden="true" />
              </span>
              <CardTitle className="font-heading text-primary">Scholarship Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Merit and need-based scholarships for every deserving scholar, ensuring that
                financial constraints never stand between a child and a bright future.
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </div>

      {/* How to apply timeline */}
      <Reveal className="mt-10">
        <h3 className="mb-6 text-center font-heading text-xl font-bold text-primary">How To Apply</h3>
        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center gap-3 text-center">
              {i < steps.length - 1 && (
                <span
                  className="absolute left-1/2 top-7 hidden h-px w-full bg-border sm:block"
                  aria-hidden="true"
                />
              )}
              <span className="relative z-10 flex size-14 items-center justify-center rounded-full bg-primary text-accent ring-4 ring-background">
                <step.icon className="size-6" aria-hidden="true" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wide text-accent">
                Step {i + 1}
              </span>
              <h4 className="font-heading font-bold text-primary">{step.title}</h4>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Inquiry form */}
      <Reveal className="mt-12">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="font-heading text-primary">Admission Inquiry Form</CardTitle>
            <CardDescription>
              Share a few details and our team will reach out to guide you through the process.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-accent/40 bg-accent/10 p-8 text-center">
                <CheckCircle2 className="size-12 text-accent" aria-hidden="true" />
                <h4 className="font-heading text-lg font-bold text-primary">Thank you!</h4>
                <p className="max-w-md text-sm text-muted-foreground">
                  Your admission request has been received. Our team will contact you shortly. For
                  anything urgent, please call or WhatsApp us.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Submit another request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <FieldGroup>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field data-invalid={!!errors.guardian}>
                      <FieldLabel htmlFor="guardian">Parent / Guardian Full Name</FieldLabel>
                      <Input id="guardian" name="guardian" placeholder="e.g. Ramesh Kumar" aria-invalid={!!errors.guardian} />
                      <FieldError>{errors.guardian}</FieldError>
                    </Field>

                    <Field data-invalid={!!errors.mobile}>
                      <FieldLabel htmlFor="mobile">Active Mobile / WhatsApp Number</FieldLabel>
                      <Input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        inputMode="numeric"
                        placeholder="10-digit mobile number"
                        aria-invalid={!!errors.mobile}
                      />
                      <FieldError>{errors.mobile}</FieldError>
                    </Field>

                    <Field data-invalid={!!errors.student}>
                      <FieldLabel htmlFor="student">Student Name</FieldLabel>
                      <Input id="student" name="student" placeholder="Child's full name" aria-invalid={!!errors.student} />
                      <FieldError>{errors.student}</FieldError>
                    </Field>

                    <Field data-invalid={!!errors.class}>
                      <FieldLabel htmlFor="class">Applying for Class</FieldLabel>
                      <Select value={selectedClass} onValueChange={(v) => setSelectedClass(v as string)}>
                        <SelectTrigger id="class" className="w-full" aria-invalid={!!errors.class}>
                          <SelectValue placeholder="Select a class" />
                        </SelectTrigger>
                        <SelectContent>
                          {classOptions.map((c) => (
                            <SelectItem key={c} value={c}>
                              {c}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FieldError>{errors.class}</FieldError>
                    </Field>
                  </div>

                  <FieldSet>
                    <FieldLegend variant="label">Preferred Medium</FieldLegend>
                    <div className="flex flex-wrap gap-6">
                      <Field orientation="horizontal" className="w-fit">
                        <Checkbox
                          id="medium-hindi"
                          checked={mediums.hindi}
                          onCheckedChange={(checked) =>
                            setMediums((m) => ({ ...m, hindi: checked === true }))
                          }
                        />
                        <FieldLabel htmlFor="medium-hindi" className="font-normal">Hindi</FieldLabel>
                      </Field>
                      <Field orientation="horizontal" className="w-fit">
                        <Checkbox
                          id="medium-english"
                          checked={mediums.english}
                          onCheckedChange={(checked) =>
                            setMediums((m) => ({ ...m, english: checked === true }))
                          }
                        />
                        <FieldLabel htmlFor="medium-english" className="font-normal">English</FieldLabel>
                      </Field>
                    </div>
                  </FieldSet>

                  <Field>
                    <FieldLabel htmlFor="query">Any Specific Query</FieldLabel>
                    <Textarea
                      id="query"
                      name="query"
                      rows={4}
                      placeholder="Let us know if you have any questions about fees, transport, streams, etc."
                    />
                  </Field>

                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 w-full bg-maroon text-maroon-foreground hover:bg-maroon/90 sm:w-auto"
                  >
                    Submit Admission Request
                  </Button>
                </FieldGroup>
              </form>
            )}
          </CardContent>
        </Card>
      </Reveal>
    </section>
  )
}
