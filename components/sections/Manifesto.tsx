import { Reveal } from "@/components/motion/Reveal";

export function Manifesto() {
  return (
    <section className="bg-bone">
      <div className="container-x section-y">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.18em] text-mute mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-mute" />
            <span>What we believe</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] max-w-5xl">
            An event is built before the lights come on. The structures, the climate, the floor,
            the line of sight, the safety — these are not finishing touches. They are the event.
            We build them in our own yards,
            <span className="italic font-light text-mute"> with our own people, on our own clock.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
