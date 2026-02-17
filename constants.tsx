import { Job, JobCategory } from './types';

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Açougueiro',
    company: 'Ellos Rh',
    location: 'Caxias do Sul - RS (Marechal Floriano)',
    type: 'Presencial',
    salary: 'R$ 2.300,00',
    category: JobCategory.OUTROS,
    postedDate: '2026-01-24',
    description: `Atividades:
- Cortes e preparo de carnes
- Atendimento ao cliente
- Organização do balcão e câmara fria
- Higienização do setor
- Controle básico de estoque e qualidade

Horário: Terça a Domingo das 8h30 às 12h | 14h às 19h (domingos apenas no período da manhã).
Benefícios: Cesta básica.
Localização: Residir próximo ao bairro Marechal Floriano.`,
    requirements: [
      'Ensino fundamental completo',
      'Experiência na função',
      'Conhecimento em cortes e desossa',
      'Boas práticas de higiene',
      'Boa comunicação e atendimento',
      'Agilidade nos preparos',
      'Trabalho em equipe'
    ]
  },
  {
    id: '2',
    title: 'Operadora de Caixa',
    company: 'Ellos Rh',
    location: 'Caxias do Sul - RS (Marechal Floriano)',
    type: 'Presencial',
    salary: 'R$ 1.800,00 + Cesta Básica',
    category: JobCategory.ADMINISTRATIVO,
    postedDate: '2026-01-25',
    description: `Atividades:
📗 Recebimentos e conferência de caixa
🧾 Registro de produtos e emissão de notas
📒 Atendimento cordial ao cliente
🔁 Encaminhamento de trocas e ocorrências
🗂 Organização do setor
💰 Controle de sangrias

Horário: Terça a Domingo das 8h30 às 12h | 14h às 19h (domingo só na parte da manhã).
Benefícios: Cesta básica.`,
    requirements: [
      '🎓 Ensino médio completo',
      '💻 Noções básicas de informática',
      '🗣 Boa comunicação',
      '⚡ Atenção e agilidade',
      '📌 Responsabilidade e organização',
      '🔢 Facilidade com números e operações simples',
      '📍 Residir próximo ao bairro Marechal Floriano'
    ]
  },
  {
    id: '6',
    title: 'Assistente Comercial',
    company: 'Ellos Rh',
    location: 'Caxias do Sul - RS (Pioneiro)',
    type: 'Presencial',
    salary: 'R$ 2.194,48 + 10% de comissão',
    category: JobCategory.VENDAS,
    postedDate: '2026-01-26',
    description: `Atividades:
🤝 Suporte a vendedores externos e clientes
🚚 Cotações de frete conforme volume, peso e tipo de veículo
📩 Envio de orçamentos
📦 Acompanhamento de pedidos e entregas
🔁 Pós-vendas

Horário: De segunda a sexta das 07h45 às 18h18.
Benefícios: Vale transporte, Cartão benefício, Seguro de vida e Espaço interno para levar o almoço.`,
    requirements: [
      '💼 Experiência na função',
      '🎓 Ensino Médio completo',
      '📍 Fácil acesso ao bairro Pioneiro'
    ]
  },
  {
    id: '7',
    title: 'Auxiliar de Produção',
    company: 'Ellos Rh',
    location: 'Caxias do Sul - RS (São José)',
    type: 'Presencial',
    salary: 'R$ 2.050,00',
    category: JobCategory.LOGISTICA,
    postedDate: '2026-01-26',
    description: `Atividades:
⚙ Moagem de materiais
📦 Embalagem de materiais
🏭 Abastecimento de máquinas
🔎 Inspeção e contagem de produtos
🤝 Apoio à equipe / otimização de processos
🧹 Organização e limpeza do ambiente

Horário: De segunda a sexta das 07h40 às 17h30.
Benefícios: Plano de saúde 100% pago pela empresa, Seguro de vida, Auxílio alimentação, Vale-transporte, Convênio farmácia e Convênios educacionais.`,
    requirements: [
      '📏 Lid e metrologia',
      '🎓 Ensino médio completo',
      '🏭 Experiência em indústrias',
      '📍 Bairro São José'
    ]
  },
  {
    id: '3',
    title: 'Assistente Comercial',
    company: 'Ellos Rh',
    location: 'Caxias do Sul - RS (São José)',
    type: 'Presencial',
    salary: 'R$ 2.200,00 + comissão',
    category: JobCategory.VENDAS,
    postedDate: '2026-01-27',
    description: `Atividades:
📞 Atendimento a clientes
📝 Elaboração e acompanhamento de propostas comerciais
📊 Atualização de cadastros e controle de informações
🔄 Follow-up com clientes
📈 Organização de relatórios e indicadores comerciais
➕ Apoio em demais atividades da área

Horário: De segunda a sexta das 07h30 às 17h18.
Benefícios: Vale Transporte, Vale Alimentação e Plano de Saúde.`,
    requirements: [
      '💼 Experiência na função',
      '🎓 Ensino Médio completo (superior será um diferencial)',
      '📍 Fácil acesso ao bairro São José'
    ]
  },
  {
    id: '4',
    title: 'Conferente',
    company: 'Ellos Rh',
    location: 'Flores da Cunha - RS',
    type: 'Presencial',
    salary: 'R$ 2.800,00',
    category: JobCategory.LOGISTICA,
    postedDate: '2026-01-29',
    description: `Atividades:
🔎 Conferir entradas e saídas de mercadorias
📄 Verificar notas fiscais e documentos
📊 Controlar estoque e registrar movimentações
🚚 Acompanhar carregamento e descarregamento
📦 Organizar produtos e identificar divergências
🤝 Apoiar setores logísticos quando necessário

Horário: Segunda a sexta das 8h às 18h.
Benefícios: Auxílio alimentação e Auxílio combustível.`,
    requirements: [
      '🎓 Ensino médio completo',
      '🔍 Atenção aos detalhes',
      '📦 Experiência com estoque ou logística',
      '💻 Noções básicas de informática',
      '🗂 Organização e responsabilidade',
      '🗣 Boa comunicação e trabalho em equipe'
    ]
  },
  {
    id: '5',
    title: 'Operador(a) de Formadora de Tubos',
    company: 'Ellos Rh',
    location: 'Caxias do Sul - RS (Cidade Nova)',
    type: 'Presencial',
    salary: 'R$ 3.259,85 + 20% de insalubridade',
    category: JobCategory.LOGISTICA,
    postedDate: '2026-01-28',
    description: `Atividades:
⚙ Operação e ajustes em máquina formadora de tubos
🏭 Abastecimento de matéria-prima e acompanhamento da produção
🔎 Inspeção básica de qualidade
🔧 Pequenos ajustes e manutenção preventiva
🦺 Cumprimento das normas de segurança e procedimentos da empresa

Horário: De segunda a sexta das 07h30 às 17h18.
Benefícios: Transporte fretado, Restaurante interno, Plano de Saúde, Auxílio Educação, PPR e Convênios.`,
    requirements: [
      '💼 Experiência na função',
      '🎓 Ensino Médio completo',
      '📍 Bairro Cidade Nova'
    ]
  },
  {
    id: '8',
    title: 'Chefe de Seção',
    company: 'Ellos Rh',
    location: 'Caxias do Sul - RS',
    type: 'Presencial',
    salary: 'R$ 3.500,00',
    category: JobCategory.ADMINISTRATIVO,
    postedDate: '2026-01-30',
    description: `Atividades:
• Revisão e reestruturação de fluxos operacionais
• Otimização de recursos para maximizar a eficiência e reduzir custos
• Criação e implementação de modelos operacionais aprimorados

Horário: Segunda a sexta, das 12h15 às 18h30.
Benefícios: Vale transporte, Cartão alimentação e Plano de saúde integral.`,
    requirements: [
      '• Superior em Marketing, Comunicações ou afins',
      '• Excel avançado, pacote Office',
      '• Conhecimento em sistemas operacionais',
      '• Experiência na área de previdência',
      '• Conhecimento em IA será um diferencial'
    ]
  },
  {
    id: '9',
    title: 'Auxiliar de Produção',
    company: 'Ellos Rh',
    location: 'Caxias do Sul - RS (Distrito Industrial)',
    type: 'Presencial',
    salary: 'R$ 2.100,00',
    category: JobCategory.LOGISTICA,
    postedDate: '2026-01-31',
    description: `Atividades:
• Abastecer linhas de produção
• Pendurar e baixar materiais
• Isolar peças para pintura
• Apontar produção no sistema
• Movimentar e separar materiais
• Cumprir normas de segurança e uso de EPI
• Apoiar nas atividades da equipe

Horário: De segunda a sexta das 07h18 às 17h08 (Sexta saída às 16h08).
Benefícios: Transporte fretado, Vale alimentação, Plano de saúde (opcional) e Seguro de vida.`,
    requirements: [
      '• Ensino Fundamental completo',
      '• Conhecimento no pacote Office',
      '• Noções de 5S',
      '• LID e Metrologia',
      '• Noções da NR 11 e NR12'
    ]
  },
  {
    id: '10',
    title: 'Analista Pleno de Operações',
    company: 'Ellos Rh',
    location: 'Caxias do Sul - RS',
    type: 'Presencial',
    salary: 'R$ 3.500,00',
    category: JobCategory.ADMINISTRATIVO,
    postedDate: '2026-02-01',
    description: `Atividades:
• Reestruturação e aprimoramento de processos
• Otimização de recursos visando aumento de eficiência
• Desenvolvimento e implementação de novos modelos operacionais

Horário: Segunda a sexta, das 12h15 às 18h30.
Benefícios: Vale transporte, Cartão alimentação e Plano de saúde integral.`,
    requirements: [
      '• Superior em Marketing, Comunicações ou afins',
      '• Excel avançado, pacote Office',
      '• Conhecimento em sistemas operacionais',
      '• Experiência na área de operations',
      '• Conhecimento em IA será um diferencial'
    ]
  }
];