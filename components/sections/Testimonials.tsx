import { testimonials } from "@/content/testimonials";
import { AnimatedRule, Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function Testimonials() {
  return (
    <section className="bg-sand">
      <div className="container-x section-y">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.18em] text-mute mb-5 flex items-center gap-3">
            <AnimatedRule className="bg-gold" delay={0.1} />
            <span>In Their Words</span>
          </div>
        </Reveal>
        <Stagger className="grid md:grid-cols-2 gap-10 md:gap-16">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <figure className="border-t border-gold pt-10">
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
          {/*
            border-color can't render a gradient — it needs border-image,
            which is a different property and REPLACES border-color
            entirely. border-image-slice: 1 is required or the image
            renders nothing at all on a solid 2px rule like this.
            Contrast is non-text/decorative (3:1 floor): gradient-top vs
            sand 4.33:1, gradient-bottom vs sand 8.63:1, both clear easily.
          */}
          <p
            className="mt-12 border-l-2 bg-accent-tint px-5 py-4 text-sm text-ink/75 max-w-2xl"
            style={{
              borderImage: "linear-gradient(180deg, #D60F10 0%, #830204 100%) 1",
            }}
          >
            More client testimonials will be published shortly. To request references for a
            specific engagement, please reach us directly.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
