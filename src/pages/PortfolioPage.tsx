export default function PortfolioPage() {
  const timeline = [
    { year: '1990', text: 'Mastered the art of sleeping 20 hours a day and crying on demand. First debugging experience: figuring out why the bottle was empty.' },
    { year: '2008', text: 'Discovered that calculators had hidden potential. This was probably my first introduction to creative problem solving.' },
    { year: '2016', text: 'Finally understood why programmers love automation. Spent 3 hours writing a script to save 5 minutes of manual work. Worth it.' },
    { year: '2020', text: 'Moved to Colorado for the mountains, stayed for the recreational activities and amazing tech scene. Altitude debugging is real.' },
    { year: '2025', text: 'Packed up and moved abroad. Currently living in the Philippines, which has great cats and decent coffee.' },
    { year: 'Now', text: 'Building stuff, writing about things, and sharing my home office with at least one cat at all times.' },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-600">

      <div className="max-w-2xl mx-auto px-6 py-24 md:py-32">

        {/* Intro */}
        <header className="mb-16">
          <h1 className="text-neutral-900 text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Derek Bolyard
          </h1>
          <p className="text-lg leading-relaxed text-neutral-500">
            Software engineer living abroad in the Philippines. I like cats, coding, and writing about what I'm figuring out.
          </p>
        </header>

        {/* Writing */}
        <section className="mb-16">
          <p className="leading-relaxed">
            I'm starting to write about what I'm learning and thinking about.
          </p>
          <a
            href="/blog"
            className="inline-block mt-4 text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-500 transition-colors"
          >
            Read the blog &rarr;
          </a>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-neutral-400 text-sm font-medium uppercase tracking-widest mb-8">
            So far
          </h2>
          <ul className="space-y-6">
            {timeline.map((item) => (
              <li key={item.year} className="flex gap-6">
                <span className="text-neutral-400 text-sm font-mono shrink-0 w-12 pt-0.5">
                  {item.year}
                </span>
                <span className="leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Links */}
        <footer className="border-t border-neutral-300 pt-10">
          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="mailto:derekbolyard@gmail.com"
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/derekbolyard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/derek-bolyard-1b305516b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}
