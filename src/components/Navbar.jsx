import { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ currentPage, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (id) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">M</div>
            <button
              className="text-lg sm:text-xl font-semibold text-gray-900"
              onClick={() => handleNav('home')}
              aria-label="Go to Home"
            >
              MACSI INFORMATIONS
            </button>
          </div>
          <div className="hidden md:flex items-center gap-2">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => handleNav(l.id)}
                className={classNames(
                  'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                  currentPage === l.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="space-y-2">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => handleNav(l.id)}
                  className={classNames(
                    'block w-full text-left px-4 py-2 rounded-md text-base font-medium',
                    currentPage === l.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
