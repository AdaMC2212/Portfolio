
import React from 'react';
import { FileText, Cpu, Database, Layout, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-hacker-bg relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-2">Tech Stack</h2>
          <p className="font-mono text-hacker-accent text-sm">cat requirements.txt</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="reveal console-panel p-6 rounded-xl border border-white/10 bg-white/[0.01] hover:border-hacker-accent/30 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-2.5 bg-hacker-accent/10 text-hacker-accent rounded-lg border border-hacker-accent/20">
                  <Terminal size={22} />
                </div>
                <span className="text-[10px] font-mono text-slate-700 uppercase tracking-widest">v3.11</span>
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">Python Core</h3>
              <p className="text-xs text-slate-600 font-mono leading-relaxed">Pandas, NumPy, Scikit-learn, Flask</p>
            </div>

            <div className="reveal console-panel p-6 rounded-xl border border-white/10 bg-white/[0.01] hover:border-hacker-cyan/30 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-2.5 bg-hacker-cyan/10 text-hacker-cyan rounded-lg border border-hacker-cyan/20">
                  <Database size={22} />
                </div>
                <span className="text-[10px] font-mono text-slate-700 uppercase tracking-widest">T-SQL</span>
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">Data Architecture</h3>
              <p className="text-xs text-slate-600 font-mono leading-relaxed">MSSQL, DB Design, Normalization</p>
            </div>

            <div className="reveal console-panel p-6 rounded-xl border border-white/10 bg-white/[0.01] hover:border-emerald-500/30 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-2.5 bg-emerald-500/10 text-emerald-500 rounded-lg border border-emerald-500/20">
                  <Cpu size={22} />
                </div>
                <span className="text-[10px] font-mono text-slate-700 uppercase tracking-widest">Viz</span>
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">Intelligence</h3>
              <p className="text-xs text-slate-600 font-mono leading-relaxed">Tableau, PowerBI, Matplotlib</p>
            </div>

            <div className="reveal console-panel p-6 rounded-xl border border-white/10 bg-white/[0.01] hover:border-hacker-magenta/30 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-2.5 bg-hacker-magenta/10 text-hacker-magenta rounded-lg border border-hacker-magenta/20">
                  <Layout size={22} />
                </div>
                <span className="text-[10px] font-mono text-slate-700 uppercase tracking-widest">Systems</span>
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">Development</h3>
              <p className="text-xs text-slate-600 font-mono leading-relaxed">Java, C++, R, Deep Learning</p>
            </div>
          </div>

          <div className="reveal">
            <div className="console-panel rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
              <div className="console-header px-4 py-3 flex items-center gap-3 border-b border-white/10 bg-white/5">
                <FileText size={16} className="text-slate-500" />
                <span className="text-[11px] font-mono text-slate-400">requirements.txt — Editor</span>
              </div>
              <div className="p-8 font-mono text-xs md:text-sm leading-relaxed text-slate-500">
                <div className="mb-6 opacity-40"># Internal dependencies for production-ready solutions</div>
                <div className="flex gap-4 mb-1.5">
                   <span className="text-hacker-magenta">python-core</span><span className="text-slate-700">==</span><span className="text-hacker-cyan">3.11.0</span>
                </div>
                <div className="flex gap-4 mb-1.5">
                   <span className="text-hacker-magenta">pandas</span><span className="text-slate-700">&gt;=</span><span className="text-hacker-cyan">2.0.0</span>
                </div>
                <div className="flex gap-4 mb-1.5">
                   <span className="text-hacker-magenta">scikit-learn</span><span className="text-slate-700">==</span><span className="text-hacker-cyan">1.2.2</span>
                </div>
                <div className="flex gap-4 mb-1.5">
                   <span className="text-hacker-magenta">sql-optimizer</span><span className="text-slate-700">==</span><span className="text-hacker-cyan">latest</span>
                </div>
                <div className="flex gap-4 mb-1.5">
                   <span className="text-hacker-magenta">tableau-sdk</span><span className="text-slate-700">==</span><span className="text-hacker-cyan">2023.1</span>
                </div>
                <div className="flex gap-4 mb-6">
                   <span className="text-hacker-magenta">automation-engine</span><span className="text-slate-700">==</span><span className="text-hacker-cyan">v2.0-beta</span>
                </div>
                <div className="opacity-40"># End of requirements</div>
                
                <div className="mt-12 pt-4 border-t border-white/10 flex justify-between text-[9px] text-slate-700 uppercase tracking-widest">
                  <span>UTF-8  Line 14, Col 1</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
