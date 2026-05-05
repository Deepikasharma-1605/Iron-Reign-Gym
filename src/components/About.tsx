import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale brightness-50" 
            alt="Iron Reign Interior"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-red font-bold uppercase tracking-[0.5em] text-xs mb-6 block">Beyond Performance</span>
            <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter mb-8 leading-none">
              Iron <span className="text-stroke">Reign</span>
            </h1>
            <div className="w-24 h-1 bg-brand-red mx-auto mb-8" />
            <p className="max-w-2xl mx-auto text-gray-400 font-medium uppercase tracking-widest text-[11px] leading-relaxed">
              Founded in 2020, Iron Reign was built for the outliers. It's not just a gym; it's a high-pressure forge where bodies are rebuilt and spirits are hardened through absolute discipline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Established 2020 Marquee - Moved to beginning and set to scroll left */}
      <section className="py-10 overflow-hidden bg-black border-y border-white/5">
        <style>
          {`
            @keyframes scroll-left {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .animate-scroll-left {
              display: flex;
              width: max-content;
              animation: scroll-left 30s linear infinite;
            }
          `}
        </style>
        <div className="animate-scroll-left flex gap-20">
           {[...Array(10)].map((_, i) => (
             <span key={i} className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-stroke opacity-30">ESTABLISHED 2020</span>
           ))}
        </div>
      </section>

      {/* Intro Narrative Section */}
      <section className="py-20 bg-black overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="h-1 w-12 bg-brand-red" />
              <h2 className="text-4xl md:text-5xl font-black italic uppercase leading-[0.9] tracking-tighter">
                The Origin of <br/> <span className="text-stroke-red">The Forge</span>
              </h2>
              <div className="space-y-4 text-gray-400 font-medium uppercase tracking-[0.1em] text-[10px] md:text-xs leading-relaxed max-w-xl">
                <p>
                  Iron Reign was born in the industrial heart of the city, founded by a collective of high-performance athletes who were tired of the "commercial fitness experience." We stripped away the pretension and left behind only what matters: the metal, the effort, and the results.
                </p>
                <p>
                  Our facility serves as a sanctuary for those who understand that greatness is not given—it is forged. Every corner of our 15,000 sq. ft. headquarters is optimized for output.
                </p>
              </div>
              <div className="pt-2">
                <button className="border border-white/10 text-white px-8 py-3 font-black uppercase text-[9px] tracking-[0.3em] italic hover:bg-white hover:text-black transition-all">
                  Meet the Founders
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute inset-0 border border-brand-red translate-x-4 translate-y-4 -z-10" />
              <div className="aspect-square bg-zinc-900 border border-white/10 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000" 
                  alt="Industrial Gym Setting"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-red p-6 hidden md:block">
                <span className="text-2xl font-black italic block">STEEL</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-zinc-950 overflow-hidden border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative order-2 lg:order-1"
            >
              <div className="absolute inset-0 border border-brand-red -translate-x-4 translate-y-4 -z-10" />
              <div className="aspect-square bg-zinc-900 border border-white/10 overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/d/18FnZVUiZ3vF7PqTq5URNChgJD7_W66bQ" 
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000" 
                  alt="Our Story Vision"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-brand-red p-6 hidden md:block">
                <span className="text-2xl font-black italic block">LEGACY</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6 order-1 lg:order-2"
            >
              <div className="h-1 w-12 bg-brand-red ml-auto lg:ml-0" />
              <h2 className="text-4xl md:text-5xl font-black italic uppercase leading-[0.9] tracking-tighter text-right lg:text-left">
                Our <span className="text-stroke-red">Story</span>
              </h2>
              <div className="space-y-4 text-gray-400 font-medium uppercase tracking-[0.1em] text-[10px] md:text-xs leading-relaxed max-w-xl ml-auto lg:ml-0 text-right lg:text-left">
                <p>
                  What started as a whispered idea in a crowded commercial gym became a movement. We realized that the standard fitness model was broken—focused on aesthetics over ability, and profit over progress.
                </p>
                <p>
                  Iron Reign was built from the ground up to challenge that status quo. We spent years sourcing the finest equipment and assembling a crew of coaches who live the discipline they teach. Today, we stand as the benchmark for elite performance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-black overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="h-1 w-12 bg-brand-red" />
              
              <div className="space-y-10">
                <div className="space-y-4">
                   <h1 className="text-4xl md:text-6xl font-black italic uppercase leading-none tracking-tighter">
                     Our <span className="text-stroke-red">Mission</span>
                   </h1>
                   <p className="text-gray-400 font-medium uppercase tracking-[0.1em] text-[10px] md:text-xs leading-relaxed max-w-lg">
                     Help people achieve their ultimate fitness goals by providing a high-pressure forge for body and spirit.
                   </p>
                </div>

                <div className="space-y-4">
                   <h1 className="text-4xl md:text-6xl font-black italic uppercase leading-none tracking-tighter">
                     Our <span className="text-stroke">Vision</span>
                   </h1>
                   <p className="text-gray-400 font-medium uppercase tracking-[0.1em] text-[10px] md:text-xs leading-relaxed max-w-lg">
                     To transcend the traditional gym experience and become the most trusted fitness brand in the industry.
                   </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute inset-0 border border-brand-red translate-x-4 translate-y-4 -z-10" />
              <div className="aspect-[4/5] bg-zinc-900 border border-white/10 overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/d/1QTvWcU0c6oNZHeAk_7SDpjlmUgAcPGT9" 
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000" 
                  alt="Commitment Focus"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-red p-6 hidden md:block">
                <span className="text-2xl font-black italic block">FOCUS</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-zinc-950 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-brand-red font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block">Superiority Defined</span>
            <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter">Why <span className="text-stroke">Choose Us</span></h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { title: "Certified Trainers", desc: "Elite performance specialists with master designations." },
              { title: "Modern Equipment", desc: "Industrial-grade machinery optimized for anatomical output." },
              { title: "Personalized Plans", desc: "Neural adaptation protocols tailored to your physiology." },
              { title: "Clean & Safe", desc: "Surgical-grade maintenance for peak training focus." },
              { title: "Flexible Timings", desc: "24/7 access for those who train while the city sleeps." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 border border-white/5 bg-black hover:border-brand-red transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                  <span className="text-6xl font-black italic">0{i + 1}</span>
                </div>
                <div className="h-1 w-10 bg-brand-red mb-6 group-hover:w-full transition-all duration-500" />
                <h3 className="text-lg font-black italic uppercase mb-4 tracking-tighter">{item.title}</h3>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
          <span className="absolute top-0 left-0 text-[20rem] font-black italic uppercase -translate-x-1/4 -translate-y-1/4 text-stroke">DATA</span>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Elite Members", value: "500+" },
              { label: "Elite Mentors", value: "20+" },
              { label: "Year Legacy", value: "5+" },
              { label: "Transformations", value: "1000+" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <h4 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-2 text-brand-red">{stat.value}</h4>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
