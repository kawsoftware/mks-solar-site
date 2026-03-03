import React, { useState } from 'react';
import { Menu, X, Sun, Phone, FileText, Wrench } from 'lucide-react';
import QuoteModal from './QuoteModal';
import MaintenanceModal from './MaintenanceModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isMaintenanceOpen, setIsMaintenanceOpen] = useState(false);

  const navItems = [
    { name: 'Principal', href: '#' },
    { name: 'Sobre a MKS Solar', href: '#sobre' },
    { name: 'Blog', href: '#blog' },
    { name: 'Orçamento Detalhado', href: '#orcamento' },
    { name: 'Manutenção Preventiva', href: '#manutencao' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2">
              <img 
                src="logo.png" 
                alt="MKS Solar" 
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden flex flex-col">
                <span className="font-bold text-2xl text-blue-900 leading-none">MKS SOLAR</span>
                <span className="text-xs text-gray-600 font-medium tracking-wider">INTEGRADORA WEG</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isAction = item.href.startsWith('#orcamento') || item.href.startsWith('#manutencao');
              
              if (isAction) {
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      if (item.href === '#orcamento') setIsQuoteOpen(true);
                      if (item.href === '#manutencao') setIsMaintenanceOpen(true);
                    }}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </button>
                );
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isAction = item.href.startsWith('#orcamento') || item.href.startsWith('#manutencao');

              if (isAction) {
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (item.href === '#orcamento') setIsQuoteOpen(true);
                      if (item.href === '#manutencao') setIsMaintenanceOpen(true);
                    }}
                    className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  >
                    {item.name}
                  </button>
                );
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
      {/* Modals */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      <MaintenanceModal isOpen={isMaintenanceOpen} onClose={() => setIsMaintenanceOpen(false)} />
    </header>
  );
}
