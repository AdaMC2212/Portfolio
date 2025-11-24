import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <div className="container mx-auto px-4">
          <p className="mb-4 text-slate-500">
            © {new Date().getFullYear()} Chia Yong Xiang. Built with React, Tailwind & Gemini AI.
          </p>
          <div className="flex justify-center gap-6 text-sm">
             <a href="#" className="hover:text-white transition-colors">Resume</a>
             <a href="https://linkedin.com/in/yong-xiang-chia" className="hover:text-white transition-colors">LinkedIn</a>
             <a href="https://github.com/AdaMC2212" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>

      <ChatBot />
    </main>
  );
};

export default App;
