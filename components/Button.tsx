
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glow' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "font-medium transition-all duration-300 rounded-full flex items-center justify-center gap-2 relative overflow-hidden active:scale-95";
  
  const variants = {
    // Using specific RGB (15, 23, 42)
    primary: "bg-[rgb(15,23,42)] text-white hover:bg-[rgb(30,41,59)] shadow-lg shadow-slate-900/30 border border-transparent",
    secondary: "bg-white text-[rgb(15,23,42)] hover:bg-slate-50 border border-slate-200 shadow-sm",
    outline: "bg-transparent border border-slate-300 text-[rgb(15,23,42)] hover:border-[rgb(15,23,42)] hover:text-[rgb(15,23,42)] hover:bg-slate-50",
    glow: "bg-[rgb(15,23,42)] text-white shadow-[0_0_20px_rgba(2,132,199,0.4)] hover:shadow-[0_0_30px_rgba(2,132,199,0.6)] hover:bg-[rgb(30,41,59)]",
    ghost: "bg-transparent text-[rgb(15,23,42)] hover:text-[rgb(15,23,42)]"
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};
