export default function Contact() {
  return (
    <section id="contact-page" className="block">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mt-4 sm:mt-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-2 text-gray-600">We’re here to help with all your IT and security needs.</p>
        </header>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <form className="bg-white p-6 rounded-xl border shadow-sm space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" placeholder="John Doe" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" placeholder="+91-98765-43210" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600 min-h-[120px]" placeholder="How can we help you?" />
            </div>
            <button type="button" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow">
              Send Message
            </button>
          </form>

          {/* Details */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-900">Contact Details</h3>
              <ul className="mt-4 space-y-2 text-blue-900/90">
                <li><span className="font-medium">Address:</span> MACSI INFORMATIONS, Gt Complex, 193/1, Dubash Agraharam, Mayiladuthurai - 609001</li>
                <li><span className="font-medium">Landmark:</span> Opposite State Bank of India (SBI)</li>
                <li><span className="font-medium">Phone:</span> +91-XXX-XXXX-XXXX</li>
                <li><span className="font-medium">Email:</span> info@macsi.com</li>
                <li><span className="font-medium">Hours:</span> Mon - Sun: 9:00 AM - 10:00 PM</li>
              </ul>
            </div>

            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600">
              Map Placeholder: Dubash Agraharam
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
