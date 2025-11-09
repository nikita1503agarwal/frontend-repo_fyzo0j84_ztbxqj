export default function Home({ onViewServices }) {
  return (
    <section id="home-page" className="block">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gray-900 text-white">
        <img
          src="https://placehold.co/1200x600/1e3a8a/e0f2fe?text=MACSI+Computers+%26+CCTV"
          alt="MACSI Computers & CCTV"
          className="w-full h-[50vh] sm:h-[60vh] object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight">Your Complete Tech Solution in Mayiladuthurai.</h1>
            <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl">
              Sales, service, installation, and support for computers, laptops, and advanced CCTV systems.
            </p>
            <div className="mt-6">
              <button onClick={onViewServices} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg shadow">
                View Our Services
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M13.5 4.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V6.31l-6.22 6.22a.75.75 0 1 1-1.06-1.06l6.22-6.22h-3.44a.75.75 0 0 1-.75-.75Z" /><path d="M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h5.5a.75.75 0 0 1 0 1.5h-5.5c-.414 0-.75.336-.75.75v10.5c0 .414.336.75.75.75h10.5c.414 0 .75-.336.75-.75v-5.5a.75.75 0 0 1 1.5 0v5.5A2.25 2.25 0 0 1 17.25 19.5H6.75A2.25 2.25 0 0 1 4.5 17.25V6.75Z" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="max-w-7xl mx-auto px-6 mt-12 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Welcome to MACSI INFORMATIONS</h2>
          <div className="mt-4 space-y-3 text-gray-700 leading-relaxed">
            <p>With over 24 years of experience, we are Mayiladuthurai's most trusted name in computers and security.</p>
            <p>We are your one-stop-shop for all IT and CCTV needs, from sales and installation to expert service and repair.</p>
            <p>Our mission is to provide reliable, high-quality technology solutions to both homes and businesses.</p>
          </div>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 className="text-xl font-semibold text-blue-900">Why Choose Us?</h3>
          <ul className="mt-4 space-y-3 text-blue-900/90">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
              Expert technicians for sales, service, and repairs.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
              Authorized dealers for top brands like Dell, HP, and more.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
              Comprehensive CCTV and security solutions for your peace of mind.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
              Conveniently located opposite the SBI in Dubash Agraharam.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
