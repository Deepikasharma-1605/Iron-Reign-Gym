import { motion } from 'motion/react';
import { PROGRAMS } from '../constants';
import { ChevronRight } from 'lucide-react';

export default function Programs() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Display Board */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover scale-110 grayscale brightness-50 contrast-125" 
            alt="Programs Display Board"
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
            <span className="text-brand-red font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block">Advanced Training</span>
            <h1 className="text-7xl md:text-9xl font-black italic uppercase leading-none tracking-tighter">
              Prog<span className="text-stroke">rams</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Alternating Programs List */}
      <div className="py-20 space-y-32">
        {PROGRAMS.map((program, i) => (
          <section key={i} className="container mx-auto px-6 overflow-hidden">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`${i % 2 !== 0 ? 'lg:order-2' : ''} space-y-6`}
              >
                <div className="flex items-center gap-4">
                  <div className="h-1 w-12 bg-brand-red" />
                  <span className="text-white/40 font-black italic text-xl">0{i + 1}</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-none tracking-tighter">
                  {i % 2 === 0 ? (
                    <>{program.title.split(' ')[0]} <span className="text-stroke">{program.title.split(' ').slice(1).join(' ')}</span></>
                  ) : (
                    <><span className="text-stroke">{program.title.split(' ')[0]}</span> {program.title.split(' ').slice(1).join(' ')}</>
                  )}
                </h2>
                <p className="text-gray-400 font-medium uppercase tracking-[0.1em] text-[10px] md:text-sm leading-relaxed max-w-xl">
                  {program.description}
                </p>
              </motion.div>

              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`${i % 2 !== 0 ? 'lg:order-1' : ''} relative`}
              >
                <div className={`absolute inset-0 border border-brand-red ${i % 2 === 0 ? 'translate-x-4 translate-y-4' : '-translate-x-4 -translate-y-4'} -z-10`} />
                <div className="aspect-video lg:aspect-[4/3] bg-zinc-900 border border-white/10 overflow-hidden shadow-2xl">
                  <img 
                    src={program.image} 
                    className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:scale-105 transition-all duration-1000" 
                    alt={program.title}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className={`absolute ${i % 2 === 0 ? '-bottom-4 -right-4' : '-bottom-4 -left-4'} bg-brand-red p-4 hidden md:block`}>
                  <span className="text-xl font-black italic block uppercase tracking-tighter leading-none">WAR ZONE</span>
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
