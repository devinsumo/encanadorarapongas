'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Droplets, 
  Wrench, 
  Shield, 
  Droplet, 
  Phone
} from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Desentupimento',
    description: 'Desentupimento de pias, vasos e ralos com equipamentos modernos',
    href: '/desentupimento',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: Wrench,
    title: 'Instalação Hidráulica',
    description: 'Instalação de tubulações, torneiras e equipamentos hidráulicos',
    href: '/instalacao-hidraulica',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: Shield,
    title: 'Conserto de Vazamentos',
    description: 'Detecção e reparo de vazamentos com equipamentos eletrônicos',
    href: '/conserto-vazamentos',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    icon: Droplet,
    title: 'Limpeza de Caixa d\'Água',
    description: 'Higienização completa seguindo normas da vigilância sanitária',
    href: '/limpeza-caixa-dagua',
    color: 'bg-cyan-50 text-cyan-600'
  }
];

export default function Servicos() {
  return (
    <div className="min-h-screen pt-32 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos Serviços Hidráulicos
            </h1>
            <p className="text-xl text-gray-800 mb-8 leading-relaxed">
              Soluções completas em hidráulica para residências e empresas em Arapongas/PR
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-800 mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="text-primary hover:text-primary/80 font-semibold transition-colors group-hover:translate-x-1 inline-block"
                >
                  Saiba mais →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precisa de um Encanador em Arapongas?
            </h2>
            <p className="text-xl mb-8">
              Entre em contato agora mesmo e solicite seu orçamento sem compromisso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl border-2 border-white"
              >
                <Phone size={20} />
                Solicitar Orçamento
              </Link>
              <Link
                href="https://wa.me/5543999714142"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg"
              >
                <Phone size={20} />
                WhatsApp
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
