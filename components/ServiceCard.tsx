import React from 'react';
import { Plus } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-soft border border-gray-50 hover:border-rose-100 relative flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-serif font-bold text-gray-900 group-hover:text-rose-gold transition-colors line-clamp-1">
          {service.name}
        </h3>
        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-rose-gold group-hover:text-white transition-all duration-300 flex-shrink-0 ml-2">
          <Plus size={16} />
        </div>
      </div>
      
      <p className="text-gray-500 text-sm font-light mb-4 line-clamp-2 leading-relaxed flex-grow">
        {service.description || "Procedimento especializado para realçar seu olhar."}
      </p>
      
      <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
        <span className="text-xs font-medium text-rose-gold uppercase tracking-wider">
          Ver detalhes
        </span>
        <span className="font-serif font-bold text-gray-900 text-lg">
          R$ {service.price}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;