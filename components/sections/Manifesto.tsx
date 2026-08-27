import { Reveal } from "@/components/motion/Reveal";
import Image from "next/image";

export function Manifesto() {
  return (
    <section className="bg-bone">
      <div className="container-x section-y grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text block */}
        <div>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-mute mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-mute" />
              <span>What we believe</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] max-w-2xl">
              Creating moments
              <br />
              <span className="italic font-light text-mute">
                that move millions
              </span>
            </p>
          </Reveal>
        </div>

        {/* Image block */}
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
            <Image
              src="/portfolio/concerts/zahir-khan/02.webp"  // ✅ fixed: added "s" to "concerts"
              alt="Concert crowd – Zahir Khan"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}