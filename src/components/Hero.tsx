import { ArrowRight, Shield, RefreshCw, Cpu, Camera, Battery, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface-light dark:to-surface-dark" />

      {/* Floating ambient shapes */}
      <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-brand-primary/20 blur-[100px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-10 h-96 w-96 rounded-full bg-brand-highlight/15 blur-[120px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-accent/10 blur-[140px] animate-glow-pulse" style={{ animationDelay: '1s' }} />

      <div className="section-pad relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Editorial copy */}
          <div className="flex flex-col gap-7 max-w-xl">
            <div className="reveal is-visible flex items-center gap-3">
              <span className="h-px w-10 bg-brand-primary" />
              <span className="font-btn text-xs uppercase tracking-[0.3em] text-brand-primary">
                A New Chapter Begins
              </span>
            </div>

            <h1 className="font-hero text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-ink-main dark:text-ink-darkMain text-balance">
              Technology
              <br />
              isn't about
              <br />
              <span className="text-gradient dark:text-gradient-dark">processors.</span>
            </h1>

            <p className="font-body text-lg sm:text-xl text-ink-secondary dark:text-ink-darkSecondary leading-relaxed max-w-md">
              It's about people. Every VoltMobile is designed to disappear into your life —
              so you can focus on what matters most.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => document.querySelector('#collection')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary group"
              >
                Discover the Collection
                <ArrowRight className="ml-2 inline h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => document.querySelector('#life')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost text-ink-secondary dark:text-ink-darkSecondary"
              >
                See the Story
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-5 pt-6">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                  <RefreshCw className="h-4 w-4" />
                </span>
                <span className="font-body text-sm text-ink-muted dark:text-ink-darkMuted">Trade-In Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                  <Shield className="h-4 w-4" />
                </span>
                <span className="font-body text-sm text-ink-muted dark:text-ink-darkMuted">2-Year Warranty</span>
              </div>
            </div>
          </div>

          {/* Right: Device composition */}
          <div className="relative h-[480px] sm:h-[560px] lg:h-[620px] perspective-1000">
            {/* Main phone */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-float-slow">
              <div className="relative w-[200px] sm:w-[240px] lg:w-[260px]">
                {/* Phone frame */}
                <div className="relative rounded-[2.5rem] bg-gradient-to-b from-brand-secondary to-slate-800 p-2.5 shadow-2xl shadow-brand-primary/30 dark:shadow-brand-highlight/20">
                  <div className="rounded-[2rem] bg-slate-950 overflow-hidden relative aspect-[9/19]">
                    {/* Screen content */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/30 via-slate-950 to-brand-highlight/20" />
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 h-5 w-20 rounded-full bg-slate-900" />
                    {/* Time display */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <span className="font-spec text-4xl sm:text-5xl font-semibold text-white/90">9:41</span>
                      <span className="font-body text-xs text-white/50">Monday, July 8</span>
                      <div className="mt-4 flex flex-col gap-2 w-32">
                        <div className="h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center px-3 gap-2">
                          <Zap className="h-3 w-3 text-brand-highlight" />
                          <span className="font-body text-[10px] text-white/70">VoltMobile</span>
                        </div>
                        <div className="h-10 rounded-xl bg-white/10 backdrop-blur-sm" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Side buttons */}
                <div className="absolute -left-1 top-20 h-12 w-1 rounded-l bg-slate-700" />
                <div className="absolute -right-1 top-16 h-8 w-1 rounded-r bg-slate-700" />
              </div>
            </div>

            {/* Floating smartwatch */}
            <div className="absolute right-4 sm:right-8 top-8 z-30 animate-float-medium" style={{ animationDelay: '1.5s' }}>
              <div className="relative w-24 sm:w-28">
                <div className="rounded-[1.4rem] bg-gradient-to-b from-slate-700 to-slate-900 p-2 shadow-xl shadow-brand-primary/20">
                  <div className="rounded-[1rem] bg-slate-950 aspect-square flex flex-col items-center justify-center gap-1">
                    <span className="font-spec text-lg sm:text-xl text-brand-highlight">9:41</span>
                    <span className="font-body text-[7px] text-white/40 uppercase tracking-wider">Volt Watch</span>
                    <div className="h-1.5 w-10 rounded-full bg-brand-primary/30">
                      <div className="h-full w-2/3 rounded-full bg-brand-highlight" />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-12 rounded-full bg-slate-700" />
              </div>
            </div>

            {/* Floating earbuds */}
            <div className="absolute left-0 sm:left-4 bottom-12 z-30 animate-float-fast" style={{ animationDelay: '0.8s' }}>
              <div className="relative w-20 sm:w-24">
                <div className="rounded-2xl bg-gradient-to-b from-slate-700 to-slate-900 p-2.5 shadow-xl shadow-brand-primary/20">
                  <div className="rounded-xl bg-slate-950 p-2 flex gap-1.5">
                    <div className="flex-1 aspect-square rounded-lg bg-gradient-to-br from-brand-primary/40 to-slate-800" />
                    <div className="flex-1 aspect-square rounded-lg bg-gradient-to-br from-brand-highlight/40 to-slate-800" />
                  </div>
                </div>
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-body text-[8px] text-ink-muted dark:text-ink-darkMuted uppercase tracking-wider whitespace-nowrap">Volt Buds</span>
              </div>
            </div>

            {/* Glass spec card */}
            <div className="absolute right-0 sm:right-2 bottom-0 z-40 glass rounded-2xl p-4 w-44 sm:w-52 animate-float-medium" style={{ animationDelay: '2.5s' }}>
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="h-3.5 w-3.5 text-brand-primary" />
                <span className="font-btn text-[10px] uppercase tracking-wider text-ink-muted dark:text-ink-darkMuted">Volt Core X3</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    <Camera className="h-3 w-3 text-brand-primary" />
                    <span className="font-body text-[9px] text-ink-muted dark:text-ink-darkMuted">Camera</span>
                  </div>
                  <span className="font-spec text-sm text-ink-main dark:text-ink-darkMain">200MP</span>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    <Battery className="h-3 w-3 text-brand-primary" />
                    <span className="font-body text-[9px] text-ink-muted dark:text-ink-darkMuted">Battery</span>
                  </div>
                  <span className="font-spec text-sm text-ink-main dark:text-ink-darkMain">5200</span>
                </div>
              </div>
            </div>

            {/* Trade-in badge */}
            <div className="absolute left-2 top-1/3 z-30 glass rounded-full px-3 py-2 flex items-center gap-2 animate-float-slow" style={{ animationDelay: '0.3s' }}>
              <RefreshCw className="h-3.5 w-3.5 text-brand-primary" />
              <span className="font-btn text-[9px] uppercase tracking-wider text-ink-secondary dark:text-ink-darkSecondary">Trade-In</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="font-body text-xs text-ink-muted dark:text-ink-darkMuted uppercase tracking-widest">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-brand-primary/50 to-transparent" />
      </div>
    </section>
  );
}
