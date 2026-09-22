import Link from "next/link";
import Image from "next/image";
import { company } from "@/content/company";
import { services } from "@/content/services";

export function Footer() {
  return (
    <footer className="bg-deep text-bone pb-28 md:pb-12 pt-20 md:pt-28">
      <div className="container-x">
        <div className="grid gap-12 lg:gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-baseline gap-2 mb-6" aria-label="Maan Events — home">
              <span className="inline-flex bg-bone px-3 py-2">
                <Image
                  src="/logo.png"
                  alt="Maan"
                  width={175}
                  height={100}
                  className="h-8 w-auto"
                />
              </span>
              <span className="font-display text-lg tracking-tight text-mute-dark">Events</span>
            </Link>
            <p className="text-mute-dark max-w-md leading-relaxed">
              {company.positioning}
            </p>
            <div className="mt-8 grid grid-cols-1 gap-1.5 text-sm">
              <a href={`tel:${company.primaryPhone}`} className="hover:text-bone text-mute-dark">
                {company.primaryPhoneDisplay}
              </a>
              <a href={`mailto:${company.email}`} className="hover:text-bone text-mute-dark">
                {company.email}
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.18em] text-mute-dark mb-5">
              Explore
            </div>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-bone text-mute-dark">Home</Link></li>
              <li><Link href="/about-us/" className="hover:text-bone text-mute-dark">About</Link></li>
              <li><Link href="/services/" className="hover:text-bone text-mute-dark">Services</Link></li>
              <li><Link href="/portfolio/" className="hover:text-bone text-mute-dark">Portfolio</Link></li>
              <li><Link href="/contact/" className="hover:text-bone text-mute-dark">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.18em] text-mute-dark mb-5">
              Services
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={s.url} className="hover:text-bone text-mute-dark">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 border-t border-line-dark pt-10">
          {company.offices.map((o) => (
            <div key={o.label}>
              <div className="text-xs uppercase tracking-[0.18em] text-mute-dark mb-3">
                {o.label}
              </div>
              <address className="not-italic text-sm text-mute-dark leading-relaxed">
                {o.lines.map((l) => (
                  <span key={l} className="block">{l}</span>
                ))}
                <a href={o.maps} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-bone underline underline-offset-4 decoration-line-dark hover:decoration-bone">
                  View on Map
                </a>
              </address>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-4 border-t border-line-dark pt-8 text-xs text-mute-dark">
          <span>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</span>
          <span className="font-display italic tracking-tight text-bone">
            Established {company.founded}.
          </span>
        </div>
      </div>
    </footer>
  );
}
