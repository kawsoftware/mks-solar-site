import React from 'react';
import { CheckCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-100 rounded-full z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=2070&auto=format&fit=crop" 
              alt="MKS Solar Team" 
              className="relative z-10 rounded-2xl shadow-xl w-full object-cover h-[500px]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-6 rounded-xl shadow-lg z-20 max-w-xs">
              <p className="font-bold text-lg">Parceiro Autorizado WEG</p>
              <p className="text-sm text-gray-300 mt-2">Garantia de qualidade e eficiência.</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Excelência e Tradição no Mercado Fotovoltaico
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Com a qualidade e confiabilidade que a WEG possui, a MKS Solar traz toda a autoridade e excelência para o mercado de fotovoltaico.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Conte conosco para transformar sua residência em um exemplo de sustentabilidade, com soluções personalizadas e eficientes. Confie na marca que carrega a tradição da WEG e faça parte da revolução energética com a MKS Solar.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                'Tecnologia de ponta WEG',
                'Instalação certificada',
                'Economia garantida',
                'Suporte especializado'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  {item}
                </li>
              ))}
            </ul>

            <a href={getWhatsAppLink('especialista')} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Fale com um especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
