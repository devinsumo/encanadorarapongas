'use client';

import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Droplets, 
  Phone, 
  Wrench,
  Home,
  Building
} from 'lucide-react';
import Link from 'next/link';

const problems = [
  {
    icon: Droplets,
    title: 'Pia Entupida',
    description: 'Desentupimento de pias de cozinha e banheiro com técnicas eficientes'
  },
  {
    icon: Wrench,
    title: 'Vaso Sanitário',
    description: 'Solução para vasos entupidos sem quebrar ou danificar'
  },
  {
    icon: Home,
    title: 'Ralos e Sifões',
    description: 'Limpeza completa de ralos de banheiro e área de serviço'
  },
  {
    icon: Building,
    title: 'Tubulações',
    description: 'Desentupimento de tubulações principais e secundárias'
  }
];

const benefits = [
  'Desentupimento rápido e limpo',
  'Equipamentos modernos e eficientes',
  'Não quebra pisos ou paredes',
  'Atendimento para residências e empresas',
  'Garantia no serviço prestado',
  'Preços justos e transparentes'
];

const faqs = [
  {
    question: 'Quanto tempo demora o desentupimento?',
    answer: 'A maioria dos desentupimentos é resolvida em até 2 horas, dependendo da complexidade do problema.'
  },
  {
    question: 'Vocês quebram pisos ou paredes?',
        answer: 'Na maioria dos casos, não! Utilizamos técnicas eficientes que permitem desentupir sem quebrar. Porém, em situações muito específicas, pode ser necessário fazer uma pequena abertura, que será avaliada no orçamento.'
  },
  {
    question: 'Qual o valor do serviço?',
    answer: 'O valor varia conforme o tipo de entupimento. Fazemos orçamento gratuito sem compromisso.'
  },
  {
    question: 'Vocês garantem o serviço?',
    answer: 'Sim! Oferecemos garantia em todos os serviços de desentupimento prestados.'
  }
];

export default function Desentupimento() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 py-20 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Desentupimento em Arapongas
            </h1>
            <p className="text-xl text-gray-800 mb-8 leading-relaxed">
              Entupiu a pia, vaso ou ralo? Oferecemos soluções de desentupimento rápidas e sem sujeira. 
              Contamos com sondas elétricas e hidrojateamento de alta pressão para desobstruir 
              tubulações de forma segura.
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
              Problemas que Resolvemos
            </h2>
            <p className="text-xl text-gray-800">
              Atendemos todos os tipos de entupimentos com técnicas eficientes
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <problem.icon size={32} className="text-blue-600" />
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
                Utilizamos técnicas avançadas e equipamentos especializados para garantir 
                o melhor resultado em cada desentupimento.
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
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://i.imgur.com/9Ogmxct.png" 
                  alt="Equipamentos de desentupimento - Serviços hidráulicos em Arapongas/PR"
                  className="w-full h-96 object-cover"
                  style={{ width: '100%', height: '384px' }}
                />
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
              Processo simples e eficiente para resolver seu problema
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Contato',
                description: 'Entre em contato por telefone ou WhatsApp'
              },
              {
                step: '2',
                title: 'Avaliação',
                description: 'Avaliamos o problema e fazemos orçamento'
              },
              {
                step: '3',
                title: 'Execução',
                description: 'Executamos o serviço com técnicas eficientes'
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-700 text-white rounded-full text-2xl font-bold mb-4">
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
              Tire suas dúvidas sobre nossos serviços de desentupimento
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
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precisa de Desentupimento em Arapongas?
            </h2>
            <p className="text-xl mb-8">
              Entre em contato agora mesmo e solicite seu orçamento gratuito
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-lg hover:bg-gray-100 shadow-lg hover:shadow-xl border-2 border-white transition-colors font-semibold text-lg"
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
