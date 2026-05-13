import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Menu, X } from 'lucide-react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Conteúdos', href: '/conteudos' },
    { name: 'Depoimentos', href: '/depoimentos' },
    { name: 'Contato', href: '/contato' }
  ];

  return (
    <motion.header
      translate="no"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'blur-bg border-b border-white/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            translate="no"
          >
            <Sun className="w-6 h-6 text-[hsl(var(--golden-orange))] transition-transform duration-300 group-hover:rotate-90" />

            <span
              className="font-serif-display text-xl font-bold text-white tracking-wider notranslate"
              translate="no"
            >
              MANIA DE THAIS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-8"
            translate="no"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  translate="no"
                  className={`text-sm font-medium transition-colors duration-200 relative group ${
                    isActive
                      ? 'text-[hsl(var(--golden-orange))]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span className="notranslate" translate="no">
                    {link.name}
                  </span>

                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[hsl(var(--golden-orange))] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <Link
            to="/contato"
            translate="no"
            className="hidden lg:block px-6 py-2.5 bg-[hsl(var(--green))] text-white font-semibold text-sm rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--golden-orange)/0.5)] hover:scale-105 active:scale-95"
          >
            <span className="notranslate" translate="no">
              AGENDE SUA LEITURA
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
            translate="no"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden blur-bg border-t border-white/10"
          translate="no"
        >
          <nav className="px-4 py-6 space-y-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  translate="no"
                  className={`block transition-colors duration-200 py-2 ${
                    isActive
                      ? 'text-[hsl(var(--golden-orange))] font-semibold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span className="notranslate" translate="no">
                    {link.name}
                  </span>
                </Link>
              );
            })}

            <Link
              to="/contato"
              onClick={() => setIsMobileMenuOpen(false)}
              translate="no"
              className="block w-full px-6 py-3 bg-[hsl(var(--golden-orange))] text-white font-semibold text-sm rounded-lg text-center transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--golden-orange)/0.5)]"
            >
              <span className="notranslate" translate="no">
                AGENDE SUA LEITURA
              </span>
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}

export default Header;