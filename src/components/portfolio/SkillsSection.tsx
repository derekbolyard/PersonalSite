import React from 'react';

interface SkillsSectionProps {
  isDarkMode: boolean;
}

const capabilities = [
  {
    label: 'Frontend systems',
    summary: 'Interfaces that feel intentional instead of stitched together.',
    items: ['React and TypeScript', 'Angular and Vue', 'Design-system cleanup'],
  },
  {
    label: 'Backend and APIs',
    summary: 'Business logic, integrations, and the plumbing that keeps products sane.',
    items: ['Node and .NET services', 'Auth and payment flows', 'Operational guardrails'],
  },
];

export default function SkillsSection({ isDarkMode }: SkillsSectionProps) {
  return (
    <section id="capabilities" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-6 border-b border-current/10 pb-8 md:grid-cols-[1fr_0.8fr] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Capabilities</p>
            <h2 className="display-face mt-3 text-4xl md:text-5xl">What I’m useful for</h2>
          </div>
          <p className={`max-w-xl text-sm leading-7 md:text-base ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}>
            The main buckets, without turning this into a giant skills matrix.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {capabilities.map((capability) => (
            <article
              key={capability.label}
              className={`rounded-[2rem] border p-6 md:p-7 ${
                isDarkMode ? 'border-white/10 bg-white/5' : 'border-stone-300/80 bg-white/80'
              }`}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-stone-400">{capability.label}</p>
              <p className={`mt-4 text-base leading-7 ${isDarkMode ? 'text-stone-100' : 'text-stone-900'}`}>
                {capability.summary}
              </p>

              <ul className={`mt-6 space-y-3 text-sm leading-6 ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}>
                {capability.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className={`mt-2 h-1.5 w-1.5 rounded-full ${isDarkMode ? 'bg-amber-300' : 'bg-stone-900'}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
