import { lifestyleCategories } from '../data/content';

export default function Lifestyle() {
  return (
    <section id="life" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-accent/8 blur-[120px]" />

      <div className="section-pad relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="reveal flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-primary" />
            <span className="font-btn text-xs uppercase tracking-[0.3em] text-brand-primary">
              Chapter Two
            </span>
          </div>
          <h2 className="reveal font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-ink-main dark:text-ink-darkMain text-balance">
            Designed Around
            <br />
            <span className="text-gradient dark:text-gradient-dark">Your Life.</span>
          </h2>
          <p className="reveal mt-6 font-body text-lg text-ink-secondary dark:text-ink-darkSecondary leading-relaxed max-w-2xl">
            Not specifications. Not benchmarks. Just the moments that matter —
            photography, travel, work, creativity, family. VoltMobile fits into all of them,
            quietly and beautifully.
          </p>
        </div>

        {/* Lifestyle grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {lifestyleCategories.map((cat, i) => (
            <div
              key={cat.label}
              className={`reveal group relative overflow-hidden rounded-2xl ${
                i === 0 ? 'col-span-2 md:col-span-1 lg:row-span-2 aspect-square lg:aspect-auto' : 'aspect-[3/4]'
              } cursor-pointer`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={cat.image}
                alt={cat.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className="font-heading text-xl lg:text-2xl font-semibold text-white mb-1">
                  {cat.label}
                </span>
                <span className="font-body text-xs text-white/60 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Part of your story
                </span>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-brand-highlight/40 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Statement */}
        <div className="reveal mt-20 lg:mt-24 text-center max-w-4xl mx-auto">
          <p className="font-hero text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed text-ink-secondary dark:text-ink-darkSecondary text-balance">
            "Every interaction should feel effortless.
            <span className="block mt-2 text-ink-main dark:text-ink-darkMain font-medium">
              Technology should never feel complicated."
            </span>
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-brand-primary/40" />
            <span className="font-btn text-xs uppercase tracking-[0.25em] text-brand-primary">
              The VoltMobile Promise
            </span>
            <span className="h-px w-8 bg-brand-primary/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
