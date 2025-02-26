import { useState, useEffect } from 'react';
import NavItems from './components/NavItems';
import Logo from './components/Logo';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ContactForm from './components/ContactForm';
import GetInTouch from './components/GetInTouch';
import Disclaimer from './components/Disclaimer';
import SEO from '../../components/SEO';

const LawFirmLanding = () => {

  const [navigationState, setNavigationState] = useState<"home" | "about" | "career" | "contact" | "get-in-touch">("home");
  const [animatingIcon, setAnimatingIcon] = useState<string | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const seoKeywords = "Abhishek Sandilya, Abhishek Sandilya & Associates, Abhishek Sandilya and Associates, Abhishek Sandilya Lawyer, Abhishek Sandilya Lawyer Delhi High Court, Delhi High Court Lawyer, Legal Services Delhi, Lawyer in Delhi, Criminal Lawyer in Delhi, Civil Lawyer in Delhi, Corporate Lawyer in Delhi, Family Lawyer in Delhi, Property Lawyer in Delhi, Tax Lawyer in Delhi, Divorce Lawyer in Delhi, Criminal Lawyer in Delhi, Civil Lawyer in Delhi, Corporate Lawyer in Delhi, Family Lawyer in Delhi, Property Lawyer in Delhi, Tax Lawyer in Delhi, Divorce Lawyer in Delhi";
  const seoDescription = "Abhishek Sandilya & Associates is a leading law firm in Delhi, headed by Advocate Abhishek Sandilya. Specializing in civil, criminal, and corporate law matters at the Delhi High Court. Expert legal services with a proven track record of success.";

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

  useEffect(() => {
    // Check if user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem('disclaimerAccepted');
    if (!hasAccepted) {
      setShowDisclaimer(true);
    }
  }, []);

  const smoothScrollFunc = (e: React.MouseEvent<HTMLAnchorElement> | null, id: string) => {
    e?.preventDefault();

    if (id === navigationState || !document.getElementById(id)) {
      return;
    }

    setNavigationState(id as "home" | "about" | "career" | "contact" | "get-in-touch");

    if (id !== navigationState) {
      const startElement = document.documentElement.scrollTop;
      const targetElement = document.getElementById(id);
      const addExtra = -80;
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

  const handleAcceptDisclaimer = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    setShowDisclaimer(false);
  };

  const handleDisagreeDisclaimer = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <>
      <SEO
        title="Abhishek Sandilya & Associates | Leading Law Firm in Delhi"
        description={seoDescription}
        keywords={seoKeywords}
      />
      {showDisclaimer && (
        <Disclaimer
          onAccept={handleAcceptDisclaimer}
          onDisagree={handleDisagreeDisclaimer}
        />
      )}
      <div className={`min-h-screen bg-white scroll-pt-[80px] scroll-smooth ${showDisclaimer ? 'blur-xl' : ''}`}>
        <header className="bg-white flex sticky top-0 z-50 border-b border-[#BF9874]">
          <Logo />

          {/* Right Content Section */}
          <div className="w-full">
            {/* <TopHourLinksBar /> */}
            <NavItems
              navigationState={navigationState}
              smoothScrollFunc={smoothScrollFunc}
              animatingIcon={animatingIcon}
            />

          </div>
        </header>

        <HomeSection
          smoothScrollFunc={smoothScrollFunc}
        />

        <AboutSection />

        {/* <WhyMeSection /> */}

        <ContactForm />

        <GetInTouch />
      </div >
    </>
  );
};

export default LawFirmLanding;