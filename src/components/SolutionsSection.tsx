import React from 'react';
import { Home, Tractor, Building2, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

const SolutionCard = ({ icon: Icon, title, description, ctaText, image, whatsappContext }: any) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-xl transition-shadow duration-300">
    <div className="h-48 overflow-hidden relative group">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span className="text-white font-medium">Saiba mais</span>
      </div>
    </div>
    <div className="p-8 flex-1 flex flex-col">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-50 rounded-lg text-blue-900 mr-4">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
        {description}
      </p>
      <a href={getWhatsAppLink(whatsappContext)} target="_blank" rel="noopener noreferrer" className="w-full bg-gray-50 hover:bg-blue-50 text-blue-900 font-bold py-3 px-4 rounded-lg border border-blue-100 hover:border-blue-300 transition-all flex items-center justify-center group">
        {ctaText}
        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  </div>
);

export default function SolutionsSection() {
  const solutions = [
    {
      icon: Home,
      title: "Soluções Residenciais",
      description: "A MKS Solar é pioneira em energia solar residencial. Com cada instalação on-grid, transformamos casas em oásis de sustentabilidade, economizando energia e renovando a conexão com o meio ambiente.",
      ctaText: "ORÇAMENTO RESIDENCIAL",
      whatsappContext: "residencial",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
    },
    {
      icon: Tractor,
      title: "Soluções para o Agro",
      description: "Maximize a eficiência e reduza os custos no agronegócio com a energia solar da MKS Solar. Potencialize sua produção, aproveite os benefícios sustentáveis e alcance uma maior competitividade.",
      ctaText: "ORÇAMENTO AGRO",
      whatsappContext: "agro",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: Building2,
      title: "Soluções para Empresas",
      description: "Com a instalação de um Gerador de Energia Solar, sua empresa pode desfrutar de benefícios significativos que vão muito além da economia na conta de luz. Autonomia energética para seu negócio.",
      ctaText: "ORÇAMENTO EMPRESARIAL",
      whatsappContext: "empresarial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Soluções Completas em Energia Solar
          </h2>
          <p className="text-lg text-gray-600">
            Atendemos todas as necessidades, do residencial ao industrial, com a garantia WEG.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
