import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const NAV_LINKS = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.product'), href: '#product' },
    { name: t('nav.selection'), href: '#product-selection' },
    { name: t('nav.story'), href: '#story' },
    { name: t('nav.locations'), href: '#locations' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fix: Close mobile menu automatically if screen is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      setIsOpen(false);
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
        setIsOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'et' ? 'en' : 'et');
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Navbar visual state
  const navClasses = isOpen 
    ? 'bg-transparent py-4 border-transparent' 
    : scrolled 
      ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-gray-100' 
      : 'bg-transparent py-4 border-transparent';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${navClasses}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - Left */}
          <div className="flex-shrink-0 flex items-center z-50 relative">
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
              className={`transition-opacity duration-300 ${isOpen ? 'opacity-0 lg:opacity-100' : 'hover:opacity-80'}`}
            >
              <img 
                src="https://www.upload.ee/image/19026566/butero_logo_canvas.png" 
                alt="Butero" 
                className="h-[36px] md:h-[44px] lg:h-[52px] w-auto object-contain max-w-full" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-end items-center px-8">
            <div className="flex space-x-8 xl:space-x-10 items-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-[11px] xl:text-xs font-bold uppercase tracking-[0.15em] hover:text-brand-gold transition-colors duration-300 relative group py-2 whitespace-nowrap ${
                    scrolled && !isOpen ? 'text-gray-800' : 'text-brand-dark'
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </a>
              ))}
              
              {/* Language Switcher Desktop */}
              <button 
                onClick={toggleLanguage}
                className={`ml-4 text-xs font-bold tracking-widest border border-brand-gold/50 rounded-full px-3 py-1 transition-all hover:bg-brand-gold hover:text-white ${
                    scrolled ? 'text-brand-dark' : 'text-brand-dark'
                }`}
              >
                <span className={language === 'et' ? 'underline decoration-2 underline-offset-2' : 'opacity-50'}>ET</span>
                <span className="mx-1 opacity-50">/</span>
                <span className={language === 'en' ? 'underline decoration-2 underline-offset-2' : 'opacity-50'}>EN</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button & Language */}
          <div className="lg:hidden flex items-center gap-4 z-50 relative">
            {/* Language Switcher Mobile */}
             <button 
                onClick={toggleLanguage}
                className="text-xs font-bold tracking-widest border border-brand-gold/50 rounded-full px-2 py-1 text-brand-dark"
              >
                <span className={language === 'et' ? 'underline decoration-2 underline-offset-2' : 'opacity-50'}>ET</span>
                <span className="mx-1 opacity-50">/</span>
                <span className={language === 'en' ? 'underline decoration-2 underline-offset-2' : 'opacity-50'}>EN</span>
              </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors p-2 text-brand-dark hover:text-brand-gold`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Scrollable Container */}
        <div className="flex flex-col w-full h-full overflow-y-auto bg-white">
            
            {/* Header Spacer in Overlay */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 flex-shrink-0"> 
               <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>
                 <img 
                   src="https://www.upload.ee/image/19026566/butero_logo_canvas.png" 
                   alt="Butero" 
                   className="h-[36px] md:h-[44px] lg:h-[52px] w-auto object-contain max-w-full" 
                 />
               </a>
               {/* Spacer for the X button (which is in the fixed nav) */}
               <div className="w-10"></div>
            </div>

            {/* Links Container */}
            <div className="flex flex-col items-center justify-start space-y-8 px-8 pb-12 w-full">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-2xl font-serif text-brand-dark hover:text-brand-gold transition-colors relative group text-center shrink-0"
                  >
                    {link.name}
                    <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </a>
                ))}
            </div>
            
            {/* Footer */}
            <div className="mt-auto p-6 text-center text-gray-400 text-xs flex-shrink-0">
               <p>&copy; {new Date().getFullYear()} Butero</p>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;