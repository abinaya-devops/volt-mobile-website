import { Zap, Twitter, Instagram, Youtube, Linkedin, ArrowUp } from 'lucide-react';

const footerLinks = {
  Products: ['Volt X Pro', 'Volt Air', 'Volt Lite', 'Volt Watch', 'Volt Buds Pro'],
  Company: ['Our Story', 'Sustainability', 'Careers', 'Press', 'Contact'],
  Support: ['Trade-In', 'Warranty', 'Repair', 'Track Order', 'FAQ'],
  Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Accessibility'],
};

const socials = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Linkedin, label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink-muted/10 dark:border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[800px] rounded-full bg-brand-primary/8 blur-[120px]" />

      {/* CTA band */}
      <div className="section-pad relative z-10 pt-20 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="reveal flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-primary" />
            <span className="font-btn text-xs uppercase tracking-[0.3em] text-brand-primary">
              The Final Page
            </span>
            <span className="h-px w-10 bg-brand-primary" />
          </div>
          <h2 className="reveal font-hero text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-ink-main dark:text-ink-darkMain text-balance">
            Technology That
            <br />
            <span className="text-gradient dark:text-gradient-dark">Moves With You.</span>
          </h2>
          <p className="reveal mt-6 font-body text-lg text-ink-secondary dark:text-ink-darkSecondary">
            Your next chapter is waiting. Let's begin.
          </p>
          <button
            onClick={() => document.querySelector('#collection')?.scrollIntoView({ behavior: 'smooth' })}
            className="reveal btn-primary mt-8 group"
          >
            Explore the Collection
          </button>
        </div>
      </div>

      {/* Links */}
      <div className="section-pad relative z-10 py-12 border-t border-ink-muted/10 dark:border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-brand-highlight shadow-lg shadow-brand-primary/30">
                <Zap className="h-5 w-5 text-white" fill="white" />
              </span>
              <span className="font-logo text-xl tracking-wide text-ink-main dark:text-ink-darkMain">
                VoltMobile
              </span>
            </div>
            <p className="font-body text-sm text-ink-muted dark:text-ink-darkMuted leading-relaxed max-w-xs mb-6">
              Premium mobile technology designed around your life. Effortless, elegant, everywhere.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <button
                  key={social.label}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-muted/20 text-ink-secondary dark:text-ink-darkSecondary transition-all duration-300 hover:border-brand-primary/40 hover:text-brand-primary hover:scale-110"
                >
                  <social.icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-btn text-xs uppercase tracking-wider text-ink-main dark:text-ink-darkMain mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button className="font-body text-sm text-ink-muted dark:text-ink-darkMuted hover:text-brand-primary transition-colors duration-300 text-left">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="section-pad relative z-10 py-6 border-t border-ink-muted/10 dark:border-white/5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-ink-muted dark:text-ink-darkMuted">
            © 2026 VoltMobile. Technology That Moves With You.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 font-body text-xs text-ink-muted dark:text-ink-darkMuted hover:text-brand-primary transition-colors group"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-ink-muted/20 group-hover:border-brand-primary/40 group-hover:-translate-y-0.5 transition-all">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
