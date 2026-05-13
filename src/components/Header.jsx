import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Menu, X } from 'lucide-react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INÍCIO', href: '/' },
    { name: 'SOBRE', href: '/sobre' },
    { name: 'SERVIÇOS', href: '/servicos' },
    { name: 'CONTEÚDOS', href: '/conteudos' },
    { name: 'DEPOIMENTOS', href: '/depoimentos' },
    { name: 'CONTATO', href: '/contato' }
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md border-b border-[#d8a547]/20 shadow-[0_4px_30px_rgba(0,0,0,.45)]'
          : ''
      }`}
      style={{
        backgroundImage: `
          linear-gradient(rgba(6,3,18,.93), rgba(6,3,18,.93)),
          url('https://images.unsplash.com/photo-1502139214982-d0ad755818d8?q=80&w=1600')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="h-[78px] flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 select-none">
            <Sun className="w-7 h-7 text-[#d8a547]" strokeWidth={1.3} />

            <div className="leading-none">
              <h1 className="font-cormorant text-[26px] lg:text-[28px] tracking-[2px] text-[#d8a547]">
                THAIS LIMA
              </h1>

              <p className="font-cormorant text-[9px] lg:text-[10px] tracking-[2.5px] text-[#d8a547]/75 mt-[2px]">
                ASTROLOGIA & AUTOCONHECIMENTO
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-[11px] tracking-[1.8px] font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-[#d8a547]'
                      : 'text-white/85 hover:text-[#d8a547]'
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute left-0 -bottom-[10px] h-[1px] bg-[#d8a547] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            to="/contato"
            className="hidden lg:flex items-center justify-center px-7 py-3 rounded-full bg-[#c89235] text-[#1a0c05] font-semibold text-[11px] tracking-[1.4px] uppercase shadow-[0_8px_20px_rgba(201,146,53,.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_18px_rgba(201,146,53,.55)]"
          >
            ✦ AGENDAR LEITURA ✦
          </Link>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#d8a547] p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#090313]/95 backdrop-blur-xl border-t border-[#d8a547]/20"
          >
            <nav className="px-6 py-6 flex flex-col gap-5">

              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm tracking-[1.5px] transition ${
                      isActive
                        ? 'text-[#d8a547]'
                        : 'text-white/85'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Link
                to="/contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 py-3 rounded-full bg-[#c89235] text-center text-[#1a0c05] font-semibold tracking-wide"
              >
                AGENDAR LEITURA
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;