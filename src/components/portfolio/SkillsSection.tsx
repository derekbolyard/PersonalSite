import React from 'react';
import { Code2, Monitor, Server, Brain, Database } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
}

interface SkillsSectionProps {
  isDarkMode: boolean;
}

const skills: Skill[] = [
  { name: 'JavaScript', level: 95, icon: Code2 },
  { name: 'React', level: 90, icon: Monitor },
  { name: 'Node.js', level: 85, icon: Server },
  { name: 'Python', level: 80, icon: Brain },
  { name: 'TypeScript', level: 85, icon: Code2 },
  { name: 'Database', level: 75, icon: Database },
];

export default function SkillsSection({ isDarkMode }: SkillsSectionProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Technical Arsenal
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group p-6 rounded-xl backdrop-blur-lg border transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl ${
                isDarkMode 
                  ? 'bg-white/5 border-white/10 hover:border-blue-500/50' 
                  : 'bg-gray-50 border-gray-200 hover:border-blue-500/50'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-8 h-8 text-blue-500 mr-3 group-hover:animate-pulse" />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              
              <div className="relative">
                <div className={`w-full h-2 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="absolute right-0 -top-6 text-sm text-gray-400 font-mono">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}