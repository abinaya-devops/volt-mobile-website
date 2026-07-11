import {
  RefreshCw, CreditCard, ShieldCheck, Truck, Headphones, Crown, ArrowRight,
} from 'lucide-react';
import { benefits } from '../data/content';

const iconMap: Record<string, typeof RefreshCw> = {
  'trade-in': RefreshCw,
  'emi': CreditCard,
  'warranty': ShieldCheck,
  'delivery': Truck,
  'care': Headphones,
  'membership': Crown,
};

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-brand-primary/8 blur-[120px]" />

      <div className="section-pad relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="reveal flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-primary" />
            <span className="font-btn text-xs uppercase tracking-[0.3em] text-brand-primary">
              Chapter Five
            </span>
            <span className="h-px w-10 bg-brand-primary" />
          </div>
          <h2 className="reveal font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-ink-main dark:text-ink-darkMain text-balance">
            More Than
            <span className="text-gradient dark:text-gradient-dark"> A Purchase.</span>
          </h2>
          <p className="reveal mt-6 font-body text-lg text-ink-secondary dark:text-ink-darkSecondary leading-relaxed">
            Owning a VoltMobile is a relationship, not a transaction.
            Here's what comes with you, beyond the box.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {benefits.map((benefit, i) => {
            const Icon = iconMap[benefit.icon] ?? RefreshCw;
            return (
              <div
                key={benefit.id}
                className="reveal group relative glass rounded-2xl p-7 transition-all duration-700 ease-premium hover:shadow-premium dark:hover:shadow-premium-dark hover:-translate-y-1"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary/15 to-brand-highlight/10 text-brand-primary transition-all duration-500 group-hover:scale-110 group-hover:from-brand-primary group-hover:to-brand-secondary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <h3 className="font-heading text-xl font-semibold text-ink-main dark:text-ink-darkMain mb-3">
                  {benefit.title}
                </h3>
                <p className="font-body text-sm text-ink-secondary dark:text-ink-darkSecondary leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover line */}
                <div className="mt-5 h-px w-0 bg-gradient-to-r from-brand-primary to-brand-highlight transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* CTA banner */}
        <div className="reveal mt-12 lg:mt-16">
          <div className="relative overflow-hidden rounded-3xl glass p-8 lg:p-12">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-brand-highlight/15 blur-[80px]" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="max-w-xl">
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-ink-main dark:text-ink-darkMain mb-3">
                  Ready to begin your next chapter?
                </h3>
                <p className="font-body text-base text-ink-secondary dark:text-ink-darkSecondary">
                  Trade in your old device today and get instant credit toward any VoltMobile.
                </p>
              </div>
              <button
                onClick={() => document.querySelector('#collection')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary group whitespace-nowrap"
              >
                Start Your Trade-In
                <ArrowRight className="ml-2 inline h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
