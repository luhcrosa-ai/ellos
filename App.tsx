
import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Briefcase, 
  Target, 
  Smile, 
  Mail, 
  Phone, 
  Menu,
  X,
  Filter
} from 'lucide-react';
import { MOCK_JOBS } from './constants.tsx';
import { Job, JobCategory } from './types';
import JobCard from './components/JobCard';
import JobModal from './components/JobModal';
import AIChatAssistant from './components/AIChatAssistant';

// Componente de Logo SVG com texto branco
const EllosLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 500 500" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="250" cy="250" r="230" fill="#5b825f" />
    <text 
      x="50%" 
      y="55%" 
      textAnchor="middle" 
      fill="white" 
      fontFamily="Georgia, serif" 
      fontSize="160" 
      fontWeight="normal"
    >Ellos</text>
  </svg>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const categories = ['Todas', ...Object.values(JobCategory)];

  const WHATSAPP_LINK = "https://wa.me/5554992550204";

  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            job.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todas' || job.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Restored Logo and Brand Text */}
      <nav className="fixed w-full z-50 glass-morphism border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
                <EllosLogo className="w-14 h-14 transition-transform group-hover:scale-105" />
                <div className="flex flex-col">
                  <span className="text-2xl font-black tracking-tight text-slate-800 leading-none">
                    <span className="text-[#5b825f]">Ellos RH</span>
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Consultoria</span>
                </div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-slate-600 hover:text-[#5b825f] font-semibold transition-colors">Início</a>
              <a href="#vagas" className="text-slate-600 hover:text-[#5b825f] font-semibold transition-colors">Vagas</a>
              <a href="#servicos" className="text-slate-600 hover:text-[#5b825f] font-semibold transition-colors">Serviços</a>
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-[#5b825f] text-white rounded-full font-bold hover:bg-[#4a6b4d] transition-all shadow-md hover:shadow-lg"
              >
                Fale Conosco
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 p-2">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top-10 duration-200 shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-3">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-slate-600 font-bold hover:bg-slate-50 rounded-xl transition-colors">Início</a>
              <a href="#vagas" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-slate-600 font-bold hover:bg-slate-50 rounded-xl transition-colors">Vagas</a>
              <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-slate-600 font-bold hover:bg-slate-50 rounded-xl transition-colors">Serviços</a>
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)} 
                className="block px-3 py-4 bg-[#5b825f] text-white rounded-xl text-center font-bold shadow-lg mt-4"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-40 pb-20 lg:pt-56 lg:pb-40 px-4 bg-white relative overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#5b825f]/5 skew-y-6 z-0 pointer-events-none"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#5b825f]/10 rounded-full blur-[120px] z-0"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#5b825f]/10 rounded-full blur-[120px] z-0"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <span className="inline-block py-1.5 px-6 bg-[#5b825f]/10 text-[#5b825f] rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8">
            Consultoria de RH Estratégica
          </span>
          <h1 className="text-5xl lg:text-8xl font-black text-slate-900 leading-tight mb-8">
            Conectando <span className="text-[#5b825f]">Talentos</span> <br /> aos Melhores Destinos.
          </h1>
          <p className="text-xl lg:text-2xl text-slate-500 mb-12 max-w-2xl leading-relaxed mx-auto">
            Somos especialistas em unir propósitos e criar conexões reais que transformam carreiras e impulsionam o crescimento de grandes empresas.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-lg">
            <a href="#vagas" className="px-10 py-5 bg-[#5b825f] text-white rounded-2xl font-bold text-lg hover:bg-[#4a6b4d] transition-all shadow-2xl shadow-[#5b825f]/30 text-center flex-1">
              Ver Vagas Abertas
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white text-[#5b825f] border-2 border-[#5b825f] rounded-2xl font-bold text-lg hover:bg-[#5b825f] hover:text-white transition-all text-center flex-1 shadow-lg"
            >
              Falar com Consultor
            </a>
          </div>
        </div>
      </section>

      {/* Job Board Section */}
      <section id="vagas" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-4">Painel de <span className="text-[#5b825f]">Vagas</span></h2>
              <p className="text-slate-500 max-w-md">Explore as oportunidades atuais e dê o próximo passo na sua jornada profissional com a Ellos RH.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#5b825f] transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Pesquisar vaga..."
                  className="pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl w-full sm:w-64 focus:ring-2 focus:ring-[#5b825f] outline-none shadow-sm transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative group">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#5b825f] transition-colors" size={20} />
                <select 
                  className="pl-12 pr-10 py-3 bg-slate-50 border border-slate-100 rounded-xl w-full sm:w-56 focus:ring-2 focus:ring-[#5b825f] outline-none shadow-sm appearance-none cursor-pointer transition-all"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} onClick={setSelectedJob} />
              ))}
            </div>
          ) : (
            <div className="bg-slate-50 rounded-2xl p-20 text-center border-2 border-dashed border-slate-200">
              <div className="w-20 h-20 bg-white text-slate-300 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Search size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Nenhuma vaga encontrada</h3>
              <p className="text-slate-500">Tente ajustar seus filtros ou termos de pesquisa.</p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('Todas');}}
                className="mt-6 text-[#5b825f] font-bold hover:underline"
              >
                Limpar todos os filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 px-4 bg-slate-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-slate-900">Nossas <span className="text-[#5b825f]">Soluções</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">Oferecemos consultoria estratégica em gestão de pessoas para potencializar resultados organizacionais.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: <Briefcase size={32} />, 
                title: 'Recrutamento e Seleção', 
                desc: 'Localizamos o talento ideal que se alinha perfeitamente à cultura e aos valores da sua empresa.' 
              },
              { 
                icon: <Target size={32} />, 
                title: 'Avaliação Psicológica', 
                desc: 'Análise técnica profunda do perfil comportamental e cognitivo para tomadas de decisão seguras.' 
              },
              { 
                icon: <Smile size={32} />, 
                title: 'Consultoria de Carreira', 
                desc: 'Preparamos profissionais para o mercado através de mentoria, análise de currículo e LinkedIn.' 
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 hover:border-[#5b825f] transition-all hover:-translate-y-2 group shadow-sm">
                <div className="w-16 h-16 bg-[#5b825f]/10 text-[#5b825f] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#5b825f] group-hover:text-white transition-all shadow-lg shadow-[#5b825f]/10">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-white pt-24 pb-12 border-t border-slate-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <EllosLogo className="w-12 h-12" />
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-tight text-slate-800 uppercase leading-none">Ellos RH</span>
                  <span className="text-[9px] font-bold text-[#5b825f] mt-1 uppercase tracking-tighter">Conectando Talentos</span>
                </div>
              </div>
              <p className="text-slate-500 mb-8 leading-relaxed text-sm">
                Referência em gestão de pessoas e processos seletivos humanizados em Caxias do Sul/RS e região.
              </p>
            </div>

            <div>
              <h4 className="text-slate-800 font-black uppercase tracking-wider text-sm mb-8">Navegação</h4>
              <ul className="space-y-4">
                <li><a href="#inicio" className="text-slate-500 hover:text-[#5b825f] transition-colors text-sm font-medium">Início</a></li>
                <li><a href="#vagas" className="text-slate-500 hover:text-[#5b825f] transition-colors text-sm font-medium">Vagas Abertas</a></li>
                <li><a href="#servicos" className="text-slate-500 hover:text-[#5b825f] transition-colors text-sm font-medium">Nossos Serviços</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-800 font-black uppercase tracking-wider text-sm mb-8">Contato</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-3 group cursor-pointer" onClick={() => window.open(WHATSAPP_LINK, "_blank")}>
                  <Phone size={18} className="text-[#5b825f] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-tight">Telefone / WhatsApp</p>
                    <p className="text-slate-700 font-semibold text-sm group-hover:text-[#5b825f] transition-colors">54 99255-0204</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-[#5b825f] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-tight">E-mail</p>
                    <p className="text-slate-700 font-semibold text-sm">ellosrh.vagas@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-slate-400 text-xs font-medium flex items-center gap-1">Desenvolvido com <span className="text-[#5b825f]">❤</span> para Talentos</p>
          </div>
        </div>
      </footer>

      <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      <AIChatAssistant />
    </div>
  );
};

export default App;
