
import React from 'react';
import { RESUME_DATA } from '../constants';
import { Briefcase, GraduationCap, Building2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-hacker-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-2">System Logs</h2>
          <p className="font-mono text-hacker-accent text-sm italic">tail -f career_evolution.log</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-hacker-accent/20 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-32">
            {/* Shopee - Latest */}
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0 reveal">
              <div className="flex-1 w-full md:pr-24 text-right hidden md:block">
                <div className="console-panel p-8 rounded-xl border border-hacker-accent/30 bg-hacker-accent/5">
                  <h3 className="text-2xl font-bold text-white mb-1">Shopee</h3>
                  <div className="text-[10px] font-mono text-hacker-accent mb-6 uppercase tracking-[0.2em]">Chatbot Business Analyst | Aug 2025 — Present</div>
                  <p className="text-sm text-slate-400 mb-6 text-right font-light leading-relaxed">
                    Optimizing chatbot script efficiency and engineering technical solutions to automate manual operational workflows.
                  </p>
                  <div className="flex justify-end gap-3">
                    <div className="bg-hacker-accent/20 px-4 py-2 rounded border border-hacker-accent/30">
                      <div className="text-sm font-bold text-hacker-accent">ACTIVE</div>
                      <div className="text-[8px] uppercase tracking-widest text-slate-500">Node Status</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="z-10 w-12 h-12 rounded-full bg-hacker-bg border-2 border-hacker-accent flex items-center justify-center text-hacker-accent shadow-[0_0_20px_rgba(124,58,237,0.3)] animate-pulse">
                <Building2 size={20} />
              </div>

              <div className="flex-1 w-full md:pl-24 md:hidden">
                 <div className="console-panel p-6 rounded-xl border border-hacker-accent/30 bg-hacker-accent/5">
                   <h3 className="text-xl font-bold text-white mb-1">Shopee</h3>
                   <div className="text-xs font-mono text-hacker-accent mb-4 uppercase">Chatbot Analyst | 2025 — Present</div>
                   <p className="text-sm text-slate-400">Driving deflection rates and user satisfaction through data-driven conversation flows.</p>
                 </div>
              </div>
              <div className="flex-1 hidden md:block"></div>
            </div>

            {/* TP-Link */}
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0 reveal">
              <div className="flex-1 hidden md:block"></div>
              
              <div className="z-10 w-12 h-12 rounded-full bg-hacker-bg border-2 border-hacker-cyan flex items-center justify-center text-hacker-cyan shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <Briefcase size={20} />
              </div>

              <div className="flex-1 w-full md:pl-24">
                <div className="console-panel p-8 rounded-xl border border-white/10 bg-white/[0.02]">
                  <h3 className="text-2xl font-bold text-white mb-1">TP-Link</h3>
                  <div className="text-[10px] font-mono text-slate-600 mb-6 uppercase tracking-[0.2em]">Marketing & Business Analyst | 2024 — 2024</div>
                  <p className="text-sm text-slate-500 mb-6 font-light leading-relaxed">
                    Summarized performance of online sales and marketing activities. Aided in flagship store management and inventory monitoring.
                  </p>
                  <div className="flex gap-3">
                    <div className="bg-hacker-cyan/10 px-4 py-2 rounded border border-hacker-cyan/20">
                      <div className="text-sm font-bold text-hacker-cyan">COMPLETED</div>
                      <div className="text-[8px] uppercase tracking-widest text-slate-600">Phase Result</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* APU */}
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0 reveal">
               <div className="flex-1 w-full md:pr-24 text-right">
                <div className="console-panel p-8 rounded-xl border border-white/10 bg-white/[0.02]">
                  <h3 className="text-2xl font-bold text-white mb-1">Asia Pacific University</h3>
                  <div className="text-[10px] font-mono text-slate-600 mb-6 uppercase tracking-[0.2em]">BSc (Hons) Computer Science | 2022 — 2025</div>
                  <p className="text-sm text-slate-500 mb-6 font-light leading-relaxed text-right">
                    Specialism in Data Analytics. Core focus on Deep Learning, NLP, and Business Intelligence systems with a 3.47 CGPA.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-[9px] px-3 py-1.5 border border-emerald-500/30 text-emerald-500 font-mono uppercase rounded-sm bg-emerald-500/5">Specialism: Data Analytics</span>
                  </div>
                </div>
              </div>
              
              <div className="z-10 w-12 h-12 rounded-full bg-hacker-bg border-2 border-emerald-500 flex items-center justify-center text-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <GraduationCap size={20} />
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
