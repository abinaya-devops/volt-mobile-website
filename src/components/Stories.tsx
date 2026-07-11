import { Star, Quote } from 'lucide-react';
import { stories } from '../data/content';

export default function Stories() {
  return (
    <section id="stories" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-brand-accent/8 blur-[120px]" />

      <div className="section-pad relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="reveal flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-primary" />
            <span className="font-btn text-xs uppercase tracking-[0.3em] text-brand-primary">
              Chapter Six
            </span>
          </div>
          <h2 className="reveal font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-ink-main dark:text-ink-darkMain text-balance">
            Stories Behind
            <br />
            <span className="text-gradient dark:text-gradient-dark">Every Upgrade.</span>
          </h2>
          <p className="reveal mt-6 font-body text-lg text-ink-secondary dark:text-ink-darkSecondary leading-relaxed max-w-2xl">
            Not reviews. Real moments. Real memories. Here's how VoltMobile
            became part of their journey.
          </p>
        </div>

        {/* Stories */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {stories.map((story, i) => (
            <article
              key={story.id}
              className="reveal group glass rounded-3xl p-7 lg:p-8 transition-all duration-700 ease-premium hover:shadow-premium dark:hover:shadow-premium-dark hover:-translate-y-1"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Quote icon */}
              <div className="mb-5">
                <Quote className="h-8 w-8 text-brand-primary/30" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: story.rating }).map((_, si) => (
                  <Star key={si} className="h-4 w-4 fill-brand-highlight text-brand-highlight" />
                ))}
              </div>

              {/* Story text */}
              <p className="font-body text-base text-ink-secondary dark:text-ink-darkSecondary leading-relaxed mb-7 italic">
                "{story.story}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-5 border-t border-ink-muted/10 dark:border-white/5">
                <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-brand-primary/20">
                  <img
                    src={story.image}
                    alt={story.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-ink-main dark:text-ink-darkMain">
                    {story.name}
                  </h4>
                  <p className="font-body text-xs text-ink-muted dark:text-ink-darkMuted">
                    {story.role} · {story.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Stats strip */}
        <div className="reveal mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { value: '2.4M+', label: 'Lives Connected' },
            { value: '4.9/5', label: 'Customer Rating' },
            { value: '98%', label: 'Would Recommend' },
            { value: '60+', label: 'Countries' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-spec text-3xl lg:text-4xl font-semibold text-gradient dark:text-gradient-dark mb-1">
                {stat.value}
              </div>
              <div className="font-body text-xs uppercase tracking-wider text-ink-muted dark:text-ink-darkMuted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
