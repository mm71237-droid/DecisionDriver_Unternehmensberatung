
import React from 'react';

export const Impressum: React.FC = () => {
  return (
    <div className="animate-fade-in pb-24 bg-main relative">
      <div className="pt-40 pb-20 px-6 text-center border-b border-slate-200">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Impressum</h1>
          <p className="text-xl text-slate-900 font-light">
            Rechtliche Informationen & Offenlegung
          </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 text-slate-700 leading-relaxed space-y-12">
        
        {/* Company Info */}
        <section className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Angaben gemäß § 5 ECG</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Unternehmensdaten</h3>
              <p>
                <strong>DecisionDriver Consulting GmbH</strong><br />
                Mirabellplatz 1<br />
                5020 Salzburg<br />
                Österreich
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Kontakt</h3>
              <p>
                Tel: +43 662 123456<br />
                E-Mail: <a href="mailto:info@decisiondriver.at" className="text-primary hover:underline">info@decisiondriver.at</a><br />
                Web: www.decisiondriver.at
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Geschäftsführung</h3>
              <p>Max Mustermann</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Registereintrag</h3>
              <p>
                Firmenbuchnummer: FN 123456 x<br />
                Firmenbuchgericht: Landesgericht Salzburg<br />
                UID-Nummer: ATU12345678
              </p>
            </div>
          </div>
          
          <div className="mt-8">
             <h3 className="font-bold text-slate-900 mb-2">Unternehmensgegenstand</h3>
             <p>Unternehmensberatung, Informationstechnologie</p>
             <p className="mt-2 text-sm text-slate-500">Mitglied der WKÖ, WKS, Fachgruppe Unternehmensberatung, Buchhaltung und Informationstechnologie.</p>
          </div>
        </section>

        {/* Legal Disclaimers */}
        <section className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Haftung für Inhalte</h3>
            <p className="text-sm">
              Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Haftung für Links</h3>
            <p className="text-sm">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Urheberrecht</h3>
            <p className="text-sm">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};
