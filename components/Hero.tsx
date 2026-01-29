
import React, { useEffect, useState } from 'react';
import { RESUME_DATA } from '../constants';
import { ChevronRight, ShieldCheck } from 'lucide-react';

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
      
      {/* Background Profile Ghost Image */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] md:opacity-[0.05] mix-blend-screen"
        style={{
          backgroundImage: `url(${RESUME_DATA.profileImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) contrast(150%)'
        }}
      ></div>

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

          <div className="flex-1 w-full lg:max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Biometric Scan Module */}
              <div className="md:col-span-5 console-panel rounded-xl overflow-hidden border border-white/5 bg-black/60 relative group">
                 <div className="console-header px-3 py-1.5 flex items-center justify-between bg-white/[0.02]">
                    <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">bio_scan.v2</span>
                    <ShieldCheck size={10} className="text-hacker-cyan" />
                 </div>
                 <div className="relative aspect-square md:aspect-auto md:h-64 overflow-hidden">
                    <img 
                      src={RESUME_DATA.profileImage} 
                      alt="Biometric Scan" 
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hacker-bg via-transparent to-transparent opacity-60"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#05060f_100%)] opacity-40"></div>
                    
                    {/* Scan Line Animation */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-hacker-cyan shadow-[0_0_15px_#06b6d4] animate-scanline-fast"></div>
                    
                    <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1">
                       <div className="flex justify-between items-end">
                          <span className="text-[8px] font-mono text-hacker-cyan uppercase tracking-tighter">Subject_ID: 2212</span>
                          <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest leading-none">A_CHIA</span>
                       </div>
                       <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="w-4/5 h-full bg-hacker-cyan animate-pulse"></div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Code Snippet Module */}
              <div className="md:col-span-7 console-panel rounded-xl overflow-hidden border border-white/5 bg-black/40">
                <div className="console-header px-4 py-2 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60"></div>
                  </div>
                  <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">profile_v3.sys</span>
                </div>
                <div className="p-6 font-mono text-[11px] leading-relaxed overflow-x-auto">
                  <div className="flex gap-4 mb-3">
                    <span className="text-slate-700">01</span>
                    <span><span className="code-keyword">class</span> <span className="text-hacker-cyan">Engineer</span> {'{'}</span>
                  </div>
                  <div className="flex gap-4 mb-1">
                    <span className="text-slate-700">02</span>
                    <span className="pl-4">name: <span className="code-string">'Chia Yong Xiang'</span>,</span>
                  </div>
                  <div className="flex gap-4 mb-1">
                    <span className="text-slate-700">03</span>
                    <span className="pl-4">focus: [ <span className="code-string">'Automation'</span>, <span className="code-string">'Analytics'</span> ],</span>
                  </div>
                  <div className="flex gap-4 mb-1">
                    <span className="text-slate-700">04</span>
                    <span className="pl-4">status: <span className="code-keyword">true</span></span>
                  </div>
                  <div className="flex gap-4 mb-3">
                    <span className="text-slate-700">05</span>
                    <span>{'}'}</span>
                  </div>
                  <div className="mt-4 flex gap-4">
                    <span className="text-slate-700">06</span>
                    <span className="flex items-center">$ <span className="cursor bg-white/80"></span></span>
                  </div>
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
