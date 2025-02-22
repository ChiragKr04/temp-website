// App.jsx

function App() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}



const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-navy-900 z-50 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Logo</div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-gold-500">Features</a>
          <a href="#" className="text-white hover:text-gold-500">Range of Services</a>
          <a href="#" className="text-white hover:text-gold-500">About & Events</a>
          <a href="#" className="text-white hover:text-gold-500">Support</a>
          <a href="#" className="text-white hover:text-gold-500">Contact</a>
        </div>
        <button className="bg-gold-500 text-white px-6 py-2 rounded-full hover:bg-gold-600">
          Book an appointment
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-navy-900">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-white mb-6">
            The Law is The Public Conscience
          </h1>
          <p className="text-gray-300 mb-8">
            Experience true legal care - all cases by your side. Get better advocacy and let your case shine brighter right here.
          </p>
          <div className="flex space-x-4">
            <button className="#D6AD60 text-white px-8 py-3 rounded-full hover:#D6AD60">
              Practicing Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-navy-900">
              Book an appointment
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <img src="/images/lawyer.png" alt="Lawyer" className="w-full h-2/3 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: "🏛️",
      title: "Business Law and Advice",
      description: "Get expert legal guidance for your business operations and growth strategies."
    },
    {
      icon: "⚖️",
      title: "Civil Law",
      description: "Professional representation in civil matters and dispute resolution."
    },
    {
      icon: "📋",
      title: "International Law",
      description: "Navigate complex international legal frameworks with our expertise."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Range of Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="rounded-full overflow-hidden">
            <img src="images/lawyer2.png" alt="Lawyer working" className="w-full" />
          </div>
          <div className="absolute top-0 left-0 bg-white rounded-lg p-4 shadow-lg">
            <div className="text-3xl font-bold text-gold-500">99%</div>
            <div className="text-sm">Rate of success</div>
          </div>
          <div className="absolute bottom-0 right-0 bg-navy-900 text-white rounded-lg p-4">
            <div className="text-2xl font-bold">15</div>
            <div className="text-sm">Years of experience</div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Why Us</h2>
          <p className="text-gray-600 mb-8">
            We provide expert legal services with a focus on client success and satisfaction.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-gold-500">✓</span>
              <span>Results Driven</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gold-500">✓</span>
              <span>Professional Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-navy-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Clients Love Us</h2>
        <div className="relative">
          <div className="flex items-center justify-center">
            <div className="max-w-2xl text-center">
              <p className="text-lg mb-6">
                "I had the privilege of working with this law firm, and I can confidently say
                that they are the best in their business. From the initial consultation to the final
                resolution, they provided exceptional service."
              </p>
              <div className="flex items-center justify-center space-x-4">
                <img src="/images/lawyer3.png" alt="Client" className="w-12 h-12 rounded-full" />
                <div>
                  <div className="font-bold">John Smith</div>
                  <div className="text-sm text-gray-300">Business Owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What types of cases does your law firm handle?",
      answer: "Our law firm specializes in business law, civil litigation, and international law..."
    },
    {
      question: "How can I schedule a consultation with one of your attorneys?",
      answer: "You can schedule a consultation through our online booking system..."
    },
    // Add more FAQs as needed
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section className="py-16 bg-gold-500">
      <div className="container mx-auto px-6">
        <div className="bg-navy-900 rounded-lg p-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Speak with an Attorney Today</h2>
            <p className="text-gray-300">Get expert legal advice for your specific situation</p>
          </div>
          <button className="bg-gold-500 text-white px-8 py-3 rounded-full hover:bg-gold-600">
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Logo</h3>
            <p className="text-gray-300">
              Professional legal services for all your needs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Business Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Civil Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">International Law</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">contact@lawfirm.com</li>
              <li className="text-gray-300">+1 (555) 123-4567</li>
              <li className="text-gray-300">123 Legal Street, City, State</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>© 2024 Law Firm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};


export default App;