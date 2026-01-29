
import React from 'react';
import { RESUME_DATA } from '../constants';
import { Briefcase, GraduationCap, Building2, Activity } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-hacker-bg overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="mb-24 flex items-end justify-between reveal">
          <div>
            <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">Deployment Logs</h2>
            <p className="font-mono text-hacker-accent text-sm uppercase tracking-widest">tail -f career_evolution.sys</p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-slate-800 font-mono text-[10px] uppercase">
             <Activity size={14} className="text-hacker-cyan animate-pulse" />
             <span>Monitoring Real-time History</span>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-hacker-accent/40 via-hacker-cyan/40 to-emerald-500/40 -translate-x-1/2 hidden md:block opacity-30"></div>

          <div className="space-y-40">
            {/* Shopee - Latest Deployment */}
            <div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-0 reveal">
              <div className="flex-1 w-full md:pr-24 md:text-right">
                <div className="console-panel p-10 rounded-2xl border border-hacker-accent/30 bg-hacker-accent/[0.03] group hover:border-hacker-accent transition-all duration-500">
                  <div className="text-[10px] font-mono text-hacker-accent mb-4 uppercase tracking-[0.3em] font-bold">LATEST_ACTIVE_DEPLOYMENT</div>
                  <h3 className="text-3xl font-bold text-white mb-2">Shopee</h3>
                  <div className="text-xs font-mono text-slate-500 mb-8 uppercase">Chatbot Business Analyst | Aug 2025 — Present</div>
                  <p className="text-sm text-slate-400 mb-8 font-light leading-relaxed">
                    Analyzing friction points in high-volume conversation flows and engineering automation scripts to eliminate manual CS bottlenecks.
                  </p>
                  <div className="flex md:justify-end gap-3">
                    <span className="text-[9px] px-3 py-1.5 border border-hacker-accent/20 text-hacker-accent font-mono uppercase rounded-sm bg-hacker-accent/5">NLP Optimization</span>
                    <span className="text-[9px] px-3 py-1.5 border border-hacker-accent/20 text-hacker-accent font-mono uppercase rounded-sm bg-hacker-accent/5">Script Engineering</span>
                  </div>
                </div>
              </div>
              
              <div className="z-10 w-16 h-16 rounded-full bg-hacker-bg border-2 border-hacker-accent flex items-center justify-center text-hacker-accent shadow-[0_0_30px_rgba(124,58,237,0.4)] animate-pulse shrink-0">
                <Building2 size={24} />
              </div>

              <div className="flex-1 hidden md:block"></div>
            </div>

            {/* TP-Link - Archives */}
            <div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-0 reveal">
              <div className="flex-1 hidden md:block"></div>
              
              <div className="z-10 w-16 h-16 rounded-full bg-hacker-bg border-2 border-hacker-cyan flex items-center justify-center text-hacker-cyan shadow-[0_0_30px_rgba(6,182,212,0.3)] shrink-0">
                <Briefcase size={24} />
              </div>

              <div className="flex-1 w-full md:pl-24">
                <div className="console-panel p-10 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-hacker-cyan/30 transition-all duration-500">
                  <div className="text-[10px] font-mono text-slate-700 mb-4 uppercase tracking-[0.3em] font-bold">ARCHIVE_LOG.2024</div>
                  <h3 className="text-3xl font-bold text-white mb-2">TP-Link</h3>
                  <div className="text-xs font-mono text-slate-500 mb-8 uppercase">Marketing & Business Analyst Intern| Mar 2024 — Aug 2024</div>
                  <p className="text-sm text-slate-500 mb-8 font-light leading-relaxed">
                    Designed complex data reporting structures to visualize flagship store performance. Identified core growth drivers via competitive online landscape analysis.
                  </p>
                  <div className="flex gap-3">
                    <span className="text-[9px] px-3 py-1.5 border border-white/10 text-slate-600 font-mono uppercase rounded-sm">Market Intelligence</span>
                    <span className="text-[9px] px-3 py-1.5 border border-white/10 text-slate-600 font-mono uppercase rounded-sm">Inventory_Mgmt</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Deployment */}
            <div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-0 reveal">
               <div className="flex-1 w-full md:pr-24 md:text-right">
                <div className="console-panel p-10 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-emerald-500/30 transition-all duration-500">
                  <div className="text-[10px] font-mono text-slate-700 mb-4 uppercase tracking-[0.3em] font-bold">CORE_FOUNDATION</div>
                  <h3 className="text-3xl font-bold text-white mb-2">Asia Pacific University</h3>
                  <div className="text-xs font-mono text-slate-500 mb-8 uppercase">BSc (Hons) Computer Science | 2022 — 2025</div>
                  <p className="text-sm text-slate-500 mb-8 font-light leading-relaxed">
                    Specialized in high-density Data Analytics. Developed deep expertise in Deep Learning, Text Analysis, and Relational Data Management.
                  </p>
                  <div className="flex md:justify-end">
                    <div className="bg-emerald-500/10 px-6 py-2 rounded-lg border border-emerald-500/20">
                      <div className="text-sm font-bold text-emerald-500">GPA 3.47 / 4.0</div>
                      <div className="text-[8px] uppercase tracking-widest text-slate-600">Verification_Hash: Verified</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="z-10 w-16 h-16 rounded-full bg-hacker-bg border-2 border-emerald-500 flex items-center justify-center text-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.3)] shrink-0">
                <GraduationCap size={24} />
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
