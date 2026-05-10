import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlogArticleCard from '../components/BlogArticleCard.jsx';

function ContentPage() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const categories = ['Todos', 'Astrologia', 'Tarot', 'Oráculos', 'Lua', 'Geral'];

  const articles = [
    {
      image: 'https://images.unsplash.com/photo-1595639546396-99140afe3a0d?w=800&q=80',
      category: 'Lua',
      title: 'Lua Nova: começos e intenções',
      excerpt: 'Descubra como aproveitar a energia da Lua Nova para plantar sementes de novos ciclos em sua vida e manifestar seus desejos.',
      author: 'Thais',
      date: '10 Mai 2026',
      readTime: '5 min'
    },
    {
      image: 'https://images.unsplash.com/photo-1570873384776-845431a9306b?w=800&q=80',
      category: 'Astrologia',
      title: 'Entenda os signos de Fogo',
      excerpt: 'Explore a energia ardente e transformadora de Áries, Leão e Sagitário no mapa astral e como eles impulsionam a ação.',
      author: 'Thais',
      date: '05 Mai 2026',
      readTime: '7 min'
    },
    {
      image: 'https://images.unsplash.com/photo-1704030328221-94fa7e021808?w=800&q=80',
      category: 'Tarot',
      title: 'Tarot: perguntas que transformam',
      excerpt: 'Aprenda a formular perguntas poderosas que revelam insights profundos nas leituras de tarot e evitam respostas limitadas.',
      author: 'Thais',
      date: '28 Abr 2026',
      readTime: '6 min'
    },
    {
      image: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=800&q=80',
      category: 'Astrologia',
      title: 'Mercúrio Retrógrado: e agora?',
      excerpt: 'Entenda o que realmente acontece durante Mercúrio retrógrado e como navegar esse período sem pânico.',
      author: 'Thais',
      date: '15 Abr 2026',
      readTime: '8 min'
    },
    {
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80',
      category: 'Geral',
      title: 'Astrologia e relacionamentos',
      excerpt: 'Como a sinastria pode ajudar a compreender as dinâmicas, desafios e potenciais de uma parceria amorosa.',
      author: 'Thais',
      date: '02 Abr 2026',
      readTime: '10 min'
    },
    {
      image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800&q=80',
      category: 'Oráculos',
      title: 'Oráculos: guia completo',
      excerpt: 'Um panorama sobre os diferentes tipos de oráculos e como escolher o melhor deck para a sua intuição.',
      author: 'Thais',
      date: '20 Mar 2026',
      readTime: '6 min'
    }
  ];

  const filteredArticles = activeCategory === 'Todos' 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  return (
    <div className="min-h-screen cosmic-bg pt-20">
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Blog de <span className="text-primary">Astrologia</span> e Espiritualidade
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Artigos, reflexões e guias para a sua jornada de autoconhecimento.
          </motion.p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-primary text-primary-foreground shadow-[0_0_15px_hsl(var(--primary)/0.5)]' 
                    : 'bg-card text-muted-foreground hover:bg-card/80 border border-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <BlogArticleCard {...article} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContentPage;