
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ChatBot from './components/ChatBot';
import { Terminal as TerminalIcon } from 'lucide-react';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-hacker-bg/90 backdrop-blur-xl border-b border-white/5 py-5">
        <div className="container mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 group">
             <div className="w-9 h-9 bg-hacker-accent rounded flex items-center justify-center text-white font-mono font-bold text-lg shadow-[0_0_15px_rgba(124,58,237,0.3)] group-hover:scale-110 transition-transform">YX</div>
             <span className="text-xs font-mono text-white tracking-[0.3em] uppercase hidden sm:block">Chia Yong Xiang</span>
          </div>
          <div className="flex gap-10 text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">
            <a href="#skills" className="hover:text-hacker-accent transition-colors flex items-center gap-1.5"><span className="text-hacker-accent">.</span>stack</a>
            <a href="#experience" className="hover:text-hacker-accent transition-colors flex items-center gap-1.5"><span className="text-hacker-accent">.</span>logs</a>
            <a href="#projects" className="hover:text-hacker-accent transition-colors flex items-center gap-1.5"><span className="text-hacker-accent">.</span>repo</a>
            <a href="#testimonials" className="hover:text-hacker-accent transition-colors flex items-center gap-1.5"><span className="text-hacker-accent">.</span>ping</a>
          </div>
        </div>
      </nav>

      <div id="home"><Hero /></div>
      <div id="skills"><Skills /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
      
      {/* CTA Section */}
      <section className="py-24 bg-hacker-bg border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="console-panel rounded-2xl p-12 md:p-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 border border-white/10 bg-white/[0.01]">
            <div className="flex-1">
              <h2 className="text-5xl font-bold text-white mb-6 tracking-tight leading-tight">Ready to optimize your workspace?</h2>
              <div className="flex items-center gap-4">
                 <button className="px-8 py-3 bg-white/5 text-slate-400 rounded-sm border border-white/10 font-mono text-sm hover:bg-hacker-accent hover:text-white transition-all uppercase tracking-widest">Say Hello</button>
                 <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981]"></span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Status: Available</span>
                 </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-md">
              <div className="bg-black/60 rounded-xl p-8 font-mono text-sm border border-white/10 shadow-2xl">
                <div className="flex items-center gap-3 mb-6 text-slate-600">
                   <TerminalIcon size={16} />
                   <span className="text-xs">user@admin:~$ send_email --to="chia.yx"</span>
                </div>
                <div className="flex flex-col gap-4">
                   <a href="https://linkedin.com/in/yong-xiang-chia" target="_blank" className="text-hacker-cyan hover:text-white transition-colors flex items-center justify-between group">LinkedIn <span className="opacity-0 group-hover:opacity-100 transition-opacity">--access</span></a>
                   <a href="https://github.com/AdaMC2212" target="_blank" className="text-hacker-magenta hover:text-white transition-colors flex items-center justify-between group">GitHub <span className="opacity-0 group-hover:opacity-100 transition-opacity">--clone</span></a>
                   <a href="#" className="text-emerald-500 hover:text-white transition-colors flex items-center justify-between group">Resume <span className="opacity-0 group-hover:opacity-100 transition-opacity">--download</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-hacker-bg text-[10px] font-mono text-slate-700 border-t border-white/5 uppercase tracking-[0.4em]">
        <div className="container mx-auto px-4 text-center space-y-6">
          <p>© 2024 Chia Yong Xiang — The Glass Console V3.1</p>
          <div className="flex justify-center gap-16 opacity-40">
            <span>Optimized for Recruitment</span>
            <span>Designed for Depth</span>
          </div>
        </div>
      </footer>

      <ChatBot />
    </main>
  );
};

export default App;
