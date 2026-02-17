
import React from 'react';
import { Job } from '../types';
import { MapPin, Briefcase, ChevronRight } from 'lucide-react';

interface JobCardProps {
  job: Job;
  onClick: (job: Job) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
      onClick={() => onClick(job)}
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 bg-[#5b825f]/10 text-[#5b825f] text-xs font-semibold rounded-full uppercase tracking-wider">
            {job.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#5b825f] transition-colors">
          {job.title}
        </h3>
        
        <p className="text-slate-500 font-medium mb-4">{job.company}</p>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-slate-600 text-sm">
            <MapPin size={16} className="mr-2 text-slate-400" />
            {job.location}
          </div>
          <div className="flex items-center text-slate-600 text-sm">
            <Briefcase size={16} className="mr-2 text-slate-400" />
            {job.type}
          </div>
        </div>
      </div>
      
      <button className="w-full py-3 flex items-center justify-center bg-slate-50 text-slate-700 font-semibold rounded-lg hover:bg-[#5b825f] hover:text-white transition-all group-hover:bg-[#5b825f] group-hover:text-white">
        Ver Detalhes
        <ChevronRight size={18} className="ml-1" />
      </button>
    </div>
  );
};

export default JobCard;
