'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  CheckCircle
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefone',
    info: '(43) 99971-4142',
    link: 'tel:+5543999714142'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    info: '(43) 99971-4142',
    link: 'https://wa.me/5543999714142'
  },
  {
    icon: MapPin,
    title: 'Localização',
    info: 'Arapongas - PR',
    link: '#'
  },
  {
    icon: Clock,
    title: 'Atendimento',
    info: '24 horas por dia',
    link: '#'
  }
];

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Criar mensagem para WhatsApp
    const serviceNames = {
      'desentupimento': 'Desentupimento',
      'instalacao': 'Instalação Hidráulica',
      'vazamentos': 'Conserto de Vazamentos',
      'caixa-dagua': 'Limpeza de Caixa d\'Água',
      'outros': 'Outros'
    };
    
    const serviceName = serviceNames[formData.service as keyof typeof serviceNames] || 'Não especificado';
    
    const whatsappMessage = `*Solicitação de Orçamento - Ckarlos Encanador*

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
${formData.email ? `*E-mail:* ${formData.email}` : ''}
${formData.address ? `*Endereço:* ${formData.address}` : ''}
*Serviço:* ${serviceName}
*Mensagem:* ${formData.message}

_Enviado através do site oficial_`;

    // Redirecionar para WhatsApp
    const whatsappUrl = `https://wa.me/5543999714142?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen">
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
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-800 mb-8 leading-relaxed">
              Precisa de um encanador em Arapongas? Entre em contato conosco e solicite 
              seu orçamento gratuito. Estamos prontos para atender suas necessidades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
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
              Nossos Contatos
            </h2>
            <p className="text-xl text-gray-800">
              Escolha a forma mais conveniente para você
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <contact.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {contact.title}
                </h3>
                <p className="text-gray-800">
                  {contact.info}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Solicite seu Orçamento
              </h2>
              <p className="text-lg text-gray-800 mb-8">
                Preencha o formulário abaixo e será redirecionado para o WhatsApp com sua mensagem formatada
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                >
                  <CheckCircle size={64} className="text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-900 mb-2">
                    Redirecionando para WhatsApp!
                  </h3>
                  <p className="text-green-700">
                    Sua mensagem foi formatada e será enviada via WhatsApp.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="(43) 99999-9999"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Endereço
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Rua, número, bairro - Arapongas/PR"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Serviço
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="desentupimento">Desentupimento</option>
                      <option value="instalacao">Instalação Hidráulica</option>
                      <option value="vazamentos">Conserto de Vazamentos</option>
                      <option value="caixa-dagua">Limpeza de Caixa d&apos;Água</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                      placeholder="Descreva seu problema ou necessidade..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Preparando WhatsApp...
                      </>
                    ) : (
                      <>
                        <MessageCircle size={20} />
                        Enviar via WhatsApp
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Telefone</p>
                      <a href="tel:+5543999714142" className="text-gray-800 hover:text-primary transition-colors">
                        (43) 99971-4142
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <MessageCircle size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp</p>
                      <a 
                        href="https://wa.me/5543999714142" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-primary transition-colors"
                      >
                        (43) 99971-4142
                      </a>
                    </div>
                  </div>
                  
                  
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Localização</p>
                      <p className="text-gray-800">Arapongas - PR</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <Clock size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Atendimento</p>
                      <p className="text-gray-800">24 horas por dia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Por que escolher o Ckarlos Encanador?
                </h4>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-accent" />
                    Mais de 20 anos de experiência
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-accent" />
                    Atendimento 24 horas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-accent" />
                    Equipamentos modernos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-accent" />
                    Preços justos e transparentes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-accent" />
                    Garantia em todos os serviços
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Fale Conosco no WhatsApp
            </h2>
            <p className="text-xl mb-8">
              Para atendimento mais rápido, entre em contato via WhatsApp
            </p>
            <a
              href="https://wa.me/5543999714142"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              <MessageCircle size={24} />
              Abrir WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
