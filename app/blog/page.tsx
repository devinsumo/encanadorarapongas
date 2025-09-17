'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  ArrowRight,
  Droplets,
  Wrench,
  Shield,
  Droplet
} from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Como Evitar Entupimentos na Pia da Cozinha',
    excerpt: 'Dicas práticas para manter sua pia sempre funcionando perfeitamente e evitar entupimentos desagradáveis.',
    category: 'Desentupimento',
    categoryIcon: Droplets,
    categoryColor: 'bg-blue-100 text-blue-600',
    readTime: '5 min',
    date: '15 Jan 2024',
    image: '/api/placeholder/400/250'
  },
  {
    id: 2,
    title: 'Tipos de Tubos e Suas Aplicações',
    excerpt: 'Conheça os diferentes tipos de tubulações e quando usar cada uma para garantir durabilidade e eficiência.',
    category: 'Instalação',
    categoryIcon: Wrench,
    categoryColor: 'bg-green-100 text-green-600',
    readTime: '8 min',
    date: '12 Jan 2024',
    image: '/api/placeholder/400/250'
  },
  {
    id: 3,
    title: 'Como Detectar Vazamentos Ocultos',
    excerpt: 'Aprenda a identificar sinais de vazamentos que não são visíveis e quando chamar um profissional.',
    category: 'Vazamentos',
    categoryIcon: Shield,
    categoryColor: 'bg-orange-100 text-orange-600',
    readTime: '6 min',
    date: '10 Jan 2024',
    image: '/api/placeholder/400/250'
  },
  {
    id: 4,
    title: 'Importância da Limpeza Regular da Caixa d\'Água',
    excerpt: 'Entenda por que é fundamental manter sua caixa d\'água sempre limpa e como isso afeta sua saúde.',
    category: 'Manutenção',
    categoryIcon: Droplet,
    categoryColor: 'bg-cyan-100 text-cyan-600',
    readTime: '7 min',
    date: '8 Jan 2024',
    image: '/api/placeholder/400/250'
  },
  {
    id: 5,
    title: 'Manutenção Preventiva: Economia a Longo Prazo',
    excerpt: 'Descubra como a manutenção preventiva pode economizar dinheiro e evitar problemas maiores.',
    category: 'Dicas',
    categoryIcon: Wrench,
    categoryColor: 'bg-purple-100 text-purple-600',
    readTime: '9 min',
    date: '5 Jan 2024',
    image: '/api/placeholder/400/250'
  },
  {
    id: 6,
    title: 'Sinais de que Você Precisa de um Encanador',
    excerpt: 'Lista de sinais que indicam quando é hora de chamar um profissional para resolver problemas hidráulicos.',
    category: 'Dicas',
    categoryIcon: Shield,
    categoryColor: 'bg-red-100 text-red-600',
    readTime: '4 min',
    date: '3 Jan 2024',
    image: '/api/placeholder/400/250'
  }
];

const categories = [
  { name: 'Todos', count: 6, active: true },
  { name: 'Desentupimento', count: 1, active: false },
  { name: 'Instalação', count: 1, active: false },
  { name: 'Vazamentos', count: 1, active: false },
  { name: 'Manutenção', count: 1, active: false },
  { name: 'Dicas', count: 2, active: false }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog do Encanador
            </h1>
            <p className="text-xl text-gray-800 mb-8 leading-relaxed">
              Dicas, tutoriais e informações úteis sobre hidráulica, manutenção 
              e cuidados com sua casa. Aprenda com um profissional experiente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.active
                    ? 'bg-gradient-to-br from-primary via-primary to-accent text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Post em Destaque
            </h2>
            <div className="bg-gradient-to-br from-white via-gray-50 to-white border-b border-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-200 h-80 flex items-center justify-center">
                  <div className="text-center text-gray-700">
                    <Droplets size={80} className="mx-auto mb-4 text-primary" />
                    <p className="text-lg">Imagem do Post</p>
                    <p className="text-sm">Placeholder para foto</p>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      Desentupimento
                    </span>
                    <div className="flex items-center gap-2 text-gray-700 text-sm">
                      <Calendar size={16} />
                      <span>15 Jan 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 text-sm">
                      <Clock size={16} />
                      <span>5 min</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Como Evitar Entupimentos na Pia da Cozinha
                  </h3>
                  <p className="text-gray-800 mb-6 leading-relaxed">
                    Dicas práticas para manter sua pia sempre funcionando perfeitamente e evitar 
                    entupimentos desagradáveis. Aprenda os cuidados básicos que podem economizar 
                    tempo e dinheiro.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                  >
                    Ler mais
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Todos os Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    <div className="text-center text-gray-700">
                      <post.categoryIcon size={48} className="mx-auto mb-2 text-primary" />
                      <p className="text-sm">Imagem do Post</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${post.categoryColor}`}>
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-gray-700 text-sm">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 text-sm">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-800 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                    >
                      Ler mais
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Receba Nossas Dicas
            </h2>
            <p className="text-xl mb-8">
              Cadastre-se para receber dicas exclusivas sobre hidráulica e manutenção
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg hover:shadow-xl border-2 border-white">
                Cadastrar
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precisa de Ajuda com Hidráulica?
            </h2>
            <p className="text-xl mb-8">
              Entre em contato conosco para resolver seus problemas hidráulicos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg"
              >
                Solicitar Orçamento
              </Link>
              <a
                href="https://wa.me/5543999714142"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
