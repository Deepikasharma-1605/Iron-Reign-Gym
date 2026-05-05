import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { MEMBERSHIPS } from '../constants';

function TiltWrapper({ children, className = "" }: { children: React.ReactNode, className?: string, key?: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 20; 
    const yPct = (mouseY / height - 0.5) * -20;
    setX(yPct);
    setY(xPct);
  };

  const handleMouseLeave = () => {
    setX(0);
    setY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: x, rotateY: y }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      className={`perspective-1000 preserve-3d ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Membership() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Display Board */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover scale-110 grayscale brightness-50 contrast-125" 
            alt="Membership Display Board"
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
            <span className="text-brand-red font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block">Access Protocols</span>
            <h1 className="text-7xl md:text-9xl font-black italic uppercase leading-none tracking-tighter">
              Membe<span className="text-stroke">rship</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Membership Grid */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-6">Select Your <span className="text-stroke">Tier</span></h2>
            <p className="text-gray-500 uppercase tracking-widest text-[10px] md:text-xs max-w-2xl mx-auto font-bold leading-relaxed">
              Every tier at Iron Reign is a commitment to performance. Choose the protocol that aligns with your objectives and begin your transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {MEMBERSHIPS.map((plan, i) => (
              <TiltWrapper key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-12 border h-full transition-all duration-500 ${
                    plan.popular ? 'border-brand-red bg-zinc-900 shadow-[0_0_50px_-10px_rgba(220,38,38,0.2)]' : 'border-white/5 bg-black hover:border-white/20'
                  } group preserve-3d`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 p-4 translate-z-20">
                      <div className="bg-brand-red text-white py-1 px-4 text-[9px] font-black uppercase tracking_widest italic">Best Value</div>
                    </div>
                  )}
                  <h4 className="text-2xl font-black italic uppercase tracking-tighter mb-8 translate-z-20 group-hover:text-brand-red transition-colors">{plan.name}</h4>
                  <div className="flex items-baseline gap-2 mb-12 translate-z-10">
                    <span className="text-7xl font-black tracking-tighter">{plan.price}</span>
                    <span className="text-gray-500 uppercase text-[10px] font-bold tracking-widest">/ Per Month</span>
                  </div>
                  <div className="space-y-6 mb-16 translate-z-10">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-4 group/item">
                        <div className="w-1 h-3 bg-brand-red group-hover/item:h-4 transition-all" />
                        <span className="text-gray-400 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className={`w-full py-5 font-black uppercase tracking-[0.3em] text-[11px] italic transition-all translate-z-30 ${
                    plan.popular ? 'bg-brand-red text-white hover:bg-white hover:text-black' : 'border border-white/20 text-white hover:border-brand-red hover:text-brand-red'
                  }`}>
                    Initiate Contract
                  </button>
                </motion.div>
              </TiltWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Analysis Section */}
      <section className="py-32 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Deep Dive</span>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-10">The Hierarchy of <span className="text-stroke">Strength</span></h2>
              
              <div className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-black italic uppercase tracking-tighter text-brand-red">Basic Protocol</h3>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed">
                    Designed for the dedicated solitary trainer. Full access to our industrial-grade free weights and 24/7 facility operations. No frills, just raw performance capability.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-black italic uppercase tracking-tighter text-brand-red">Elite Tier</h3>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed">
                    Our most popular pathway. Includes specialized group combat and conditioning classes, plus recovery protocols like steam and sauna. Includes a custom nutrition roadmap for maximum output.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-black italic uppercase tracking-tighter text-brand-red">Pro Designation</h3>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed">
                    The ultimate dedication. Private coaching from our master mentors, VIP access to our recovery lounge, guest passes, and significant discounts on performance supplements.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative"
            >
               <div className="absolute inset-0 border border-brand-red translate-x-4 translate-y-4 -z-10" />
               <div className="aspect-[4/5] bg-zinc-900 border border-white/10 overflow-hidden">
                 <img 
                   src="https://lh3.googleusercontent.com/d/1fT18zBbadzkGrdPDim_rwhTOQ7kJhZNf" 
                   className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000" 
                   alt="Dedication Focus"
                   referrerPolicy="no-referrer"
                 />
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
                 <span className="text-9xl font-black italic uppercase tracking-tighter text-stroke opacity-10">COMMIT</span>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ / Trust Elements */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-lg font-black italic uppercase mb-4 tracking-tighter">Flexible Billing</h4>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed">Switch between tiers or cancel your monthly protocol with 30-day notice. Elite performance shouldn't be locked in red tape.</p>
            </div>
            <div>
              <h4 className="text-lg font-black italic uppercase mb-4 tracking-tighter">Referral Credits</h4>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed">Bring an outlier into the fold. Every successful recruitment earns you a performance credit towards your next billing cycle.</p>
            </div>
            <div>
              <h4 className="text-lg font-black italic uppercase mb-4 tracking-tighter">Corporate Protocols</h4>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed">Equip your entire team for peak efficiency. Custom group rates available for performance-driven organizations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
