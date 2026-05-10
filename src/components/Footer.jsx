import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';

function Footer() {
  const navigationLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Conteúdos', href: '/conteudos' },
    { name: 'Depoimentos', href: '/depoimentos' },
    { name: 'Contato', href: '/contato' }
  ];

  const serviceLinks = [
    { name: 'Mapa Astral', href: '/servicos' },
    { name: 'Leitura de Tarot', href: '/servicos' },
    { name: 'Leitura de Oráculos', href: '/servicos' },
    { name: 'Revolução Solar', href: '/servicos' },
    { name: 'Perguntas Objetivas', href: '/servicos' }
  ];

  return (
    <footer id="contato" className="bg-[hsl(var(--cosmic-deep))] text-white/80 relative">
      {/* Subtle Glow Border */}
      <div className="absolute top-0 left-0 right-0 h-px glow-border-purple opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 - Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <Sun className="w-8 h-8 text-[hsl(var(--golden-orange))] group-hover:rotate-90 transition-transform duration-300" />
              <span className="font-serif-display text-2xl font-bold text-white tracking-wider">
                MANIA DE THAIS
              </span>
            </Link>
            <p className="text-base leading-relaxed text-white/70">
              Guiando jornadas de autoconhecimento através da sabedoria ancestral da astrologia, tarot e oráculos.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[hsl(var(--golden-orange)/0.2)] hover:text-[hsl(var(--golden-orange))] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[hsl(var(--golden-orange)/0.2)] hover:text-[hsl(var(--golden-orange))] transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="mailto:contato@maniadethais.com"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[hsl(var(--golden-orange)/0.2)] hover:text-[hsl(var(--golden-orange))] transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div className="space-y-6">
            <span className="font-serif-display text-xl font-semibold text-white tracking-wide">NAVEGUE</span>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-base text-white/70 hover:text-[hsl(var(--golden-orange))] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="space-y-6">
            <span className="font-serif-display text-xl font-semibold text-white tracking-wide">SERVIÇOS</span>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-base text-white/70 hover:text-[hsl(var(--golden-orange))] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-6">
            <span className="font-serif-display text-xl font-semibold text-white tracking-wide">CONTATO</span>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-white/70">
                <MessageCircle className="w-6 h-6 text-[hsl(var(--golden-orange))] flex-shrink-0" />
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(var(--golden-orange))] transition-colors duration-200">
                  WhatsApp: (11) 98765-4321
                </a>
              </li>
              <li className="flex items-start gap-3 text-base text-white/70">
                <Mail className="w-6 h-6 text-[hsl(var(--golden-orange))] flex-shrink-0" />
                <a href="mailto:contato@maniadethais.com" className="hover:text-[hsl(var(--golden-orange))] transition-colors duration-200">
                  contato@maniadethais.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-base text-white/70">
                <MapPin className="w-6 h-6 text-[hsl(var(--golden-orange))] flex-shrink-0" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-sm text-white/60 text-center md:text-left">
              © 2026 Mania de Thais. Todos os direitos reservados.
            </p>

            {/* CTA Button */}
            <Link
              to="/contato"
              className="px-8 py-3 bg-[hsl(var(--golden-orange))] text-white font-bold text-sm rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--golden-orange)/0.5)] hover:scale-105 active:scale-95 uppercase tracking-wider"
            >
              AGENDAR LEITURA
            </Link>

            {/* Policy Links */}
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a href="#privacy" className="hover:text-white transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#terms" className="hover:text-white transition-colors duration-200">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;