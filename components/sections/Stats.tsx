import { company } from "@/content/company";
import { CountUp } from "@/components/motion/CountUp";
import { AnimatedRule, Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function Stats({ invert = false }: { invert?: boolean }) {
  return (
    <section className={invert ? "bg-ink text-bone" : "bg-bone text-ink"}>
      <div className="container-x section-y">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
          <Reveal className="md:col-span-5">
            <div className={`text-xs uppercase tracking-[0.18em] mb-5 flex items-center gap-3 ${invert ? "text-mute-dark" : "text-mute"}`}>
              <AnimatedRule className={invert ? "bg-gold-soft" : "bg-gold"} delay={0.1} />
              <span>The Numbers</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              Built in-house.<br />
              <span className={`italic font-light ${invert ? "text-mute-dark" : "text-mute"}`}>Delivered on time.</span>
            </h2>
          </Reveal>
          <Stagger className="md:col-span-7 grid grid-cols-2 gap-x-8 gap-y-12 md:gap-y-14">
            {company.stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className={`font-display text-5xl md:text-6xl lg:text-7xl leading-none ${invert ? "text-bone" : "text-ink"}`}>
                  <CountUp value={s.value} />
                </div>
                <div className={`mt-3 text-sm font-medium uppercase tracking-wider ${invert ? "text-bone" : "text-ink"}`}>
                  {s.label}
                </div>
                <div className={`text-sm mt-1 ${invert ? "text-mute-dark" : "text-mute"}`}>
                  {s.sub}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
