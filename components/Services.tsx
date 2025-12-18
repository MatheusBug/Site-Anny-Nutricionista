import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Heart, Activity, Scale, ArrowRight } from 'lucide-react';
import { IMAGES, FOOD_IMAGES, SOCIAL_LINKS } from '../constants';

const services = [
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Emagrecimento",
    description: "Estratégias para perda de peso sem sofrimento, focando na mudança de hábitos e manutenção.",
    image: FOOD_IMAGES.saladBowl
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Nutrição Esportiva",
    description: "Planos alimentares para otimizar sua performance nos treinos e acelerar a recuperação.",
    image: FOOD_IMAGES.womensHealth
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: "Reeducação Alimentar",
    description: "Aprenda a montar pratos equilibrados e nutritivos com autonomia para a vida toda.",
    image: FOOD_IMAGES.fruits
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Saúde da Mulher",
    description: "Cuidado especializado para SOP, endometriose, gestação e menopausa.",
    image: FOOD_IMAGES.sportsNutrition
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-light/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-2 block leading-relaxed">Áreas de Atuação</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4">
              Como posso te ajudar?
            </h2>
            <p className="text-gray-600 text-lg">
              Soluções nutricionais personalizadas para cada fase da sua vida.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center animate-spin-slow">
              <svg viewBox="0 0 100 100" className="w-20 h-20 fill-current text-white">
                <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                <text>
                  <textPath href="#curve" className="text-[14px] font-bold uppercase tracking-widest">
                    Saúde • Bem-Estar • Vida •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green/95 via-brand-green/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-display mb-3">{service.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-brand-gold font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                  Saiba mais <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-8 border border-gray-100 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-full bg-brand-gold/10 skew-x-[-20deg] translate-x-12 z-0" />
          <div className="w-full md:w-1/2 relative z-10">
            <img src={IMAGES.services} alt="Anny" className="rounded-2xl shadow-lg w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 relative z-10">
            <h3 className="text-3xl font-bold text-brand-dark mb-4">Não sabe qual o plano ideal?</h3>
            <p className="text-gray-600 mb-8 max-w-lg">
              Entre em contato e vamos conversar sobre seus objetivos. Juntos, definiremos a melhor estratégia para você.
            </p>
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-brand-green text-white rounded-full font-bold hover:bg-brand-dark transition-colors shadow-lg">
              Falar com a Nutri
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;