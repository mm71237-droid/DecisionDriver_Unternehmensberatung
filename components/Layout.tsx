
import React, { useState, useEffect } from 'react';
import { Page, NavItem } from '../types';
import { Menu, X, Linkedin, Phone, Mail, MapPin, ChevronRight, ArrowRight } from 'lucide-react';
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
    { label: 'Keynote Speaker', page: Page.KeyNoteSpeaker },
    { label: 'Best Practices', page: Page.BestPractices },
    { label: 'Über uns', page: Page.About },
    { label: 'Kontakt', page: Page.Contact },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-main text-white selection:bg-primary selection:text-white">
      {/* Navigation - Dark Background */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-[#020617]/90 backdrop-blur-md py-2 shadow-lg shadow-black/20 border-white/10' 
            : 'bg-[#020617]/50 backdrop-blur-sm py-4 border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick(Page.Home)}
            className="cursor-pointer"
          >
            <Logo />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/10 px-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page)}
                className={`px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  currentPage === item.page 
                    ? 'bg-white/10 text-white shadow-sm ring-1 ring-white/5' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => handleNavClick(Page.Contact)}
            >
              Strategie besprechen <ArrowRight size={16} />
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white transition-colors hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#020617] pt-24 px-6 animate-fade-in lg:hidden">
           <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page)}
                className="text-left py-4 text-xl font-medium text-white border-b border-white/10"
              >
                {item.label}
              </button>
            ))}
            <div className="mt-8">
              <Button 
                className="w-full"
                onClick={() => handleNavClick(Page.Contact)}
              >
                C-Level-Strategie besprechen
              </Button>
            </div>
           </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#010409] relative overflow-hidden pt-20 pb-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="cursor-pointer" onClick={() => handleNavClick(Page.Home)}>
              <Logo />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Präzision und Geschwindigkeit für Ihre wichtigsten Geschäftsentscheidungen durch datenbasierte Intelligenz.
            </p>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-block p-2 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Navigation</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={() => handleNavClick(item.page)}
                    className="text-slate-400 hover:text-primary text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight size={14} className="text-primary/50 group-hover:text-primary transition-colors" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Kontakt</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5 text-primary" />
                <span>Mirabellplatz 1<br/>5020 Salzburg, Österreich</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-primary" />
                <a href="mailto:info@decisiondriver.at" className="hover:text-white transition-colors">info@decisiondriver.at</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-primary" />
                <a href="tel:+43662123456" className="hover:text-white transition-colors">+43 662 123456</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Rechtliches</h4>
            <div className="text-sm text-slate-400 space-y-2">
              <p>FN 123456 a | UID: ATU12345678</p>
              <div className="pt-4 flex flex-col gap-2">
                <a href="#" className="hover:text-white transition-colors">Impressum</a>
                <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} DecisionDriver Consulting GmbH.</p>
          <div className="flex gap-6">
            <span>Made with precision in Austria</span>
          </div>
        </div>
      </footer>
    </div>
  );
};