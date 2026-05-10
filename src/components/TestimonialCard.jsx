import React from 'react';
import { Star } from 'lucide-react';

function TestimonialCard({ photo, name, service, rating, text, date }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 flex flex-col h-full relative">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={photo} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
        />
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-xs text-primary">{service}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-accent fill-accent' : 'text-muted'}`} 
          />
        ))}
      </div>
      
      <p className="text-muted-foreground text-sm italic flex-grow mb-4">
        "{text}"
      </p>
      
      <p className="text-xs text-muted-foreground/60 mt-auto">
        {date}
      </p>
    </div>
  );
}

export default TestimonialCard;