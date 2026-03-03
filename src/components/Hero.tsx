import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function Hero() {
  return (
    <div className="relative bg-blue-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
          alt="Solar Panels"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Energia Solar Weg <br />
            <span className="text-yellow-400">Econômica e Sustentável</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Aproveite o poder da energia solar Weg para uma solução sustentável e econômica. 
            Veja como nossa empresa oferece produtos de alta qualidade e tecnologia avançada 
            para a geração de energia solar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-lg flex items-center justify-center transition-all transform hover:scale-105">
              Solicite um Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href={getWhatsAppLink('especialista')} target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center transition-all">
              Fale com um Especialista
              <Phone className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
