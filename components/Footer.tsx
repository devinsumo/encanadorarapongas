import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Ckarlos Encanador</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Mais de 20 anos de experiência em serviços hidráulicos em Arapongas e região. 
              Soluções completas para sua casa ou empresa.
            </p>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Nossos Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/desentupimento" className="text-gray-300 hover:text-accent transition-colors">
                  Desentupimento
                </Link>
              </li>
              <li>
                <Link href="/instalacao-hidraulica" className="text-gray-300 hover:text-accent transition-colors">
                  Instalação Hidráulica
                </Link>
              </li>
              <li>
                <Link href="/conserto-vazamentos" className="text-gray-300 hover:text-accent transition-colors">
                  Conserto de Vazamentos
                </Link>
              </li>
              <li>
                <Link href="/limpeza-caixa-dagua" className="text-gray-300 hover:text-accent transition-colors">
                  Limpeza de Caixa d&apos;Água
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-accent" />
                <a 
                  href="tel:+5543999714142" 
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  (43) 99971-4142
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-accent" />
                <span className="text-gray-300">Arapongas - PR</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-accent" />
                <span className="text-gray-300">Atendimento de Segunda a Sexta</span>
              </div>
            </div>
          </div>

          {/* Links Úteis */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-accent transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <a 
                  href="https://wa.me/5543999714142" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Ckarlos Encanador. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Desenvolvido com ❤️ para Arapongas/PR
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
