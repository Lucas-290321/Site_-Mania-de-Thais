import React from 'react';
import { motion } from 'framer-motion';

function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-[hsl(var(--cosmic-deep))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-square max-w-xl mx-auto lg:mx-0"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              {/* Radial Glow Background */}
              <div className="absolute inset-0 radial-glow-purple opacity-50 pointer-events-none animate-cosmic-glow" />
              
              {/* Image */}
              <img
                src="https://horizons-cdn.hostinger.com/50261a91-1aa2-430b-9ca0-2098d60d8bf4/chatgpt-image-10-de-mai.-de-2026-04_43_06_preview_rev_1-iUG0W.png"
                alt="Mystical woman with zodiac wheel background in black and white"
                className="w-full h-full object-cover grayscale contrast-125 brightness-90"
              />
              
              {/* Glow Border Overlay */}
              <div className="absolute inset-0 glow-border-purple rounded-2xl pointer-events-none" />
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <p className="text-sm font-semibold text-[hsl(var(--neon-purple))] tracking-wider uppercase">
                SOBRE
              </p>
              <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em', textWrap: 'balance' }}>
                Astrologia como ferramenta de autoconhecimento
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                Minha missão é guiar pessoas em suas jornadas de autoconhecimento através da sabedoria ancestral da astrologia, tarot e oráculos. Acredito que cada um de nós carrega um universo único de potenciais esperando para serem descobertos.
              </p>
              <p>
                Através de leituras personalizadas e profundas, ajudo você a compreender os padrões energéticos que moldam sua vida, iluminando caminhos para decisões mais conscientes e alinhadas com sua verdadeira essência.
              </p>
              <p>
                A transformação acontece quando a energia se torna consciente. E é exatamente isso que busco proporcionar em cada consulta: clareza, compreensão e empoderamento para que você possa viver sua jornada com mais propósito e autenticidade.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4"
            >
              <a
                href="#sobre"
                className="inline-block px-10 py-4 border-2 border-[hsl(var(--golden-orange))] text-[hsl(var(--golden-orange))] font-bold text-lg rounded-lg transition-all duration-300 hover:bg-[hsl(var(--golden-orange)/0.1)] hover:shadow-[0_0_40px_hsl(var(--golden-orange)/0.4)] active:scale-95"
              >
                CONHEÇA MINHA HISTÓRIA
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;