import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Send, Heart } from 'lucide-react';
import { IMAGES, SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-brand-light/50 rounded-3xl p-8 md:p-12 shadow-sm mb-16 overflow-hidden">
          <div className="flex flex-col md:flex-row gap-12">

            {/* Form */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-display font-bold text-brand-dark mb-2">Agende sua Consulta</h3>
              <p className="text-gray-600 mb-8">Preencha o formulário abaixo e entrarei em contato para marcar o melhor horário.</p>

              <form
                className="space-y-4"
                action="https://formsubmit.co/annynutri0@gmail.com"
                method="POST"
              >
                {/* Configurações do Formsubmit */}
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="Novo contato do Site!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://annycamilly.com.br" /> {/* URL de retorno, idealmente. Se não tiver domínio ainda, pode remover ou comentar */}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input type="text" name="name" id="name" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                    <input type="tel" name="phone" id="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all" placeholder="(00) 00000-0000" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input type="email" name="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all" placeholder="seu@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem (Opcional)</label>
                  <textarea name="message" id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all resize-none" placeholder="Conte um pouco sobre seu objetivo..."></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-green text-white font-bold py-4 rounded-lg hover:bg-brand-green/90 transition-all flex justify-center items-center gap-2">
                  <Send className="w-4 h-4" /> Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Info & Image */}
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div className="grid grid-cols-1 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-brand-gold">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark">Localização</h4>
                    <p className="text-gray-600">Tabatinga - AM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-brand-gold">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark">Email</h4>
                    <p className="text-gray-600">{SOCIAL_LINKS.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-brand-gold">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark">Redes Sociais</h4>
                    <a href={SOCIAL_LINKS.instagram} className="text-gray-600 hover:text-brand-green">@annynavegantes_nutri</a>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative h-64 md:h-full w-full rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={IMAGES.contact}
                  alt="Anny Navegantes"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <p className="text-white font-medium">"Sua melhor versão começa com uma decisão."</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Anny Navegantes Nutricionista. Todos os direitos reservados.</p>
          <p className="flex items-center justify-center gap-1 mt-2 text-xs">
            Desenvolvido por <a href="https://meu-portfolio-9ij.pages.dev/" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-brand-green transition-colors flex items-center gap-1">Matheus Amorim <Heart className="w-3 h-3 text-red-500 fill-current" /></a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;