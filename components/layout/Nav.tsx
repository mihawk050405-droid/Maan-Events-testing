"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn, whatsappLink } from "@/lib/utils";
import { infraDisciplines } from "@/content/infrastructure";

const primaryLinks = [
  { href: "/about-us/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/clients/", label: "Clients" },
  { href: "/contact/", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Every page opens on a dark hero that is pulled up under this bar, so at
  // the top it can sit transparent with light type. Once the hero scrolls
  // away (or the drawer opens) it becomes a solid frosted bar.
  const solid = scrolled || open;
  const isActive = (href: string) => pathname === href || pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500",
          solid
            ? "bg-bone/85 backdrop-blur-xl border-b border-line shadow-[0_8px_30px_-12px_rgba(20,16,12,0.25)]"
            : "bg-gradient-to-b from-deep/60 to-transparent border-b border-transparent",
        )}
      >
        <div
          className={cn(
            "container-x flex items-center justify-between transition-[height] duration-500",
            solid ? "h-16" : "h-16 md:h-20",
          )}
        >
          <Link
            href="/"
            className="flex items-center shrink-0"
            onClick={() => setOpen(false)}
            aria-label="Maan — home"
          >
            {/* The logo carries its brand colours on the light bar; over the
                dark hero it is knocked out to white so it stays legible. */}
            <Image
              src="/logo.png"
              alt="Maan"
              width={175}
              height={100}
              priority
              className={cn(
                "w-auto transition-[filter,height] duration-500",
                solid ? "h-9" : "h-9 md:h-11 brightness-0 invert",
              )}
            />
          </Link>

          <nav
            aria-label="Primary"
            className={cn(
              "hidden md:flex items-center gap-7 lg:gap-10 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-500",
              solid ? "text-ink" : "text-bone",
            )}
          >
            {primaryLinks.map((l) =>
              l.href === "/services/" ? (
                <div
                  key={l.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  onFocus={() => setServicesOpen(true)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setServicesOpen(false);
                  }}
                >
                  <Link
                    href={l.href}
                    aria-expanded={servicesOpen}
                    className={cn("nav-link py-2 flex items-center gap-1.5", isActive(l.href) && "is-active")}
                  >
                    {l.label}
                    <svg
                      width="9"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      aria-hidden
                      className={cn("transition-transform duration-300 opacity-70", servicesOpen && "rotate-180")}
                    >
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-4"
                      >
                        <div className="w-[680px] bg-bone text-ink border border-line p-7 shadow-[0_30px_70px_-25px_rgba(20,16,12,0.35)] normal-case tracking-normal">
                          <div className="flex items-baseline justify-between mb-5 pb-4 border-b border-line">
                            <span className="text-[10px] uppercase tracking-[0.22em] text-mute">
                              Infrastructure As A Service
                            </span>
                            <Link
                              href="/services/"
                              className="text-[11px] uppercase tracking-[0.18em] text-ink hover:text-accent-hover"
                            >
                              All services →
                            </Link>
                          </div>
                          <ul className="grid grid-cols-3 gap-x-6 gap-y-1">
                            {infraDisciplines.map((d) => (
                              <li key={d.slug}>
                                <Link
                                  href={d.url}
                                  className="block py-1.5 text-sm font-normal text-ink/80 hover:text-ink hover:translate-x-0.5 transition-all"
                                >
                                  {d.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn("nav-link py-2", isActive(l.href) && "is-active")}
                >
                  {l.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden sm:inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] px-5 py-2.5 border transition-all duration-500",
                solid
                  ? "border-deep bg-deep text-bone hover:bg-accent hover:border-accent hover:text-ink"
                  : "border-bone/50 text-bone hover:bg-bone hover:text-ink",
              )}
            >
              Enquire
              <ArrowRight />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden h-10 w-10 -mr-2 flex flex-col items-center justify-center gap-1.5"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {[0, 1].map((i) => (
                <span
                  key={i}
                  className={cn(
                    "block h-px w-6 transition-all duration-300",
                    solid ? "bg-ink" : "bg-bone",
                    open && (i === 0 ? "translate-y-[3.5px] rotate-45" : "-translate-y-[3.5px] -rotate-45"),
                  )}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to prevent layout jump under fixed nav on pages that need it */}
      <div aria-hidden className="h-16 md:h-20" />

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 z-40 bg-bone md:hidden overflow-y-auto"
          >
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="container-x py-8 pb-32"
            >
              <ul className="flex flex-col">
                {primaryLinks.map((l, i) => (
                  <li key={l.href} className="border-b border-line">
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-baseline gap-4 py-5 font-display text-3xl tracking-tight transition-colors",
                        isActive(l.href) ? "text-accent-hover" : "hover:text-accent-hover",
                      )}
                    >
                      <span className="font-mono text-[10px] text-mute">{String(i + 1).padStart(2, "0")}</span>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <div className="text-[10px] uppercase tracking-[0.22em] text-mute mb-4">
                  Infrastructure As A Service
                </div>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {infraDisciplines.map((d) => (
                    <li key={d.slug}>
                      <Link
                        href={d.url}
                        onClick={() => setOpen(false)}
                        className="block py-1 text-sm hover:text-accent-hover transition-colors"
                      >
                        {d.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 flex items-center justify-between bg-deep text-bone px-6 py-5 text-sm uppercase tracking-[0.14em]"
              >
                Enquire on WhatsApp
                <ArrowRight />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ArrowRight() {
  return (
    <svg width="12" height="9" viewBox="0 0 14 10" fill="none" aria-hidden>
      <path d="M9 1L13 5L9 9M13 5H0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}
