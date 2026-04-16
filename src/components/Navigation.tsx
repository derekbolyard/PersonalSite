import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PortfolioVariant } from './portfolio/portfolioVariants';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  variant?: PortfolioVariant;
  isDarkMode?: boolean;
}

const pages = [
  { id: 'home', name: 'Portfolio' },
  { id: 'services', name: 'Services' },
  { id: 'design', name: 'Lab' },
];

export default function Navigation({
  currentPage,
  onPageChange,
  variant = 'editorial',
  isDarkMode = true,
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handlePageChange = (pageId: string) => {
    onPageChange(pageId === 'home' ? '/' : `/${pageId}`);
    setIsMobileMenuOpen(false);
  };

  const isActive = (pageId: string) =>
    (pageId === 'home' && currentPage === '/') || (pageId !== 'home' && currentPage === `/${pageId}`);

  const shellClass = {
    editorial: isDarkMode
      ? 'border-white/10 bg-stone-950/85 text-stone-100'
      : 'border-white/20 bg-white/70 text-stone-900',
    notebook: isDarkMode
      ? 'border-white/10 bg-[#171717]/92 text-stone-100'
      : 'border-stone-300 bg-[#f8f6f0]/96 text-stone-900',
    blueprint: isDarkMode
      ? 'border-sky-400/15 bg-[#0b1620]/90 text-slate-100'
      : 'border-sky-200 bg-[#f4fbff]/96 text-slate-900',
  } as const;

  const activeClass = {
    editorial: 'bg-[#f2ead8] text-stone-950',
    notebook: isDarkMode ? 'bg-white text-stone-950' : 'bg-stone-950 text-[#f8f6f0]',
    blueprint: isDarkMode ? 'bg-sky-200 text-slate-950' : 'bg-sky-900 text-sky-50',
  } as const;

  const idleClass = {
    editorial: isDarkMode ? 'text-stone-300 hover:bg-white/10 hover:text-white' : 'text-stone-700 hover:bg-black/5',
    notebook: isDarkMode ? 'text-stone-300 hover:bg-white/8 hover:text-white' : 'text-stone-700 hover:bg-black/5',
    blueprint: isDarkMode ? 'text-slate-300 hover:bg-white/8 hover:text-white' : 'text-slate-700 hover:bg-sky-100',
  } as const;

  return (
    <>
      <nav className="fixed left-1/2 top-4 z-50 hidden w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2 md:block">
        <div className={`flex items-center justify-between rounded-full border px-3 py-2 shadow-[0_12px_32px_rgba(0,0,0,0.14)] backdrop-blur ${shellClass[variant]}`}>
          <button onClick={() => handlePageChange('home')} className="rounded-full px-3 py-2 text-sm font-semibold">
            Derek Bolyard
          </button>

          <div className="flex items-center gap-1">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => handlePageChange(page.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  isActive(page.id)
                    ? activeClass[variant]
                    : idleClass[variant]
                }`}
              >
                {page.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="md:hidden">
        <div className={`fixed left-4 right-4 top-4 z-50 rounded-full border px-3 py-2 shadow-[0_12px_32px_rgba(0,0,0,0.14)] backdrop-blur ${shellClass[variant]}`}>
          <div className="flex items-center justify-between">
            <button onClick={() => handlePageChange('home')} className="px-2 py-1 text-sm font-semibold">
              Derek Bolyard
            </button>

            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="rounded-full p-2 hover:bg-white/10"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className={`fixed left-4 right-4 top-20 z-50 rounded-3xl border p-3 shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur ${shellClass[variant]}`}>
            <div className="space-y-2">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => handlePageChange(page.id)}
                  className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold ${
                    isActive(page.id)
                      ? activeClass[variant]
                      : `${idleClass[variant]} ${isDarkMode ? 'bg-white/5' : 'bg-white/60'}`
                  }`}
                >
                  {page.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
