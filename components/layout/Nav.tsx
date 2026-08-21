"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn, whatsappLink } from "@/lib/utils";
import { services } from "@/content/services";

const primaryLinks = [
  { href: "/about-us/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/contact/", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || open
            ? "bg-bone/85 backdrop-blur-md border-b border-line"
            : "bg-transparent",
        )}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-baseline gap-2 group" onClick={() => setOpen(false)} aria-label="Maan Events — home">
            <Image
              src="/logo.png"
              alt="Maan"
              width={175}
              height={100}
              priority
              className="h-7 w-auto md:h-8"
            />
            <span className="font-display text-base md:text-lg tracking-tight text-mute leading-none translate-y-[1px]">
              Events
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/about-us/" className="text-sm hover:text-accent transition-colors">
              About
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services/"
                className="text-sm hover:text-accent transition-colors py-2"
              >
                Services
              </Link>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                  >
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 min-w-[480px] bg-paper border border-line p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)]">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={s.url}
                          className="text-sm text-ink hover:text-accent transition-colors py-1"
                        >
                          {s.shortTitle}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/portfolio/" className="text-sm hover:text-accent transition-colors">
              Portfolio
            </Link>
            <Link href="/contact/" className="text-sm hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-sm border border-ink/15 hover:border-ink px-5 py-2.5 transition-colors"
            >
              Enquire
              <ArrowRight />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden h-10 w-10 -mr-2 flex flex-col items-center justify-center gap-1.5"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span
                className={cn(
                  "block h-px w-6 bg-ink transition-all duration-300",
                  open && "translate-y-[3px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-px w-6 bg-ink transition-all duration-300",
                  open && "-translate-y-[3px] -rotate-45",
                )}
              />
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
            className="fixed inset-0 top-16 z-40 bg-bone lg:hidden overflow-y-auto"
          >
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="container-x py-10 pb-32"
            >
              <ul className="flex flex-col">
                {primaryLinks.map((l) => (
                  <li key={l.href} className="border-b border-line">
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-5 font-display text-3xl tracking-tight hover:text-accent transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <div className="text-xs uppercase tracking-[0.18em] text-mute mb-4">
                  Services
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={s.url}
                        onClick={() => setOpen(false)}
                        className="block py-1 text-base hover:text-accent transition-colors"
                      >
                        {s.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
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
