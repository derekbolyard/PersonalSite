import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PortfolioVariant } from './portfolioVariants';

interface ProjectsSectionProps {
  isDarkMode: boolean;
  variant: PortfolioVariant;
}

const projects = [
  {
    title: 'Access Lens',
    note: 'A web app for reviewing accessibility issues and organizing them into follow-up work.',
    status: 'Live',
    tech: '.NET, Angular, Playwright',
    url: 'https://getaccesslens.com',
  },
  {
    title: 'Cancel Widget',
    note: 'A small subscription-management concept focused on clearer cancellation flows.',
    status: 'In build',
    tech: 'Vue, Node, Stripe',
  },
  {
    title: 'Cert Stash',
    note: 'A certificate tracking tool for storing documents and watching expiration dates.',
    status: 'In build',
    tech: 'React, Express, PostgreSQL',
  },
];

export default function ProjectsSection({ isDarkMode, variant }: ProjectsSectionProps) {
  if (variant === 'notebook') {
    return (
      <section id="projects" className="px-6 py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-stone-500">Projects</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">Current work</h2>
          </div>

          <div className={`border-t ${isDarkMode ? 'border-white/10' : 'border-stone-300'}`}>
            {projects.map((project) => {
              const row = (
                <>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">{project.status}</span>
                    </div>
                    <p className={`mt-2 max-w-2xl text-sm leading-7 ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}>
                      {project.note}
                    </p>
                    <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-stone-500">{project.tech}</p>
                  </div>
                  {project.url && <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-stone-400" />}
                </>
              );

              if (project.url) {
                return (
                  <button
                    key={project.title}
                    onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
                    className={`flex w-full items-start justify-between gap-4 border-b px-1 py-5 text-left ${
                      isDarkMode ? 'border-white/10 hover:bg-white/[0.02]' : 'border-stone-300 hover:bg-black/[0.02]'
                    }`}
                  >
                    {row}
                  </button>
                );
              }

              return (
                <div
                  key={project.title}
                  className={`flex items-start justify-between gap-4 border-b px-1 py-5 ${
                    isDarkMode ? 'border-white/10' : 'border-stone-300'
                  }`}
                >
                  {row}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'lab') {
    return (
      <section id="projects" className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sky-500">Lab index</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">Active experiments</h2>
            </div>
            <p className={`hidden max-w-sm text-sm leading-7 md:block ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Three active directions with different scopes and constraints.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project, index) => {
              const content = (
                <>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs uppercase tracking-[0.24em] text-sky-500">0{index + 1}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-stone-400">{project.status}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{project.title}</h3>
                  <p className={`mt-3 text-sm leading-7 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {project.note}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-[0.18em] text-stone-400">{project.tech}</p>
                  {project.url && <ArrowUpRight className="mt-6 h-5 w-5 text-stone-400" />}
                </>
              );

              const className = `rounded-[1.75rem] border p-5 text-left ${
                isDarkMode ? 'border-sky-400/15 bg-[#0d1b27]/45' : 'border-sky-200 bg-white/72'
              }`;

              if (project.url) {
                return (
                  <button
                    key={project.title}
                    onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
                    className={`${className} hover:-translate-y-0.5`}
                  >
                    {content}
                  </button>
                );
              }

              return (
                <div key={project.title} className={className}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'antiresume') {
    return (
      <section id="projects" className="px-6 py-10 md:py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Projects</p>
          </div>
          <div className={`border-t ${isDarkMode ? 'border-white/10' : 'border-stone-300'}`}>
            {projects.map((project) => {
              const block = (
                <>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-xl font-semibold">{project.title}</h2>
                      <span className="text-xs uppercase tracking-[0.2em] text-stone-500">{project.status}</span>
                    </div>
                    <p className={`mt-2 max-w-3xl text-sm leading-7 ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}>
                      {project.note}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-stone-500">{project.tech}</p>
                  </div>
                  {project.url && <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-stone-400" />}
                </>
              );

              if (project.url) {
                return (
                  <button
                    key={project.title}
                    onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
                    className={`flex w-full items-start justify-between gap-4 border-b py-6 text-left ${
                      isDarkMode ? 'border-white/10 hover:bg-white/[0.02]' : 'border-stone-300 hover:bg-black/[0.02]'
                    }`}
                  >
                    {block}
                  </button>
                );
              }

              return (
                <div
                  key={project.title}
                  className={`flex items-start justify-between gap-4 border-b py-6 ${
                    isDarkMode ? 'border-white/10' : 'border-stone-300'
                  }`}
                >
                  {block}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Projects</p>
          <h2 className="display-face mt-3 text-4xl md:text-5xl">Current work</h2>
        </div>

        <div
          className={`overflow-hidden rounded-[2rem] border ${
            isDarkMode ? 'border-white/10 bg-black/20' : 'border-stone-300/80 bg-white/85'
          }`}
        >
          {projects.map((project, index) => {
            const content = (
              <>
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold md:text-xl">{project.title}</h3>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${
                        project.status === 'Live'
                          ? isDarkMode
                            ? 'bg-emerald-500/15 text-emerald-300'
                            : 'bg-emerald-100 text-emerald-700'
                          : isDarkMode
                            ? 'bg-amber-500/15 text-amber-300'
                            : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className={`mt-2 text-sm leading-7 ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}>
                    {project.note}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-400">{project.tech}</p>
                </div>

                {project.url && <ArrowUpRight className="h-5 w-5 shrink-0 text-stone-400" />}
              </>
            );

            const className = `flex items-start justify-between gap-4 px-6 py-5 md:px-8 ${
              index < projects.length - 1 ? 'border-b border-current/10' : ''
            }`;

            if (project.url) {
              return (
                <button
                  key={project.title}
                  onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
                  className={`${className} w-full text-left hover:bg-black/[0.03] dark:hover:bg-white/[0.03]`}
                >
                  {content}
                </button>
              );
            }

            return (
              <div key={project.title} className={className}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
