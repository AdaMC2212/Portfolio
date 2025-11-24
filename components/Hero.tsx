import React from 'react';
import { RESUME_DATA } from '../constants';
import { Mail, Github, Linkedin, MapPin, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const { name, title, summary, contact } = RESUME_DATA;

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold tracking-wide uppercase">
            Portfolio
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-4">
            {name}
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-600 font-medium mb-6">
            {title}
          </h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            {summary}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-slate-500 text-sm">
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{contact.location}</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-slate-300 rounded-full"></div>
            <div>
              {contact.phone}
            </div>
            <div className="hidden md:block w-1 h-1 bg-slate-300 rounded-full"></div>
             <div>
              {contact.email}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
