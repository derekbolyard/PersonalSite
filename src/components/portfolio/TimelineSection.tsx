import React from 'react';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

interface TimelineSectionProps {
  isDarkMode: boolean;
}

const timeline: TimelineItem[] = [
  { 
    year: '1990', 
    title: 'Baby Derek', 
    company: 'Professional Milk Consumer',
    description: 'Mastered the art of sleeping 20 hours a day and crying on demand. First debugging experience: figuring out why the bottle was empty.' 
  },
  { 
    year: '2008', 
    title: 'Not-so-baby Derek', 
    company: 'High School Survivor',
    description: 'Discovered that calculators could spell "BOOBIES" upside down. This was probably my first introduction to creative problem solving.' 
  },
  { 
    year: '2016', 
    title: 'Wrote first for loop', 
    company: 'The Eureka Moment',
    description: 'Finally understood why programmers love automation. Spent 3 hours writing a script to save 5 minutes of manual work. Worth it.' 
  },
  { 
    year: '2020', 
    title: 'Colorado', 
    company: 'Mountain Life Initiated',
    description: 'Moved to Colorado for the mountains, stayed for the legal... recreational activities and amazing tech scene. Altitude debugging is real.' 
  },
  { 
    year: '2022', 
    title: 'Avionte', 
    company: 'Staffing Software Solutions',
    description: 'Joined the team building software that helps people find jobs. Ironic that I found my calling helping others find theirs.' 
  },
  { 
    year: '2025', 
    title: 'Building the Future', 
    company: 'Independent Creator & Innovator',
    description: 'Currently crafting accessibility tools, subscription widgets, and certificate managers. Also perfecting my coffee-to-code ratio (it\'s 1:1).' 
  }
];

export default function TimelineSection({ isDarkMode }: TimelineSectionProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
          The Derek Chronicles
        </h2>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500"></div>
          
          {timeline.map((item, index) => (
            <div
              key={item.year}
              className={`relative flex items-start mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className={`p-6 rounded-xl backdrop-blur-lg border transition-all duration-500 hover:transform hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-white border-gray-300 shadow-lg'
                }`}>
                  <div className="text-blue-500 font-mono text-lg font-bold mb-2">
                    {item.year}
                  </div>
                  <h3 className={`text-xl font-semibold mb-1 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{item.title}</h3>
                  <p className={`text-sm mb-3 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{item.company}</p>
                  <p className={`text-sm leading-relaxed italic ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </div>
              
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 animate-pulse ${
                isDarkMode ? 'border-gray-900' : 'border-white'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}