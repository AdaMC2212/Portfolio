
import React, { useEffect, useState } from 'react';
import { RESUME_DATA } from '../constants';
import { ChevronRight, ShieldCheck, Database, Zap, Binary } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedTitle, setTypedTitle] = useState('');
  
  useEffect(() => {
    let i = 0;
    const fullTitle = "> Initialize_Core_Logic";
    const interval = setInterval(() => {
      setTypedTitle(fullTitle.slice(0, i));
      i++;
      if (i > fullTitle.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-40 pb-32 min-h-screen flex items-center overflow-hidden bg-grid">
      <div className="scanline"></div>
      
      {/* Floating Interactive Bubbles (Data Nodes) */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bubble animate-float opacity-40"></div>
      <div className="absolute bottom-1/4 right-20 w-80 h-80 bubble bubble-cyan animate-float-reverse opacity-30"></div>
      <div className="absolute top-2/3 left-1/3 w-20 h-20 bubble animate-float delay-300 opacity-20"></div>

      {/* Background Profile Ghost Image */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] md:opacity-[0.06] mix-blend-screen"
        style={{
          backgroundImage: `url(${RESUME_DATA.profileImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) contrast(150%)'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 text-left">
            <div className="flex items-center gap-3 mb-8 reveal">
              <span className="flex h-2 w-2 rounded-full bg-hacker-accent animate-ping"></span>
              <span className="text-[10px] font-mono text-slate-500 tracking-[0.4em] uppercase">Intelligence_System: Online</span>
            </div>
            
            <h2 className="text-xl md:text-2xl font-mono text-hacker-magenta mb-6 glow-text-purple reveal delay-100">
              {typedTitle}<span className="cursor"></span>
            </h2>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tighter reveal delay-200">
              Optimizing the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hacker-cyan to-hacker-accent">Human-Data</span><br/>
              <span className="glow-text-purple">Loop.</span>
            </h1>
            
            <p className="text-slate-400 text-xl leading-relaxed mb-12 max-w-xl font-light reveal delay-300">
              Bridging complex analytics and operational logic to automate workflows with precision. Specializing in high-impact chatbot architecture and predictive modelling.
            </p>

            <div className="flex flex-wrap gap-6 reveal delay-400">
              <a href="#projects" className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-slate-300 rounded hover:bg-hacker-accent/20 transition-all font-mono text-sm group">
                [ Execute_Impact_Repo ] <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-8 px-6">
                <div className="flex flex-col">
                  <span className="text-hacker-cyan font-mono text-lg font-bold">98%</span>
                  <span className="text-[8px] text-slate-600 uppercase tracking-widest">Accuracy_Rate</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-hacker-magenta font-mono text-lg font-bold">14k+</span>
                  <span className="text-[8px] text-slate-600 uppercase tracking-widest">Daily_Inquiries</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full lg:max-w-2xl reveal delay-500">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Biometric Scan Module */}
              <div className="md:col-span-5 console-panel rounded-2xl overflow-hidden border border-white/5 bg-black/60 relative group data-node">
                 <div className="console-header px-4 py-2.5 flex items-center justify-between bg-white/[0.02]">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Subject_id.2212</span>
                    <ShieldCheck size={12} className="text-hacker-cyan" />
                 </div>
                 <div className="relative aspect-[4/5] overflow-hidden">
                    <img 
                      src={RESUME_DATA.profileImage} 
                      alt="Biometric Scan" 
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hacker-bg via-transparent to-transparent opacity-80"></div>
                    
                    {/* Scan Line Animation */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-hacker-cyan shadow-[0_0_20px_#06b6d4] animate-scanline-fast"></div>
                    
                    <div className="absolute bottom-6 left-6 right-6">
                       <div className="flex justify-between items-end mb-2">
                          <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">A_CHIA</span>
                          <span className="text-[8px] font-mono text-hacker-cyan">SYNC: 100%</span>
                       </div>
                       <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-hacker-cyan animate-pulse"></div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Live Intelligence Module */}
              <div className="md:col-span-7 flex flex-col gap-6">
                <div className="console-panel rounded-2xl p-8 border border-white/5 bg-black/40 flex-1 data-node">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-hacker-accent/10 text-hacker-accent rounded-xl">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold tracking-tight">Rapid Deployment</h4>
                      <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Agile_Work_Philosophy</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    Transforming raw stakeholder needs into technical blueprints. Proven ability to adapt to high-volume ecosystems (Shopee) with zero downtime.
                  </p>
                </div>

                <div className="console-panel rounded-2xl p-6 border border-white/5 bg-black/40 flex items-center gap-6 data-node">
                  <Binary className="text-hacker-cyan animate-pulse" size={32} />
                  <div className="flex-1">
                    <div className="flex justify-between text-[10px] font-mono mb-2">
                      <span className="text-slate-500 uppercase">Automation_Confidence</span>
                      <span className="text-hacker-cyan">85%</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                       <div className="w-[85%] h-full bg-gradient-to-r from-hacker-cyan to-hacker-accent"></div>
                    </div>
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
