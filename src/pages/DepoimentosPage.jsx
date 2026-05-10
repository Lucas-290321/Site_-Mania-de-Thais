import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TestimonialCard from '../components/TestimonialCard.jsx';

function DepoimentosPage() {
  const testimonials = [
    {
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
      name: 'Mariana Silva',
      service: 'Mapa Astral Completo',
      rating: 5,
      text: 'A leitura do meu mapa com a Thais foi um divisor de águas. Ela tem uma sensibilidade incrível para traduzir aspectos complexos de forma acolhedora. Entendi padrões que repetia há anos.',
      date: 'Abril 2026'
    },
    {
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
      name: 'Camila Costa',
      service: 'Revolução Solar',
      rating: 5,
      text: 'Faço minha revolução solar com a Thais todo ano. É impressionante como as orientações me ajudam a focar nas energias certas e me preparar para os desafios. Recomendo de olhos fechados!',
      date: 'Março 2026'
    },
    {
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80',
      name: 'Rafael Mendes',
      service: 'Leitura de Tarot',
      rating: 5,
      text: 'Estava em um momento de muita dúvida profissional. A tiragem de tarot trouxe uma clareza absurda e me deu a coragem que faltava para tomar a decisão. Muito grato!',
      date: 'Fevereiro 2026'
    },
    {
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
      name: 'Juliana Barros',
      service: 'Mapa Astral Completo',
      rating: 5,
      text: 'Nunca tinha feito meu mapa e fiquei encantada. A Thais explica tudo com muita didática e carinho. O material em PDF que ela envia depois é riquíssimo.',
      date: 'Janeiro 2026'
    },
    {
      photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&q=80',
      name: 'Beatriz Lima',
      service: 'Leitura de Oráculos',
      rating: 5,
      text: 'Uma sessão de pura conexão e paz. As mensagens dos oráculos vieram exatamente de encontro ao que meu coração precisava ouvir naquele momento.',
      date: 'Dezembro 2025'
    },
    {
      photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&q=80',
      name: 'Fernanda Alves',
      service: 'Perguntas Objetivas',
      rating: 5,
      text: 'Prático, rápido e muito assertivo. A resposta por áudio foi super completa e me ajudou a resolver uma questão urgente.',
      date: 'Novembro 2025'
    }
  ];

  return (
    <div className="min-h-screen cosmic-bg pt-20">
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            O que meus <span className="text-primary">clientes dizem</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Histórias reais de transformação e autoconhecimento.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 border-y border-border bg-background/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-accent mb-2">500+</p>
              <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Clientes Satisfeitos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">4.9/5</p>
              <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Avaliação Média</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">10+</p>
              <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/10 border-t border-primary/20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif-display text-3xl md:text-4xl font-bold text-white mb-6">Faça parte dessa egrégora</h2>
          <p className="text-lg text-muted-foreground mb-8">Permita-se viver essa experiência de conexão profunda com a sua essência.</p>
          <Link 
            to="/contato" 
            className="inline-block px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:scale-105 transition-transform shadow-[0_0_30px_hsl(var(--accent)/0.3)]"
          >
            AGENDE SUA LEITURA AGORA
          </Link>
        </div>
      </section>
    </div>
  );
}

export default DepoimentosPage;