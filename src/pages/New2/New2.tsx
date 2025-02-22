import { Clock, Diamond, Phone, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const data = [
  {
    image: "/images/law-sector1.png",
    title: "Civil & Property Disputes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "/images/law-sector2.png",
    title: "Criminal & Financial Disputes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "/images/law-sector3.png",
    title: "Matrimonial & Family Law",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },

]

const timelineData = [
  {
    year: "2018",
    title: "Civil Litigation Success",
    description: "Successfully handled complex family property partition suits at Patiala House Court.",
    position: "top"
  },
  {
    year: "2019",
    title: "Municipal Law Victory",
    description: "Won landmark case against NDMC for de-sealing of premises, establishing precedent in municipal law disputes.",
    position: "bottom"
  },
  {
    year: "2020",
    title: "Criminal Law Excellence",
    description: "Specialized in Section 138 NI Act cases, achieving favorable outcomes in Tis Hazari and Rohini Courts.",
    position: "top"
  },
  {
    year: "2021",
    title: "Family Law Practice",
    description: "Expanded practice to include high-conflict divorce cases and domestic violence matters at Patiala House Court.",
    position: "bottom"
  },
  {
    year: "2022",
    title: "Service Law Expertise",
    description: "Successfully represented clients before Central Administrative Tribunal in service law matters.",
    position: "top"
  }
];

const AccordionSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const accordionData = [
    {
      title: "Why Choose Me?",
      content: "With extensive courtroom experience and a client-focused approach, I provide comprehensive legal solutions tailored to your specific needs. My commitment to professional integrity and proven track record in handling high-stakes cases makes me your trusted legal partner."
    },
    {
      title: "Courtroom Experience",
      content: "I have extensive experience practicing before district courts, tribunals, and High Courts, with a thorough understanding of litigation strategy. This deep courtroom experience allows me to navigate complex legal challenges effectively and represent your interests with confidence."
    },
    {
      title: "Client-Focused Approach",
      content: "I believe in providing personalized attention to every case and maintaining transparent communication throughout the legal process. My practice is built on understanding your unique situation and ensuring you're informed and comfortable with every step we take."
    },
    {
      title: "Comprehensive Legal Expertise",
      content: "My expertise spans across civil, criminal, financial, and family law matters. With a proven track record of successfully handling high-stakes cases, including disputes against government agencies and municipal bodies, I bring broad legal knowledge and practical experience to your case."
    }
  ];

  return (
    <div id="career" className="py-16 px-16 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-marcellus">IMPORTANT ANSWER</h2>
        <p className="text-[#BF9874] mt-4 font-archivo">EVERYTHING YOU NEED TO KNOW ABOUT ME</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openItem === index}
            onClick={() => setOpenItem(openItem === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick
}: {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-[#BF9874]/20">
      <button
        className="w-full py-6 flex justify-between items-center text-left transition-colors hover:text-[#BF9874]"
        onClick={onClick}
      >
        <h3 className="text-xl font-marcellus">{title}</h3>
        <span className={`text-[#BF9874] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={24} />
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          height: isOpen ? contentRef.current?.scrollHeight + 'px' : '0',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div ref={contentRef} className="pb-6 text-gray-600 font-archivo leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
};

const LawFirmLanding = () => {

  const [navigationState, setNavigationState] = useState<"home" | "about" | "career" | "contact" | "get-in-touch">("home");
  const [animatingIcon, setAnimatingIcon] = useState<string | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY + 230;
      const sections = ['home', 'about', 'career', 'contact', 'get-in-touch'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setNavigationState(section as "home" | "about" | "career" | "contact" | "get-in-touch");
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const smoothScrollFunc = (e: React.MouseEvent<HTMLAnchorElement> | null, id: string) => {
    e?.preventDefault();

    if (id === navigationState || !document.getElementById(id)) {
      return;
    }

    setNavigationState(id as "home" | "about" | "career" | "contact" | "get-in-touch");

    if (id !== navigationState) {
      const startElement = document.documentElement.scrollTop;
      const targetElement = document.getElementById(id);
      const addExtra = -130;
      const targetPosition = (targetElement?.offsetTop ?? 0) + addExtra || 0;
      const distance = Math.abs(targetPosition - startElement);
      const duration = Math.min(Math.max(distance / 2, 500), 800);

      setAnimatingIcon(id);
      setIsScrolling(true);

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });

      setTimeout(() => {
        setAnimatingIcon(null);
        setIsScrolling(false);
      }, duration);
    }
  }

  return (
    <div className="min-h-screen bg-white scroll-pt-[130px] scroll-smooth">
      <header className="bg-white flex sticky top-0 z-50 border-b border-[#BF9874]">
        {/* Logo Section */}
        <div className="p-8 border-r border-[#BF9874]">
          <img src="/images/logo.png" alt="Logo" />
        </div>

        {/* Right Content Section */}
        <div className="w-full">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-8 py-3 border-b border-[#BF9874] h-[50px]">
            {/* Contact and Hours */}
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-[#BF9874]" />
                <span>+(91) 9876543210</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-[#BF9874]" />
                <span>MONDAY - FRIDAY 7:30AM - 6:30PM</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 text-gray-400">
              <a href="#" className="text-[#BF9874] hover:text-gray-600">IN.</a>
              <a href="#" className="text-[#BF9874] hover:text-gray-600">IG.</a>
              <a href="#" className="text-[#BF9874] hover:text-gray-600">FB.</a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between px-8 py-4 h-[80px]">
            <nav className="flex items-center space-x-8">
              <a
                href="#home"
                className={`flex items-center transition-colors ${navigationState === 'home' ? 'text-[#BF9874]' : 'text-gray-800'
                  }`}
                onClick={(e) => smoothScrollFunc(e, 'home')}>
                <span className={`text-[#BF9874] mr-2 transition-transform ${animatingIcon === 'home' ? 'animate-spin-once' : ''
                  }`}>
                  <Diamond size={16} fill={`${navigationState === 'home' ? 'currentColor' : 'text-gray-800'}`} strokeWidth={0} />
                </span>
                HOME
              </a>
              <a
                href="#about"
                className={`flex items-center transition-colors ${navigationState === 'about' ? 'text-[#BF9874]' : 'text-gray-800'
                  }`}
                onClick={(e) => smoothScrollFunc(e, 'about')}>
                <span className={`text-[#BF9874] mr-2 transition-transform ${animatingIcon === 'about' ? 'animate-spin-once' : ''
                  }`}>
                  <Diamond size={16} fill={`${navigationState === 'about' ? 'currentColor' : 'text-gray-800'}`} strokeWidth={0} />
                </span>
                ABOUT
              </a>
              <a
                href="#career"
                className={`flex items-center transition-colors ${navigationState === 'career' ? 'text-[#BF9874]' : 'text-gray-800'
                  }`}
                onClick={(e) => smoothScrollFunc(e, 'career')}>
                <span className={`text-[#BF9874] mr-2 transition-transform ${animatingIcon === 'career' ? 'animate-spin-once' : ''
                  }`}>
                  <Diamond size={16} fill={`${navigationState === 'career' ? 'currentColor' : 'text-gray-800'}`} strokeWidth={0} />
                </span>
                WHY ME
              </a>
              <a
                href="#contact"
                className={`flex items-center transition-colors ${navigationState === 'contact' ? 'text-[#BF9874]' : 'text-gray-800'
                  }`}
                onClick={(e) => smoothScrollFunc(e, 'contact')}>
                <span className={`text-[#BF9874] mr-2 transition-transform ${animatingIcon === 'contact' ? 'animate-spin-once' : ''}`}>
                  <Diamond size={16} fill={`${navigationState === 'contact' ? 'currentColor' : 'text-gray-800'}`} strokeWidth={0} />
                </span>
                CONTACT
              </a>
              <a
                href="#contact"
                className={`flex items-center transition-colors ${navigationState === 'get-in-touch' ? 'text-[#BF9874]' : 'text-gray-800'
                  }`}
                onClick={(e) => smoothScrollFunc(e, 'get-in-touch')}>
                <span className={`text-[#BF9874] mr-2 transition-transform ${animatingIcon === 'get-in-touch' ? 'animate-spin-once' : ''}`}>
                  <Diamond size={16} fill={`${navigationState === 'get-in-touch' ? 'currentColor' : 'text-gray-800'}`} strokeWidth={0} />
                </span>
                GET IN TOUCH
              </a>
            </nav>

            <button className="px-6 py-2 border border-gray-800 text-gray-800 hover:bg-[#BF9874] hover:border-[#BF9874] hover:text-white transition-colors"
              onClick={() => {
                // go to contact page
                smoothScrollFunc(null, 'contact');
              }}
            >
              FREE CONSULTATION
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div id="home" className="relative h-[calc(100vh-130px)] scroll-mt-[130px] bg-[#0A1229]">
        {/* Full Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/court2.jpg"
            alt="Background"
            className="h-full w-full object-cover opacity-20"
          />
        </div>

        {/* Background Image Container */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[80%] mr-24 z-10">
          <img
            src="/images/lawyer4.png"
            alt="Legal Professional"
            className="h-full w-full object-contain object-right"
          />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center z-10">
          <div className="container mx-auto px-8">
            <div className="max-w-2xl">
              <h2 className="text-xl mb-4 text-white font-archivo">ADVOCATE AT DELHI HIGH COURT</h2>
              <h1 className="text-6xl font-light mb-6 text-white font-marcellus">ABHISHEK SANDILLYA</h1>
              <p className="mb-8 text-gray-200 max-w-xl font-archivo leading-relaxed">
                A distinguished litigation lawyer with expertise in civil and criminal laws, practicing across Delhi District Courts, Delhi High Court, and Punjab & Haryana High Court. Known for strategic legal solutions, meticulous case preparation, and powerful courtroom advocacy.
              </p>
              <button
                className="px-8 py-3 bg-[#BF9874] text-white w-fit hover:bg-[#725842] transition-colors font-archivo"
                onClick={() => {
                  // go to contact page
                  smoothScrollFunc(null, 'contact');
                }}
              >
                SCHEDULE CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div>
        <div id="about" className="grid grid-cols-3 gap-8 px-16 py-8 bg-[#EAF1FA]">
          {data.map((item) => (
            <div key={item.title} className="flex items-center gap-4">
              <div className="w-24 h-24 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain object-center"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1 text-center font-archivo">{item.title?.toUpperCase()}</h3>
                {/* <p className="text-gray-600">{item.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-12 px-16 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-marcellus">MY PRACTICE JOURNEY</h2>
          <p className="text-[#BF9874] mt-4 font-archivo">KEY CASES & ACHIEVEMENTS</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}

          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-screen -ml-16">
            {/* Thin brown line */}
            <div className="h-[1px] w-full bg-[#BF9874]"></div>

            {/* Diamond points container */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full">
              <div className="px-48 flex justify-between">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="text-[#BF9874]"
                  >
                    <Diamond size={16} fill="currentColor" strokeWidth={0} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Points */}
          <div className="relative grid grid-cols-5 gap-4">
            {timelineData.map((item, index) => (
              <div key={`${item.year}-${index}`} className="flex flex-col items-center">
                {item.position === "top" ? (
                  <>
                    <div className="mb-12 mt-6 text-center h-[120px] w-full">
                      <h3 className="font-marcellus text-lg mb-2 text-left">{item.title}</h3>
                      <p className="text-gray-500 text-sm line-clamp-3 text-left">{item.description}</p>
                    </div>
                    <span className="text-[#BF9874] text-4xl mt-12 font-marcellus">{item.year}</span>
                  </>
                ) : (
                  <>
                    <span className="text-[#BF9874] text-4xl mt-12 font-marcellus">{item.year}</span>
                    <div className="mt-32 text-center h-[120px] w-full">
                      <h3 className="font-marcellus text-lg mb-2 text-left">{item.title}</h3>
                      <p className="text-gray-500 text-sm line-clamp-3 text-left">{item.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <AccordionSection />

      {/* Contact Form Section */}
      <div id="contact" className="py-16 px-16 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-marcellus">MAKE AN INQUIRY</h2>
          <p className="text-[#BF9874] mt-4 font-archivo">WE WOULD LOVE TO WORK WITH YOU</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form className="">
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="mt-6 w-full border-b  py-2 px-4 focus:outline-none border-[#BF9874] transition-colors"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="mt-6 w-full border-b py-2 px-4 focus:outline-none border-[#BF9874] transition-colors"
              />
            </div>

            <div>
              <select
                className="mt-8 w-full border-b  py-2 px-4 focus:outline-none border-[#BF9874] transition-colors appearance-none bg-transparent"
              >
                {/* add empty option */}
                <option value="" disabled selected hidden>Select a category</option>
                <option value="civil">Civil Law</option>
                <option value="criminal">Criminal Law</option>
                <option value="family">Family Law</option>
                <option value="property">Property Law</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="mt-8 w-full border-b py-2 px-4 focus:outline-none border-[#BF9874] transition-colors resize-none"
              ></textarea>
            </div>

            <div className="mt-16 text-center">
              <button
                type="submit"
                className="px-8 py-3 border border-gray-800 text-gray-800 hover:bg-[#BF9874] hover:border-[#BF9874] hover:text-white transition-colors"
              >
                REQUEST AN APPOINTMENT
              </button>
            </div>
          </form>
        </div>
      </div >

      {/* Footer Section */}
      < footer id="get-in-touch" className="bg-[#0A1229] text-white relative mt-32" >
        {/* Logo Triangle */}
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2" >
          <div className="w-32 h-32 bg-white flex items-center justify-center transform rotate-[-45deg]">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-16 h-16 object-contain rotate-45 mt-8 mr-8"
            />
          </div>
        </div >

        {/* Footer Content */}
        <div className="container mx-auto px-16 py-16" >
          <div className="grid grid-cols-2 gap-8 mt-24">
            {/* Google Map */}
            <div className="h-[300px] w-full rounded-lg overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.639311704718!2d77.19903907580083!3d28.52049768915903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1003f9081ff%3A0x5e30cef23171ead7!2sSaket%20metro%20gate%20no%202!5e0!3m2!1sen!2sin!4v1740243543126!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Main Office */}
            <div className="flex items-center justify-end">
              {/* make this section to align in middle of map box */}
              <div className="font-archivo text-right">
                <h3 className="text-xl font-marcellus mb-6 text-right">Delhi Main Office</h3>
                <div className="space-y-2 text-gray-400">
                  <p>T: +91 987 654 3210</p>
                  <p>M: +91 987 654 3211</p>
                  <p>A: Chamber No. 123,</p>
                  <p>Delhi High Court, New Delhi</p>
                  <p>E: info@advocate.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex justify-between items-center">
              <div className="text-gray-400 font-archivo">
                <a href="#" className="hover:text-[#BF9874]">Privacy</a>
                <span className="mx-2">|</span>
                <span>Copyright Advocate Abhishek Sandillya, All Rights Reserved</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#BF9874]">FB.</a>
                <a href="#" className="text-gray-400 hover:text-[#BF9874]">TW.</a>
                <a href="#" className="text-gray-400 hover:text-[#BF9874]">IG.</a>
              </div>
            </div>
          </div>
        </div >
      </footer >
    </div >
  );
};

export default LawFirmLanding;