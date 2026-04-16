import React from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineSectionProps {
  isDarkMode: boolean;
}

const timeline: TimelineItem[] = [
  {
    year: '2016',
    title: 'Realized software could remove boring work',
    description:
      'The first small automation was enough to make the trade feel permanent. I liked the puzzle, but I liked the leverage even more.',
  },
  {
    year: '2020',
    title: 'Started shaping work around product thinking',
    description:
      'I got more interested in the experience around the code: what users notice, where systems break, and what makes a tool feel dependable.',
  },
  {
    year: '2022',
    title: 'Built software in production teams',
    description:
      'Shipping inside a real organization sharpened the habits that matter most: readable code, careful iteration, and empathy for downstream teammates.',
  },
  {
    year: 'Now',
    title: 'Balancing client work with product experiments',
    description:
      'These days I split energy between hardening products for launch and building smaller ideas that scratch very specific workflow itches.',
  },
];

export default function TimelineSection({ isDarkMode }: TimelineSectionProps) {
  return (
    <section id="path" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 grid gap-6 border-b border-current/10 pb-8 md:grid-cols-[1fr_0.8fr] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Path</p>
            <h2 className="display-face mt-3 text-4xl md:text-5xl">How I work got shaped</h2>
          </div>
          <p className={`max-w-xl text-sm leading-7 md:text-base ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}>
            Not every milestone needs to be dramatic. The through-line is pretty simple: keep building,
            keep refining taste, and keep making the work easier for the next person.
          </p>
        </div>

        <div className="relative space-y-6 border-l border-current/10 pl-6 md:pl-10">
          {timeline.map((item) => (
            <article
              key={item.year}
              className={`relative rounded-[1.75rem] border p-6 md:p-7 ${
                isDarkMode ? 'border-white/10 bg-white/5' : 'border-stone-300/80 bg-white/80'
              }`}
            >
              <span
                className={`absolute -left-[2.15rem] top-7 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
                  isDarkMode
                    ? 'border-white/10 bg-stone-950 text-stone-200'
                    : 'border-stone-300 bg-[#f3efe5] text-stone-700'
                }`}
              >
                {item.year}
              </span>
              <h3 className="display-face text-3xl">{item.title}</h3>
              <p className={`mt-4 max-w-3xl text-sm leading-7 ${isDarkMode ? 'text-stone-300' : 'text-stone-700'}`}>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
