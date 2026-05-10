import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';

function BlogArticleCard({ image, category, title, excerpt, author, date, readTime }) {
  return (
    <article className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col h-full scale-glow group">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-background/80 backdrop-blur-md text-xs font-semibold text-primary rounded-full uppercase tracking-wider border border-primary/20">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif-display text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border mt-auto">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {readTime}
            </span>
          </div>
        </div>
        
        <Link 
          to="/conteudos" 
          className="mt-4 inline-block text-sm font-bold text-accent hover:text-accent/80 transition-colors uppercase tracking-wider"
        >
          Ler Artigo →
        </Link>
      </div>
    </article>
  );
}

export default BlogArticleCard;