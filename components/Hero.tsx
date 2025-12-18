import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { IMAGES, FOOD_IMAGES, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center bg-brand-green overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-[#f8faf9] skew-x-[-10deg] translate-x-1/4 z-0 rounded-l-[100px] hidden lg:block border-l-8 border-brand-gold/20" />

      {/* Organic Blobs with Food Textures (simulated via color/opacity) */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-green-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-24 pb-12 md:pt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left text-white lg:text-brand-dark z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-brand-gold rounded-full bg-white/10 backdrop-blur-md shadow-lg lg:bg-white lg:shadow-md">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                <span className="text-brand-gold lg:text-brand-green text-sm font-bold tracking-wider uppercase leading-relaxed">
                  Nutrição com Propósito
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6 text-white drop-shadow-md lg:drop-shadow-none">
                Coma bem, <br />
                <span className="text-brand-gold italic relative">
                  viva melhor
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-gold/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h1>

              <p className="text-white text-base sm:text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium drop-shadow-sm lg:drop-shadow-none">
                Descubra o prazer de uma alimentação equilibrada. Sem dietas restritivas, apenas comida de verdade e resultados reais para sua saúde.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-brand-gold text-white rounded-full font-bold shadow-xl hover:bg-yellow-600 transition-all flex items-center gap-2 hover:shadow-2xl hover:-translate-y-1"
                >
                  Agendar Consulta
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 border-2 border-white lg:border-brand-green text-white lg:text-brand-green rounded-full font-bold hover:bg-white hover:text-brand-green lg:hover:bg-brand-green lg:hover:text-white transition-all shadow-md"
                >
                  Conhecer Planos
                </a>
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-[500px] aspect-square"
            >
              {/* Main Background Circle */}
              <div className="absolute inset-4 rounded-full bg-brand-green/5 border-2 border-brand-gold/20 z-0 scale-105" />

              {/* Food Floating Elements - Parallax-like */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-2 sm:-right-4 w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl z-20"
              >
                <img src={FOOD_IMAGES.berries} alt="Frutas vermelhas" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-2 sm:-left-4 w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-2xl z-20"
              >
                <img src={FOOD_IMAGES.avocado} alt="Abacate fresco" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-2 sm:-right-8 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center shadow-xl z-20"
              >
                <span className="text-white font-bold text-xs text-center leading-tight">100%<br />Natural</span>
              </motion.div>

              {/* Main Photo Mask */}
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl z-10 bg-white">
                <img
                  src={IMAGES.hero}
                  alt="Nutricionista Anny Navegantes"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;