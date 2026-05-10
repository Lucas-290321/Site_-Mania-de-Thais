import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Star, Moon } from 'lucide-react';

function SobrePage() {
  return (
    <div className="min-h-screen cosmic-bg pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1586973821830-9d1326ab9427?w=800&q=80" 
                alt="Thais - Astróloga" 
                className="relative z-10 rounded-2xl shadow-2xl border border-white/10 w-full object-cover aspect-[4/5]"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Muito prazer, <br/><span className="text-primary">sou a Thais.</span>
              </h1>
              <p className="text-xl text-muted-foreground font-serif-elegant italic">
                Astróloga, taróloga e guia de jornadas interiores.
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Acredito que o céu no momento do nosso nascimento é um mapa perfeito da nossa alma. Minha missão é traduzir essa linguagem cósmica para ajudar você a compreender sua essência, seus desafios e seus maiores potenciais.
                </p>
                <p>
                  Com mais de 10 anos de dedicação ao estudo dos astros e oráculos, desenvolvi uma abordagem terapêutica que une o conhecimento ancestral com a psicologia moderna.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Minha Abordagem */}
      <section className="py-20 bg-background/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif-display text-3xl md:text-4xl font-bold text-white mb-4">Minha Abordagem</h2>
            <p className="text-muted-foreground">Uma visão integrativa e acolhedora da astrologia.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "Astrologia Terapêutica", desc: "Foco no autoconhecimento e na cura, não apenas em previsões fatalistas." },
              { icon: Moon, title: "Acolhimento", desc: "Um espaço seguro e livre de julgamentos para você explorar suas sombras e luzes." },
              { icon: Sparkles, title: "Praticidade", desc: "Tradução de conceitos complexos em orientações práticas para o seu dia a dia." }
            ].map((item, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl border border-border text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif-display text-4xl font-bold text-white mb-6">Pronto para iniciar sua jornada?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Descubra o que os astros revelam sobre o seu caminho e transforme sua vida através do autoconhecimento.
          </p>
          <Link 
            to="/contato" 
            className="inline-block px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:scale-105 transition-transform shadow-[0_0_30px_hsl(var(--accent)/0.3)]"
          >
            AGENDE UMA LEITURA
          </Link>
        </div>
      </section>
    </div>
  );
}

export default SobrePage;