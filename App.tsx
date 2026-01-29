
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ChatBot from './components/ChatBot';
import { Terminal as TerminalIcon, Github, Linkedin, FileDown } from 'lucide-react';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-hacker-bg selection:bg-hacker-accent/50 text-slate-300">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-hacker-bg/90 backdrop-blur-2xl border-b border-white/5 py-6">
        <div className="container mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
             <div className="w-10 h-10 bg-hacker-accent rounded flex items-center justify-center text-white font-mono font-bold text-xl shadow-[0_0_20px_rgba(124,58,237,0.4)] group-hover:scale-110 transition-transform">YX</div>
             <div className="flex flex-col">
                <span className="text-[11px] font-mono text-white tracking-[0.4em] uppercase font-bold">Chia Yong Xiang</span>
                <span className="text-[8px] font-mono text-hacker-cyan tracking-widest uppercase">System_Analyst</span>
             </div>
          </div>
          <div className="hidden md:flex gap-12 text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">
            <a href="#skills" className="hover:text-hacker-accent transition-all flex items-center gap-2 group"><span className="text-hacker-accent opacity-50 group-hover:opacity-100">01.</span>stack</a>
            <a href="#experience" className="hover:text-hacker-accent transition-all flex items-center gap-2 group"><span className="text-hacker-accent opacity-50 group-hover:opacity-100">02.</span>logs</a>
            <a href="#projects" className="hover:text-hacker-accent transition-all flex items-center gap-2 group"><span className="text-hacker-accent opacity-50 group-hover:opacity-100">03.</span>repo</a>
            <a href="#testimonials" className="hover:text-hacker-accent transition-all flex items-center gap-2 group"><span className="text-hacker-accent opacity-50 group-hover:opacity-100">04.</span>ping</a>
          </div>
        </div>
      </nav>

      <div id="home"><Hero /></div>
      <div id="skills"><Skills /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
      
      {/* Contact Section - The Handshake */}
      <section className="py-32 bg-hacker-bg border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="reveal console-panel rounded-3xl p-12 md:p-24 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 border border-white/10 bg-white/[0.01]">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-1 px-1 bg-hacker-accent rounded-full"></div>
                 <span className="text-xs font-mono text-hacker-accent uppercase tracking-[0.5em]">Initiate_Handshake</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">Ready to evolve your workspace?</h2>
              <div className="flex items-center gap-8">
                 <a href="mailto:adamchia2212@gmail.com" className="px-10 py-4 bg-hacker-accent text-white rounded-lg font-mono text-sm hover:bg-hacker-accent/80 transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)]">
                    Send_Inquiry
                 </a>
                 <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_15px_#10b981] animate-pulse"></span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Node_Active</span>
                 </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-md">
              <div className="bg-black/80 rounded-2xl p-10 font-mono text-sm border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                <div className="flex items-center gap-4 mb-10 text-slate-700">
                   <TerminalIcon size={18} />
                   <span className="text-xs">chia.yx@system:~$ ls --social</span>
                </div>
                <div className="flex flex-col gap-6">
                   <a href="https://linkedin.com/in/yong-xiang-chia" target="_blank" className="text-slate-400 hover:text-hacker-cyan transition-all flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                         <Linkedin size={18} /> <span>LinkedIn</span>
                      </div>
                      <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">access_link</span>
                   </a>
                   <a href="https://github.com/AdaMC2212" target="_blank" className="text-slate-400 hover:text-hacker-magenta transition-all flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                         <Github size={18} /> <span>GitHub</span>
                      </div>
                      <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">clone_repo</span>
                   </a>
                   <a href="#" className="text-slate-400 hover:text-emerald-500 transition-all flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                         <FileDown size={18} /> <span>Resume</span>
                      </div>
                      <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">fetch_binary</span>
                   </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-hacker-bg text-[9px] font-mono text-slate-800 border-t border-white/5 uppercase tracking-[0.6em]">
        <div className="container mx-auto px-4 text-center space-y-8">
          <p>© 2024 Chia Yong Xiang — The Glass Console V4.0</p>
          <div className="flex justify-center gap-20 opacity-30">
            <span>Optimized_for_Recruitment</span>
            <span>Latency_0ms</span>
            <span>Data_Driven_Legacy</span>
          </div>
        </div>
      </footer>

      <ChatBot />
    </main>
  );
};

export default App;
