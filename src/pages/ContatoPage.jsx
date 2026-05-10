import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, MessageCircle, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      e.target.reset();
      // Store in localStorage as requested
      localStorage.setItem('lastContactSubmit', new Date().toISOString());
    }, 1500);
  };

  return (
    <div className="min-h-screen cosmic-bg pt-20">
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Entre em <span className="text-primary">Contato</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Estou aqui para ajudar na sua jornada. Mande uma mensagem ou agende seu horário.
          </motion.p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Envie uma mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">WhatsApp</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required 
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-muted-foreground mb-2">Serviço de Interesse</label>
                  <select 
                    id="service" 
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                  >
                    <option value="">Selecione um serviço...</option>
                    <option value="mapa">Mapa Astral Completo</option>
                    <option value="revolucao">Revolução Solar</option>
                    <option value="tarot">Leitura de Tarot</option>
                    <option value="oraculos">Leitura de Oráculos</option>
                    <option value="perguntas">Perguntas Objetivas</option>
                    <option value="outro">Outro / Dúvida</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Como posso te ajudar?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
                </button>
              </form>
            </motion.div>

            {/* Right: Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Informações de Contato</h2>
                <div className="space-y-6">
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                      <p className="text-lg font-medium text-white group-hover:text-primary transition-colors">+55 11 99999-9999</p>
                    </div>
                  </a>
                  
                  <a href="mailto:contato@maniadethais.com" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <p className="text-lg font-medium text-white group-hover:text-primary transition-colors">contato@maniadethais.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Horário de Atendimento</p>
                      <p className="text-lg font-medium text-white">Segunda a Sexta: 10h às 18h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Localização</p>
                      <p className="text-lg font-medium text-white">Atendimentos 100% Online<br/><span className="text-sm text-muted-foreground">Baseada em São Paulo, SP</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContatoPage;