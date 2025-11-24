import React from 'react';
import { RESUME_DATA } from '../constants';
import { Briefcase, Calendar, Award } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <Briefcase size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Experience</h2>
            </div>

            <div className="space-y-8">
              {RESUME_DATA.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-slate-200">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-blue-500 rounded-full"></div>
                  <div className="mb-1">
                    <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                    <div className="text-blue-600 font-medium">{exp.company}</div>
                  </div>
                  <div className="flex items-center text-slate-400 text-sm mb-4">
                    <Calendar size={14} className="mr-1" />
                    {exp.duration}
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((desc, dIdx) => (
                      <li key={dIdx} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-slate-300 rounded-full shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Activities */}
          <div className="space-y-12">
            
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Education</h2>
              </div>
              
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-slate-900">{edu.school}</h3>
                    <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">
                      CGPA 3.47
                    </span>
                  </div>
                  <div className="text-slate-600 font-medium mb-1">{edu.degree}</div>
                  <div className="text-slate-400 text-sm mb-4">{edu.duration}</div>
                  <p className="text-slate-500 text-sm">
                    <span className="font-semibold text-slate-700">Core Courses: </span>
                    Data Structure, Data Management, Deep Learning, NLP, Business Intelligence.
                  </p>
                </div>
              ))}
            </div>

            {/* Activities */}
             <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                  <Award size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Activities</h2>
              </div>
              
              <div className="grid gap-4">
                {RESUME_DATA.activities.map((act, idx) => {
                  const [title, desc] = act.split(': ');
                  return (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 hover:border-amber-200 transition-colors">
                      <h4 className="font-bold text-slate-800 text-sm mb-1">{title}</h4>
                      <p className="text-slate-600 text-sm">{desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
