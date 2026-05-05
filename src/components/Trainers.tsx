import { motion, AnimatePresence } from 'motion/react';
import { TRAINERS } from '../constants';
import { useState } from 'react';
import { X, Trophy, Target, Zap } from 'lucide-react';

interface TrainersProps {
  showDisplayBoard?: boolean;
}

export default function Trainers({ showDisplayBoard = true }: TrainersProps) {
  const [selectedTrainer, setSelectedTrainer] = useState<typeof TRAINERS[0] | null>(null);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Display Board */}
      {showDisplayBoard && (
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop" 
              className="w-full h-full object-cover scale-110 grayscale brightness-50 contrast-125" 
              alt="Trainers Display Board"
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
              <span className="text-brand-red font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block">The Faculty</span>
              <h1 className="text-7xl md:text-9xl font-black italic uppercase leading-none tracking-tighter">
                Trai<span className="text-stroke">ners</span>
              </h1>
            </motion.div>
          </div>
        </section>
      )}

      {/* Alternating Trainers List - Only shown when in full Trainers Page view */}
      {showDisplayBoard && (
        <div className="py-24 space-y-32 bg-black">
          {TRAINERS.map((trainer, i) => (
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
                    <span className="text-white/40 font-black italic text-xl">FACULTY 0{i + 1}</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-none tracking-tighter">
                    {trainer.name.split(' ')[0]} <span className="text-stroke">{trainer.name.split(' ').slice(1).join(' ')}</span>
                  </h2>
                  <span className="text-brand-red font-bold uppercase tracking-widest text-xs block">{trainer.specialty}</span>
                  <p className="text-gray-400 font-medium uppercase tracking-[0.1em] text-[10px] md:text-sm leading-relaxed max-w-xl">
                    {trainer.bio}
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
                  <div className="aspect-[4/5] bg-zinc-900 border border-white/10 overflow-hidden shadow-2xl">
                    <img 
                      src={trainer.image} 
                      className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:scale-105 transition-all duration-1000" 
                      alt={trainer.name}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </div>
            </section>
          ))}
        </div>
      )}

      <div className="relative py-32 flex items-center justify-center min-h-[900px]">
        {/* Background Decorative Elements */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10 min-h-[900px] md:min-h-[1000px] flex flex-col items-center">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-brand-red font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block">Elite Faculty</span>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">Master <span className="text-stroke">Mentors</span></h2>
          </div>

        {/* Orbit System */}
        <div className="relative w-full flex-grow flex items-center justify-center">
          {TRAINERS.map((trainer, i) => {
            const angle = (i * 360) / TRAINERS.length - 90; // Starting from top
            const radius = window.innerWidth < 768 ? 200 : 380; 
            
            return (
              <motion.div
                key={i}
                className="absolute pointer-events-none"
                initial={{ rotate: angle }}
                animate={{ 
                  rotate: angle + 360 
                }}
                transition={{ 
                  duration: 40, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{ width: radius * 2, height: radius * 2 }}
              >
                <div 
                  className="absolute p-4 top-0 left-1/2 -translate-x-1/2"
                  style={{ transform: `rotate(${-angle}deg)` }}
                >
                  <motion.div
                    animate={{ rotate: -(360) }} // Counter-rotate to stay upright
                    transition={{ 
                      duration: 40, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setSelectedTrainer(trainer)}
                    className="relative group/bubble pointer-events-auto cursor-pointer"
                  >
                    {/* Bubble */}
                    <div className="w-32 h-32 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-brand-red/30 group-hover/bubble:border-brand-red transition-all duration-500 shadow-[0_0_30px_rgba(220,38,38,0.2)] group-hover/bubble:shadow-[0_0_50px_rgba(220,38,38,0.5)] bg-zinc-900">
                      <img 
                        src={trainer.image} 
                        className="w-full h-full object-cover grayscale brightness-75 group-hover/bubble:grayscale-0 group-hover/bubble:scale-110 transition-all duration-700" 
                        alt={trainer.name}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Label Tag - more subtle */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-brand-red px-3 py-1 whitespace-nowrap shadow-xl opacity-0 group-hover/bubble:opacity-100 transition-opacity">
                      <span className="text-[8px] font-black italic uppercase tracking-widest text-white">{trainer.name}</span>
                    </div>

                    {/* Pulse Effect */}
                    <div className="absolute inset-0 rounded-full border border-brand-red/50 animate-ping opacity-0 group-hover/bubble:opacity-100" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}

          {/* Center Info Panel (Diamond like in image) */}
          <AnimatePresence mode="wait">
            {!selectedTrainer && (
              <motion.div 
                key="default"
                initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
                animate={{ opacity: 1, scale: 1, rotate: 45 }}
                exit={{ opacity: 0, scale: 1.1, rotate: 45 }}
                className="w-24 h-24 md:w-32 md:h-32 border-2 border-brand-red flex items-center justify-center bg-black relative shadow-[0_0_50px_rgba(220,38,38,0.3)]"
              >
                <div className="-rotate-45 text-center">
                  <span className="block text-[8px] md:text-xs font-black uppercase tracking-widest text-white opacity-80">OUR</span>
                  <span className="block text-lg md:text-xl font-black italic uppercase tracking-tighter text-brand-red leading-none">MENTORS</span>
                </div>
              </motion.div>
            )}

            {selectedTrainer && (
              <motion.div
                key="detail"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
              >
                <div className="bg-zinc-950/95 backdrop-blur-xl border border-brand-red p-8 md:p-12 max-w-2xl w-full mx-4 shadow-[0_0_100px_rgba(0,0,0,0.9)] relative pointer-events-auto">
                  <button 
                    onClick={() => setSelectedTrainer(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-brand-red transition-colors"
                  >
                    <X size={24} />
                  </button>

                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="aspect-square border border-white/10 overflow-hidden relative">
                       <img src={selectedTrainer.image} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
                       <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay" />
                    </div>
                    <div className="space-y-4 text-left">
                      <div className="h-1 w-12 bg-brand-red" />
                      <div>
                        <h4 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter leading-none mb-2">{selectedTrainer.name}</h4>
                        <p className="text-brand-red text-[10px] font-bold uppercase tracking-[0.4em]">{selectedTrainer.specialty}</p>
                      </div>
                      
                      <div className="space-y-3 pt-2">
                        <div className="flex items-center gap-3 text-gray-400">
                          <Trophy size={14} className="text-brand-red" />
                          <span className="text-[9px] font-bold uppercase tracking-widest">Elite Performance Certified</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                          <Target size={14} className="text-brand-red" />
                          <span className="text-[9px] font-bold uppercase tracking-widest">Master Trainer Designation</span>
                        </div>
                      </div>

                      <p className="text-gray-500 text-[10px] uppercase tracking-widest leading-relaxed">
                        Tactical Focus: Power-to-weight ratio optimization and neural adaptation strategies.
                      </p>

                      <button className="w-full bg-brand-red text-white py-3 font-black italic uppercase text-[9px] tracking-[0.3em] hover:bg-white hover:text-black transition-all">
                        Initiate Connection
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  </div>
  );
}

