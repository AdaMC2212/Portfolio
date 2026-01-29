
import React from 'react';
import { RESUME_DATA } from '../constants';
import { Folder, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-hacker-bg">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-2">The Repository</h2>
          <p className="font-mono text-hacker-accent text-sm">git list --featured</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESUME_DATA.projects.map((project: any, idx) => (
            <div key={idx} className="console-panel rounded-xl overflow-hidden group hover:border-white/20 transition-all reveal bg-white/[0.01] border border-white/5 flex flex-col h-full">
              <div className="console-header px-4 py-3 flex items-center justify-between bg-white/[0.03] border-b border-white/5 shrink-0">
                <div className="flex items-center gap-3">
                  <Folder size={14} className="text-hacker-accent" />
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">REPO_00{idx + 1}</span>
                </div>
                <div className="flex gap-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-red-500/40"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40"></div>
                </div>
              </div>
              
              <div className="relative h-48 bg-black overflow-hidden border-b border-white/5 shrink-0">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" 
                  />
                ) : (
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#7c3aed_1px,_transparent_1px)] bg-[size:16px:16px]"></div>
                )}
                
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <h4 className="text-2xl font-bold text-white uppercase tracking-[0.2em] select-none text-center leading-tight drop-shadow-2xl">
                    {project.title.split(' ')[0]}
                  </h4>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-hacker-accent transition-colors">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.split(', ').map((t: string, i: number) => (
                    <span key={i} className="text-[9px] font-mono font-bold text-hacker-accent uppercase tracking-widest border border-hacker-accent/20 px-2 py-0.5 rounded-sm bg-hacker-accent/5">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-slate-500 mb-8 font-light leading-relaxed flex-1">
                  {project.description[0]}
                </p>

                <div className="bg-hacker-accent/[0.03] border border-hacker-accent/10 rounded-lg p-4 mb-8">
                  <div className="text-sm font-bold text-white flex items-center justify-between">
                    <span>{idx === 0 ? "98.4% Accuracy" : idx === 1 ? "Zero-Latency" : "Optimized Schema"}</span>
                    <span className="text-[10px] text-slate-600 font-mono">v1.0.0</span>
                  </div>
                  <div className="text-[8px] uppercase tracking-widest text-slate-600 mt-1">
                    {idx === 0 ? "PRIMARY IMPACT" : idx === 1 ? "USER PERFORMANCE" : "DATA INTEGRITY"}
                  </div>
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-white/5 border border-white/10 text-slate-400 rounded hover:bg-hacker-accent/20 hover:text-white transition-all font-mono text-[10px] uppercase tracking-[0.25em] flex items-center justify-center gap-2"
                >
                   [ Execute_App ] <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
