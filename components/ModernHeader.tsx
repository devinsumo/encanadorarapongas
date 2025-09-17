'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function ModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Início', href: '/' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' }
  ];

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-transparent py-4"
    >
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center">
          <nav className="relative bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <Link href="/" className="text-xl font-bold text-gray-900">
                Ckarlos Encanador
              </Link>
              
              {/* Navigation Links */}
              <div className="flex items-center space-x-6">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-gray-700 hover:text-primary transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              {/* Login/CTA Button */}
              <div className="ml-4 pl-4 border-l border-gray-200">
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-white text-gray-900 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors font-semibold relative group"
                >
                  <Phone size={16} />
                  <span>Solicitar Orçamento</span>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Ckarlos Encanador
            </Link>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full bg-white shadow-lg border border-gray-100 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
            >
              <div className="p-6 space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-700 hover:text-primary transition-colors font-medium py-2"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href="/contato"
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-semibold w-full justify-center"
                  >
                    <Phone size={16} />
                    <span>Solicitar Orçamento</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
}
