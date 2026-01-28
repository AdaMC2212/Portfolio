
import React from 'react';
import { RESUME_DATA } from '../constants';
import { Folder } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-hacker-bg">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-2">The Repository</h2>
          <p className="font-mono text-hacker-accent text-sm">git list --featured</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESUME_DATA.projects.map((project, idx) => (
            <div key={idx} className="console-panel rounded-xl overflow-hidden group hover:border-white/20 transition-all reveal bg-white/[0.01] border border-white/5">
              <div className="console-header px-4 py-3 flex items-center justify-between bg-white/[0.03] border-b border-white/5">
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
              
              <div className="relative h-44 bg-black overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#7c3aed_1px,_transparent_1px)] bg-[size:16px:16px]"></div>
                
                <div className="flex items-center justify-center h-full relative z-10">
                  <h4 className="text-4xl font-bold text-white/[0.03] uppercase tracking-[0.4em] select-none text-center px-4 leading-tight">
                    {project.title.split(' ')[0]} <br/> {idx === 0 ? 'SECURITY' : idx === 1 ? 'ALGORITHM' : 'BRIDGE'}
                  </h4>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border border-hacker-accent/5 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full border border-hacker-accent/10 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.split(', ').map((t, i) => (
                    <span key={i} className="text-[9px] font-mono font-bold text-hacker-accent uppercase tracking-widest border border-hacker-accent/20 px-2 py-0.5 rounded-sm bg-hacker-accent/5">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-slate-500 mb-8 font-light leading-relaxed min-h-[3rem]">
                  {project.description[0]}
                </p>

                <div className="bg-hacker-accent/[0.03] border border-hacker-accent/10 rounded-lg p-4 mb-8">
                  <div className="text-sm font-bold text-white">
                    {idx === 0 ? "98.4% Accuracy" : idx === 1 ? "Zero-Latency" : "10x Speed"}
                  </div>
                  <div className="text-[8px] uppercase tracking-widest text-slate-600 mt-1">
                    {idx === 0 ? "PRIMARY IMPACT" : idx === 1 ? "USER PERFORMANCE" : "LEGACY SYNC"}
                  </div>
                </div>

                <button className="w-full py-3.5 bg-white/5 border border-white/10 text-slate-400 rounded hover:bg-hacker-accent/20 hover:text-white transition-all font-mono text-[10px] uppercase tracking-[0.25em]">
                   [ Execute_App ]
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
