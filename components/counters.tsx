'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 5000, suffix: '+', label: 'Students Mentored' },
  { value: 50, suffix: '+', label: 'Expert & Dedicated Teachers' },
  { value: 25, suffix: '+', label: 'Years of Educational Legacy' },
  { value: 100, suffix: '%', label: 'Board Examination Results' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const duration = 1800
            const start = performance.now()
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(Math.round(eased * value))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className="font-heading text-4xl font-extrabold text-accent sm:text-5xl">
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

export function Counters() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, var(--color-accent) 1.5px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:py-16">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="text-sm font-medium text-primary-foreground/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
