"use client";

import { useEffect, useState } from "react";
import {
  Clock,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  GraduationCap,
  ChevronDown,
  Moon,
  SunMedium,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { school, navItems } from "@/lib/site-data";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialTheme =
      storedTheme === "dark" || (!storedTheme && prefersDark)
        ? "dark"
        : "light";
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="hidden bg-primary text-primary-foreground/90 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5 text-accent" aria-hidden="true" />
              {school.timing}
            </span>
            <a
              href={`mailto:${school.email}`}
              className="flex items-center gap-1.5 hover:text-accent"
            >
              <Mail className="size-3.5 text-accent" aria-hidden="true" />
              {school.email}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${school.phone}`}
              className="flex items-center gap-1.5 hover:text-accent"
            >
              <Phone className="size-3.5 text-accent" aria-hidden="true" />
              {school.phoneDisplay}
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5 text-accent" aria-hidden="true" />
              {school.address}
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          "border-b border-border/70 bg-background/95 backdrop-blur transition-shadow",
          scrolled && "shadow-md",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <GraduationCap
                className="size-6 text-accent"
                aria-hidden="true"
              />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-heading text-sm font-bold text-primary sm:text-base">
                {school.name}
              </span>
              <span className="text-[11px] font-medium tracking-wide text-accent">
                {school.tagline}
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <li key={item.label} className="group relative">
                <a
                  href={item.href}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className="size-3.5 transition-transform group-hover:rotate-180"
                      aria-hidden="true"
                    />
                  )}
                </a>
                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 min-w-52 translate-y-1 rounded-xl border border-border bg-card p-1.5 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                setTheme((value) => (value === "dark" ? "light" : "dark"))
              }
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition hover:bg-muted/80 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <SunMedium className="size-5" />
              ) : (
                <Moon className="size-5" />
              )}
            </button>
            <Button
              size="lg"
              className="hidden bg-maroon text-maroon-foreground hover:bg-maroon/90 md:inline-flex"
              render={<a href="#admission">Apply Now</a>}
            />
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-primary xl:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-border bg-card xl:hidden">
            <ul className="mx-auto max-w-7xl px-4 py-3">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="border-b border-border/60 last:border-0"
                >
                  <div className="flex items-center justify-between">
                    <a
                      href={item.href}
                      onClick={() => !item.children && setMobileOpen(false)}
                      className="flex-1 py-3 text-sm font-medium text-foreground/90"
                    >
                      {item.label}
                    </a>
                    {item.children && (
                      <button
                        type="button"
                        onClick={() =>
                          setOpenGroup(
                            openGroup === item.label ? null : item.label,
                          )
                        }
                        className="p-3 text-muted-foreground"
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform",
                            openGroup === item.label && "rotate-180",
                          )}
                        />
                      </button>
                    )}
                  </div>
                  {item.children && openGroup === item.label && (
                    <div className="flex flex-col pb-2 pl-3">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:text-primary"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              <li className="pt-3">
                <Button
                  className="w-full bg-maroon text-maroon-foreground hover:bg-maroon/90"
                  size="lg"
                  render={
                    <a href="#admission" onClick={() => setMobileOpen(false)}>
                      Apply Now
                    </a>
                  }
                />
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
