
import React, { useState, useEffect } from 'react';
import { Job } from '../types';
import { X, MapPin, Briefcase, DollarSign, CheckCircle, Send } from 'lucide-react';
import ApplicationForm from './ApplicationForm';

interface JobModalProps {
  job: Job | null;
  onClose: () => void;
}

const JobModal: React.FC<JobModalProps> = ({ job, onClose }) => {
  const [view, setView] = useState<'details' | 'apply'>('details');

  useEffect(() => {
    if (job) setView('details');
  }, [job]);

  if (!job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200">
        {view === 'details' ? (
          <>
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
              <div>
                <span className="px-3 py-1 bg-[#5b825f]/10 text-[#5b825f] text-xs font-bold rounded-full uppercase mb-2 inline-block">
                  {job.category}
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">{job.title}</h2>
                <p className="text-slate-600 font-medium">{job.company}</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white rounded-full transition-colors text-slate-400 hover:text-slate-600 shadow-sm"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto flex-1 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#5b825f]/5 text-[#5b825f] rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Localização</p>
                    <p className="text-sm text-slate-700 font-semibold">{job.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#5b825f]/5 text-[#5b825f] rounded-lg">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Tipo</p>
                    <p className="text-sm text-slate-700 font-semibold">{job.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#5b825f]/5 text-[#5b825f] rounded-lg">
                    <DollarSign size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Remuneração</p>
                    <p className="text-sm text-slate-700 font-semibold">{job.salary || 'A combinar'}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <section>
                  <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                    Descrição da Vaga
                  </h4>
                  <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                    {job.description}
                  </p>
                </section>

                <section>
                  <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                    Requisitos e Qualificações
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                        <CheckCircle size={16} className="text-[#5b825f] mt-0.5 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-end">
              <button 
                className="w-full sm:w-auto px-8 py-3 bg-[#5b825f] text-white font-bold rounded-xl hover:bg-[#4a6b4d] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#5b825f]/20"
                onClick={() => setView('apply')}
              >
                Candidatar-se Agora
                <Send size={18} />
              </button>
            </div>
          </>
        ) : (
          <ApplicationForm 
            job={job} 
            onClose={onClose} 
            onBack={() => setView('details')} 
          />
        )}
      </div>
    </div>
  );
};

export default JobModal;
