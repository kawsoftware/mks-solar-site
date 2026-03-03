import React, { useState } from 'react';
import { X, Wrench } from 'lucide-react';
import { getMaintenanceWhatsAppLink } from '../utils/whatsapp';

interface MaintenanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MaintenanceModal({ isOpen, onClose }: MaintenanceModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    systemSize: '',
    timeInstalled: '',
    issue: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = getMaintenanceWhatsAppLink(formData);
    window.open(link, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="p-6 sm:p-8">
          <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-6">
            <Wrench className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Manutenção Preventiva</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Informe os dados do seu sistema para agendarmos uma visita técnica ou prestarmos suporte.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="m-name" className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
              <input
                type="text"
                id="m-name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
                placeholder="Ex: Ana Souza"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="m-phone" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                <input
                  type="tel"
                  id="m-phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
                  placeholder="(DDD) 99999-9999"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="systemSize" className="block text-sm font-medium text-gray-700 mb-1">Tamanho (kWp/Placas)</label>
                <input
                  type="text"
                  id="systemSize"
                  name="systemSize"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
                  placeholder="Ex: 5 kWp ou 10 placas"
                  value={formData.systemSize}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="timeInstalled" className="block text-sm font-medium text-gray-700 mb-1">Tempo de Instalação</label>
              <select
                id="timeInstalled"
                name="timeInstalled"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all bg-white"
                value={formData.timeInstalled}
                onChange={handleChange}
              >
                <option value="" disabled>Selecione uma opção</option>
                <option value="Menos de 1 ano">Menos de 1 ano</option>
                <option value="1 a 3 anos">1 a 3 anos</option>
                <option value="Mais de 3 anos">Mais de 3 anos</option>
                <option value="Não sei informar">Não sei informar</option>
              </select>
            </div>

            <div>
              <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">Descrição / Motivo</label>
              <textarea
                id="issue"
                name="issue"
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all resize-none"
                placeholder="Limpeza de painéis, queda de geração, defeito no inversor..."
                value={formData.issue}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-4 rounded-lg transition-colors mt-6"
            >
              Avançar no WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
