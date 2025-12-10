
import React from 'react';

interface LogoProps {
  compact?: boolean;
  theme?: 'light' | 'dark';
  badge?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ compact = false, theme = 'light', badge = false }) => {
  // If badge is active, force dark theme colors (White text) to contrast with the dark badge background
  const activeTheme = badge ? 'dark' : theme;
  const textColor = activeTheme === 'light' ? 'rgb(15, 23, 42)' : '#ffffff';
  const primaryColor = '#0284c7';
  
  // Badge styling: Dark background (RGB 15 23 42), rounded pill shape, shadow
  const containerClasses = badge 
    ? "bg-[rgb(15,23,42)] pl-2 pr-5 py-2 rounded-full shadow-xl shadow-blue-900/20 border border-slate-800" 
    : "";

  return (
    <div className={`flex items-center gap-3 select-none transition-all duration-300 ${containerClasses}`}>
      <div className={`relative ${compact ? 'w-8 h-8' : 'w-10 h-10'} shrink-0 transition-all duration-300`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
           <defs>
             {/* The diagonal cut mask for the D */}
             <mask id="cut-mask-d">
               <rect width="100" height="100" fill="white" />
               <line x1="30" y1="70" x2="70" y2="30" stroke="black" strokeWidth="8" strokeLinecap="square" />
             </mask>
           </defs>

           {/* Left Arc - Text Color (White if badge/dark) */}
           <path d="M 50 90 A 40 40 0 0 1 50 10" stroke={textColor} strokeWidth="5" strokeLinecap="round" />
           
           {/* Right Arc - Blue */}
           <path d="M 50 10 A 40 40 0 0 1 50 90" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
           
           {/* Top Arrow (Blue, pointing Right) */}
           <path d="M 46 5 L 56 10 L 46 15 Z" fill={primaryColor} /> 
           
           {/* Bottom Arrow (Blue, pointing Left) */}
           <path d="M 54 95 L 44 90 L 54 85 Z" fill={primaryColor} />
           
           {/* The D - Bold and Centered with Cut */}
           <text 
             x="50" 
             y="52" 
             textAnchor="middle" 
             dominantBaseline="central"
             fill={textColor} 
             fontSize="52" 
             fontFamily="Inter, sans-serif" 
             fontWeight="900"
             mask="url(#cut-mask-d)"
             style={{ userSelect: 'none' }}
           >
             D
           </text>
        </svg>
      </div>
      
      {!compact && (
        <div 
          className="text-2xl font-sans font-bold tracking-tight flex items-center" 
          style={{ color: textColor }}
        >
          Decision<span className="text-[#0284c7]">Driver</span>
        </div>
      )}
      {compact && (
         <div 
           className="font-sans font-bold tracking-tight md:hidden"
           style={{ color: textColor }}
         >
           DD
         </div>
      )}
    </div>
  );
};
