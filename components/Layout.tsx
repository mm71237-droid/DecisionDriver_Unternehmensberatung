
import React, { useState, useEffect, useRef } from 'react';
import { Page, NavItem } from '../types';
import { Menu, X, Linkedin, Phone, Mail, MapPin, ChevronRight, Gift, Sparkles, ThumbsUp, MessageSquare, Share2, Send, Globe, MoreHorizontal, Shield, Scale, FileText } from 'lucide-react';
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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Global State for Popups
  const [showChristmasPopup, setShowChristmasPopup] = useState(false);
  const [showLinkedInPopup, setShowLinkedInPopup] = useState(false);
  
  // Legal Popups
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);
  const [showTermsPopup, setShowTermsPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Initialize the navigation sound (Jingle)
    const audioUrl = "https://github.com/mm71237-droid/DecisionDriver/raw/main/(Treibender%2C%20kurzer%20Beat%20endet%20in%20einem%20.mp3";
    audioRef.current = new Audio(audioUrl);
    audioRef.current.volume = 0.4;
    audioRef.current.load();
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

  const handleBlogClick = () => {
      onNavigate(Page.About);
      // Small timeout to allow page to mount
      setTimeout(() => {
          const blogSection = document.getElementById('blog');
          if (blogSection) {
              blogSection.scrollIntoView({ behavior: 'smooth' });
          }
      }, 100);
  };

  const handleLogoClick = () => {
    handleNavClick(Page.Home);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.debug("Audio playback failed:", e));
    }
  };

  // LinkedIn Video URL (Raw for streaming)
  const linkedInVideoUrl = "https://github.com/mm71237-droid/DecisionDriver/raw/main/Videoerstellung_Firmengeb%C3%A4ude_Festung_Salzburg.mp4";

  return (
    <div className="min-h-screen flex flex-col bg-main text-dark selection:bg-primary/20 selection:text-primary">
      
      {/* DATENSCHUTZ POPUP */}
      {showPrivacyPopup && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setShowPrivacyPopup(false)}
        >
           <div 
              className="bg-white w-full max-w-4xl max-h-[85vh] rounded-[2rem] shadow-2xl relative flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
           >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white z-10">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 text-primary rounded-full flex items-center justify-center">
                       <Shield size={20} />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-slate-900">Datenschutzerklärung</h3>
                       <p className="text-xs text-slate-500">Stand: 24. Mai 2025</p>
                    </div>
                 </div>
                 <button onClick={() => setShowPrivacyPopup(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                    <X size={24} className="text-slate-500" />
                 </button>
              </div>
              
              <div className="overflow-y-auto p-8 text-slate-600 space-y-6 leading-relaxed">
                 <p>Die DecisionDriver Consulting GmbH nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                 
                 <div>
                    <h4 className="font-bold text-slate-900 mb-2">1. Verantwortliche Stelle</h4>
                    <p className="text-sm">DecisionDriver Consulting GmbH<br/>Mirabellplatz 1, 5020 Salzburg<br/>Geschäftsführer: Max Mustermann</p>
                 </div>

                 <div>
                    <h4 className="font-bold text-slate-900 mb-2">2. Erhebung und Verarbeitung von Daten</h4>
                    <p className="text-sm">
                       <strong>Server-Log-Files:</strong> Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log Files (Browsertyp, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit). Diese Daten sind nicht bestimmten Personen zuordenbar.<br/><br/>
                       <strong>Kontaktformular:</strong> Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                 </div>

                 <div>
                    <h4 className="font-bold text-slate-900 mb-2">3. KI-gestützte Analyse & Consulting-Tools</h4>
                    <p className="text-sm">
                       Im Rahmen unserer Dienstleistungen nutzen wir fortschrittliche Analyse-Tools. Sofern kundenspezifische Daten in diese Systeme eingespeist werden, geschieht dies ausschließlich auf Basis gesonderter Auftragsverarbeitungsverträge (AVV) und unter Einsatz von Enterprise-Instanzen, die gewährleisten, dass Daten nicht zum Training öffentlicher KI-Modelle verwendet werden.
                    </p>
                 </div>

                 <div>
                    <h4 className="font-bold text-slate-900 mb-2">4. Ihre Rechte</h4>
                    <p className="text-sm">
                       Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                    </p>
                 </div>
              </div>
              
              <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
                 <Button size="sm" onClick={() => setShowPrivacyPopup(false)}>Schließen</Button>
              </div>
           </div>
        </div>
      )}

      {/* AGB POPUP */}
      {showTermsPopup && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setShowTermsPopup(false)}
        >
           <div 
              className="bg-white w-full max-w-4xl max-h-[85vh] rounded-[2rem] shadow-2xl relative flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
           >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white z-10">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 text-slate-700 rounded-full flex items-center justify-center">
                       <Scale size={20} />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-slate-900">Allgemeine Geschäftsbedingungen</h3>
                       <p className="text-xs text-slate-500">Für Unternehmensberatung & IT-Services</p>
                    </div>
                 </div>
                 <button onClick={() => setShowTermsPopup(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                    <X size={24} className="text-slate-500" />
                 </button>
              </div>
              
              <div className="overflow-y-auto p-8 text-slate-600 space-y-6 leading-relaxed">
                 <p className="text-sm italic">Hinweis: Dies ist ein fiktives Musterbeispiel für die Demonstration.</p>
                 
                 <div>
                    <h4 className="font-bold text-slate-900 mb-2">§1 Geltungsbereich</h4>
                    <p className="text-sm">
                       Die nachfolgenden Allgemeinen Geschäftsbedingungen gelten für alle Geschäftsbeziehungen zwischen der DecisionDriver Consulting GmbH (nachfolgend "Auftragnehmer") und dem Kunden (nachfolgend "Auftraggeber"). Maßgeblich ist jeweils die zum Zeitpunkt des Vertragsschlusses gültige Fassung.
                    </p>
                 </div>

                 <div>
                    <h4 className="font-bold text-slate-900 mb-2">§2 Vertragsgegenstand & Leistungsumfang</h4>
                    <p className="text-sm">
                       Gegenstand des Auftrags ist die vereinbarte Beratungsleistung (Dienstvertrag), nicht die Herbeiführung eines bestimmten wirtschaftlichen Erfolges. Der Auftragnehmer führt alle Arbeiten mit größter Sorgfalt und unter Beachtung allgemeiner branchenspezifischer Grundsätze und Standards durch.
                    </p>
                 </div>

                 <div>
                    <h4 className="font-bold text-slate-900 mb-2">§3 Mitwirkungspflichten des Kunden</h4>
                    <p className="text-sm">
                       Der Auftraggeber verpflichtet sich, alle zur Durchführung des Auftrags erforderlichen Unterlagen, Daten und Informationen zeitgerecht und vollständig zur Verfügung zu stellen. Verzögerungen, die durch fehlende Mitwirkung entstehen, gehen nicht zu Lasten des Auftragnehmers.
                    </p>
                 </div>

                 <div>
                    <h4 className="font-bold text-slate-900 mb-2">§4 Vertraulichkeit & Datenschutz</h4>
                    <p className="text-sm">
                       Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit bekannt gewordenen Geschäfts- und Betriebsgeheimnisse der anderen Partei auch über das Ende des Vertrags hinaus streng vertraulich zu behandeln.
                    </p>
                 </div>

                 <div>
                    <h4 className="font-bold text-slate-900 mb-2">§5 Haftung</h4>
                    <p className="text-sm">
                       Der Auftragnehmer haftet nur für Vorsatz und grobe Fahrlässigkeit. Für leichte Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten. Die Haftung für mittelbare Schäden, entgangenen Gewinn oder reine Vermögensschäden ist – soweit gesetzlich zulässig – ausgeschlossen.
                    </p>
                 </div>

                 <div>
                    <h4 className="font-bold text-slate-900 mb-2">§6 Schlussbestimmungen</h4>
                    <p className="text-sm">
                       Erfüllungsort und Gerichtsstand ist Salzburg, Österreich. Es gilt österreichisches Recht.
                    </p>
                 </div>
              </div>
              
              <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
                 <Button size="sm" onClick={() => setShowTermsPopup(false)}>Akzeptieren & Schließen</Button>
              </div>
           </div>
        </div>
      )}

      {/* GLOBAL CHRISTMAS POPUP */}
      {showChristmasPopup && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setShowChristmasPopup(false)}
        >
           <div 
              className="bg-slate-900 rounded-3xl max-w-4xl w-full relative border border-slate-700 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
           >
              <button 
                onClick={() => setShowChristmasPopup(false)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors border border-white/20"
              >
                <X size={24} />
              </button>
              
              <div className="p-6 text-center bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700">
                  <h3 className="text-xl md:text-2xl font-bold text-white flex items-center justify-center gap-2">
                    <Sparkles className="text-yellow-400" />
                    Frohe Weihnachten & ein erfolgreiches neues Jahr!
                    <Sparkles className="text-yellow-400" />
                  </h3>
              </div>

              <div className="aspect-video bg-black relative">
                 <video 
                    controls 
                    autoPlay 
                    className="w-full h-full object-contain"
                 >
                    <source src="https://github.com/mm71237-droid/DecisionDriver/raw/main/Videoerstellung_mit_Gr%C3%BC%C3%9Fen.mp4" type="video/mp4" />
                    Ihr Browser unterstützt dieses Video nicht.
                 </video>
              </div>
           </div>
        </div>
      )}

      {/* LINKEDIN POST POPUP */}
      {showLinkedInPopup && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setShowLinkedInPopup(false)}
        >
          <div 
             className="bg-[#f3f2ef] w-full max-w-[555px] max-h-[90vh] rounded-xl relative flex flex-col shadow-2xl overflow-hidden font-sans"
             onClick={(e) => e.stopPropagation()}
          >
             {/* LinkedIn Header Simulation */}
             <div className="bg-white p-3 md:p-4 border-b border-gray-200 flex justify-between items-start">
                <div className="flex gap-3">
                   {/* Company Avatar - Correct Logo */}
                   <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 border border-slate-100 overflow-hidden">
                       <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                           <defs>
                             <mask id="cut-mask-d-avatar">
                               <rect width="100" height="100" fill="white" />
                               <line x1="30" y1="70" x2="70" y2="30" stroke="black" strokeWidth="8" strokeLinecap="square" />
                             </mask>
                           </defs>
                           <path d="M 50 90 A 40 40 0 0 1 50 10" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
                           <path d="M 50 10 A 40 40 0 0 1 50 90" stroke="#0284c7" strokeWidth="5" strokeLinecap="round" />
                           <path d="M 46 5 L 56 10 L 46 15 Z" fill="#0284c7" /> 
                           <path d="M 54 95 L 44 90 L 54 85 Z" fill="#0284c7" />
                           <text x="50" y="52" textAnchor="middle" dominantBaseline="central" fill="#ffffff" fontSize="52" fontFamily="Inter, sans-serif" fontWeight="900" mask="url(#cut-mask-d-avatar)">D</text>
                        </svg>
                   </div>
                   <div>
                      <div className="flex items-center gap-1">
                         <h3 className="font-bold text-slate-900 text-sm leading-tight hover:underline hover:text-blue-700 cursor-pointer">DecisionDriver Consulting</h3>
                         <span className="text-gray-500 text-xs">• 1st</span>
                      </div>
                      <p className="text-xs text-gray-500 leading-tight">Strategic Intelligence & Data Science</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                         <span>2h</span>
                         <span>•</span>
                         <Globe size={10} />
                      </div>
                   </div>
                </div>
                <div className="flex items-center gap-2">
                   <button className="text-blue-600 font-bold text-sm hover:bg-blue-50 px-3 py-1 rounded-full transition-colors hidden sm:block">+ Follow</button>
                   <button onClick={() => setShowLinkedInPopup(false)} className="text-gray-500 hover:bg-gray-100 p-1 rounded-full">
                      <X size={20} />
                   </button>
                </div>
             </div>

             {/* Post Content Scrollable Area */}
             <div className="overflow-y-auto bg-white">
                {/* Text Body */}
                <div className="px-4 py-3 text-sm text-slate-900 leading-relaxed whitespace-pre-line">
                   <p className="mb-2">From Salzburg to the World. 🌍🚀</p>
                   <p className="mb-2">
                     Salzburg ist mehr als Tradition und Festspiele. Es ist der Boden, auf dem <strong>DecisionDriver Consulting</strong> in den letzten 4 Jahren zu einem führenden Partner für datenbasierte C-Level-Entscheidungen gewachsen ist.
                   </p>
                   <p className="mb-2">
                     Wir sind stolz darauf, von unserem Headquarter am Mirabellplatz aus internationale Konzerne durch unsichere Zeiten zu navigieren. Unsere Formel? Weniger Bauchgefühl, mehr Algorithmen.
                   </p>
                   <p className="mb-3">
                     Ein Blick auf unser Zuhause – wo Strategie auf Weitblick trifft. 👇
                   </p>
                   <p className="text-blue-600 font-medium cursor-pointer hover:underline">
                     #DecisionDriver #Salzburg #StrategicIntelligence #Growth #Innovation #DataScience
                   </p>
                </div>

                {/* Video Content */}
                <div className="w-full bg-black relative aspect-video group">
                   <video 
                      className="w-full h-full object-cover" 
                      controls
                      autoPlay
                      muted // Muted needed for autoplay policy
                   >
                      <source src={linkedInVideoUrl} type="video/mp4" />
                      Ihr Browser unterstützt dieses Video nicht.
                   </video>
                </div>

                {/* Social Proof Stats */}
                <div className="px-4 py-2 border-b border-gray-100 flex justify-between items-center text-xs text-gray-500">
                   <div className="flex items-center gap-1">
                      <div className="flex -space-x-1">
                         <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center border border-white z-20"><ThumbsUp size={8} className="text-white fill-white"/></div>
                         <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center border border-white z-10"><span className="text-[6px] text-white">❤️</span></div>
                         <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center border border-white z-0"><span className="text-[6px] text-white">👏</span></div>
                      </div>
                      <span className="hover:text-blue-600 hover:underline cursor-pointer">1,248</span>
                   </div>
                   <div className="hover:text-blue-600 hover:underline cursor-pointer">
                      42 comments • 12 reposts
                   </div>
                </div>

                {/* Action Buttons */}
                <div className="px-2 py-1 flex justify-between items-center">
                   <button className="flex items-center justify-center gap-2 flex-1 py-3 hover:bg-gray-100 rounded-lg text-gray-500 font-bold text-sm transition-colors group">
                      <ThumbsUp size={18} className="group-hover:scale-110 transition-transform" />
                      <span>Like</span>
                   </button>
                   <button className="flex items-center justify-center gap-2 flex-1 py-3 hover:bg-gray-100 rounded-lg text-gray-500 font-bold text-sm transition-colors group">
                      <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
                      <span>Comment</span>
                   </button>
                   <button className="flex items-center justify-center gap-2 flex-1 py-3 hover:bg-gray-100 rounded-lg text-gray-500 font-bold text-sm transition-colors group">
                      <Share2 size={18} className="group-hover:scale-110 transition-transform" />
                      <span>Share</span>
                   </button>
                   <button className="flex items-center justify-center gap-2 flex-1 py-3 hover:bg-gray-100 rounded-lg text-gray-500 font-bold text-sm transition-colors group">
                      <Send size={18} className="group-hover:scale-110 transition-transform -rotate-45 mt-[-2px] ml-[-2px]" />
                      <span>Send</span>
                   </button>
                </div>
             </div>
          </div>
        </div>
      )}

      {/* Floating Island Navigation */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${scrolled ? 'pt-4' : 'pt-6'}`}>
        <nav 
          className={`
            flex items-center justify-between px-2 pl-4 pr-2 transition-all duration-500
            ${scrolled 
              ? 'w-[95%] md:w-[80%] lg:w-[70%] bg-white/90 backdrop-blur-xl border border-slate-200 shadow-xl shadow-blue-900/5 rounded-full py-2' 
              : 'w-full max-w-7xl bg-transparent border-transparent py-4'
            }
          `}
        >
          {/* Logo */}
          <div 
            onClick={handleLogoClick}
            className="cursor-pointer flex-shrink-0"
            title="Zurück zu Home"
          >
            <Logo compact={scrolled} badge={true} />
          </div>

          {/* Desktop Nav */}
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
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => setShowChristmasPopup(true)}
              className="p-3 md:p-5 rounded-full bg-gradient-to-b from-red-500 to-red-700 text-white hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-[0_10px_30px_rgba(220,38,38,0.5)] flex items-center justify-center relative group border-2 md:border-4 border-red-400/30 ring-2 md:ring-4 ring-red-500/10"
              title="Weihnachtsgrüße"
            >
              <Gift className="w-6 h-6 md:w-11 md:h-11 drop-shadow-md" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 md:h-6 md:w-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-full w-full bg-yellow-400 border-2 border-white shadow-sm"></span>
              </span>
            </button>

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
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-32 px-6 animate-fade-in lg:hidden overflow-y-auto">
           <div className="flex flex-col gap-6 items-center text-center pb-12">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page)}
                className="text-3xl font-bold text-slate-900 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="mt-8 w-full max-w-xs">
              <Button 
                className="w-full"
                onClick={() => handleNavClick(Page.Contact)}
              >
                Strategiegespräch
              </Button>
            </div>
            
            <div className="mt-8 border-t border-slate-100 pt-8 w-full max-w-xs text-sm text-slate-500">
                <a href="mailto:info@decisiondriver.at" className="hover:text-primary transition-colors">info@decisiondriver.at</a>
            </div>
           </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer - Dark Blue for Stability */}
      <footer className="bg-[rgb(15,23,42)] text-white relative overflow-hidden pt-16 md:pt-24 pb-12 rounded-t-[3rem] mt-12 mx-2">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-20">
             <div className="max-w-md">
                <Logo theme="dark" />
                <h3 className="text-2xl md:text-3xl font-bold mt-6 mb-4 text-white">Präzision in jeder Entscheidung.</h3>
                <p className="text-slate-400">
                  Wir transformieren komplexe Daten in klare Handlungsstrategien für die Führungsebene von morgen.
                </p>
             </div>
             <div className="flex gap-4">
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10" onClick={() => handleNavClick(Page.Contact)}>Kontakt aufnehmen</Button>
             </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
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
                  <li className="flex flex-col items-start gap-2">
                     <a href="https://www.linkedin.com/in/maxmustermann" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                     <button
                        onClick={() => setShowLinkedInPopup(true)}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0a66c2] hover:bg-[#004182] text-white text-xs font-bold rounded-lg transition-all hover:scale-105 shadow-lg shadow-blue-900/20 group cursor-pointer"
                     >
                        <Linkedin size={14} className="fill-current stroke-none" />
                        <span>Latest Posts</span>
                     </button>
                  </li>
                  <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Twitter / X</a></li>
                  <li><button onClick={handleBlogClick} className="hover:text-primary transition-colors text-left">Insights Blog</button></li>
               </ul>
            </div>
            <div>
               <h4 className="text-white font-medium mb-6">Legal</h4>
               <ul className="space-y-4 text-slate-400 text-sm">
                  <li><button onClick={() => handleNavClick(Page.Impressum)} className="hover:text-primary transition-colors">Impressum</button></li>
                  <li><button onClick={() => setShowPrivacyPopup(true)} className="hover:text-primary transition-colors">Datenschutz</button></li>
                  <li><button onClick={() => setShowTermsPopup(true)} className="hover:text-primary transition-colors">AGB</button></li>
               </ul>
            </div>
            <div>
               <h4 className="text-white font-medium mb-6">Office</h4>
               <address className="not-italic text-slate-400 text-sm space-y-2">
                 <p>Mirabellplatz 1</p>
                 <p>5020 Salzburg</p>
                 <p>Österreich</p>
                 <a href="mailto:info@decisiondriver.at" className="block pt-2 text-white hover:text-primary transition-colors">info@decisiondriver.at</a>
               </address>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <p>&copy; {new Date().getFullYear()} DecisionDriver Consulting.</p>
            <p>Designed for Excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
