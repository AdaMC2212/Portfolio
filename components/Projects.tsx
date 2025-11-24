import React from 'react';
import { RESUME_DATA } from '../constants';
import { Code, Database, Shield, ExternalLink, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
           <p className="text-slate-500 max-w-2xl mx-auto">
             Showcasing my journey in Data Analytics, Machine Learning, and Software Development.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESUME_DATA.projects.map((project, idx) => (
            <div key={idx} className="group flex flex-col h-full bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Card Header with fake gradient cover */}
              <div className={`h-32 bg-gradient-to-r ${idx === 0 ? 'from-blue-500 to-cyan-500' : idx === 1 ? 'from-indigo-500 to-purple-500' : 'from-emerald-500 to-teal-500'} p-6 flex items-end relative`}>
                <div className="absolute top-4 right-4 text-white/80 bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                  {idx === 0 ? <Shield size={20} /> : idx === 1 ? <Code size={20} /> : <Database size={20} />}
                </div>
                <h3 className="text-xl font-bold text-white relative z-10">{project.title}</h3>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  <Calendar size={12} />
                  {project.date}
                </div>
                
                <div className="mb-4">
                   <div className="flex flex-wrap gap-2 mb-4">
                     {project.tech.split(', ').map((tech, tIdx) => (
                       <span key={tIdx} className="px-2 py-1 bg-white border border-slate-200 text-slate-600 text-xs rounded-md">
                         {tech}
                       </span>
                     ))}
                   </div>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {project.description.slice(0, 3).map((desc, dIdx) => (
                    <li key={dIdx} className="text-sm text-slate-600 flex items-start gap-2">
                       <span className="mt-1.5 w-1 h-1 bg-slate-400 rounded-full shrink-0"></span>
                       {desc}
                    </li>
                  ))}
                </ul>

                <button className="w-full mt-auto py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors flex items-center justify-center gap-2">
                  View Details <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
