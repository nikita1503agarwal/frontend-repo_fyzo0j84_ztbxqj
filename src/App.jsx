import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState('home');

  const pages = useMemo(() => ({
    home: <Home onViewServices={() => setPage('services')} />,
    services: <Services />,
    contact: <Contact />,
  }), []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50 text-gray-900">
      <Navbar currentPage={page} onNavigate={setPage} />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Only render the active page while keeping structure simple */}
          {page === 'home' && pages.home}
          {page === 'services' && pages.services}
          {page === 'contact' && pages.contact}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
