import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { PortfolioVariant } from './portfolioVariants';

interface HeroSectionProps {
  isDarkMode: boolean;
  onViewWorkClick: () => void;
  variant: PortfolioVariant;
}

export default function HeroSection({ isDarkMode, onViewWorkClick, variant }: HeroSectionProps) {
  const handleGetInTouchClick = () => {
    const subject = encodeURIComponent("Let's Work Together!");
    const body = encodeURIComponent(
      "Hi Derek,\n\nI'd love to discuss a potential project with you.\n\nBest regards,"
    );

    window.location.href = `mailto:derekbolyard@gmail.com?subject=${subject}&body=${body}`;
  };

  if (variant === 'notebook') {
    return (
      <section id="top" className="px-6 pb-10 pt-10 md:pb-14">
        <div className="mx-auto max-w-5xl">
          <div
            className={`rounded-[1.5rem] border p-6 md:p-8 ${
              isDarkMode ? 'border-white/10 bg-black/20' : 'border-stone-300 bg-[#fbf8ef]'
            }`}
          >
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-stone-500">Working notebook</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Software engineer building web products.
            </h1>
            <p className={`mt-5 max-w-2xl text-base leading-8 ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}>
              Current projects, active ideas, and a simpler way of presenting the work.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={onViewWorkClick}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold ${
                  isDarkMode ? 'bg-white text-stone-950' : 'bg-stone-950 text-stone-50'
                }`}
              >
                View projects
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={handleGetInTouchClick}
                className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold ${
                  isDarkMode ? 'border-white/10 text-stone-200' : 'border-stone-300 text-stone-700'
                }`}
              >
                <Mail className="h-4 w-4" />
                Email Derek
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'lab') {
    return (
      <section id="top" className="px-6 pb-12 pt-10 md:pb-16">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_0.42fr]">
          <div
            className={`rounded-[2rem] border p-6 md:p-8 ${
              isDarkMode ? 'border-sky-400/15 bg-[#0d1b27]/60' : 'border-sky-200 bg-white/70'
            }`}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-sky-500">Product lab</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-balance md:text-7xl">
              Building tools, testing ideas, and refining the rough edges.
            </h1>
            <p className={`mt-6 max-w-2xl text-base leading-8 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              Less portfolio, more working index of the things I keep shipping or revisiting.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={onViewWorkClick}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${
                  isDarkMode ? 'bg-sky-200 text-slate-950' : 'bg-sky-900 text-sky-50'
                }`}
              >
                Open projects
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={handleGetInTouchClick}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${
                  isDarkMode ? 'border-sky-400/15 text-slate-200' : 'border-sky-200 text-slate-700'
                }`}
              >
                <Mail className="h-4 w-4" />
                Email Derek
              </button>
            </div>
          </div>

          <aside
            className={`rounded-[2rem] border p-6 ${
              isDarkMode ? 'border-sky-400/15 bg-[#0d1b27]/45' : 'border-sky-200 bg-[#f2f8fb]'
            }`}
          >
            <p className="text-xs uppercase tracking-[0.28em] text-sky-500">Current lanes</p>
            <div className="mt-4 space-y-4 text-sm leading-7">
              <p>Product tooling</p>
              <p>Frontend systems</p>
              <p>.NET and JavaScript projects</p>
            </div>
          </aside>
        </div>
      </section>
    );
  }

  if (variant === 'antiresume') {
    return (
      <section id="top" className="px-6 pb-8 pt-10 md:pb-12">
        <div className="mx-auto max-w-5xl">
          <div className={`border-b pb-8 ${isDarkMode ? 'border-white/10' : 'border-stone-300'}`}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">Derek Bolyard</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl">Software engineer.</h1>
            <p className={`mt-5 max-w-2xl text-base leading-8 ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}>
              Working across web products, internal tools, and product ideas.
            </p>

            <div className="mt-7 flex flex-wrap gap-5 text-sm font-semibold">
              <button onClick={onViewWorkClick} className="inline-flex items-center gap-2 underline underline-offset-4">
                Projects
                <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={handleGetInTouchClick} className="inline-flex items-center gap-2 underline underline-offset-4">
                <Mail className="h-4 w-4" />
                Email
              </button>
            </div>

            <div className="mt-8 grid gap-3 text-sm leading-7 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Now</p>
                <p className="mt-1">Access Lens</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Building</p>
                <p className="mt-1">Cancel Widget, Cert Stash</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Stack</p>
                <p className="mt-1">.NET, TypeScript, React, Angular</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="top" className="px-6 pb-12 pt-10 md:pb-16">
      <div className="mx-auto max-w-4xl text-center">
        <div
          className={`mx-auto mb-6 inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] ${
            isDarkMode
              ? 'border-white/10 bg-white/5 text-stone-300'
              : 'border-stone-300 bg-white/70 text-stone-600'
          }`}
        >
          Personal editorial
        </div>

        <h1 className="display-face mx-auto max-w-3xl text-5xl leading-none text-balance md:text-7xl">
          Software engineer building web products.
        </h1>

        <p className={`mx-auto mt-6 max-w-2xl text-lg leading-8 ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}>
          A small collection of projects, experiments, and current work.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onViewWorkClick}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${
              isDarkMode
                ? 'bg-[#f2ead8] text-stone-950 hover:-translate-y-0.5'
                : 'bg-stone-950 text-[#f8f5ee] hover:-translate-y-0.5'
            }`}
          >
            View projects
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            onClick={handleGetInTouchClick}
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${
              isDarkMode
                ? 'border-white/10 text-stone-300 hover:border-white/20 hover:text-white'
                : 'border-stone-300 text-stone-700 hover:border-stone-500 hover:text-stone-950'
            }`}
          >
            <Mail className="h-4 w-4" />
            Email Derek
          </button>
        </div>
      </div>
    </section>
  );
}
