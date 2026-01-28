
import React from 'react';
import { RESUME_DATA } from '../constants';
import { Briefcase, GraduationCap, Rocket } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-hacker-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-2">System Logs</h2>
          <p className="font-mono text-hacker-accent text-sm italic">tail -f project_milestones.log</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-hacker-accent/20 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-32">
            {/* TP-Link */}
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0 reveal">
              <div className="flex-1 w-full md:pr-24 text-right hidden md:block">
                <div className="console-panel p-8 rounded-xl border border-white/5 bg-white/[0.02]">
                  <h3 className="text-2xl font-bold text-white mb-1">TP-Link</h3>
                  <div className="text-[10px] font-mono text-slate-600 mb-6 uppercase tracking-[0.2em]">Business Analyst Intern | 2024.03 — 2024.08</div>
                  <p className="text-sm text-slate-500 mb-6 text-right font-light leading-relaxed">
                    Lead automation initiatives for supply chain tracking, focusing on reducing operational bottlenecks.
                  </p>
                  <div className="flex justify-end gap-3">
                    <div className="bg-hacker-accent/10 px-4 py-2 rounded border border-hacker-accent/20">
                      <div className="text-sm font-bold text-slate-300">70%</div>
                      <div className="text-[8px] uppercase tracking-widest text-slate-600">Efficiency Gain</div>
                    </div>
                     <div className="bg-white/5 px-4 py-2 rounded border border-white/5">
                      <div className="text-sm font-bold text-slate-300">0</div>
                      <div className="text-[8px] uppercase tracking-widest text-slate-600">Script Failures</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="z-10 w-12 h-12 rounded-full bg-hacker-bg border-2 border-hacker-accent flex items-center justify-center text-hacker-accent shadow-[0_0_20px_rgba(124,58,237,0.3)] animate-pulse">
                <Briefcase size={20} />
              </div>

              <div className="flex-1 w-full md:pl-24 md:hidden">
                 <div className="console-panel p-6 rounded-xl border border-hacker-accent/30">
                   <h3 className="text-xl font-bold text-white mb-1">TP-Link</h3>
                   <div className="text-xs font-mono text-slate-500 mb-4 uppercase">Intern | 2024.03 — 2024.08</div>
                   <p className="text-sm text-slate-400">70% Efficiency Gain achieved through automation.</p>
                 </div>
              </div>
              <div className="flex-1 hidden md:block"></div>
            </div>

            {/* APU */}
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0 reveal">
              <div className="flex-1 hidden md:block"></div>
              
              <div className="z-10 w-12 h-12 rounded-full bg-hacker-bg border-2 border-hacker-accent flex items-center justify-center text-hacker-accent shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                <GraduationCap size={20} />
              </div>

              <div className="flex-1 w-full md:pl-24">
                <div className="console-panel p-8 rounded-xl border border-white/5 bg-white/[0.02]">
                  <h3 className="text-2xl font-bold text-white mb-1">APU University</h3>
                  <div className="text-[10px] font-mono text-slate-600 mb-6 uppercase tracking-[0.2em]">BSc Computer Science | 2022.06 — 2025.06</div>
                  <p className="text-sm text-slate-500 mb-6 font-light leading-relaxed">
                    Specialized in Data Analytics and Machine Learning. Recognized for technical excellence in large-scale R&D projects.
                  </p>
                  <div className="flex gap-3">
                    <div className="bg-hacker-accent/10 px-4 py-2 rounded border border-hacker-accent/20">
                      <div className="text-sm font-bold text-slate-300">3.47</div>
                      <div className="text-[8px] uppercase tracking-widest text-slate-600">CGPA Score</div>
                    </div>
                     <div className="bg-white/5 px-4 py-2 rounded border border-white/5">
                      <div className="text-sm font-bold text-slate-300">#1</div>
                      <div className="text-[8px] uppercase tracking-widest text-slate-600">Dean's List</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Future */}
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0 reveal">
               <div className="flex-1 w-full md:pr-24 text-right">
                <div className="console-panel p-8 rounded-xl border border-white/5 bg-white/[0.02]">
                  <h3 className="text-2xl font-bold text-white mb-1">Future Objectives</h3>
                  <div className="text-[10px] font-mono text-slate-600 mb-6 uppercase tracking-[0.2em]">Incoming Professional Phase | 2025.07 — BEYOND</div>
                  <p className="text-sm text-slate-500 mb-6 font-light leading-relaxed">
                    Scaling technical stack to include advanced Neural Networks and real-time streaming architectures.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-[9px] px-3 py-1.5 border border-emerald-500/30 text-emerald-500 font-mono uppercase rounded-sm bg-emerald-500/5 shadow-[0_0_10px_rgba(16,185,129,0.1)]">Next-Gen System Ready</span>
                  </div>
                </div>
              </div>
              
              <div className="z-10 w-12 h-12 rounded-full bg-hacker-bg border-2 border-emerald-500 flex items-center justify-center text-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <Rocket size={20} />
              </div>

              <div className="flex-1 hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
