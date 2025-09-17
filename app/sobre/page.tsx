'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Award, 
  Users, 
  Shield, 
  CheckCircle, 
  Phone,
  Droplets,
  Wrench
} from 'lucide-react';

const features = [
  {
    icon: Award,
    title: '20 Anos de Experiência',
    description: 'Mais de duas décadas atendendo Arapongas e região'
  },
  {
    icon: Users,
    title: 'Clientes Satisfeitos',
    description: 'Milhares de clientes atendidos com excelência'
  },
  {
    icon: Shield,
    title: 'Garantia Total',
    description: 'Garantia em todos os serviços prestados'
  }
];

const values = [
  'Atendimento profissional e pontual',
  'Equipamentos modernos e de qualidade',
  'Preços justos e transparentes',
  'Garantia em todos os serviços',
  'Atendimento personalizado',
  'Soluções rápidas e eficientes'
];

export default function Sobre() {
  return (
    <div className="min-h-screen pt-32 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700/10 via-accent/5 to-blue-700/10 py-20 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Sobre o{' '}
                <span className="text-blue-700">Ckarlos Encanador</span>
              </h1>
              <p className="text-xl text-gray-800 leading-relaxed">
                Com mais de 20 anos de experiência na área hidráulica, atendo residências 
                e empresas em Arapongas e região. Utilizo materiais de qualidade e técnicas 
                de qualidade para garantir a excelência em cada serviço prestado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg"
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
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-gray-700">
                  <Droplets size={80} className="mx-auto mb-4 text-blue-700" />
                  <p className="text-lg">Imagem do Profissional</p>
                  <p className="text-sm">Placeholder para foto</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher nossos serviços?
            </h2>
            <p className="text-xl text-gray-800">
              Qualidade, experiência e compromisso com a satisfação do cliente
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-700/10 text-blue-700 rounded-full mb-4">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-800">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossos Valores
              </h2>
              <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                Trabalhamos com transparência, qualidade e dedicação para oferecer 
                o melhor serviço hidráulico em Arapongas e região.
              </p>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-accent" />
                    <span className="text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-gray-700">
                  <Wrench size={80} className="mx-auto mb-4 text-blue-700" />
                  <p className="text-lg">Imagem do Trabalho</p>
                  <p className="text-sm">Placeholder para foto</p>
                </div>
              </div>
            </motion.div>
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
              Pronto para resolver seu problema hidráulico?
            </h2>
            <p className="text-xl mb-8">
              Entre em contato e solicite seu orçamento gratuito
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl border-2 border-white"
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
