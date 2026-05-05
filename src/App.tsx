/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Dumbbell, 
  Users, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter, 
  ChevronRight, 
  Check,
  Menu,
  X,
  Target,
  Trophy,
  Zap
} from 'lucide-react';


import { 
  TRAINERS, 
  PROGRAMS, 
  HERO_IMAGES, 
  NAV_LINKS, 
  MEMBERSHIPS, 
  SCHEDULE 
} from './constants';

import About from './components/About';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Membership from './components/Membership';
import Schedule from './components/Schedule';
import Contact from './components/Contact';

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
    const xPct = (mouseX / width - 0.5) * 20; // 20deg max
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

const SCROLL_SPEED = 30; // seconds for a full loop

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visitedHomeImages, setVisitedHomeImages] = useState<number[]>([]);
  const [visitedPrograms, setVisitedPrograms] = useState<number[]>([]);
  const { scrollY } = useScroll();

  const handleHomeImageVisit = (index: number) => {
    if (!visitedHomeImages.includes(index)) {
      setVisitedHomeImages([...visitedHomeImages, index]);
    }
  };

  const handleProgramVisit = (index: number) => {
    if (!visitedPrograms.includes(index)) {
      setVisitedPrograms([...visitedPrograms, index]);
    }
  };
  const yParallax = useTransform(scrollY, [0, 1000], [0, 200]);
  const yParallaxSlow = useTransform(scrollY, [0, 1000], [0, -150]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-brand-red selection:text-white">
      {/* Parallax Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: yParallax }}
          className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-brand-red/10 rounded-full blur-[120px]"
        />
        <motion.div 
          style={{ y: yParallaxSlow }}
          className="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-zinc-800/20 rounded-full blur-[150px]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 px-10 py-6 flex items-center justify-between ${
          isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-red flex items-center justify-center font-black italic text-sm">X</div>
          <span className="font-display text-2xl tracking-tighter uppercase font-black">Iron Reign</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-semibold text-gray-400">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.name} 
              onClick={() => {
                setCurrentPage(link.name);
                if (link.name === 'Home') scrollToSection(link.href);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-white transition-colors pb-1 border-b-2 cursor-pointer ${currentPage === link.name ? 'text-white border-brand-red' : 'border-transparent hover:border-white/20'}`}
            >
              {link.name}
            </button>
          ))}
        </div>
        
        <button className="hidden md:block px-6 py-2 bg-brand-red text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Join Now
        </button>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-8"
            >
              <button className="absolute top-6 right-6 text-white" onClick={() => setIsMenuOpen(false)}>
                <X size={32} />
              </button>
              {NAV_LINKS.map((link) => (
                <button 
                  key={link.name} 
                  onClick={() => {
                    setCurrentPage(link.name);
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-2xl uppercase tracking-[0.2em] font-black italic ${currentPage === link.name ? 'text-brand-red' : 'text-white hover:text-brand-red transition-colors'}`}
                >
                  {link.name}
                </button>
              ))}
              <button className="mt-8 bg-brand-red text-white py-4 px-12 rounded-none font-bold uppercase tracking-widest italic">
                Join Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Page Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {currentPage === 'Home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* About Intro Hero Section */}
              <section id="about" className="relative h-[95vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1v3RUf5Bo4ugTf_AhxHml2bT4H3BNDCwb" 
                    className="w-full h-full object-cover scale-110 grayscale brightness-90 contrast-125" 
                    alt="Iron Reign Headquarters"
                    referrerPolicy="no-referrer"
                  />
                  
                </div>
                
                <div className="container mx-auto px-6 relative z-10 text-center">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                  >
                    <span className="text-brand-red font-bold uppercase tracking-[0.6em] text-xs mb-4 block">The Sanctuary</span>
                    <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter mb-6">
                      Iron <span className="text-stroke">Reign</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-400 font-bold uppercase tracking-widest text-[11px] leading-relaxed">
                      Founded in 2020, we are more than a facility. We are an industrial-grade forge for the human body and spirit, where discipline meets peak performance.
                    </p>
                  </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2">Scroll to Discover</span>
                  <div className="w-px h-12 bg-gradient-to-b from-brand-red to-transparent" />
                </div>
              </section>

              <section 
                id="home" 
                className="relative min-h-screen pt-24 grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden"
              >
                {/* Left Branding Column */}
                <div className="md:col-span-5 p-10 md:p-20 flex flex-col justify-center relative z-20">
                  <motion.div
                    initial={{ opacity: 0, x: -30, rotateY: -10 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 0.8 }}
                    className="perspective-1000"
                  >
                    <span className="text-brand-red font-bold tracking-[0.4em] text-xs uppercase mb-6 block">Est. 2020 / Elite Performance</span>
                    <h1 className="text-7xl md:text-8xl font-black leading-[0.85] tracking-tighter italic mb-8 uppercase">
                      Forge <br/>
                      <span className="text-stroke">Your</span> <br/>
                      Legacy
                    </h1>
                    <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-10">
                      Experience high-performance training in a sanctuary of steel and discipline. Our world-class facility is designed for those who refuse to settle for mediocrity.
                    </p>
                    
                    <div className="flex gap-10 items-center mb-12">
                      <div>
                        <div className="text-3xl font-bold">5000+</div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest">Active Members</div>
                      </div>
                      <div className="w-px h-10 bg-white/20"></div>
                      <div>
                        <div className="text-3xl font-bold">30+</div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest">Elite Coaches</div>
                      </div>
                      <div className="w-px h-10 bg-white/20"></div>
                      <div>
                        <div className="text-3xl font-bold">24/7</div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest">Access</div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => scrollToSection('#membership')}
                        className="bg-brand-red text-white py-4 px-10 font-bold uppercase text-[11px] tracking-widest hover:bg-white hover:text-black transition-all italic text-center cursor-pointer"
                      >
                        Start Free Trial
                      </button>
                      <button 
                        onClick={() => scrollToSection('#programs')}
                        className="border border-white/20 text-white py-4 px-10 font-bold uppercase text-[11px] tracking-widest hover:border-brand-red hover:text-brand-red transition-all italic text-center cursor-pointer"
                      >
                        Explore Programs
                      </button>
                    </div>
                  </motion.div>
                </div>

                {/* Right Display Board */}
                <div className="md:col-span-7 grid grid-cols-2 grid-rows-2 p-4 gap-4 min-h-[600px] md:min-h-0 bg-zinc-950">
                  {HERO_IMAGES.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9, rotateX: 20, rotateY: -20, z: -100 }}
                      whileInView={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0, z: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                      className="perspective-1000"
                      onMouseEnter={() => handleHomeImageVisit(i)}
                      onClick={() => handleHomeImageVisit(i)}
                    >
                      <TiltWrapper className="h-full w-full">
                        <div className="relative h-full w-full bg-zinc-900 overflow-hidden group border border-white/5">
                          <div className={`absolute inset-0 z-0 transition-all duration-700 ${
                            visitedHomeImages.includes(i) 
                              ? 'opacity-100 grayscale-0 scale-105' 
                              : 'opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110'
                          }`}>
                            <img src={img} className="w-full h-full object-cover" alt="" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10 group-hover:opacity-40 transition-opacity duration-500" />
                          {i === 1 && <div className="absolute inset-0 bg-brand-red/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-500" />}
                          
                          <div className="absolute bottom-6 left-6 z-20 translate-z-20">
                            <div className={`${i === 1 ? 'text-white/60' : 'text-brand-red'} text-[10px] font-bold uppercase tracking-widest mb-1`}>0{i+1}</div>
                            <div className="text-xl font-bold italic uppercase tracking-tighter">
                              {i === 0 ? "Heavy Metal" : i === 1 ? "Peak Focus" : i === 2 ? "Unified Drive" : "Shadow Boxing"}
                            </div>
                          </div>
                        </div>
                      </TiltWrapper>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Legacy Content */}
              <section className="py-32 bg-black relative">
                <div className="container mx-auto px-6">
                  <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                      initial={{ opacity: 0, x: -50, rotateY: 30 }}
                      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, type: "spring" }}
                      className="relative group mt-10 md:mt-0 perspective-1000"
                    >
                      <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-brand-red opacity-50 group-hover:w-40 group-hover:h-40 transition-all" />
                      <div className="relative aspect-[4/5] rounded-none overflow-hidden bg-zinc-900 border border-white/10">
                        <img 
                          src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" 
                          alt="About us" 
                          className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="absolute -bottom-10 -right-10 bg-brand-red p-12 hidden md:block">
                        <span className="text-6xl font-black italic block leading-none">12+</span>
                        <span className="uppercase text-[9px] font-bold tracking-[0.3em] opacity-80 mt-2 block">Elite Mentors</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Legacy of discipline</span>
                      <h2 className="text-5xl md:text-7xl font-display uppercase font-black italic mb-8 leading-[0.9]">Born From <span className="text-stroke-red">Steel</span>, Driven By Reign</h2>
                      <p className="text-gray-400 mb-10 leading-relaxed text-lg max-w-xl">
                        For over a decade, Iron Reign has been the sanctuary for athletes 
                        who demand more from themselves. We don't just provide space and metal; 
                        we provide the blueprint for your strongest self. 
                      </p>
                      <div className="grid grid-cols-2 gap-6 mb-12">
                        {[
                          "Elite Mentors",
                          "Global Standard",
                          "24/7 Premium",
                          "High Intensity"
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-4 group">
                            <div className="w-2 h-2 bg-brand-red group-hover:scale-150 transition-all" />
                            <span className="font-bold uppercase text-[11px] tracking-widest text-gray-300 group-hover:text-white transition-colors">{item}</span>
                          </div>
                        ))}
                      </div>
                      <button 
                        onClick={() => scrollToSection('#membership')}
                        className="inline-flex items-center gap-4 group bg-white text-black px-8 py-4 font-black uppercase text-[11px] tracking-widest italic hover:bg-brand-red hover:text-white transition-all cursor-pointer"
                      >
                        Become a Member <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
                      </button>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Programs Section */}
              <section 
                id="programs" 
                className="py-32 min-h-screen bg-zinc-950 relative overflow-hidden flex flex-col justify-center"
              >
                <div className="container mx-auto px-6">
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-3xl">
                      <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Specialized Pathways</span>
                      <h2 className="text-5xl md:text-8xl font-display uppercase font-black italic leading-[0.9]">The War <span className="text-stroke">Zones</span></h2>
                    </div>
                    <p className="text-gray-500 max-w-xs text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed">
                      CHOOSE YOUR PATH TO GREATNESS WITH OUR SCIENCE-BACKED CURRICULUM DESIGNED FOR PEAK PERFORMANCE.
                    </p>
                  </div>

                  {/* Marquee Structure based on your request */}
                  <style>
                    {`
                      .marquee-home {
                        overflow: hidden;
                        width: 100%;
                        padding: 20px 0;
                      }

                      .marquee-content-home {
                        display: flex;
                        width: max-content;
                        animation: scroll-home 30s linear infinite;
                      }

                      .card-container-home {
                        min-width: 300px;
                        margin-right: 20px;
                      }

                      @keyframes scroll-home {
                        from { transform: translateX(0); }
                        to { transform: translateX(-50%); }
                      }

                      .marquee-home:hover .marquee-content-home {
                        animation-play-state: paused;
                      }
                    `}
                  </style>

                  <div className="marquee-home">
                    <div className="marquee-content-home">
                      {[...PROGRAMS, ...PROGRAMS].map((program, i) => (
                        <div key={i} className="card-container-home">
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group relative h-[450px] overflow-hidden cursor-pointer bg-black"
                            onMouseEnter={() => handleProgramVisit(i % PROGRAMS.length)}
                            onClick={() => handleProgramVisit(i % PROGRAMS.length)}
                          >
                            <img 
                              src={program.image} 
                              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                                visitedPrograms.includes(i % PROGRAMS.length)
                                  ? 'scale-105 grayscale-0 brightness-90'
                                  : 'grayscale brightness-50 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-90'
                              }`} 
                              alt={program.title}
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:bg-brand-red/20 transition-all duration-700" />
                            
                            <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                              <div className="w-10 h-1 bg-brand-red mb-4 group-hover:w-16 transition-all duration-500" />
                              <h3 className="text-2xl font-black italic uppercase mb-2 group-hover:translate-x-2 transition-transform">{program.title}</h3>
                              <p className="text-gray-400 text-[9px] uppercase tracking-widest font-bold mb-6 transition-opacity opacity-60 group-hover:opacity-100">
                                {program.description}
                              </p>
                              <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                Join Session <ChevronRight size={14} className="text-brand-red" />
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Trainers Section */}
              <section id="trainers">
                <Trainers showDisplayBoard={false} />
              </section>

              {/* Membership Section */}
              <section 
                id="membership" 
                className="py-32 min-h-screen bg-zinc-950 flex flex-col justify-center"
              >
                <div className="container mx-auto px-6">
                  <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
                    <div className="max-w-2xl">
                      <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Access Tiers</span>
                      <h2 className="text-5xl md:text-8xl font-display uppercase font-black italic leading-[0.9]">Select Your <br/> <span className="text-brand-red">Contract</span></h2>
                    </div>
                    <div className="pb-4">
                      <div className="flex items-center gap-4 bg-black/50 p-2 rounded-none border border-white/10">
                        <button className="bg-brand-red text-white py-2 px-6 font-bold uppercase text-[9px] tracking-widest italic">Monthly</button>
                        <button className="text-gray-500 hover:text-white py-2 px-6 font-bold uppercase text-[9px] tracking-widest italic transition-colors">Annual</button>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {MEMBERSHIPS.map((plan, i) => (
                      <TiltWrapper key={i}>
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className={`relative p-12 border h-full ${
                            plan.popular ? 'border-brand-red bg-zinc-900 shadow-[0_0_50px_-10px_rgba(220,38,38,0.2)]' : 'border-white/5 bg-black'
                          } group preserve-3d`}
                        >
                          {plan.popular && (
                            <div className="absolute top-0 right-0 p-4 translate-z-20">
                              <div className="bg-brand-red text-white py-1 px-4 text-[9px] font-black uppercase tracking-widest italic">Best Value</div>
                            </div>
                          )}
                          <h4 className="text-2xl font-black italic uppercase tracking-tighter mb-8 translate-z-20">{plan.name}</h4>
                          <div className="flex items-baseline gap-2 mb-12 translate-z-10">
                            <span className="text-7xl font-black tracking-tighter">{plan.price}</span>
                            <span className="text-gray-500 uppercase text-[10px] font-bold tracking-widest">/ Per Month</span>
                          </div>
                          <div className="space-y-6 mb-16 translate-z-10">
                            {plan.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-4 group/item">
                                <div className="w-1 h-3 bg-brand-red group-hover/item:h-4 transition-all" />
                                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <button className={`w-full py-5 font-black uppercase tracking-[0.3em] text-[11px] italic transition-all translate-z-30 ${
                            plan.popular ? 'bg-brand-red text-white hover:bg-white hover:text-black' : 'border border-white/20 text-white hover:border-brand-red hover:text-brand-red shadow-none'
                          }`}>
                            Initiate Contract
                          </button>
                        </motion.div>
                      </TiltWrapper>
                    ))}
                  </div>
                </div>
              </section>

              {/* Schedule Section */}
              <section 
                id="schedule" 
                className="py-32 min-h-screen bg-black flex flex-col justify-center"
              >
                <div className="container mx-auto px-6">
                  <div className="mb-20">
                    <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Operations flow</span>
                    <h2 className="text-5xl md:text-8xl font-display uppercase font-black italic mb-10 leading-[0.9]">War <span className="text-stroke">Journal</span></h2>
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
                      <div key={i} className="grid grid-cols-1 sm:grid-cols-7 border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                        <div className="p-8 border-r border-white/10 font-black italic text-sm text-gray-500 group-hover:text-brand-red transition-colors bg-zinc-950 sm:bg-transparent">{row.time}</div>
                        {[row.mon, row.tue, row.wed, row.thu, row.fri, row.sat].map((cell, idx) => (
                          <div key={idx} className="p-8 border-r border-white/5 last:border-r-0 flex flex-col justify-center gap-1">
                            <span className="font-black uppercase text-[11px] italic tracking-tight group-hover:text-white transition-colors">{cell}</span>
                            <span className="text-[9px] text-gray-600 uppercase font-bold group-hover:text-brand-red/60 italic">Elite Session</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section 
                id="contact" 
                className="py-32 min-h-screen bg-zinc-950 relative overflow-hidden flex items-center"
              >
                {/* Large Background Decorative Text */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none w-full text-center">
                  <span className="font-display text-[25vw] font-black uppercase italic whitespace-nowrap leading-none tracking-tighter">DISCIPLINE</span>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                  <div className="grid lg:grid-cols-12 gap-0 border border-white/10">
                    <div className="lg:col-span-4 p-12 md:p-16 bg-black border-r border-white/10 flex flex-col justify-between">
                      <div>
                        <h2 className="text-4xl md:text-5xl font-display uppercase font-black italic mb-10 leading-none">Enter The <br /><span className="text-brand-red">Red Zone</span></h2>
                        
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
            </motion.div>
          ) : (
            <div className="pt-24 min-h-screen">
              {currentPage === 'About' && <About />}
              {currentPage === 'Programs' && <Programs />}
              {currentPage === 'Trainers' && <Trainers />}
              {currentPage === 'Membership' && <Membership />}
              {currentPage === 'Schedule' && <Schedule />}
              {currentPage === 'Contact' && <Contact />}
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Status Footer Bar */}
      <footer className="bg-zinc-950 border-t border-white/10">
        <div className="h-20 flex flex-col md:flex-row items-center justify-between px-10 gap-4">
          <div className="flex gap-8 items-center text-[10px] tracking-widest uppercase font-bold">
            <div className="flex gap-2 items-center">
              <span className="text-brand-red">Sector Status:</span>
              <span className="text-green-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> 
                Ready / Active
              </span>
            </div>
            <div className="hidden lg:block w-px h-4 bg-white/10"></div>
            <span className="hidden lg:block text-gray-500 italic">Next Class: HIIT Burn @ 5:30 PM</span>
          </div>

          <div className="flex items-center gap-10">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold italic">© 2020 Iron Reign Elite</span>
            <div className="hidden md:flex gap-6">
               <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-600 hover:text-brand-red transition-colors">Protocols</a>
               <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-600 hover:text-brand-red transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
