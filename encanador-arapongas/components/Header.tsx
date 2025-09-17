'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            Ckarlos Encanador
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Início
            </Link>
            <Link href="/desentupimento" className="text-gray-700 hover:text-primary transition-colors">
              Desentupimento
            </Link>
            <Link href="/instalacao-hidraulica" className="text-gray-700 hover:text-primary transition-colors">
              Instalação
            </Link>
            <Link href="/conserto-vazamentos" className="text-gray-700 hover:text-primary transition-colors">
              Vazamentos
            </Link>
            <Link href="/limpeza-caixa-dagua" className="text-gray-700 hover:text-primary transition-colors">
              Caixa d'Água
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/contato" 
              className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <Phone size={18} />
              <span>Solicitar Orçamento</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 py-4"
          >
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                href="/desentupimento" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Desentupimento
              </Link>
              <Link 
                href="/instalacao-hidraulica" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Instalação
              </Link>
              <Link 
                href="/conserto-vazamentos" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Vazamentos
              </Link>
              <Link 
                href="/limpeza-caixa-dagua" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Caixa d'Água
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/contato" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Link 
                href="/contato" 
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={18} />
                <span>Solicitar Orçamento</span>
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
