
import React, { useEffect, useState } from 'react';
import { RESUME_DATA } from '../constants';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedTitle, setTypedTitle] = useState('');
  
  useEffect(() => {
    let i = 0;
    const fullTitle = "> Start_Engine";
    const interval = setInterval(() => {
      setTypedTitle(fullTitle.slice(0, i));
      i++;
      if (i > fullTitle.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 min-h-screen flex items-center overflow-hidden bg-grid">
      <div className="scanline"></div>
      
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-hacker-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-hacker-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1 text-left">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-hacker-accent animate-ping"></span>
              <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">System_Status: Optimal</span>
            </div>
            
            <h2 className="text-2xl font-mono text-hacker-magenta mb-4 glow-text-purple">
              {typedTitle}<span className="cursor"></span>
            </h2>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Engineering <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hacker-cyan/80 to-hacker-accent">Efficiency</span> through <br/>
              <span className="glow-text-purple">Data.</span>
            </h1>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl font-light">
              Analyzing operational frictions and automating manual workflows with terminal-grade precision. Specialized in transforming raw complexity into streamlined automation.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-slate-300 rounded hover:bg-hacker-accent/20 transition-all font-mono text-sm group">
                [ View_Repo ] <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-hacker-accent/10 border border-hacker-accent/30 text-hacker-accent rounded hover:bg-hacker-accent/20 transition-all font-mono text-sm">
                Access_Logs
              </button>
            </div>
          </div>

          <div className="flex-1 w-full lg:max-w-xl">
            <div className="console-panel rounded-xl overflow-hidden border border-white/5">
              <div className="console-header px-4 py-2 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60"></div>
                </div>
                <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">profile_v3.sys</span>
              </div>
              <div className="p-8 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto bg-black/40">
                <div className="flex gap-6 mb-4">
                  <span className="text-slate-700">01</span>
                  <span><span className="code-keyword">class</span> <span className="text-hacker-cyan">Engineer</span> {'{'}</span>
                </div>
                <div className="flex gap-6 mb-1">
                  <span className="text-slate-700">02</span>
                  <span className="pl-4">name: <span className="code-string">'Chia Yong Xiang'</span> ,</span>
                </div>
                <div className="flex gap-6 mb-1">
                  <span className="text-slate-700">03</span>
                  <span className="pl-4">focus: [ <span className="code-string">'Automation'</span> , <span className="code-string">'Analytics'</span> ],</span>
                </div>
                <div className="flex gap-6 mb-1">
                  <span className="text-slate-700">04</span>
                  <span className="pl-4">status: <span className="code-keyword">true</span></span>
                </div>
                <div className="flex gap-6 mb-4">
                  <span className="text-slate-700">05</span>
                  <span>{'}'}</span>
                </div>
                <div className="mt-4 flex gap-6">
                  <span className="text-slate-700">06</span>
                  <span className="flex items-center">$ <span className="cursor bg-white/80"></span></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
