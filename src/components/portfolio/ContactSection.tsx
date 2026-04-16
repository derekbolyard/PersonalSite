import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { PortfolioVariant } from './portfolioVariants';

interface ContactSectionProps {
  isDarkMode: boolean;
  variant: PortfolioVariant;
}

const links = [
  {
    label: 'Email',
    value: 'derekbolyard@gmail.com',
    href: "mailto:derekbolyard@gmail.com?subject=Let's%20Work%20Together!&body=Hi%20Derek,%0D%0A%0D%0AI'd%20love%20to%20discuss%20a%20potential%20project%20with%20you.%0D%0A%0D%0ABest%20regards,",
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/derekbolyard',
    href: 'https://github.com/derekbolyard',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/derek-bolyard-1b305516b',
    href: 'https://www.linkedin.com/in/derek-bolyard-1b305516b/',
    icon: Linkedin,
  },
];

export default function ContactSection({ isDarkMode, variant }: ContactSectionProps) {
  if (variant === 'notebook') {
    return (
      <section id="contact" className="px-6 pb-20 pt-14 md:pb-24 md:pt-18">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-stone-500">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">Reach out</h2>
          </div>

          <div className={`border-t ${isDarkMode ? 'border-white/10' : 'border-stone-300'}`}>
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-center justify-between gap-4 border-b py-5 ${
                    isDarkMode ? 'border-white/10 hover:bg-white/[0.02]' : 'border-stone-300 hover:bg-black/[0.02]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Icon className="h-5 w-5 text-stone-400" />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">{link.label}</p>
                      <p className={`mt-1 text-sm font-semibold ${isDarkMode ? 'text-stone-100' : 'text-stone-900'}`}>
                        {link.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-stone-400" />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'lab') {
    return (
      <section id="contact" className="px-6 pb-20 pt-16 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-5xl">
          <div
            className={`rounded-[2rem] border p-6 md:p-8 ${
              isDarkMode ? 'border-sky-400/15 bg-[#0d1b27]/55' : 'border-sky-200 bg-white/72'
            }`}
          >
            <div className="mb-6 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-sky-500">Contact</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">Reach out</h2>
              </div>
              <p className={`hidden max-w-sm text-sm leading-7 md:block ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Email, GitHub, and LinkedIn.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`rounded-[1.5rem] border p-5 ${
                      isDarkMode ? 'border-sky-400/15 bg-[#0b1620]/70 hover:bg-[#112233]' : 'border-sky-200 bg-[#f3faff] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <Icon className="h-5 w-5 text-sky-500" />
                      <ArrowUpRight className="h-4 w-4 text-stone-400" />
                    </div>
                    <p className="mt-6 text-xs uppercase tracking-[0.24em] text-stone-400">{link.label}</p>
                    <p className={`mt-2 text-sm font-semibold leading-7 ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                      {link.value}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'antiresume') {
    return (
      <section id="contact" className="px-6 pb-20 pt-10 md:pb-24">
        <div className="mx-auto max-w-5xl">
          <div className={`border-t pt-6 ${isDarkMode ? 'border-white/10' : 'border-stone-300'}`}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Contact</p>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="underline underline-offset-4"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div
        className={`mx-auto max-w-6xl rounded-[2.5rem] border p-6 md:p-10 ${
          isDarkMode ? 'border-white/10 bg-black/25' : 'border-stone-300/80 bg-white/85'
        }`}
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Contact</p>
            <h2 className="display-face mt-3 max-w-lg text-4xl md:text-5xl">Get in touch</h2>
            <p className={`mt-6 max-w-xl text-base leading-8 ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}>
              If you want to talk about a project, compare notes, or just say hello, these are the
              easiest ways to reach me.
            </p>
          </div>

          <div className="grid gap-4">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group flex items-center justify-between rounded-[1.75rem] border p-5 ${
                    isDarkMode
                      ? 'border-white/10 bg-white/5 hover:bg-white/8'
                      : 'border-stone-300/80 bg-[#fcfaf5] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`rounded-2xl p-3 ${
                        isDarkMode ? 'bg-stone-900 text-stone-100' : 'bg-stone-900 text-[#f8f5ee]'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-stone-400">{link.label}</p>
                      <p className={`mt-1 text-sm font-semibold ${isDarkMode ? 'text-stone-100' : 'text-stone-900'}`}>
                        {link.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-stone-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
