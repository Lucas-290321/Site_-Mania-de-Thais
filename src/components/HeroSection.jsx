import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Sparkles } from 'lucide-react';

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section id="inicio" className="min-h-screen cosmic-bg flex items-center pt-20 relative overflow-hidden">
      {/* Background Particle Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full mix-blend-screen"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-float ${4 + Math.random() * 6}s infinite linear`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: 0,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px ${Math.random() > 0.5 ? 'hsl(var(--golden-orange))' : 'hsl(var(--neon-purple))'}`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-20"
          >
            {/* Small Sun Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sun className="w-12 h-12 text-[hsl(var(--golden-orange))] drop-shadow-[0_0_15px_rgba(255,138,0,0.5)]" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-serif-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-md"
              style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}
            >
              Você não é só o seu signo.
            </motion.h1>

            {/* Subheading - Script Style */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-script text-4xl md:text-5xl text-[hsl(var(--golden-orange))] text-glow-orange"
            >
              Você é um universo inteiro.
            </motion.p>

            {/* Body Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-white/80 leading-relaxed max-w-prose drop-shadow-sm"
            >
              A astrologia é uma ferramenta poderosa de autoconhecimento que revela os padrões energéticos que moldam sua jornada. Através do seu mapa astral, você descobre não apenas quem você é, mas também o potencial infinito que carrega dentro de si.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => navigate('/contato')}
                className="px-8 py-4 bg-[hsl(var(--golden-orange))] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--golden-orange)/0.6)] hover:scale-105 active:scale-95 text-center relative overflow-hidden group"
              >
                <span className="relative z-10 drop-shadow-md">AGENDAR LEITURA</span>
                <div className="absolute inset-0 animate-shimmer pointer-events-none" />
              </button>
              <button
                onClick={() => navigate('/servicos')}
                className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-lg transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:backdrop-blur-sm active:scale-95 text-center"
              >
                CONHECER SERVIÇOS
              </button>
            </motion.div>

            {/* Small Text with Star Icon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-2 text-sm text-white/70 font-medium tracking-wide"
            >
              <Sparkles className="w-4 h-4 text-[hsl(var(--golden-orange))]" />
              <span>A ENERGIA SÓ SE TRANSFORMA QUANDO SE TORNA CONSCIENTE.</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Seamless Mystical Integration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center pointer-events-none"
          >
            {/* Deep Embedded Glows (Behind Image) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] radial-glow-orange opacity-40 animate-light-pulse mix-blend-screen" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] radial-glow-purple opacity-30 animate-light-pulse mix-blend-screen" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] radial-glow-magenta opacity-20 animate-light-pulse mix-blend-screen" style={{ animationDelay: '4s' }} />

            {/* Animated Light Rays Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] light-ray-overlay animate-ray-spin opacity-50 mix-blend-screen mask-radial-fade" />

            {/* Embedded Image with Blend Mode and Radial Mask */}
            <div className="relative z-10 w-[120%] h-[120%] -ml-[10%] flex items-center justify-center">
              <img
                src="https://horizons-cdn.hostinger.com/50261a91-1aa2-430b-9ca0-2098d60d8bf4/chatgpt-image-10-de-mai.-de-2026-04_43_06_preview_rev_1-iUG0W.png"
                alt="Mystical woman with zodiac wheel, moon, candles, and crystals embedded in cosmic atmosphere"
                className="w-full h-full object-contain filter contrast-125 brightness-110 mask-radial-fade mix-blend-screen"
                style={{
                  filter: 'drop-shadow(0 0 40px hsl(var(--golden-orange)/0.2)) contrast(1.2) brightness(1.1)'
                }}
              />
            </div>

            {/* Foreground Focused Particles over the image */}
            <div className="absolute inset-0 z-20">
              {[...Array(15)].map((_, i) => (
                <div
                  key={`fg-${i}`}
                  className="absolute bg-[hsl(var(--soft-gold))] rounded-full mix-blend-screen"
                  style={{
                    width: `${Math.random() * 4 + 2}px`,
                    height: `${Math.random() * 4 + 2}px`,
                    left: `${40 + Math.random() * 40}%`,
                    top: `${40 + Math.random() * 40}%`,
                    animation: `particle-float ${3 + Math.random() * 4}s infinite ease-in`,
                    animationDelay: `${Math.random() * 3}s`,
                    opacity: 0,
                    boxShadow: '0 0 10px hsl(var(--golden-orange))'
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;