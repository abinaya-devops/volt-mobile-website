import { Watch, Headphones, Battery, Zap, Smartphone, ArrowUpRight } from 'lucide-react';
import { ecosystem } from '../data/content';

const iconMap: Record<string, typeof Watch> = {
  watch: Watch,
  earbuds: Headphones,
  powerbank: Battery,
  charger: Zap,
  cases: Smartphone,
};

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-brand-accent/8 blur-[140px]" />

      <div className="section-pad relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="reveal flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-primary" />
            <span className="font-btn text-xs uppercase tracking-[0.3em] text-brand-primary">
              Chapter Four
            </span>
          </div>
          <h2 className="reveal font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-ink-main dark:text-ink-darkMain text-balance">
            Complete Your
            <span className="text-gradient dark:text-gradient-dark"> Setup.</span>
          </h2>
          <p className="reveal mt-6 font-body text-lg text-ink-secondary dark:text-ink-darkSecondary leading-relaxed max-w-2xl">
            Not accessories. An ecosystem. Every piece designed to connect seamlessly —
            because your technology should work together, not just coexist.
          </p>
        </div>

        {/* Ecosystem grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {ecosystem.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Watch;
            return (
              <div
                key={item.id}
                className="reveal-scale group relative overflow-hidden rounded-2xl glass transition-all duration-700 ease-premium hover:shadow-premium dark:hover:shadow-premium-dark hover:-translate-y-1"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Image */}
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  <div className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full glass">
                    <Icon className="h-4 w-4 text-brand-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-heading text-lg font-semibold text-ink-main dark:text-ink-darkMain">
                      {item.name}
                    </h3>
                    <span className="font-spec text-base font-medium text-brand-primary">
                      ${item.price}
                    </span>
                  </div>
                  <p className="font-body text-sm text-ink-secondary dark:text-ink-darkSecondary leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <button className="flex items-center gap-1.5 font-btn text-xs uppercase tracking-wider text-brand-primary transition-all duration-300 group-hover:gap-2.5">
                    Add to Setup
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="reveal-scale group relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary p-6 flex flex-col justify-between min-h-[280px]" style={{ transitionDelay: '400ms' }}>
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative z-10">
              <span className="font-btn text-xs uppercase tracking-[0.2em] text-white/70 block mb-3">
                The Full Ecosystem
              </span>
              <h3 className="font-heading text-2xl font-bold text-white leading-tight mb-2">
                Get the complete VoltMobile setup
              </h3>
              <p className="font-body text-sm text-white/80 leading-relaxed">
                Phone, watch, earbuds, and more — together, for less.
              </p>
            </div>
            <button className="relative z-10 mt-4 font-btn text-xs uppercase tracking-wider text-white flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
              Explore Bundle
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
