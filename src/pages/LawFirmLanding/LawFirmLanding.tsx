import { useState, useEffect } from 'react';
import NavItems from './components/NavItems';
import Logo from './components/Logo';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ContactForm from './components/ContactForm';
import GetInTouch from './components/GetInTouch';
import Disclaimer from './components/Disclaimer';
import SEO from '../../components/SEO';

const styles = {
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 15px',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    '@media (max-width: 768px)': {
      padding: '40px 0',
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    width: '100%',
  },
  // Add any other responsive styles specific to your components
}

const LawFirmLanding = () => {

  const [navigationState, setNavigationState] = useState<"home" | "about" | "career" | "contact" | "get-in-touch">("home");
  const [animatingIcon, setAnimatingIcon] = useState<string | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const seoKeywords = "Abhishek Sandilya, Advocate Abhishek Sandilya, Abhishek Sandilya Delhi High Court, Abhishek Sandilya & Associates, Best Lawyer in Delhi, Delhi High Court Advocate, Civil Lawyer Delhi, Criminal Lawyer Delhi, Corporate Lawyer Delhi, Abhishek Sandilya Lawyer, Legal Services Delhi NCR";

  const seoDescription = "Advocate Abhishek Sandilya is a distinguished lawyer practicing at the Delhi High Court. As the founder of Abhishek Sandilya & Associates, he provides expert legal services in civil, criminal, and corporate law. Contact Delhi's trusted legal expert for professional legal consultation.";

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY + (window.innerWidth < 768 ? 330 : 230);
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
      const addExtra = window.innerWidth < 768 ? -300 : -80;
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
        title="Abhishek Sandilya Advocate | Delhi High Court Lawyer | Abhishek Sandilya & Associates"
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
        <header className="bg-white flex flex-col md:flex-row sticky top-0 z-50">
          <Logo />

          {/* Right Content Section */}
          <div className="w-full">
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