import React from 'react';
import { motion } from 'framer-motion';
import { Check, Leaf } from 'lucide-react';
import { IMAGES, FOOD_IMAGES } from '../constants';

const About: React.FC = () => {
  const highlights = [
    "Atendimento 100% Personalizado",
    "Foco em Reeducação Alimentar",
    "Suporte via WhatsApp",
    "Materiais Exclusivos"
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative leaf background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-light rounded-br-[100px] -z-0 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Image Composition */}
          <div className="w-full lg:w-1/2">
            <div className="relative mb-12 lg:mb-0">
              {/* Back Image (Food) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute top-0 right-4 lg:right-0 w-3/4 h-[280px] sm:h-[400px] bg-gray-200 rounded-3xl overflow-hidden translate-x-0 lg:translate-x-8 -translate-y-4 lg:-translate-y-8"
              >
                <img
                  src={FOOD_IMAGES.cooking}
                  alt="Preparando alimentos saudáveis"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-brand-green/20 mix-blend-multiply"></div>
              </motion.div>

              {/* Front Image (Anny) */}
              <motion.div
                initial={{ opacity: 0, x: -50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative z-10 pr-4 lg:pr-0"
              >
                <img
                  src={IMAGES.about}
                  alt="Anny Navegantes no consultório"
                  className="w-full max-w-[90%] lg:w-full h-auto rounded-3xl shadow-2xl object-cover border-[6px] sm:border-8 border-white"
                />

                {/* Floating Card */}
                <div className="absolute -bottom-6 right-2 sm:right-4 bg-white p-4 sm:p-6 rounded-xl shadow-xl border-l-4 border-brand-gold max-w-[180px] sm:max-w-[220px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-green-100 p-1.5 rounded-full">
                      <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-brand-green" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-gray-800">Abordagem</span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-600">Nutrição comportamental sem terrorismo nutricional.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-2 block leading-relaxed">Quem Sou Eu</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">
                Olá! Sou <span className="text-brand-green">Anny Navegantes</span>
              </h2>

              <div className="prose prose-base sm:prose-lg text-gray-600 mb-8">
                <p className="mb-4">
                  Acredito que comer bem não precisa ser complicado nem sem graça. Minha missão é te ajudar a fazer as pazes com a comida e alcançar seus objetivos de forma leve e prazerosa.
                </p>
                <p>
                  Com um olhar atento para a sua rotina e preferências, construímos juntos um caminho sustentável, onde cabem suas comidas favoritas e, claro, muita saúde.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-light flex items-center justify-center">
                      <Check className="w-4 h-4 text-brand-green" />
                    </div>
                    <span className="text-brand-dark font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-3 text-base font-bold text-brand-green border-2 border-brand-green rounded-full hover:bg-brand-green hover:text-white transition-all duration-300">
                Saiba Mais Sobre Mim
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;