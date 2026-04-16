import React, { useEffect, useState } from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import AnimatedBackground from '../components/common/AnimatedBackground';
import ThemeToggle from '../components/common/ThemeToggle';
import HeroSection from '../components/portfolio/HeroSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import ContactSection from '../components/portfolio/ContactSection';
import VariantTabs from '../components/portfolio/VariantTabs';
import { PortfolioVariant } from '../components/portfolio/portfolioVariants';

export default function PortfolioPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [variant, setVariant] = useState<PortfolioVariant>('notebook');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 480);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const footerLinks = [
    {
      label: 'Email',
      href: "mailto:derekbolyard@gmail.com?subject=Let's%20Work%20Together!&body=Hi%20Derek,%0D%0A%0D%0AI'd%20love%20to%20discuss%20a%20potential%20project%20with%20you.%0D%0A%0D%0ABest%20regards,",
      icon: Mail,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/derekbolyard',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/derek-bolyard-1b305516b/',
      icon: Linkedin,
    },
  ];

  return (
    <div
      className={`relative isolate min-h-screen overflow-hidden transition-colors duration-500 ${
        isDarkMode ? 'bg-[#111111] text-stone-100' : 'bg-[#f3efe5] text-stone-900'
      }`}
    >
      <AnimatedBackground isDarkMode={isDarkMode} variant={variant} />

      <ThemeToggle isDarkMode={isDarkMode} onToggle={() => setIsDarkMode((value) => !value)} />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-50 rounded-full border p-3 shadow-lg backdrop-blur ${
            isDarkMode
              ? 'border-white/10 bg-stone-900/85 text-stone-100 hover:bg-stone-800'
              : 'border-stone-300 bg-[#f8f5ee]/90 text-stone-900 hover:bg-white'
          }`}
          title="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      <VariantTabs activeVariant={variant} isDarkMode={isDarkMode} onChange={setVariant} />
      <HeroSection isDarkMode={isDarkMode} onViewWorkClick={scrollToProjects} variant={variant} />
      <ProjectsSection isDarkMode={isDarkMode} variant={variant} />
      <ContactSection isDarkMode={isDarkMode} variant={variant} />

      <footer className={`px-6 pb-10 pt-2 ${isDarkMode ? 'text-stone-400' : 'text-stone-600'}`}>
        {variant === 'antiresume' ? (
          <div className={`mx-auto max-w-5xl border-t pt-6 text-sm ${isDarkMode ? 'border-white/10' : 'border-stone-300/80'}`}>
            <p>Derek Bolyard</p>
          </div>
        ) : (
          <div
            className={`mx-auto flex max-w-6xl flex-col gap-6 border-t pt-6 md:flex-row md:items-center md:justify-between ${
              isDarkMode ? 'border-white/10' : 'border-stone-300/80'
            }`}
          >
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-stone-400">Derek Bolyard</p>
              <p className="mt-2 text-sm">Software engineer focused on sturdy, usable products.</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {footerLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${
                      isDarkMode
                        ? 'border-white/10 bg-white/5 text-stone-200 hover:bg-white/10'
                        : 'border-stone-300 bg-white/70 text-stone-700 hover:bg-white'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </footer>
    </div>
  );
}
