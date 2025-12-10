
import React, { useState, useEffect } from 'react';
import { Page, NavItem } from '../types';
import { Menu, X, Linkedin, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { Button } from './Button';
import { Logo } from './Logo';

interface LayoutProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ currentPage, onNavigate, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Home', page: Page.Home },
    { label: 'Leistungen', page: Page.Services },
    { label: 'Keynote', page: Page.KeyNoteSpeaker },
    { label: 'Cases', page: Page.BestPractices },
    { label: 'Über uns', page: Page.About },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-main text-dark selection:bg-primary/20 selection:text-primary">
      {/* Floating Island Navigation */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${scrolled ? 'pt-4' : 'pt-6'}`}>
        <nav 
          className={`
            flex items-center justify-between px-2 pl-4 pr-2 transition-all duration-500
            ${scrolled 
              ? 'w-[90%] md:w-[70%] lg:w-[60%] bg-white/90 backdrop-blur-xl border border-slate-200 shadow-xl shadow-blue-900/5 rounded-full py-2' 
              : 'w-full max-w-7xl bg-transparent border-transparent py-4'
            }
          `}
        >
          {/* Logo - Now using Badge Variant */}
          <div 
            onClick={() => handleNavClick(Page.Home)}
            className="cursor-pointer flex-shrink-0"
          >
            <Logo compact={scrolled} badge={true} />
          </div>

          {/* Desktop Nav - Clean Text Links */}
          <div className={`hidden lg:flex items-center gap-8 ${scrolled ? 'text-sm' : 'text-base'}`}>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page)}
                className={`font-medium transition-all duration-300 relative group ${
                  currentPage === item.page ? 'text-primary' : 'text-slate-500 hover:text-primary'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 origin-left ${currentPage === item.page ? 'scale-x-100' : 'group-hover:scale-x-100'}`}></span>
              </button>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Button 
                variant={scrolled ? "primary" : "outline"}
                size={scrolled ? "sm" : "md"}
                onClick={() => handleNavClick(Page.Contact)}
                className={scrolled ? "!px-6" : "bg-white/80 hover:bg-white border-slate-200 text-slate-800"}
              >
                Kontakt
              </Button>
            </div>

            <button 
              className={`lg:hidden p-2 rounded-full transition-colors ${scrolled ? 'bg-slate-100 text-slate-900' : 'text-slate-900'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-32 px-6 animate-fade-in lg:hidden">
           <div className="flex flex-col gap-6 items-center text-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page)}
                className="text-3xl font-bold text-slate-900 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="mt-12 w-full max-w-xs">
              <Button 
                className="w-full"
                onClick={() => handleNavClick(Page.Contact)}
              >
                Strategiegespräch
              </Button>
            </div>
           </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer - Dark Blue for Stability */}
      <footer className="bg-[rgb(15,23,42)] text-white relative overflow-hidden pt-24 pb-12 rounded-t-[3rem] mt-12 mx-2">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
             <div className="max-w-md">
                <Logo theme="dark" />
                <h3 className="text-3xl font-bold mt-6 mb-4 text-white">Präzision in jeder Entscheidung.</h3>
                <p className="text-slate-400">
                  Wir transformieren komplexe Daten in klare Handlungsstrategien für die Führungsebene von morgen.
                </p>
             </div>
             <div className="flex gap-4">
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10" onClick={() => handleNavClick(Page.Contact)}>Kontakt aufnehmen</Button>
             </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
            <div>
               <h4 className="text-white font-medium mb-6">Navigation</h4>
               <ul className="space-y-4 text-slate-400 text-sm">
                  {navItems.map(i => (
                    <li key={i.label}><button onClick={() => handleNavClick(i.page)} className="hover:text-primary transition-colors">{i.label}</button></li>
                  ))}
               </ul>
            </div>
            <div>
               <h4 className="text-white font-medium mb-6">Socials</h4>
               <ul className="space-y-4 text-slate-400 text-sm">
                  <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Twitter / X</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Insights Blog</a></li>
               </ul>
            </div>
            <div>
               <h4 className="text-white font-medium mb-6">Legal</h4>
               <ul className="space-y-4 text-slate-400 text-sm">
                  <li><a href="#" className="hover:text-primary transition-colors">Impressum</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Datenschutz</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">AGB</a></li>
               </ul>
            </div>
            <div>
               <h4 className="text-white font-medium mb-6">Office</h4>
               <address className="not-italic text-slate-400 text-sm space-y-2">
                 <p>Mirabellplatz 1</p>
                 <p>5020 Salzburg</p>
                 <p>Österreich</p>
                 <p className="pt-2 text-white">hello@decisiondriver.at</p>
               </address>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/10 flex justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} DecisionDriver Consulting.</p>
            <p>Designed for Excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
