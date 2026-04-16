import React from 'react';
import { PortfolioVariant, variantOptions } from './portfolioVariants';

interface VariantTabsProps {
  activeVariant: PortfolioVariant;
  isDarkMode: boolean;
  onChange: (variant: PortfolioVariant) => void;
}

export default function VariantTabs({ activeVariant, isDarkMode, onChange }: VariantTabsProps) {
  return (
    <section className="px-6 pt-28 md:pt-32">
      <div className="mx-auto max-w-5xl">
        <div
          className={`rounded-[2rem] border p-3 md:p-4 ${
            isDarkMode ? 'border-white/10 bg-white/5' : 'border-stone-300/80 bg-white/80'
          }`}
        >
          <div className="mb-3 px-2">
            <p className="text-xs uppercase tracking-[0.28em] text-stone-400">Compare directions</p>
          </div>

          <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4" role="tablist" aria-label="Portfolio style options">
            {variantOptions.map((option) => {
              const isActive = option.id === activeVariant;

              return (
                <button
                  key={option.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onChange(option.id)}
                  className={`rounded-[1.25rem] border px-4 py-4 text-left transition ${
                    isActive
                      ? isDarkMode
                        ? 'border-white/15 bg-white text-stone-950'
                        : 'border-stone-900 bg-stone-900 text-stone-50'
                      : isDarkMode
                        ? 'border-white/10 bg-black/15 text-stone-200 hover:bg-white/6'
                        : 'border-stone-300/80 bg-[#faf8f2] text-stone-800 hover:bg-white'
                  }`}
                >
                  <div className="text-sm font-semibold">{option.label}</div>
                  <p className={`mt-1 text-sm leading-6 ${isActive ? 'text-current/80' : 'text-stone-500'}`}>
                    {option.blurb}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
