import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

function ServiceCard({ title, description, includes, benefits, price, icon: Icon }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-8 flex flex-col h-full scale-glow relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-primary/20" />
      
      <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/20 text-primary">
        {Icon && <Icon className="w-7 h-7" />}
      </div>
      
      <h3 className="font-serif-display text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="space-y-6 flex-grow">
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">O que inclui:</h4>
          <ul className="space-y-2">
            {includes.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Benefícios:</h4>
          <ul className="space-y-2">
            {benefits.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Investimento</p>
            <p className="text-2xl font-bold text-white">{price}</p>
          </div>
        </div>
        <Link
          to="/contato"
          className="block w-full py-3 px-4 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/20 hover:border-primary text-center rounded-lg font-semibold transition-all duration-300"
        >
          AGENDAR AGORA
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;