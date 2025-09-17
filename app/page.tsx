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
  Clock,
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
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
                <span className="text-primary">Arapongas/PR</span>
              </h1>
              <p className="text-xl text-gray-800 leading-relaxed">
                Soluções hidráulicas completas com mais de 20 anos de experiência. 
                Atendemos desentupimento, reparos e instalações com 
                garantia e preços justos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Droplets size={80} className="mx-auto mb-4 text-primary" />
                  <p className="text-lg">Imagem do Profissional</p>
                  <p className="text-sm">Placeholder para foto</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <feature.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  className="text-primary hover:text-primary/80 font-semibold transition-colors group-hover:translate-x-1 inline-block"
                >
                  Saiba mais →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
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
                Sobre o Ckarlos Encanador
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
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
                <div className="text-center text-gray-500">
                  <Wrench size={80} className="mx-auto mb-4 text-primary" />
                  <p className="text-lg">Imagem do Trabalho</p>
                  <p className="text-sm">Placeholder para foto</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600">
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
                <p className="text-gray-600 mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
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
              Precisa de um Encanador em Arapongas?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Entre em contato agora mesmo e solicite seu orçamento sem compromisso
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