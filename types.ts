
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Presencial' | 'Híbrido' | 'Remoto';
  salary?: string;
  description: string;
  requirements: string[];
  category: string;
  postedDate: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export interface ApplicationData {
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  education: string;
  resume: File | null;
}

export enum JobCategory {
  ADMINISTRATIVO = 'Administrativo',
  VENDAS = 'Vendas & Comercial',
  TECNOLOGIA = 'Tecnologia',
  ENGENHARIA = 'Engenharia',
  LOGISTICA = 'Logística',
  RH = 'Recursos Humanos',
  SAUDE = 'Saúde',
  OUTROS = 'Outros'
}
