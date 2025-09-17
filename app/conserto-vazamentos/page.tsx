'use client';

import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  AlertTriangle, 
  Home, 
  Building, 
  Phone, 
  Search
} from 'lucide-react';
import Link from 'next/link';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Vazamentos Aparentes',
    description: 'Torneiras, registros e conexões com vazamentos visíveis'
  },
  {
    icon: Search,
    title: 'Vazamentos Ocultos',
    description: 'Detecção com equipamentos eletrônicos sem quebrar'
  },
  {
    icon: Home,
    title: 'Caixas d\'Água',
    description: 'Reparo de vazamentos em caixas d\'água e reservatórios'
  },
  {
    icon: Building,
    title: 'Tubulações',
    description: 'Conserto de vazamentos em tubulações principais'
  }
];

const benefits = [
  'Detecção sem quebrar pisos ou paredes',
  'Equipamentos eletrônicos modernos',
  'Reparo rápido e eficiente',
  'Garantia no serviço prestado',
  'Preços justos e transparentes',
  'Atendimento profissional'
];

const faqs = [
  {
    question: 'Como detectam vazamentos ocultos?',
    answer: 'Utilizamos equipamentos eletrônicos de última geração que detectam vazamentos na maioria dos casos sem necessidade de quebrar pisos ou paredes.'
  },
  {
    question: 'Vocês quebram pisos ou paredes?',
    answer: 'Na maioria dos casos, não! Nossos equipamentos detectam vazamentos sem quebrar. Porém, em situações muito específicas onde o vazamento está em local de difícil acesso, pode ser necessário fazer uma pequena abertura, que será avaliada no orçamento.'
  },
  {
    question: 'Quanto tempo demora o conserto?',
    answer: 'A maioria dos vazamentos é consertada no mesmo dia, dependendo da complexidade do problema.'
  },
  {
    question: 'Vocês garantem o serviço?',
    answer: 'Sim! Oferecemos garantia em todos os serviços de conserto de vazamentos.'
  }
];

export default function ConsertoVazamentos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Reparo de Vazamentos
            </h1>
            <p className="text-xl text-gray-800 mb-8 leading-relaxed">
              Vazamentos aumentam a conta de água e causam infiltrações. Detectamos vazamentos 
              aparentes ou ocultos com equipamentos eletrônicos e realizamos o reparo adequado, 
              evitando quebras desnecessárias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg"
              >
                <Phone size={20} />
                Solicitar Orçamento
              </Link>
              <a
                href="https://wa.me/5543999714142"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg"
              >
                <Phone size={20} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Vazamentos que Atendemos
            </h2>
            <p className="text-xl text-gray-800">
              Detectamos e consertamos todos os tipos de vazamentos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-white via-gray-50 to-white border-b border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <problem.icon size={32} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-800">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                Por que escolher nossos serviços?
              </h2>
              <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                Utilizamos equipamentos modernos e técnicas avançadas para detectar 
                e consertar vazamentos sem causar danos desnecessários.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={20} className="text-accent" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
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
                  <Search size={80} className="mx-auto mb-4 text-primary" />
                  <p className="text-lg">Detecção Eletrônica</p>
                  <p className="text-sm">Placeholder para foto</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-800">
              Processo eficiente para detectar e consertar vazamentos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Detecção',
                description: 'Localizamos o vazamento com equipamentos eletrônicos'
              },
              {
                step: '2',
                title: 'Avaliação',
                description: 'Avaliamos o problema e fazemos orçamento'
              },
              {
                step: '3',
                title: 'Reparo',
                description: 'Consertamos o vazamento com materiais de qualidade'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary via-primary to-accent text-white rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-800">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-800">
              Tire suas dúvidas sobre conserto de vazamentos
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-800">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tem Vazamento em Casa?
            </h2>
            <p className="text-xl mb-8">
              Entre em contato agora mesmo e evite desperdício de água e danos maiores
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 shadow-lg hover:shadow-xl border-2 border-white transition-colors font-semibold text-lg"
              >
                <Phone size={20} />
                Solicitar Orçamento
              </Link>
              <a
                href="https://wa.me/5543999714142"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg"
              >
                <Phone size={20} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
