import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';
import { Compass, Sparkles, Eye, Sun, MessageCircle } from 'lucide-react';

function ServicosPage() {
  const services = [
    {
      icon: Compass,
      title: 'Mapa Astral Completo',
      description: 'Uma análise profunda da sua personalidade, talentos, desafios e propósito de vida baseada no céu do seu nascimento.',
      includes: ['Sessão online de 90 min', 'Gravação da consulta', 'Material em PDF com os principais pontos', 'Análise de todos os planetas e casas'],
      benefits: ['Autoconhecimento profundo', 'Clareza sobre padrões repetitivos', 'Descoberta de talentos ocultos'],
      price: 'R$ 350,00'
    },
    {
      icon: Sun,
      title: 'Revolução Solar',
      description: 'Previsão anual baseada no seu aniversário. Entenda as energias, desafios e oportunidades do seu novo ciclo.',
      includes: ['Sessão online de 60 min', 'Gravação da consulta', 'Análise dos trânsitos do ano', 'Foco nas áreas de maior destaque'],
      benefits: ['Preparação para o ano', 'Aproveitamento de oportunidades', 'Prevenção de desafios'],
      price: 'R$ 280,00'
    },
    {
      icon: Sparkles,
      title: 'Leitura de Tarot',
      description: 'Orientação profunda sobre questões específicas da sua vida através das mensagens simbólicas das cartas.',
      includes: ['Sessão online de 60 min', 'Tiragem geral + perguntas', 'Foto da mandala final'],
      benefits: ['Clareza em momentos de dúvida', 'Orientação para tomada de decisão', 'Visão do panorama atual'],
      price: 'R$ 200,00'
    },
    {
      icon: Eye,
      title: 'Leitura de Oráculos',
      description: 'Conexão com a sabedoria ancestral para iluminar seu caminho e trazer mensagens do seu eu superior.',
      includes: ['Sessão online de 45 min', 'Uso de múltiplos decks', 'Mensagens de direcionamento'],
      benefits: ['Aconselhamento espiritual', 'Conexão intuitiva', 'Paz interior'],
      price: 'R$ 150,00'
    },
    {
      icon: MessageCircle,
      title: 'Perguntas Objetivas',
      description: 'Respostas diretas para questões pontuais utilizando Tarot ou Astrologia Horária.',
      includes: ['Resposta por áudio no WhatsApp', 'Foto das cartas/mapa', 'Até 3 perguntas específicas'],
      benefits: ['Rapidez na resposta', 'Custo acessível', 'Direcionamento prático'],
      price: 'R$ 80,00'
    }
  ];

  const faqs = [
    {
      question: "Como funcionam as consultas online?",
      answer: "As consultas são realizadas via Google Meet ou Zoom. O link é enviado para o seu email após a confirmação do agendamento. Você pode gravar a sessão para assistir depois."
    },
    {
      question: "Preciso saber o horário exato do meu nascimento?",
      answer: "Para o Mapa Astral e Revolução Solar, sim. O horário exato (presente na certidão de nascimento) é fundamental para o cálculo correto do Ascendente e das Casas Astrológicas."
    },
    {
      question: "Qual a diferença entre Tarot e Oráculo?",
      answer: "O Tarot possui uma estrutura fixa de 78 cartas (Arcanos Maiores e Menores) e foca em jornadas e situações específicas. Oráculos são mais livres e geralmente trazem mensagens de aconselhamento e reflexão espiritual."
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos PIX, transferência bancária e cartão de crédito (com possibilidade de parcelamento via link de pagamento)."
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
            Serviços Premium de <span className="text-primary">Astrologia</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Escolha a ferramenta ideal para o seu momento de vida.
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background/50 border-t border-border mt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif-display text-3xl md:text-4xl font-bold text-white mb-4">Dúvidas Frequentes</h2>
            <p className="text-muted-foreground">Tudo o que você precisa saber antes de agendar.</p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </div>
  );
}

export default ServicosPage;