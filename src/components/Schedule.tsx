import { motion } from 'motion/react';
import { SCHEDULE } from '../constants';

export default function Schedule() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Display Board */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover scale-110 grayscale brightness-50 contrast-125" 
            alt="Schedule Display Board"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-red font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block">Operations Flow</span>
            <h1 className="text-7xl md:text-9xl font-black italic uppercase leading-none tracking-tighter">
              Timet<span className="text-stroke">able</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Detailed Schedule Content */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-6">War <span className="text-stroke">Journal</span></h2>
            <p className="text-gray-500 uppercase tracking-widest text-[10px] md:text-xs max-w-2xl mx-auto font-bold leading-relaxed">
              Our training cycles are designed for maximum efficiency. Align your discipline with our schedule and dominate your objectives.
            </p>
          </div>

          <div className="border border-white/5 overflow-hidden">
            <div className="grid grid-cols-7 bg-zinc-900 border-b border-white/10 uppercase text-[10px] font-black tracking-[0.2em] italic">
              <div className="p-6 border-r border-white/10 text-brand-red">Time</div>
              <div className="p-6 border-r border-white/10 hidden sm:block">Mon</div>
              <div className="p-6 border-r border-white/10 hidden sm:block">Tue</div>
              <div className="p-6 border-r border-white/10 hidden sm:block">Wed</div>
              <div className="p-6 border-r border-white/10 hidden sm:block">Thu</div>
              <div className="p-6 border-r border-white/10 hidden sm:block">Fri</div>
              <div className="p-6 hidden sm:block">Sat</div>
              <div className="p-6 sm:hidden col-span-6">Operations Schedule</div>
            </div>
            {SCHEDULE.map((row, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-7 border-b border-white/5 hover:bg-white/[0.02] transition-colors group"
              >
                <div className="p-8 border-r border-white/10 font-black italic text-sm text-gray-500 group-hover:text-brand-red transition-colors bg-zinc-950 sm:bg-transparent">{row.time}</div>
                {[row.mon, row.tue, row.wed, row.thu, row.fri, row.sat].map((cell, idx) => (
                  <div key={idx} className="p-8 border-r border-white/5 last:border-r-0 flex flex-col justify-center gap-1">
                    <span className="font-black uppercase text-[11px] italic tracking-tight group-hover:text-white transition-colors">{cell}</span>
                    <span className="text-[9px] text-gray-600 uppercase font-bold group-hover:text-brand-red/60 italic">Elite Session</span>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-12">
            <div className="p-10 border border-white/5 bg-zinc-950">
              <h3 className="text-xl font-black italic uppercase mb-4 text-brand-red">Open Gym Hours</h3>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed mb-6">
                Iron Reign is accessible 24/7 for all members. These scheduled sessions represent coached elite classes, but the forge is always open for individual discipline.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px flex-grow bg-white/10" />
                <span className="text-[10px] text-white font-black italic uppercase">Always Active</span>
              </div>
            </div>
            <div className="p-10 border border-brand-red/20 bg-zinc-950">
              <h3 className="text-xl font-black italic uppercase mb-4 text-white">Private Coaching</h3>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed mb-6">
                One-on-one sessions with our elite mentors can be scheduled outside of these group war zones. Contact operations to book your private briefing.
              </p>
              <button className="text-brand-red font-black uppercase tracking-[0.3em] text-[10px] italic hover:text-white transition-colors">
                Book Assignment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
