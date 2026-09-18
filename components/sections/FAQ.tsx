import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { FaqJsonLd, type Faq } from "@/components/seo/JsonLd";

/**
 * Renders the same questions the FAQPage JSON-LD carries, in native
 * <details>/<summary> — the visible content search engines and AI
 * answer engines expect behind that markup, not a JS-only reveal.
 */
export function FAQ({ faqs, heading = "Frequently asked" }: { faqs: Faq[]; heading?: string }) {
  return (
    <section className="bg-bone">
      <FaqJsonLd faqs={faqs} />
      <Container className="section-y">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.18em] text-mute mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-mute" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-12 max-w-3xl">{heading}</h2>
        </Reveal>
        <Stagger className="max-w-4xl">
          {faqs.map((f) => (
            <StaggerItem key={f.question}>
              <details className="group border-t border-line py-6 [&:last-child]:border-b">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none text-lg md:text-xl font-medium leading-snug">
                  {f.question}
                  <span className="shrink-0 mt-1 text-mute transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/80">{f.answer}</p>
              </details>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
