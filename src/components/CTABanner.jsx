import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Moon, MessageCircle } from 'lucide-react';

function CTABanner() {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--neon-purple))] via-[hsl(var(--magenta-glow))] to-[hsl(var(--neon-purple))] opacity-90" />
      
      {/* Radial Glows */}
      <div className="absolute inset-0 radial-glow-magenta opacity-60 pointer-events-none animate-cosmic-glow" />
      <div className="absolute inset-0 radial-glow-purple opacity-40 pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left - Moon Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex justify-center lg:justify-start"
          >
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <Moon className="w-12 h-12 text-white text-glow-magenta" />
            </div>
          </motion.div>

          {/* Center - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-center lg:text-left space-y-4"
          >
            <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
              Para eternos buscadores.
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl font-medium">
              Crescimento pessoal, busca de decisões conscientes, expansão da sua consciência. O nicho dessa jornada pode transformar a sua vida.
            </p>
          </motion.div>

          {/* Right - CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 space-y-4 flex flex-col items-center lg:items-end"
          >
            <button
              onClick={() => navigate('/contato')}
              className="flex items-center justify-center gap-3 w-full max-w-md px-8 py-5 bg-[hsl(var(--golden-orange))] text-white font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-[0_0_50px_hsl(var(--golden-orange)/0.8)] hover:scale-105 active:scale-95 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                AGENDAR MINHA LEITURA
              </span>
              <div className="absolute inset-0 animate-shimmer pointer-events-none" />
            </button>
            <p className="text-center lg:text-right text-sm font-bold text-white/90 tracking-widest uppercase w-full max-w-md">
              CONTEÚDO TODA SEMANA
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;