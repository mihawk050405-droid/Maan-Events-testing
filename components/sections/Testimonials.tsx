import { testimonials } from "@/content/testimonials";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function Testimonials() {
  return (
    <section className="bg-bone">
      <div className="container-x section-y">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.18em] text-mute mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-mute" />
            <span>In Their Words</span>
          </div>
        </Reveal>
        <Stagger className="grid md:grid-cols-2 gap-10 md:gap-16">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <figure className="border-t border-ink pt-10">
                <blockquote className="font-display text-2xl md:text-3xl leading-snug text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 text-sm">
                  <div className="font-medium text-ink">{t.name}</div>
                  <div className="text-mute">{t.title} · {t.org}</div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.2}>
          <p className="mt-12 text-xs text-mute italic">
            More client testimonials will be published shortly. To request references for a
            specific engagement, please reach us directly.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
