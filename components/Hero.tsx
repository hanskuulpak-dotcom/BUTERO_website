import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-[85svh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.upload.ee/image/19023137/Gemini_Generated_butero.png" 
          alt="Värske sai ja või taustal" 
          className="w-full h-full object-cover"
        />
        {/* Soft gradient overlay, lighter to show image details */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/10 via-brand-cream/20 to-brand-cream/90"></div>
      </div>
      
      {/* Subtle blur behind text only */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[140%] h-[75%] md:w-[900px] md:h-[550px] bg-brand-cream/50 blur-[60px] md:blur-[90px] rounded-[100%]"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-12 md:mt-0">
        <span className="block text-brand-gold font-semibold uppercase tracking-[0.2em] mb-3 md:mb-4 text-sm md:text-base animate-[fadeInUp_0.6s_ease-out]">
          {t('hero.badge')}
        </span>
        <h1 className="font-serif flex flex-col items-center justify-center text-brand-dark leading-[1.05] mb-5 md:mb-8 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
          <span className="text-5xl md:text-7xl font-bold tracking-tight">{t('hero.title')}</span>
          <span className="text-4xl md:text-6xl italic text-brand-brown font-medium mt-1 md:mt-2">{t('hero.subtitle')}</span>
        </h1>
        <p className="text-[1.15rem] md:text-xl text-gray-800 mb-8 md:mb-10 max-w-xl mx-auto font-light leading-relaxed md:leading-loose text-balance animate-[fadeInUp_1s_ease-out_0.4s_both]">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-[fadeInUp_1s_ease-out_0.6s_both]">
          <a 
            href="#product" 
            className="px-8 py-4 bg-brand-brown text-white rounded-full font-medium hover:bg-brand-dark transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            {t('hero.cta')}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-brand-brown/50 z-10">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;