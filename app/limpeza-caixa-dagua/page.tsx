'use client';

import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Droplet, 
  Shield, 
  Phone, 
  Clock,
  Award,
  Home,
  Building
} from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    step: '1',
    title: 'Esvaziamento',
    description: 'Esvaziamos completamente a caixa d\'água'
  },
  {
    step: '2',
    title: 'Limpeza',
    description: 'Removemos sedimentos e escovamos as paredes'
  },
  {
    step: '3',
    title: 'Desinfecção',
    description: 'Aplicamos produtos desinfetantes apropriados'
  },
  {
    step: '4',
    title: 'Enchimento',
    description: 'Enchemos com água limpa e testamos'
  }
];

const benefits = [
  'Seguimos normas da vigilância sanitária',
  'Produtos desinfetantes apropriados',
  'Equipamentos de proteção individual',
  'Garantia de limpeza completa',
  'Recomendação de frequência',
  'Preços justos e transparentes'
];

const types = [
  {
    icon: Home,
    title: 'Residencial',
    description: 'Caixas d\'água de casas e apartamentos'
  },
  {
    icon: Building,
    title: 'Comercial',
    description: 'Caixas d\'água de empresas e comércios'
  }
];

const faqs = [
  {
    question: 'Com que frequência devo limpar a caixa d\'água?',
    answer: 'Recomendamos a limpeza a cada 6 meses para manter a qualidade da água.'
  },
  {
    question: 'Quanto tempo demora a limpeza?',
    answer: 'O processo completo leva de 2 a 4 horas, dependendo do tamanho da caixa.'
  },
  {
    question: 'Vocês usam produtos químicos?',
    answer: 'Sim, utilizamos produtos desinfetantes apropriados e seguros para consumo humano.'
  },
  {
    question: 'Preciso ficar sem água?',
    answer: 'Sim, durante o processo de limpeza você ficará sem água por algumas horas.'
  }
];

export default function LimpezaCaixaDagua() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Limpeza de Caixa d'Água
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Manter a caixa d'água limpa é fundamental para a saúde da sua família. 
              Realizamos a higienização completa seguindo normas da vigilância sanitária: 
              esvaziamos, removemos sedimentos, escovamos as paredes e fazemos a desinfecção.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
              >
                <Phone size={20} />
                Agendar Limpeza
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

      {/* Types Section */}
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
              Tipos de Caixas d'Água
            </h2>
            <p className="text-xl text-gray-600">
              Atendemos residências e empresas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {types.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-100 rounded-full mb-6">
                  <type.icon size={40} className="text-cyan-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nosso Processo de Limpeza
            </h2>
            <p className="text-xl text-gray-600">
              Seguimos rigorosamente as normas da vigilância sanitária
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Profissionalismo e qualidade em cada limpeza de caixa d'água, 
                garantindo a saúde da sua família.
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
                <div className="text-center text-gray-500">
                  <Droplet size={80} className="mx-auto mb-4 text-primary" />
                  <p className="text-lg">Limpeza Profissional</p>
                  <p className="text-sm">Placeholder para foto</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
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
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre limpeza de caixa d'água
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
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Agende sua Limpeza de Caixa d'Água
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Mantenha a saúde da sua família com água limpa e pura
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
              >
                <Phone size={20} />
                Agendar Limpeza
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
