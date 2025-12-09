import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* Custom Compass Logo Icon */}
      <div className="relative w-8 h-8 md:w-9 md:h-9 shrink-0">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
          {/* Base Ring - Changed from dark blue to white */}
          <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="6" opacity="0.9" />
          
          {/* Active Ring Segments */}
          <path d="M50 10 A40 40 0 0 1 90 50" stroke="#3B82F6" strokeWidth="6" strokeLinecap="round" />
          <path d="M90 50 A40 40 0 0 1 50 90" stroke="#3B82F6" strokeWidth="6" strokeLinecap="round" />
          
          {/* Compass Spikes */}
          <path d="M50 0 L56 14 L44 14 Z" fill="#3B82F6" />
          <path d="M100 50 L86 56 L86 44 Z" fill="#3B82F6" />
          <path d="M50 100 L44 86 L56 86 Z" fill="#3B82F6" />
          {/* Left spike changed to white */}
          <path d="M0 50 L14 44 L14 56 Z" fill="white" />

          {/* Letter D */}
          <path d="M38 32 V68 H54 C66 68 70 60 70 50 C70 40 66 32 54 32 H38 Z" fill="white" />
          
          {/* Dynamic Slash - Acts as negative space (background color) */}
          <path d="M30 75 L75 25" stroke="#020617" strokeWidth="5" />
        </svg>
      </div>
      
      <div className="text-xl font-bold tracking-tight text-white">
        Decision<span className="text-primary">Driver</span>
      </div>
    </div>
  );
};