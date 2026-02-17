
import React, { useState } from 'react';
import { Job, ApplicationData } from '../types';
import { Upload, X, ArrowLeft, Send, CheckCircle2, FileText } from 'lucide-react';

interface ApplicationFormProps {
  job: Job;
  onClose: () => void;
  onBack: () => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ job, onClose, onBack }) => {
  const [formData, setFormData] = useState<Partial<ApplicationData>>({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    education: '',
    resume: null
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulating API call
    setTimeout(() => {
      console.log('Application Submitted:', formData);
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-12 text-center animate-in zoom-in duration-300">
        <div className="w-20 h-20 bg-[#5b825f]/10 text-[#5b825f] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Candidatura Enviada!</h3>
        <p className="text-slate-500 mb-8 max-w-sm mx-auto">
          Obrigado, {formData.fullName}! Recebemos seu currículo para a vaga de <strong>{job.title}</strong>. Nossa equipe de RH entrará em contato em breve.
        </p>
        <button 
          onClick={onClose}
          className="px-8 py-3 bg-[#5b825f] text-white font-bold rounded-xl hover:bg-[#4a6b4d] transition-all shadow-lg shadow-[#5b825f]/20"
        >
          Fechar Painel
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Form Header */}
      <div className="p-6 border-b border-slate-100 bg-[#5b825f]/5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-[#5b825f] transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Formulário de Candidatura</h3>
            <p className="text-xs text-slate-500 font-medium">Vaga: {job.title}</p>
          </div>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
          <X size={24} />
        </button>
      </div>

      {/* Form Body */}
      <div className="p-8 overflow-y-auto flex-1">
        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
          {/* Personal Info */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 ml-1">Nome Completo</label>
              <input 
                required
                type="text" 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-[#5b825f] outline-none transition-all"
                placeholder="Seu nome completo"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 ml-1">E-mail Profissional</label>
                <input 
                  required
                  type="email" 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-[#5b825f] outline-none transition-all"
                  placeholder="exemplo@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 ml-1">Telefone / WhatsApp</label>
                <input 
                  required
                  type="tel" 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-[#5b825f] outline-none transition-all"
                  placeholder="54 99255-0204"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Background */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 ml-1">Formação Acadêmica</label>
              <textarea 
                required
                rows={2}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-[#5b825f] outline-none transition-all resize-none"
                placeholder="Ex: Pós-graduação em Gestão de Projetos"
                value={formData.education}
                onChange={(e) => setFormData({...formData, education: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 ml-1">Experiência Profissional</label>
              <textarea 
                required
                rows={3}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-[#5b825f] outline-none transition-all resize-none"
                placeholder="Fale brevemente sobre suas últimas experiências..."
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2 ml-1">Anexar Currículo (PDF ou DOCX)</label>
            <div className="relative">
              <input 
                required
                type="file" 
                accept=".pdf,.docx,.doc"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className={`p-6 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center transition-all ${
                formData.resume ? 'border-[#5b825f] bg-[#5b825f]/5' : 'border-slate-200 bg-slate-50 hover:border-[#5b825f]/50'
              }`}>
                {formData.resume ? (
                  <>
                    <FileText className="text-[#5b825f] mb-2" size={32} />
                    <p className="text-sm font-bold text-[#5b825f]">{formData.resume.name}</p>
                    <p className="text-xs text-[#5b825f]/70">Clique para trocar o arquivo</p>
                  </>
                ) : (
                  <>
                    <Upload className="text-slate-300 mb-2" size={32} />
                    <p className="text-sm font-medium text-slate-500">Arraste ou clique para enviar</p>
                    <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-wider">Máximo 5MB</p>
                  </>
                )}
              </div>
            </div>
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-[#5b825f] text-white font-bold rounded-xl hover:bg-[#4a6b4d] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#5b825f]/20 disabled:opacity-70"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Processando...
              </span>
            ) : (
              <>
                Confirmar Candidatura
                <Send size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
