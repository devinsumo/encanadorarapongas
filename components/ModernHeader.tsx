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
    <>
      <motion.header 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4"
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
                      className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                
                {/* Login/CTA Button */}
                <div className="ml-4 pl-4 border-l border-gray-200">
                  <Link
                    href="/contato"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors font-semibold relative group"
                  >
                    <Phone size={16} />
                    <span>Solicitar Orçamento</span>
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
                className="p-3 rounded-full bg-blue-700 text-white shadow-lg hover:bg-blue-800 transition-colors relative z-50"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 md:hidden"
        >
          <div className="p-6 space-y-1">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 font-medium py-3 px-4 rounded-xl"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <div className="pt-4 border-t border-gray-100 mt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/contato"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-6 py-4 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-colors font-semibold w-full justify-center shadow-lg"
                >
                  <Phone size={18} />
                  <span>Solicitar Orçamento</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
