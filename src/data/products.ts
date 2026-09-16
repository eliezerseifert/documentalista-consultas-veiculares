export interface ProductFeature {
  name: string;
  description: string;
  included: boolean;
  highlight?: boolean;
}

export interface ProductHighlight {
  title: string;
  desc: string;
  icon: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  title: string;
  category: string;
  badge?: string;
  tagline: string;
  description: string;
  fullDescription: string;
  originalPrice?: string;
  price: string;
  discountBadge?: string;
  ctaText: string;
  highlights: ProductHighlight[];
  features: ProductFeature[];
  sampleReport: {
    vehicleName: string;
    plate: string;
    renavamMasked: string;
    chassiMasked: string;
    checks: Array<{ label: string; result: string; safe: boolean }>;
  };
  faq: ProductFaq[];
}

export const productsData: Product[] = [
  {
    id: 'veiculo-completo',
    title: 'Veículo Completo',
    category: 'Consulta Recomendada',
    badge: 'Popular',
    tagline: 'A consulta mais completa do mercado com mais de 25 checagens e fotos de leilão',
    description: 'A consulta mais abrangente do mercado! Valide histórico de batidas, sinistros, passagem por leilão com fotos, débitos, multas, gravame e todas as informações cadastrais do veículo em segundos.',
    fullDescription: 'Com a Consulta Veículo Completo do Documentalista, você obtém um raio-x absoluto de qualquer carro, moto ou caminhão. É a opção ideal para quem deseja comprar um veículo usado com total segurança, evitando golpes, prejuízos financeiros e surpresas com custos ocultos de manutenção ou problemas de transferência.',
    originalPrice: 'R$ 69,90',
    price: 'R$ 49,90',
    discountBadge: 'OFF 28%',
    ctaText: 'CONSULTAR VEÍCULO COMPLETO AGORA',
    highlights: [
      {
        title: 'Fotos do Lote de Leilão',
        desc: 'Veja as imagens do carro quando esteve no pátio do leiloeiro (quando disponível).',
        icon: 'solar:camera-minimalistic-bold'
      },
      {
        title: 'Histórico de Batidas & Sinistros',
        desc: 'Identifique se o veículo teve colisão de média ou grande monta.',
        icon: 'solar:shield-warning-bold'
      },
      {
        title: 'Débitos, IPVA & Multas',
        desc: 'Saiba o valor exato das pendências financeiras atualizadas.',
        icon: 'solar:dollar-minimalistic-bold'
      },
      {
        title: 'Gravame & Bloqueios Judiciais',
        desc: 'Verifique se há impedimentos de transferência (RENAJUD, Alienação).',
        icon: 'solar:lock-keyhole-bold'
      }
    ],
    features: [
      { name: 'Fotos do lote de leilão *', description: 'Registro fotográfico original de leiloeiros homologados.', included: true, highlight: true },
      { name: 'Batidas & Sinistros', description: 'Histórico de acionamento de seguro por colisões.', included: true, highlight: true },
      { name: 'Dados de Leilão completos', description: 'Data, leiloeiro, comitente e classificação do dano.', included: true, highlight: true },
      { name: 'Débitos e Multas estaduais/federais', description: 'IPVA, Licenciamento, DPVAT e infrações de trânsito.', included: true, highlight: true },
      { name: 'Gravame & Financiamento', description: 'Status de alienação fiduciária e banco credor.', included: true, highlight: true },
      { name: 'RENAJUD detalhe & Bloqueios', description: 'Restrições judiciais e administrativas ativas.', included: true, highlight: true },
      { name: 'Roubo e Furto ativo', description: 'Alerta em tempo real com base na Polícia Rodoviária e Denatran.', included: true, highlight: true },
      { name: 'Aceitação em seguro', description: 'Índice probabilístico de recusa pelas principais seguradoras.', included: true },
      { name: 'Dados cadastrais estaduais e nacionais', description: 'Renavam, Chassi, Motor, Município de registro e Cor.', included: true },
      { name: 'Decodificador de Chassi', description: 'Validação da fábrica e ano modelo original.', included: true },
      { name: 'Ficha Técnica Completa', description: 'Especificações mecânicas, potência, consumo e equipamentos.', included: true },
      { name: 'Precificador Tabela FIPE', description: 'Valor atualizado de mercado e gráfico histórico.', included: true },
      { name: 'Principais falhas do modelo', description: 'Opinião técnica sobre crônicos e desgastes do veículo.', included: true },
      { name: 'Peças originais & valores *', description: 'Cotação estimada para reposição dos principais componentes.', included: true },
      { name: 'Custo médio de manutenção *', description: 'Estimativa anual de revisão e manutenção preventiva.', included: true },
      { name: 'Histórico de KM *', description: 'Registros de quilometragem identificados em vistorias anteriores.', included: true },
      { name: 'Localizador de números *', description: 'Local exato da gravação do chassi e motor.', included: true },
      { name: 'Recall pendente de fábrica', description: 'Campanhas de segurança da montadora não atendidas.', included: true },
      { name: 'Risco de comercialização', description: 'Pontuação de liquidez e aceitação no mercado de seminovos.', included: true },
      { name: 'Score de leilão completo', description: 'Nota de 0 a 100 de impacto na desvalorização.', included: true }
    ],
    sampleReport: {
      vehicleName: 'TOYOTA COROLLA XEI 2.0 FLEX AUTOMÁTICO 2021',
      plate: 'ABC1D23',
      renavamMasked: '0123***789',
      chassiMasked: '9BRBL3***123456',
      checks: [
        { label: 'Passagem por Leilão', result: 'NADA CONSTA', safe: true },
        { label: 'Histórico de Sinistro / Batida', result: 'NADA CONSTA', safe: true },
        { label: 'Alerta de Roubo e Furto', result: 'VEÍCULO REGULAR', safe: true },
        { label: 'Restrição Judicial (RENAJUD)', result: 'SEM BLOQUEIOS', safe: true },
        { label: 'Débitos e Multas', result: 'R$ 0,00 PENDENTE', safe: true },
        { label: 'Situação do Gravame', result: 'QUITADO / SEM ALIENACAO', safe: true }
      ]
    },
    faq: [
      {
        question: 'Como recebo o relatório da Consulta Veículo Completo?',
        answer: 'Assim que o pagamento via Pix ou Cartão é aprovado, o relatório completo é exibido imediatamente na tela e você também pode baixá-lo em formato PDF ou enviá-lo pelo WhatsApp.'
      },
      {
        question: 'Quais dados eu preciso para fazer a consulta?',
        answer: 'Apenas a placa do veículo! Nosso sistema identifica automaticamente o Renavam, Chassi e todas as informações vinculadas.'
      },
      {
        question: 'E se o carro tiver fotos de leilão, elas aparecem?',
        answer: 'Sim! Caso o veículo tenha registrado histórico de leilão em leiloeiros parceiros, as fotos do lote são exibidas diretamente no relatório.'
      }
    ]
  },
  {
    id: 'veiculo-essencial',
    title: 'Veículo Essencial',
    category: 'Consulta Básica',
    badge: 'Econômica',
    tagline: 'As informações fundamentais para você negociar com segurança',
    description: 'Verifique os dados vitais do veículo: batidas, sinistro, roubo/furto, dados cadastrais, débitos e restrições antes de fechar o negócio.',
    fullDescription: 'A Consulta Veículo Essencial é perfeita para quem precisa de um raio-x rápido e preciso sobre a situação legal e estrutural básica do veículo, garantindo que o carro não tem bloqueios nem histórico grave de batidas.',
    originalPrice: 'R$ 52,90',
    price: 'R$ 39,90',
    discountBadge: 'OFF 25%',
    ctaText: 'CONSULTAR VEÍCULO ESSENCIAL',
    highlights: [
      {
        title: 'Sinistro & Colisão',
        desc: 'Valide se o veículo possui registros de batidas pesadas.',
        icon: 'solar:shield-warning-bold'
      },
      {
        title: 'Roubo e Furto',
        desc: 'Checagem instantânea de alerta policial ativo.',
        icon: 'solar:danger-triangle-bold'
      },
      {
        title: 'Dados Cadastrais',
        desc: 'Renavam, Chassi, Motor e Município de origem.',
        icon: 'solar:document-text-bold'
      }
    ],
    features: [
      { name: 'Batidas & Sinistros', description: 'Registro de sinistro por média e grande monta.', included: true, highlight: true },
      { name: 'Roubo e Furto ativo', description: 'Base Denatran e Policial em tempo real.', included: true, highlight: true },
      { name: 'Débitos e Multas básicos', description: 'Resumo de multas e licenciamento.', included: true, highlight: true },
      { name: 'Dados cadastrais estaduais e nacionais', description: 'Validação de motor, chassi e proprietário.', included: true, highlight: true },
      { name: 'Restrições e impedimentos', description: 'Impedimentos administrativos de transferência.', included: true, highlight: true },
      { name: 'Precificador Tabela FIPE', description: 'Valor oficial de referência de mercado.', included: true },
      { name: 'Recall pendente de fábrica', description: 'Alertas de segurança não resolvidos.', included: true },
      { name: 'Fotos de leilão', description: 'Não incluso nesta modalidade (consulte a versão Completa).', included: false },
      { name: 'RENAJUD detalhado', description: 'Não incluso nesta modalidade.', included: false }
    ],
    sampleReport: {
      vehicleName: 'HYUNDAI HB20 COMFORT 1.0 FLEX 2020',
      plate: 'XYZ9K87',
      renavamMasked: '0987***123',
      chassiMasked: '9BHBH8***654321',
      checks: [
        { label: 'Histórico de Sinistro', result: 'NADA CONSTA', safe: true },
        { label: 'Alerta de Roubo e Furto', result: 'SEM REGISTRO', safe: true },
        { label: 'Restrição de Transferência', result: 'LIVRE PARA TRANSFERIR', safe: true },
        { label: 'Débitos e Multas', result: 'CONSULTA REGULAR', safe: true }
      ]
    },
    faq: [
      {
        question: 'Qual a diferença entre a Essencial e a Completa?',
        answer: 'A Consulta Essencial foca nos dados vitais de sinistro, roubo/furto e débitos básicos. Já a Consulta Completa traz também fotos de leilão, RENAJUD detalhado, score de aceitação em seguro e muito mais.'
      }
    ]
  },
  {
    id: 'leilao-dados',
    title: 'Leilão + Dados do Veículo',
    category: 'Especializada em Leilão',
    badge: 'Mais Vendida',
    tagline: 'Descubra a origem do leilão, comitente, fotos e o score de desvalorização',
    description: 'Ideal para quem busca comprar veículos de leilão ou quer saber se o carro pretendido já passou por leiloeiros públicos ou privados com fotos do lote.',
    fullDescription: 'Evite surpresas amargas! Veículos vindos de leilão podem ter desvalorização de 20% a 50% na tabela e recusa em seguradoras. Com esta consulta você sabe exatamente a modalidade do leilão (financeiro, sinistro ou frota) e vê as fotos do momento do leilão.',
    originalPrice: 'R$ 34,90',
    price: 'R$ 21,90',
    discountBadge: 'OFF 37%',
    ctaText: 'CONSULTAR HISTÓRICO DE LEILÃO',
    highlights: [
      {
        title: 'Fotos do Lote em Leilão',
        desc: 'Veja o estado do veículo quando estava no leiloeiro.',
        icon: 'solar:camera-minimalistic-bold'
      },
      {
        title: 'Classificação da Avaria',
        desc: 'Descubra se foi leilão de financeira, colisão ou enchente.',
        icon: 'solar:notes-bold'
      },
      {
        title: 'Nome do Leiloeiro & Comitente',
        desc: 'Saiba qual empresa ou banco colocou o carro à venda.',
        icon: 'solar:buildings-bold'
      }
    ],
    features: [
      { name: 'Fotos do lote de leilão *', description: 'Visualização das fotos registradas na época da praça.', included: true, highlight: true },
      { name: 'Dados de leilão detalhados', description: 'Data do leilão, lote, leiloeiro e comitente.', included: true, highlight: true },
      { name: 'Score de leilão completo', description: 'Classificação do risco e depreciação calculada.', included: true, highlight: true },
      { name: 'Aceitação em seguro', description: 'Previsão de aceitação por seguradoras tradicionais.', included: true, highlight: true },
      { name: 'Dados cadastrais do veículo', description: 'Motor, Chassi, Ano, Cor e Município.', included: true },
      { name: 'Precificador Tabela FIPE', description: 'Cotação oficial de mercado.', included: true }
    ],
    sampleReport: {
      vehicleName: 'CHEVROLET ONIX TURBO PREMIER 2022',
      plate: 'LEI4O88',
      renavamMasked: '0456***890',
      chassiMasked: '9BGKO4***987654',
      checks: [
        { label: 'Passagem por Leilão', result: 'CONSTA LEILÃO FINANCEIRO', safe: false },
        { label: 'Classificação do Dano', result: 'SEM AVARIA / RECUPERADO DE FINANCIAMENTO', safe: true },
        { label: 'Leiloeiro Registrado', result: 'SODRÉ SANTORO LEILÕES', safe: true },
        { label: 'Aceitação em Seguro', result: 'PROBABILIDADE ALTA (90% FIPE)', safe: true }
      ]
    },
    faq: [
      {
        question: 'Todo veículo de leilão tem fotos?',
        answer: 'As fotos estão disponíveis para a grande maioria dos leilões realizados pelos principais leiloeiros homologados do Brasil nos últimos anos.'
      }
    ]
  }
];

export function getProductById(id: string): Product | undefined {
  return productsData.find(p => p.id === id);
}
