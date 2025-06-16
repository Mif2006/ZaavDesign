import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

export const CirclePoint = ({ angle, radius, Icon, color, onClick, className }) => {
  // Calculate position based on angle and radius
  const left = `${50 + radius * Math.cos(angle)}%`;
  const top = `${50 + radius * Math.sin(angle)}%`;

  return (
    <div 
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${className || ''}`}
      style={{ left, top }}
      onClick={onClick}
    >
      <div className="relative">
        {/* Point circle */}
        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-black 
                        border border-gray-700 flex items-center justify-center cursor-pointer
                        shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        >
        

          {/* Icon */}
          <Icon className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ${color}`} />

          {/* Glow effect */}
          <div className={`absolute inset-0 rounded-full ${color.replace('text', 'bg')} blur-md opacity-10`} />
        </div>

        {/* Connection line to center */}
       
      </div>
    </div>
  );
};
