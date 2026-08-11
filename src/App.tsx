import './App.css';
import { useCallback, useEffect, useState } from 'react';
import Modal from './components/Modal';
import Navigation from './components/Navigation';
import { MODAL_TITLES, type ModalKey } from './lib/modals';
import CommissionBoard from './sections/CommissionBoard';
import CommunityExperience from './sections/CommunityExperience';
import EnvironmentSection from './sections/EnvironmentSection';
import Footer from './sections/Footer';
import GitHubWork from './sections/GitHubWork';
import Hero from './sections/Hero';
import MenuSection from './sections/MenuSection';
import SunnyDashboard from './sections/SunnyDashboard';
import TermsOfService from './sections/TermsOfService';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [activeModal, setActiveModal] = useState<ModalKey | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const openModal = useCallback((key: ModalKey) => setActiveModal(key), []);
  const closeModal = useCallback(() => setActiveModal(null), []);

  const modalKeys = Object.keys(MODAL_TITLES) as ModalKey[];

  const renderModalContent = (key: ModalKey) => {
    switch (key) {
      case 'dashboard':
        return <SunnyDashboard />;
      case 'github':
        return <GitHubWork />;
      case 'environment':
        return <EnvironmentSection />;
      case 'experience':
        return <CommunityExperience />;
      case 'commission':
        return <CommissionBoard onNavigate={openModal} />;
      case 'tos':
        return <TermsOfService onNavigate={openModal} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
      {/* Navigation */}
      <Navigation
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavigate={openModal}
        activeModal={activeModal}
      />

      {/* Main Content */}
      <main>
        <Hero onNavigate={openModal} />
        <MenuSection onOpen={openModal} />
      </main>

      <Footer onNavigate={openModal} />

      {/* Modals */}
      {modalKeys.map((key) => (
        <Modal key={key} isOpen={activeModal === key} onClose={closeModal} title={MODAL_TITLES[key]}>
          {renderModalContent(key)}
        </Modal>
      ))}
    </div>
  );
}

export default App;
