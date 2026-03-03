export interface PostContent {
  type: 'paragraph' | 'heading' | 'list' | 'table' | 'conclusion' | 'highlight' | 'grid';
  content?: string;
  items?: string[];
  level?: number;
  highlight?: boolean;
  tableData?: { head: string[]; rows: string[][] };
  gridData?: { label: string; text: string }[];
}

export interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  author: string;
  role: string;
  sections: PostContent[];
}

export const blogPosts: Post[] = [
  {
    id: 'poverty-solar',
    title: "A Energia Solar como Aliada ao Combate à Pobreza Energética",
    date: "23 de Maio, 2023",
    excerpt: "A pobreza energética é uma realidade que afeta milhões de pessoas no Brasil, limitando seu acesso a fontes de energia limpas, seguras e, acima de tudo, acessíveis. A tecnologia fotovoltaica surge como um divisor de águas.",
    image: "pobreza-energetica.jpg",
    author: "Admin MKS Solar",
    role: "Especialista em Energia Fotovoltaica",
    sections: [
      {
        type: 'paragraph',
        content: "Este é um tema de extrema relevância social e técnica. A transição energética só é justa quando é inclusiva. Como especialista, vejo a tecnologia fotovoltaica não apenas como um investimento financeiro, mas como uma ferramenta de emancipação social.",
        highlight: true
      },
      {
        type: 'paragraph',
        content: "A pobreza energética é uma realidade que afeta milhões de pessoas no Brasil, limitando seu acesso a fontes de energia limpas, seguras e, acima de tudo, acessíveis. O peso da conta de luz no orçamento das famílias de baixa renda compromete necessidades básicas, como alimentação e saúde. Nesse cenário, a tecnologia fotovoltaica surge como um divisor de águas."
      },
      { type: 'heading', level: 2, content: "O Que é Pobreza Energética?" },
      {
        type: 'paragraph',
        content: "Diferente da falta total de luz, a pobreza energética ocorre quando uma família precisa comprometer uma parcela desproporcional de sua renda (geralmente acima de 10% a 15%) para custear serviços energéticos básicos ou quando utiliza fontes perigosas e ineficientes (como lenha ou querosene) por não conseguir arcar com a eletricidade."
      },
      { type: 'heading', level: 2, content: "O Papel da Energia Solar na Mudança de Paradigma" },
      {
        type: 'paragraph',
        content: "A energia solar on-grid (conectada à rede) e as microrredes isoladas atacam o problema em três frentes principais:"
      },
      {
        type: 'list',
        items: [
          "<strong>Redução Drástica do Custo Mensal:</strong> Ao instalar sistemas fotovoltaicos em comunidades vulneráveis ou habitações populares, o custo da fatura é reduzido ao valor mínimo (taxa de disponibilidade), liberando renda para o consumo de bens essenciais.",
          "<strong>Imunidade à Inflação Energética:</strong> As bandeiras tarifárias (amarela e vermelha) atingem com mais força quem tem menos recursos. O sol, por outro lado, não sofre reajustes anuais ou variações por falta de chuva.",
          "<strong>Valorização e Dignidade:</strong> O acesso à energia está ligado à segurança alimentar (refrigeração) e à educação (iluminação e conectividade)."
        ]
      },
      { type: 'heading', level: 2, content: "Estratégias de Implementação no Brasil" },
      {
        type: 'paragraph',
        content: "Para que a energia solar combata a pobreza de forma efetiva, o mercado e o governo têm adotado modelos inovadores:"
      },
      {
        type: 'highlight',
        content: "<strong>Geração Compartilhada Social:</strong> Cooperativas de energia solar onde o excedente de uma grande usina é direcionado para abater as contas de famílias cadastradas no CadÚnico."
      },
      {
        type: 'highlight',
        content: "<strong>Sistemas em Habitações Populares:</strong> Projetos como o \"Minha Casa, Minha Vida\" incorporando painéis solares na planta original, garantindo que o morador já inicie sua jornada com baixo custo fixo."
      },
      {
        type: 'highlight',
        content: "<strong>Políticas de Isenção:</strong> A Lei 14.300/2022 trouxe diretrizes que facilitam a participação de consumidores de baixa renda no sistema de compensação de créditos."
      },
      { type: 'heading', level: 2, content: "Impactos Além do Bolso" },
      {
        type: 'paragraph',
        content: "A democratização do sol gera um ciclo virtuoso:"
      },
      {
        type: 'table',
        tableData: {
          head: ["Impacto", "Descrição"],
          rows: [
            ["Saúde", "Redução do uso de combustíveis sólidos em ambientes fechados (diminui doenças respiratórias)."],
            ["Educação", "Melhores condições de estudo para jovens no período noturno."],
            ["Economia Local", "A renda que sobra circula no comércio do bairro, fomentando a economia regional."]
          ]
        }
      },
      {
        type: 'conclusion',
        content: "A energia solar deixou de ser um artigo de luxo para se tornar uma solução humanitária. No Espírito Santo e em todo o Brasil, iniciativas que levam a tecnologia fotovoltaica para a base da pirâmide são o caminho mais curto para um desenvolvimento sustentável que não deixe ninguém no escuro. Você tem interesse em conhecer projetos de \"Solar Social\" ou quer entender como empresas podem destinar créditos para entidades filantrópicas e comunidades?"
      }
    ]
  },

  {
    id: 'guia-credito-solar',
    title: "Guia Passo a Passo para Transferir Crédito de Energia Solar",
    date: "22 de Março, 2024",
    excerpt: "O conceito de Autoconsumo Remoto, introduzido no Brasil em 2015 pela Resolução 687 da ANEEL e consolidado pelo Marco Legal, permite que o excedente de energia gerado em um local seja utilizado para abater a conta de luz de outro endereço.",
    image: "guia-credito.jpg",
    author: "Admin MKS Solar",
    role: "Especialista em Energia Fotovoltaica",
    sections: [
      {
        type: 'paragraph',
        content: "O conceito de Autoconsumo Remoto, introduzido no Brasil em 2015 pela Resolução 687 da ANEEL e consolidado pelo Marco Legal, permite que o excedente de energia gerado em um local seja utilizado para abater a conta de luz de outro endereço.",
        highlight: true
      },
      {
        type: 'paragraph',
        content: "Se você produz mais do que consome, não \"perde\" essa energia; ela se transforma em créditos que podem ser estrategicamente distribuídos. Veja como fazer isso com eficiência:"
      },
      { type: 'heading', level: 2, content: "1. Requisitos Fundamentais" },
      { type: 'paragraph', content: "Antes de iniciar o processo, certifique-se de que as unidades consumidoras (UCs) atendam aos critérios de elegibilidade:" },
      {
        type: 'list',
        items: [
          "<strong>Mesma Titularidade:</strong> As contas de luz devem estar sob o mesmo CPF ou CNPJ. No caso de empresas, filiais com o mesmo CNPJ raiz são aceitas.",
          "<strong>Mesma Área de Concessão:</strong> A unidade geradora e a unidade beneficiária devem ser atendidas pela mesma distribuidora (ex: CEMIG, Enel).",
          "<strong>Modalidade On-Grid:</strong> O sistema deve estar conectado à rede pública e devidamente homologado."
        ]
      },
      { type: 'heading', level: 2, content: "2. Passo a Passo da Transferência" },
      {
        type: 'highlight',
        content: "<strong>Passo 1: Definição da Unidade Consumidora Principal</strong><br/>A unidade onde os painéis estão instalados é a Unidade Geradora (UG). Ela sempre consome o que precisa primeiro. O que sobra é injetado na rede e vira o \"crédito\"."
      },
      {
        type: 'highlight',
        content: "<strong>Passo 2: Cadastro das Unidades Beneficiárias</strong><br/>Você deve informar à concessionária quais outros endereços (UCs) receberão os créditos. Isso é feito através de um formulário específico de Indicação de Beneficiárias, disponível no portal de \"Geração Distribuída\" da sua distribuidora."
      },
      {
        type: 'highlight',
        content: "<strong>Passo 3: Estabelecimento da Ordem de Prioridade</strong><br/>Você precisa definir uma lista de prioridade ou uma porcentagem fixa para cada imóvel. <br/> <strong>Exemplo:</strong> Se sobrar 500 kWh, você pode definir 60% para sua casa de praia e 40% para seu escritório."
      },
      {
        type: 'highlight',
        content: "<strong>Passo 4: Prazo de Utilização</strong><br/>Os créditos gerados têm validade de 60 meses (5 anos). O sistema da distribuidora compensa automaticamente os créditos mais antigos primeiro."
      },
      { type: 'heading', level: 2, content: "3. Regras de Ouro e Limitações" },
      {
        type: 'table',
        tableData: {
          head: ["Item", "Regra na Transferência"],
          rows: [
            ["Custo de Disponibilidade", "Você ainda paga a \"taxa mínima\" (30, 50 ou 100 kWh) em cada unidade, mesmo com créditos."],
            ["Iluminação Pública", "A taxa de iluminação pública (COSIP) nunca é abatida por créditos solares."],
            ["Impostos (ICMS)", "Em alguns estados, o ICMS incide sobre a energia compensada em endereços diferentes."]
          ]
        }
      },
      { type: 'heading', level: 2, content: "4. Mudança de Percentuais" },
      { type: 'paragraph', content: "Se você comprou um novo eletrodoméstico em uma das casas e precisa de mais crédito lá, você pode alterar os percentuais de distribuição." },
      {
        type: 'grid',
        gridData: [
          { label: "Como", text: "Envie uma nova solicitação à distribuidora." },
          { label: "Prazo", text: "Geralmente no ciclo de faturamento seguinte (mínimo de 30 dias)." }
        ]
      },
      {
        type: 'conclusion',
        content: "A transferência de créditos é a ferramenta mais poderosa para quem busca rentabilizar o investimento em energia solar, permitindo que uma única planta fotovoltaica \"zere\" o custo de vários imóveis. A chave é o planejamento técnico e a atenção à titularidade das faturas."
      }
    ]
  },
  {
    id: 'crescimento-sustentavel-es',
    title: "MKS Solar: Impulsionando o Crescimento Sustentável do Espírito Santo",
    date: "02 de Março, 2026",
    excerpt: "O Estado do Espírito Santo está passando por um notável crescimento no setor de energia solar, e a MKS Solar tem sido uma peça fundamental nessa engrenagem de desenvolvimento.",
    image: "mks-solar-es.jpg",
    author: "Admin MKS Solar",
    role: "Especialista em Energia Fotovoltaica",
    sections: [
      {
        type: 'paragraph',
        content: "O Estado do Espírito Santo está passando por um notável crescimento no setor de energia solar, e a MKS Solar tem sido uma peça fundamental nessa engrenagem de desenvolvimento. Com um território que combina altos índices de radiação solar e uma economia diversificada — do agronegócio nas montanhas capixabas ao setor portuário no litoral — o estado se tornou um terreno fértil para a transição energética.",
        highlight: true
      },
      { type: 'heading', level: 2, content: "O Cenário Solar no Espírito Santo" },
      { type: 'paragraph', content: "O crescimento capixaba não é por acaso. O estado se beneficia de políticas de incentivo e de uma rede elétrica robusta, o que permite que residências e indústrias reduzam custos fixos de forma drástica." },
      {
        type: 'list',
        items: [
          "<strong>Diversificação Econômica:</strong> Do comércio na Grande Vitória às granjas no interior, a energia fotovoltaica tem sido a solução para manter a competitividade frente às tarifas crescentes.",
          "<strong>Irradiação Privilegiada:</strong> O Espírito Santo possui níveis de insolação superiores à média de muitos países europeus, garantindo um payback (retorno sobre o investimento) acelerado.",
          "<strong>Segurança Jurídica:</strong> Com a consolidação da Lei 14.300, o mercado capixaba ganhou maturidade, atraindo investimentos de longo prazo."
        ]
      },
      { type: 'heading', level: 2, content: "Como a MKS Solar Lidera essa Transformação" },
      { type: 'paragraph', content: "A MKS Solar atua como um braço técnico e estratégico para clientes que buscam não apenas instalar painéis, mas implementar projetos de engenharia de alta performance." },
      {
        type: 'highlight',
        content: "<strong>1. Expertise em Projetos On-Grid e Off-Grid</strong><br/>Seja para o comércio que precisa de autoconsumo remoto ou para propriedades rurais isoladas, a MKS desenvolve soluções personalizadas que consideram a estrutura do telhado, o sombreamento e a demanda energética real."
      },
      {
        type: 'highlight',
        content: "<strong>2. Agilidade na Homologação junto à EDP</strong><br/>Um dos grandes gargalos para o cliente é a burocracia. A MKS Solar domina os trâmites junto à concessionária local (EDP Espírito Santo), garantindo que o sistema seja conectado à rede e comece a gerar economia no menor tempo possível."
      },
      {
        type: 'highlight',
        content: "<strong>3. Fomento à Economia Local</strong><br/>Ao instalar sistemas em solo capixaba, a MKS Solar ajuda a reter capital no estado. O dinheiro que antes era destinado ao pagamento de faturas de energia agora é reinvestido pelas empresas locais em expansão, novos equipamentos e contratações."
      },
      { type: 'heading', level: 2, content: "Benefícios Diretos para o Cliente Capixaba" },
      {
        type: 'table',
        tableData: {
          head: ["Benefício", "Impacto no ES"],
          rows: [
            ["Redução de Custos", "Economia de até 95% na conta de luz para famílias e empresas."],
            ["Valorização Imobiliária", "Imóveis com energia solar em cidades como Vila Velha e Vitória valorizam até 10%."],
            ["Sustentabilidade", "Redução da pegada de carbono, fortalecendo o selo \"ESG\" das indústrias locais."]
          ]
        }
      },
      { type: 'heading', level: 2, content: "O Futuro é Solar (e Capixaba)" },
      { type: 'paragraph', content: "A tendência para os próximos anos é a expansão das Usinas de Investimento e do Agronegócio 4.0 no interior do estado. A MKS Solar continua na vanguarda, trazendo tecnologia de ponta em inversores e módulos de alta eficiência para que o Espírito Santo siga brilhando no mapa da energia limpa no Brasil." },
      {
        type: 'conclusion',
        content: "O futuro é limpo e promissor para o Espírito Santo. A MKS Solar está pronta para ajudar sua empresa ou residência a fazer parte dessa revolução energética."
      }
    ]
  },
  {
    id: 'sustentabilidade-certificacoes',
    title: "Certificações para Empresas Sustentáveis",
    date: "21 de Maio, 2023",
    excerpt: "No mundo empresarial atual, a sustentabilidade e a responsabilidade ambiental têm se tornado cada vez mais cruciais. Elas deixaram de ser apenas um diferencial de marketing para se tornarem uma exigência fundamental.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop",
    author: "Admin MKS Solar",
    role: "Especialista em Energia Fotovoltaica",
    sections: [
      {
        type: 'paragraph',
        content: "No mundo empresarial atual, a sustentabilidade e a responsabilidade ambiental têm se tornado cada vez mais cruciais. Elas deixaram de ser apenas um diferencial de marketing para se tornarem uma exigência fundamental de investidores, parceiros de negócios e consumidores engajados.",
        highlight: true
      },
      { type: 'paragraph', content: "Para comprovar que as práticas ESG (Ambiental, Social e Governança) de uma empresa são genuínas e não apenas greenwashing (falsa maquiagem verde), as certificações de sustentabilidade são o caminho mais seguro e transparente no Brasil." },
      { type: 'paragraph', content: "Aqui estão algumas das principais certificações que as organizações brasileiras utilizam para atestar seu compromisso com um futuro mais verde e justo:" },
      {
        type: 'highlight',
        content: "<strong>Certificação Sistema B (Empresas B):</strong> Esta certificação vai além do produto final e avalia o impacto positivo da empresa como um todo. Ela analisa rigorosamente pilares como governança, modelo de negócios, relação com os trabalhadores, impacto na comunidade e preservação do meio ambiente. É o selo ideal para negócios que unem lucro a um propósito socioambiental claro."
      },
      {
        type: 'highlight',
        content: "<strong>ISO 14001:</strong> Sendo uma das normas mais reconhecidas mundialmente, ela atesta que a empresa possui um Sistema de Gestão Ambiental (SGA) robusto. Ajuda a organização a identificar, priorizar e gerenciar os riscos ambientais de suas operações cotidianas, garantindo conformidade legal e melhoria contínua."
      },
      {
        type: 'highlight',
        content: "<strong>Certificado I-REC (International Renewable Energy Certificate):</strong> Um sistema global que comprova que a energia elétrica consumida pela sua empresa é proveniente de fontes limpas e renováveis, como a energia solar, eólica ou biomassa. É uma ferramenta fundamental para empresas que desejam zerar suas emissões de carbono de Escopo 2 (emissões indiretas pelo consumo de energia)."
      },
      {
        type: 'highlight',
        content: "<strong>Selo FSC (Forest Stewardship Council):</strong> Indispensável para empresas cujas cadeias produtivas envolvem papel, celulose ou madeira. O FSC garante ao consumidor final que a matéria-prima utilizada provém de florestas manejadas de forma ecologicamente correta, socialmente justa e economicamente viável."
      },
      {
        type: 'highlight',
        content: "<strong>Certificação LEED (Leadership in Energy and Environmental Design):</strong> Focada na infraestrutura física, é o principal selo para construções e instalações sustentáveis. Ela reconhece projetos que promovem alta eficiência energética, uso racional da água e materiais de baixo impacto ambiental em seus edifícios corporativos ou industriais."
      },
      { type: 'heading', level: 2, content: "Quais os benefícios reais de se certificar?" },
      { type: 'paragraph', content: "Além de fazer a coisa certa pelo planeta e pela sociedade, obter um selo sustentável validado por terceiros traz vantagens estratégicas:" },
      {
        type: 'list',
        items: [
          "<strong>Credibilidade e Transparência:</strong> Constrói confiança inabalável com o consumidor final.",
          "<strong>Atração de Investimentos:</strong> Facilita o acesso a linhas de crédito verde (financiamentos atrelados ao ESG) com taxas de juros frequentemente menores.",
          "<strong>Eficiência Operacional:</strong> A adequação aos processos de certificação geralmente leva à redução de desperdícios e otimização no uso de recursos como água e energia."
        ]
      },
      {
        type: 'conclusion',
        content: "Gostaria de saber mais sobre como iniciar o processo para obter alguma dessas certificações, como o Sistema B ou o I-REC? Entre em contato com a MKS Solar e descubra como sua empresa pode se tornar referência em sustentabilidade."
      }
    ]
  }
];
