import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { FOOD_IMAGES } from '../constants';

const testimonials = [
  {
    name: "Mariana Silva",
    text: "A Anny mudou minha relação com a comida. Perdi 10kg sem sofrimento e hoje me sinto muito mais disposta! As receitas que ela passa são maravilhosas.",
    tag: "Emagrecimento"
  },
  {
    name: "Carlos Eduardo",
    text: "Excelente profissional! O plano alimentar é super prático. Nunca imaginei que comeria tão bem e ainda teria resultados no treino.",
    tag: "Hipertrofia"
  },
  {
    name: "Fernanda Lima",
    text: "Amei o atendimento! Ela é super atenciosa e explica tudo com muita clareza. Me sinto muito bem cuidada e minha pele melhorou muito.",
    tag: "Reeducação"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Rich Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={FOOD_IMAGES.texture}
          alt="Textura de alimentos saudáveis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-green/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-gold/20 text-brand-gold px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm leading-relaxed">
            Histórias de Sucesso
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4 mb-4">
            Transformando Vidas
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Não é apenas sobre dieta, é sobre recuperar a autoestima e a saúde de forma definitiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-xl relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-6 left-8 bg-brand-gold p-3 rounded-xl shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="mt-6 flex gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed italic border-b border-gray-100 pb-6">
                "{item.text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-lg text-brand-dark">{item.name}</h4>
                  <span className="text-xs text-brand-green font-bold uppercase tracking-wide bg-brand-light px-2 py-1 rounded-md mt-1 inline-block">
                    {item.tag}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-brand-green">
                  {item.name.charAt(0)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;