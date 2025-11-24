import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { RESUME_DATA } from '../constants';

const Skills: React.FC = () => {
  const data = RESUME_DATA.skills.map(s => ({
    name: s.name,
    level: s.level,
    details: s.skills.join(', ')
  }));

  const COLORS = ['#3b82f6', '#6366f1', '#8b5cf6', '#ec4899', '#14b8a6'];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Technical Proficiency</h2>
        <p className="text-slate-500 mb-10">A quantitative look at my technical toolkit</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <div className="h-80 w-full bg-slate-50 rounded-2xl p-4 border border-slate-100 shadow-inner">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis dataKey="name" type="category" tick={{ fill: '#64748b', fontSize: 14 }} width={80} axisLine={false} tickLine={false} />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={32}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Detailed List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESUME_DATA.skills.map((category, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full`} style={{ backgroundColor: COLORS[idx % COLORS.length] }}></span>
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-2 py-1 bg-white border border-slate-200 text-slate-600 text-xs rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
