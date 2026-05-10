import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Eye, Sun } from 'lucide-react';

function ServicesSection() {
  const services = [
    {
      icon: Compass,
      title: 'Mapa Astral Completo',
      description: 'Descubra os padrões energéticos que moldam sua personalidade, talentos e desafios através da análise completa do seu mapa natal.'
    },
    {
      icon: Sparkles,
      title: 'Leitura de Tarot',
      description: 'Receba orientação profunda sobre questões específicas da sua vida através das mensagens simbólicas das cartas de tarot.'
    },
    {
      icon: Eye,
      title: 'Leitura de Oráculos',
      description: 'Conecte-se com a sabedoria ancestral através de diferentes sistemas oraculares para iluminar seu caminho.'
    },
    {
      icon: Sun,
      title: 'Revolução Solar',
      description: 'Entenda as energias e temas que marcarão seu próximo ano de vida através da análise do seu retorno solar.'
    }
  ];

  return (
    <section id="servicos" className="py-24 cosmic-bg relative">
      {/* Subtle Glow Border */}
      <div className="absolute inset-0 glow-border-purple opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-[hsl(var(--golden-orange))] tracking-wider uppercase">
            MEUS SERVIÇOS
          </p>
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
            Caminhos para sua jornada
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Cada serviço é uma porta de entrada para o autoconhecimento profundo. Escolha o caminho que mais ressoa com o momento da sua jornada.
          </p>
        </div>

        {/* Service Cards Grid - 4 in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 rounded-xl glow-border-purple bg-[hsl(var(--cosmic-purple))] scale-glow cursor-pointer flex flex-col h-full"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-[hsl(var(--golden-orange)/0.1)] flex items-center justify-center group-hover:bg-[hsl(var(--golden-orange)/0.2)] transition-colors duration-300">
                    <Icon className="w-10 h-10 text-[hsl(var(--golden-orange))]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif-display text-2xl font-semibold text-white text-center mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base text-white/70 text-center leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Link */}
                <div className="text-center mt-auto">
                  <Link
                    to="/servicos"
                    className="text-sm font-semibold text-[hsl(var(--golden-orange))] hover:text-[hsl(var(--soft-gold))] transition-colors duration-200"
                  >
                    SAIBA MAIS →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link
            to="/servicos"
            className="inline-block px-10 py-4 border-2 border-[hsl(var(--golden-orange))] text-[hsl(var(--golden-orange))] font-bold text-lg rounded-lg transition-all duration-300 hover:bg-[hsl(var(--golden-orange)/0.1)] hover:shadow-[0_0_40px_hsl(var(--golden-orange)/0.4)] active:scale-95"
          >
            VER TODOS OS SERVIÇOS
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;