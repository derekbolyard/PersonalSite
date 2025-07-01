import React from 'react';
import { ExternalLink, Clock, Wrench, Package, Zap, Shield, Users } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  color: string;
  status: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ProjectsSectionProps {
  isDarkMode: boolean;
}

const projects: Project[] = [
  {
    title: 'Access Lens',
    description: 'Revolutionary accessibility analysis platform that makes the web inclusive for everyone',
    tech: ['.NET', 'Angular', 'Playwright', 'WCAG', 'Axe'],
    color: 'from-blue-500 to-purple-600',
    status: 'Coming Soon',
    icon: Shield
  },
  {
    title: 'Cancel Widget',
    description: 'Smart subscription management tool that helps users take control of their recurring payments',
    tech: ['Vue.js', 'Node.js', 'Stripe API', 'MongoDB'],
    color: 'from-emerald-500 to-teal-600',
    status: 'Coming Soon',
    icon: Zap
  },
  {
    title: 'Cert Stash',
    description: 'Secure certificate management system for developers and IT professionals',
    tech: ['React', 'Express', 'PostgreSQL', 'Docker'],
    color: 'from-purple-500 to-pink-600',
    status: 'Coming Soon',
    icon: Users
  }
];

export default function ProjectsSection({ isDarkMode }: ProjectsSectionProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className={`text-center mb-16 text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Innovative solutions currently in development
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isAccessLens = project.title === 'Access Lens';
            return (
              <div
                key={project.title}
                className={`group relative overflow-hidden rounded-2xl backdrop-blur-lg border transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/10 ${
                  isDarkMode 
                    ? 'bg-white/5 border-white/10 hover:border-purple-500/30' 
                    : 'bg-gray-50 border-gray-200 hover:border-purple-500/30 hover:shadow-purple-500/20'
                } ${isAccessLens ? 'cursor-pointer' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={isAccessLens ? () => window.open('https://getaccesslens.com', '_blank', 'noopener,noreferrer') : undefined}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Coming Soon Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                    <Clock className="w-3 h-3" />
                    {project.status}
                  </div>
                </div>
                
                <div className="relative p-6">
                  {/* Project Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-20`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:animate-bounce transition-colors duration-300 opacity-50 ml-auto" />
                  </div>
                  
                  <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-sm rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                          isDarkMode 
                            ? 'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30' 
                            : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Enhanced Projects Status Message */}
        <div className="text-center mt-12">
          <div className={`inline-flex items-center gap-3 px-6 py-4 rounded-full backdrop-blur-lg border transition-all duration-300 hover:scale-105 ${
            isDarkMode ? 'bg-white/5 border-white/10 hover:border-orange-500/30' : 'bg-gray-50 border-gray-200 hover:border-orange-500/30'
          }`}>
            <Wrench className="w-5 h-5 text-orange-400 animate-spin" />
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              These projects are currently in development. Stay tuned for launches!
            </span>
            <Package className="w-5 h-5 text-blue-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}