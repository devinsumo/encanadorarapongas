'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Droplets, 
  Wrench, 
  Shield, 
  Droplet, 
  Phone, 
  CheckCircle, 
  Star,
  Award,
  Users
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

const testimonials = [
  {
    name: 'Maria Silva',
    location: 'Arapongas/PR',
    rating: 5,
    text: 'Excelente serviço! Resolveu o problema de vazamento sem quebrar nada. Muito profissional e pontual.'
  },
  {
    name: 'João Santos',
    location: 'Arapongas/PR',
    rating: 5,
    text: 'Atendimento 24h salvou minha madrugada. Chegou rápido e resolveu o entupimento da pia.'
  },
  {
    name: 'Ana Costa',
    location: 'Arapongas/PR',
    rating: 5,
    text: 'Limpeza da caixa d\'água perfeita! Muito organizado e deixou tudo limpinho. Recomendo!'
  }
];

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

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700/10 via-accent/5 to-blue-700/10 py-20 pt-32 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Encanador em{' '}
                <span className="text-blue-700">Arapongas/PR</span>
              </h1>
              <p className="text-xl text-gray-800 leading-relaxed">
                Soluções hidráulicas completas com mais de 20 anos de experiência. 
                Atendemos desentupimento, reparos e instalações com 
                garantia e preços justos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
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
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-700 to-accent text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-800 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-accent/20 to-blue-700/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-700/20 to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Oferecemos soluções completas em hidráulica para residências e empresas
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
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="text-blue-700 hover:text-blue-700/80 font-semibold transition-colors group-hover:translate-x-1 inline-block"
                >
                  Saiba mais →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sobre o Ckarlos Encanador
              </h2>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                Com mais de 20 anos de experiência na área hidráulica, atendo residências 
                e empresas em Arapongas e região. Utilizo equipamentos modernos e materiais 
                de qualidade para garantir a excelência em cada serviço prestado.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-accent" />
                  <span className="text-gray-700">Atendimento profissional e pontual</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-accent" />
                  <span className="text-gray-700">Equipamentos modernos e eficientes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-accent" />
                  <span className="text-gray-700">Preços justos e transparentes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-accent" />
                  <span className="text-gray-700">Garantia em todos os serviços</span>
                </div>
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

      {/* Testimonials Section */}
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
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-800">
              Depoimentos de quem já confiou em nossos serviços
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-800 mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-700">{testimonial.location}</p>
                </div>
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl border-2 border-white"
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