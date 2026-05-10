import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ContentSection() {
  const contentCards = [
    {
      image: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=800&q=80',
      title: 'Lua Nova: começos e intenções',
      description: 'Descubra como aproveitar a energia da Lua Nova para plantar sementes de novos ciclos em sua vida.'
    },
    {
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80',
      title: 'Entenda os signos de Fogo',
      description: 'Explore a energia ardente e transformadora de Áries, Leão e Sagitário no mapa astral.'
    },
    {
      image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800&q=80',
      title: 'Tarot: perguntas que transformam',
      description: 'Aprenda a formular perguntas poderosas que revelam insights profundos nas leituras de tarot.'
    },
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      title: 'Mercúrio Retrógrado: e agora?',
      description: 'Entenda o que realmente acontece durante Mercúrio retrógrado e como navegar esse período.'
    }
  ];

  return (
    <section id="conteudos" className="py-24 cosmic-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
            CONTEÚDOS PARA SUA JORNADA
          </h2>
          <p className="text-xl text-white/70 font-serif-elegant">
            Explore e se aprofunde
          </p>
        </motion.div>

        {/* Content Cards Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {contentCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden glow-border-purple bg-[hsl(var(--cosmic-purple))] scale-glow cursor-pointer flex flex-col"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--cosmic-purple))] via-transparent to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="p-8 space-y-4 flex-grow flex flex-col">
                <h3 className="font-serif-display text-2xl font-semibold text-white group-hover:text-[hsl(var(--golden-orange))] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-lg flex-grow">
                  {card.description}
                </p>
                <div className="pt-4">
                  <Link
                    to="/conteudos"
                    className="inline-block text-sm font-bold text-[hsl(var(--golden-orange))] hover:text-[hsl(var(--soft-gold))] transition-colors duration-200 uppercase tracking-wider"
                  >
                    LER ARTIGO →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContentSection;