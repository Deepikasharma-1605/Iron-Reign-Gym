import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Display Board */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1974&auto=format&fit=crop" 
            className="w-full h-full object-cover scale-110 grayscale brightness-50 contrast-125" 
            alt="Contact Display Board"
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
            <span className="text-brand-red font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block">Communications</span>
            <h1 className="text-7xl md:text-9xl font-black italic uppercase leading-none tracking-tighter">
              Con<span className="text-stroke">tact</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-0 border border-white/10">
            <div className="lg:col-span-4 p-12 md:p-16 bg-zinc-950 border-r border-white/10 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-10 leading-none">Enter The <br /><span className="text-brand-red">Red Zone</span></h2>
                
                <div className="space-y-10 mb-16">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center italic text-brand-red font-black group-hover:bg-brand-red group-hover:text-white transition-all">L</div>
                    <div>
                      <h4 className="font-black italic uppercase text-[10px] tracking-widest text-gray-500 mb-1">Base of Operations</h4>
                      <p className="text-white font-bold text-sm uppercase tracking-tighter">123 Iron Street, Mumbai, MH</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center italic text-brand-red font-black group-hover:bg-brand-red group-hover:text-white transition-all">P</div>
                    <div>
                      <h4 className="font-black italic uppercase text-[10px] tracking-widest text-gray-500 mb-1">Comm Channel</h4>
                      <p className="text-white font-bold text-sm uppercase tracking-tighter">+91 999 888 7777</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center italic text-brand-red font-black group-hover:bg-brand-red group-hover:text-white transition-all">M</div>
                    <div>
                      <h4 className="font-black italic uppercase text-[10px] tracking-widest text-gray-500 mb-1">Electronic Support</h4>
                      <p className="text-white font-bold text-sm uppercase tracking-tighter">base@ironreign.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {['IG', 'FB', 'TW'].map(social => (
                  <div key={social} className="w-12 h-12 border border-white/10 flex items-center justify-center font-black italic text-xs hover:bg-brand-red hover:text-white transition-all cursor-pointer">
                    {social}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 bg-zinc-900 p-12 md:p-16">
              <h3 className="text-2xl font-black italic uppercase mb-12 tracking-tight">Transmission Request</h3>
              <form className="grid sm:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 italic">Callsign / Name</label>
                  <input type="text" className="w-full bg-black border border-white/5 rounded-none p-5 text-sm focus:border-brand-red transition-all outline-none italic font-bold uppercase tracking-tight" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 italic">Frequency / Email</label>
                  <input type="email" className="w-full bg-black border border-white/5 rounded-none p-5 text-sm focus:border-brand-red transition-all outline-none italic font-bold uppercase tracking-tight" placeholder="email@example.com" />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 italic">Objective / Message</label>
                  <textarea className="w-full bg-black border border-white/5 rounded-none p-5 text-sm h-40 resize-none focus:border-brand-red transition-all outline-none italic font-bold uppercase tracking-tight" placeholder="State your mission..." />
                </div>
                <button className="sm:col-span-2 bg-brand-red text-white py-6 font-black uppercase tracking-[0.4em] text-xs italic hover:bg-white hover:text-black transition-all">
                  Send Transmission
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Segment */}
      <section className="h-[400px] bg-zinc-900 border-t border-white/10 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
          className="w-full h-full object-cover grayscale opacity-20" 
          alt="Location context"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/80 backdrop-blur-md p-8 border border-white/10 text-center max-w-sm">
             <h4 className="text-xl font-black italic uppercase mb-2 tracking-tighter">Strategic HQ</h4>
             <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Our facility is located in the heart of Mumbai's industrial sector. Secure your arrival today.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
