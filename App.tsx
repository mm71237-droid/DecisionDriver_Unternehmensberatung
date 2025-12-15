
import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { BestPractices } from './pages/BestPractices';
import { KeyNoteSpeaker } from './pages/KeyNoteSpeaker';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Impressum } from './pages/Impressum';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  // Simple animation or reset when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home onNavigate={handleNavigate} />;
      case Page.Services:
        return <Services onNavigate={handleNavigate} />;
      case Page.BestPractices:
        return <BestPractices onNavigate={handleNavigate} />;
      case Page.KeyNoteSpeaker:
        return <KeyNoteSpeaker onNavigate={handleNavigate} />;
      case Page.About:
        return <About onNavigate={handleNavigate} />;
      case Page.Contact:
        return <Contact />;
      case Page.Impressum:
        return <Impressum />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      {renderPage()}
    </Layout>
  );
};

export default App;
