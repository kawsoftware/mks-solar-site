const WHATSAPP_NUMBER = '5527999444251';

export function getWhatsAppLink(context?: string): string {
  let message = '';

  switch (context) {
    case 'residencial':
      message = `Olá, MKS Solar! 👋\n\nEstou interessado(a) em instalar um sistema de energia solar na minha residência e gostaria de solicitar um *Orçamento Residencial* detalhado.\n\nPoderia me informar sobre:\n• Estimativa de economia na minha conta de luz\n• Opções de equipamentos WEG disponíveis\n• Prazo de instalação e formas de pagamento\n\nAguardo o retorno de vocês. Obrigado(a)!`;
      break;
    case 'agro':
      message = `Olá, MKS Solar! 👋\n\nSou do setor de agronegócio e tenho interesse em adotar energia solar para reduzir custos operacionais na minha propriedade rural. Gostaria de solicitar um *Orçamento Agro* personalizado.\n\nPoderia me auxiliar com:\n• Dimensionamento do sistema para minha demanda energética\n• Soluções específicas para propriedades rurais (irrigação, resfriamento, etc.)\n• Informações sobre linhas de crédito rural para energia solar\n\nAguardo o contato. Obrigado(a)!`;
      break;
    case 'empresarial':
      message = `Olá, MKS Solar! 👋\n\nRepresento uma empresa e estamos avaliando a implantação de um sistema de energia solar fotovoltaica em nossas instalações. Gostaria de solicitar um *Orçamento Empresarial* completo.\n\nPoderia nos informar sobre:\n• Estudo de viabilidade e payback estimado\n• Soluções de autoconsumo remoto para múltiplas unidades\n• Benefícios fiscais e certificações sustentáveis (ESG/I-REC)\n• Opções de financiamento para pessoa jurídica\n\nFicamos no aguardo. Obrigado(a)!`;
      break;
    case 'manutencao':
      message = `Olá, MKS Solar! 👋\n\nPossuo um sistema de energia solar instalado e gostaria de agendar uma *Manutenção Preventiva* para garantir o máximo desempenho dos meus painéis.\n\nPoderia me informar sobre:\n• Disponibilidade de agenda para visita técnica\n• Serviços inclusos na manutenção preventiva\n• Valores e periodicidade recomendada\n\nAguardo o retorno. Obrigado(a)!`;
      break;
    case 'especialista':
      message = `Olá, MKS Solar! 👋\n\nGostaria de *falar com um especialista* em energia solar para tirar algumas dúvidas sobre a instalação de um sistema fotovoltaico.\n\nTenho interesse em entender melhor como funciona a geração de energia solar, a economia na conta de luz e as opções de equipamentos WEG.\n\nAguardo o contato de um consultor. Obrigado(a)!`;
      break;
    case 'blog':
      message = `Olá, MKS Solar! 👋\n\nEstive lendo o blog de vocês e fiquei interessado(a) em saber mais sobre as soluções em energia solar da MKS. Gostaria de *conversar com um especialista* para entender como posso começar a economizar com energia solar.\n\nAguardo o retorno. Obrigado(a)!`;
      break;
    default:
      message = `Olá, MKS Solar! 👋\n\nGostaria de solicitar um *orçamento detalhado* para instalação de um sistema de energia solar fotovoltaica.\n\nPoderia me informar sobre:\n• Opções de sistemas e equipamentos WEG\n• Estimativa de economia na conta de luz\n• Prazo de instalação e formas de pagamento\n\nAguardo o retorno de vocês. Obrigado(a)!`;
      break;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getQuoteWhatsAppLink(data: { name: string; phone: string; email: string; city: string; billAmount: string }): string {
  const message = `Olá, MKS Solar! 👋\n\nGostaria de solicitar um *Orçamento Detalhado*.\n\n*Meus Dados:*\n👤 Nome: ${data.name}\n📱 Telefone: ${data.phone}\n📧 E-mail: ${data.email}\n📍 Cidade/Estado: ${data.city}\n💰 Valor médio da conta de luz: R$ ${data.billAmount}\n\nFico no aguardo do contato de um especialista!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getMaintenanceWhatsAppLink(data: { name: string; phone: string; systemSize: string; timeInstalled: string; issue: string }): string {
  const message = `Olá, MKS Solar! 👋\n\nGostaria de solicitar uma *Manutenção Preventiva / Suporte Técnico* para o meu sistema.\n\n*Meus Dados e Informações do Sistema:*\n👤 Nome: ${data.name}\n📱 Telefone: ${data.phone}\n⚡ Tamanho do Sistema: ${data.systemSize} (kWp ou Qtd Módulos)\n⏳ Tempo de Instalação: ${data.timeInstalled}\n\n*Descrição / Observações:*\n${data.issue}\n\nAguardo o retorno para agendarmos a visita!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
