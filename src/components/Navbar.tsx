import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'Life', href: '#life' },
  { label: 'Collection', href: '#collection' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Stories', href: '#stories' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium ${
        scrolled ? 'glass-nav py-3 shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <nav className="section-pad flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 group"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-brand-highlight shadow-lg shadow-brand-primary/30 transition-transform duration-500 group-hover:scale-110">
            <Zap className="h-5 w-5 text-white" fill="white" />
          </span>
          <span className="font-logo text-xl tracking-wide text-ink-main dark:text-ink-darkMain">
            VoltMobile
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-body text-sm font-medium text-ink-secondary dark:text-ink-darkSecondary px-4 py-2 rounded-full transition-all duration-300 hover:text-ink-main dark:hover:text-ink-darkMain hover:bg-brand-primary/5"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-muted/20 text-ink-secondary dark:text-ink-darkSecondary transition-all duration-300 hover:border-brand-primary/40 hover:text-brand-primary hover:scale-110"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            onClick={() => handleNavClick('#collection')}
            className="hidden sm:inline-flex btn-primary !px-6 !py-2.5 !text-xs"
          >
            Explore
          </button>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-ink-muted/20 text-ink-main dark:text-ink-darkMain"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-premium ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="section-pad pt-4 pb-6 flex flex-col gap-1 glass-nav">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left font-body text-base font-medium text-ink-secondary dark:text-ink-darkSecondary px-4 py-3 rounded-xl transition-colors hover:bg-brand-primary/10 hover:text-ink-main dark:hover:text-ink-darkMain"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#collection')}
            className="btn-primary mt-2 w-full"
          >
            Explore Collection
          </button>
        </div>
      </div>
    </header>
  );
}
