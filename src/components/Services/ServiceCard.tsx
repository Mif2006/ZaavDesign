import React from 'react';
import * as Icons from 'lucide-react';
import { Service } from './serviceData';

interface ServiceCardProps extends Service {
  style?: React.CSSProperties;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  imageUrl,
  style,
  onClick,
}) => {
  const Icon = Icons[icon as keyof typeof Icons];

  return (
    <div
      className="w-[300px] h-[400px] rounded-xl overflow-hidden cursor-pointer group"
      style={style}
      onClick={onClick}
    >
      <div className="relative h-full bg-gradient-to-b from-purple-900/90 to-black/90 backdrop-blur-sm transform transition-all duration-500">
        <div className="absolute inset-0 opacity-50">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        <div className="relative h-full p-6 flex flex-col items-center justify-center text-center">
          <div className="mb-4 p-3 rounded-full bg-white/10 backdrop-blur-sm">
            <Icon size={32} className="text-white" />
          </div>
          
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-gray-300 mb-6">{description}</p>
          
          <button className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-300 text-white text-sm group-hover:bg-white/30">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;