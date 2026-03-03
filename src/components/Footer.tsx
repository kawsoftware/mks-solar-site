import React from 'react';
import { MapPin, Mail, Phone, Instagram } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">MKS SOLAR</h3>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Integradora WEG em Energia Solar. Levando sustentabilidade e economia para todo o Brasil com a qualidade que você confia.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/mks.energiasolar/" target="_blank" rel="noopener noreferrer" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Locations */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2 inline-block">Áreas de Atendimento</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h5 className="font-bold text-yellow-400 mb-2">Espírito Santo</h5>
                <p className="text-blue-200 text-sm">Atendemos a todo estado com muitos clientes satisfeitos.</p>
              </div>
              <div>
                <h5 className="font-bold text-yellow-400 mb-2">Leste de Minas</h5>
                <p className="text-blue-200 text-sm">Atendemos todas as cidades do Leste de Minas e Vale do Jequitinhonha.</p>
              </div>
              <div>
                <h5 className="font-bold text-yellow-400 mb-2">Sul da Bahia</h5>
                <p className="text-blue-200 text-sm">Atendemos também o Sul da Bahia. Consulte sua cidade.</p>
              </div>
              <div>
                <h5 className="font-bold text-yellow-400 mb-2">São Paulo</h5>
                <p className="text-blue-200 text-sm">Grande São Paulo e Região Metropolitana.</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2 inline-block">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-blue-200">Matriz: Av. Solar, 1000 - Centro, Vitória - ES</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-blue-200">(27) 99944-4251</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-blue-200">contato@mkssolar.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTAs */}
        <div className="bg-blue-800 rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Pronto para economizar?</h3>
            <p className="text-blue-200">Solicite uma cotação para gerar sua própria energia!</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-lg transition-colors">
              Solicitar Orçamento
            </a>
            <a href={getWhatsAppLink('manutencao')} target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-6 rounded-lg transition-colors">
              Manutenção Preventiva
            </a>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} MKS Solar. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
