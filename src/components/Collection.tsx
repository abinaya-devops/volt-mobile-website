import { useState } from 'react';
import { Heart, GitCompare, Cpu, Camera, Battery, MemoryStick, HardDrive, Smartphone, Check } from 'lucide-react';
import { phones, type PhoneProduct } from '../data/content';

function ProductCard({ phone, index }: { phone: PhoneProduct; index: number }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [wished, setWished] = useState(false);

  const specItems = [
    { icon: MemoryStick, label: 'RAM', value: phone.specs.ram },
    { icon: HardDrive, label: 'Storage', value: phone.specs.storage },
    { icon: Camera, label: 'Camera', value: phone.specs.camera },
    { icon: Battery, label: 'Battery', value: phone.specs.battery },
    { icon: Cpu, label: 'Processor', value: phone.specs.processor },
    { icon: Smartphone, label: 'Display', value: phone.specs.display },
  ];

  return (
    <div
      className={`reveal group relative ${
        index % 2 === 0 ? 'lg:reveal-left' : 'lg:reveal-right'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="glass rounded-3xl overflow-hidden transition-all duration-700 ease-premium group-hover:shadow-premium dark:group-hover:shadow-premium-dark group-hover:-translate-y-1">
        {/* Image area */}
        <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
          <img
            src={phone.image}
            alt={phone.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

          {/* Personality badge */}
          <div className="absolute top-4 left-4 glass rounded-full px-4 py-1.5">
            <span className="font-btn text-[10px] uppercase tracking-wider text-brand-primary">
              {phone.tagline}
            </span>
          </div>

          {/* Wishlist */}
          <button
            onClick={() => setWished((w) => !w)}
            aria-label="Wishlist"
            className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full glass transition-all duration-300 hover:scale-110"
          >
            <Heart
              className={`h-4 w-4 transition-colors ${wished ? 'fill-rose-500 text-rose-500' : 'text-ink-secondary dark:text-ink-darkSecondary'}`}
            />
          </button>

          {/* Name overlay */}
          <div className="absolute bottom-4 left-4">
            <h3 className="font-heading text-2xl font-bold text-white">{phone.name}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-7">
          {/* Story */}
          <p className="font-body text-base text-ink-secondary dark:text-ink-darkSecondary leading-relaxed mb-6">
            {phone.story}
          </p>

          {/* Specs grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {specItems.map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col gap-1 p-3 rounded-xl bg-brand-primary/5 dark:bg-white/5 border border-brand-primary/10 dark:border-white/5"
              >
                <div className="flex items-center gap-1.5">
                  <spec.icon className="h-3.5 w-3.5 text-brand-primary" />
                  <span className="font-body text-[10px] uppercase tracking-wider text-ink-muted dark:text-ink-darkMuted">
                    {spec.label}
                  </span>
                </div>
                <span className="font-spec text-sm font-medium text-ink-main dark:text-ink-darkMain">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          {/* Colors */}
          <div className="mb-6">
            <span className="font-body text-xs uppercase tracking-wider text-ink-muted dark:text-ink-darkMuted mb-3 block">
              Available Colors
            </span>
            <div className="flex items-center gap-3">
              {phone.colors.map((color, ci) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(ci)}
                  aria-label={color.name}
                  className={`relative h-8 w-8 rounded-full transition-all duration-300 ${
                    selectedColor === ci ? 'ring-2 ring-offset-2 ring-brand-primary ring-offset-surface-light dark:ring-offset-surface-darkCard scale-110' : 'hover:scale-110'
                  }`}
                  style={{ backgroundColor: color.hex, border: '1px solid rgba(0,0,0,0.1)' }}
                >
                  {selectedColor === ci && (
                    <Check className="absolute inset-0 m-auto h-3.5 w-3.5 text-white mix-blend-difference" />
                  )}
                </button>
              ))}
              <span className="font-body text-sm text-ink-secondary dark:text-ink-darkSecondary ml-1">
                {phone.colors[selectedColor].name}
              </span>
            </div>
          </div>

          {/* Price + actions */}
          <div className="flex items-center justify-between gap-4 pt-4 border-t border-ink-muted/10 dark:border-white/5">
            <div>
              <span className="font-body text-xs text-ink-muted dark:text-ink-darkMuted block">From</span>
              <span className="font-spec text-2xl font-semibold text-ink-main dark:text-ink-darkMain">
                ${phone.price}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Compare"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-muted/20 text-ink-secondary dark:text-ink-darkSecondary transition-all duration-300 hover:border-brand-primary/40 hover:text-brand-primary hover:scale-105"
              >
                <GitCompare className="h-4 w-4" />
              </button>
              <button className="btn-primary !px-6 !py-2.5 !text-xs">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Collection() {
  return (
    <section id="collection" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 h-96 w-96 rounded-full bg-brand-primary/8 blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-brand-highlight/8 blur-[100px]" />

      <div className="section-pad relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="reveal flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-primary" />
            <span className="font-btn text-xs uppercase tracking-[0.3em] text-brand-primary">
              Chapter Three
            </span>
            <span className="h-px w-10 bg-brand-primary" />
          </div>
          <h2 className="reveal font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-ink-main dark:text-ink-darkMain text-balance">
            The Collection
          </h2>
          <p className="reveal mt-6 font-body text-lg text-ink-secondary dark:text-ink-darkSecondary leading-relaxed">
            Three devices. Three personalities. Each one introduced by the life it was made for —
            then by what's inside.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {phones.map((phone, i) => (
            <ProductCard key={phone.id} phone={phone} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
