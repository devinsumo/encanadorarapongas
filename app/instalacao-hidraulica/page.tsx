'use client';

import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Wrench, 
  Home, 
  Building, 
  Phone, 
  Settings,
  Shield,
  Award
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Wrench,
    title: 'Instalação de Tubulações',
    description: 'PVC, PPR, cobre e conexões modernas'
  },
  {
    icon: Settings,
    title: 'Torneiras e Misturadores',
    description: 'Instalação de torneiras, chuveiros e misturadores'
  },
  {
    icon: Home,
    title: 'Vasos Sanitários',
    description: 'Instalação e troca de vasos sanitários'
  },
  {
    icon: Building,
    title: 'Caixas de Gordura',
    description: 'Instalação e manutenção de caixas de gordura'
  }
];

const materials = [
  'Tubulações de PVC',
  'Tubulações de PPR',
  'Tubulações de cobre',
  'Conexões modernas',
  'Registros de qualidade',
  'Sifões e válvulas'
];

const benefits = [
  'Projetos personalizados',
  'Materiais de qualidade',
  'Execução conforme normas',
  'Mão de obra especializada',
  'Garantia no serviço',
  'Orçamento gratuito'
];

const faqs = [
  {
    question: 'Quanto tempo demora uma instalação?',
    answer: 'O tempo varia conforme o projeto. Instalações simples podem ser feitas em 1 dia, projetos maiores podem levar alguns dias.'
  },
  {
    question: 'Vocês fazem projeto hidráulico?',
    answer: 'Sim! Desenvolvemos projetos completos para residências e comércios.'
  },
  {
    question: 'Quais materiais vocês utilizam?',
    answer: 'Trabalhamos com materiais de primeira qualidade: PVC, PPR, cobre e conexões modernas.'
  },
  {
    question: 'Fazem manutenção preventiva?',
    answer: 'Sim! Oferecemos serviços de manutenção preventiva para manter sua instalação em perfeito estado.'
  }
];

export default function InstalacaoHidraulica() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Instalação e Manutenção Hidráulica
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Desenvolvemos projetos e executamos instalações hidráulicas completas para 
              residências, apartamentos e comércios. Trabalhamos com tubulações de PVC, 
              PPR, cobre e conexões modernas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
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

      {/* Services Section */}
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
              Nossos Serviços de Instalação
            </h2>
            <p className="text-xl text-gray-600">
              Instalações completas com materiais de qualidade e mão de obra especializada
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <service.icon size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Materiais de Qualidade
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Utilizamos apenas materiais de primeira qualidade para garantir 
                durabilidade e funcionamento perfeito de sua instalação hidráulica.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {materials.map((material, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={20} className="text-accent" />
                    <span className="text-gray-700">{material}</span>
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
                  <Wrench size={80} className="mx-auto mb-4 text-primary" />
                  <p className="text-lg">Materiais de Qualidade</p>
                  <p className="text-sm">Placeholder para foto</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Por que escolher nossos serviços?
            </h2>
            <p className="text-xl text-gray-600">
              Profissionalismo e qualidade em cada instalação
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Award size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit}
                </h3>
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
              Nosso Processo
            </h2>
            <p className="text-xl text-gray-600">
              Da consultoria à execução, tudo com profissionalismo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Consulta',
                description: 'Avaliamos suas necessidades e fazemos orçamento'
              },
              {
                step: '2',
                title: 'Projeto',
                description: 'Desenvolvemos projeto personalizado se necessário'
              },
              {
                step: '3',
                title: 'Execução',
                description: 'Executamos a instalação com materiais de qualidade'
              },
              {
                step: '4',
                title: 'Teste',
                description: 'Testamos toda a instalação e entregamos funcionando'
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre instalações hidráulicas
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
                className="bg-gray-50 rounded-xl p-6 shadow-lg"
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
              Precisa de Instalação Hidráulica?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Entre em contato e solicite seu orçamento personalizado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
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
