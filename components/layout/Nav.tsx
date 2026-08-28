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
      {/* The bar always carries its own background. It used to be transparent
          until 8px of scroll, which left near-black nav text sitting on the
          dark hero image — invisible on first paint of every landing. */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          "bg-[linear-gradient(135deg,rgba(252,249,242,0.92)_0%,rgba(247,241,230,0.94)_50%,rgba(237,227,211,0.96)_100%)] backdrop-blur-md",
          scrolled || open
            ? "border-b border-line shadow-[0_4px_30px_-8px_rgba(20,16,12,0.16)]"
            : "border-b border-transparent",
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

          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            <Link href="/about-us/" className="nav-link text-sm font-medium hover:text-accent">
              About
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services/"
                className="nav-link text-sm font-medium hover:text-accent py-2 flex items-center gap-1"
              >
                Services
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="transition-transform opacity-70">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 min-w-[480px] bg-sand border border-line p-6 shadow-[0_24px_60px_-20px_rgba(20,16,12,0.22)] rounded-lg">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={s.url}
                          className="nav-link text-sm text-ink hover:text-accent py-1 font-medium"
                        >
                          {s.shortTitle}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/portfolio/" className="nav-link text-sm font-medium hover:text-accent">
              Portfolio
            </Link>
            <Link href="/contact/" className="nav-link text-sm font-medium hover:text-accent">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              // Obsidian at rest, marigold on hover. The label flips to
              // ink with it — marigold is too light to carry bone text.
              className="inline-flex items-center gap-2 text-sm font-medium text-bone hover:text-ink px-5 py-2.5 bg-[linear-gradient(135deg,#14100C_0%,#2E251C_50%,#14100C_100%)] hover:bg-[linear-gradient(180deg,#F0B968_0%,#C2761A_100%)] transition-all duration-300 shadow-sm rounded-sm"
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
            className="fixed inset-0 top-16 z-40 bg-[linear-gradient(180deg,#FCF9F2_0%,#F7F1E6_50%,#EDE3D3_100%)] md:hidden overflow-y-auto shadow-2xl"
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
