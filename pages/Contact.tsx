
import React from 'react';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in pb-24 relative overflow-hidden bg-main">
       {/* Background Ambience */}
       <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px]"></div>
       </div>

      <div className="py-20 relative z-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">Kontakt</h1>
          <p className="text-xl text-slate-900">
            Sprechen wir über Ihre nächste Großentscheidung.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Hier finden Sie uns</h2>
              <p className="text-slate-900 mb-8 text-lg leading-relaxed">
                Wir sind in Salzburg ansässig, aber global für unsere Klienten tätig. Vereinbaren Sie einen Termin vor Ort oder digital.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-xl shrink-0 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Adresse</h4>
                  <p className="text-slate-900 leading-relaxed">
                    DecisionDriver Consulting GmbH<br/>
                    Mirabellplatz 1<br/>
                    5020 Salzburg, Österreich
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-sky-50 flex items-center justify-center rounded-xl shrink-0 text-sky-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">E-Mail</h4>
                  <a href="mailto:info@decisiondriver.at" className="text-slate-900 hover:text-primary transition-colors">
                    info@decisiondriver.at
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-indigo-50 flex items-center justify-center rounded-xl shrink-0 text-indigo-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Telefon</h4>
                  <a href="tel:+43662123456" className="text-slate-900 hover:text-primary transition-colors">
                    +43 662 123456
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl shadow-blue-900/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 blur-[80px] pointer-events-none"></div>
             
            <h3 className="text-2xl font-bold text-slate-900 mb-8 relative z-10">Beratungsgespräch anfragen</h3>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-slate-400"
                  placeholder="Ihr vollständiger Name"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Unternehmen</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-slate-400"
                  placeholder="Ihr Unternehmen"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">E-Mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-slate-400"
                  placeholder="name@unternehmen.de"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Nachricht</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder-slate-400"
                  placeholder="Wie können wir Sie unterstützen?"
                ></textarea>
              </div>

              <Button type="submit" className="w-full justify-center" size="lg" variant="primary">
                <Send size={18} className="mr-2" />
                Anfrage absenden
              </Button>
              <p className="text-xs text-slate-500 text-center mt-4">
                Ihre Daten werden vertraulich behandelt.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};
