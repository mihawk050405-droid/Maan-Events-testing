import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    // Dark band pulled under the header, like every other page, so the
    // transparent nav has a ground to sit on.
    <section className="bg-deep text-bone -mt-16 md:-mt-20">
      <Container className="pt-36 md:pt-52 pb-24 md:pb-32">
        <div className="text-[10px] uppercase tracking-[0.22em] text-bone/70 mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-bone/60" />
          <span>404</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl">
          This page has<br />
          <span className="italic font-light text-bone/80">been dismantled.</span>
        </h1>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-wider border-b border-bone pb-1"
        >
          Back to home
        </Link>
      </Container>
    </section>
  );
}
