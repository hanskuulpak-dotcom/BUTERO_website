import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.upload.ee/image/19023137/Gemini_Generated_butero.png" 
          alt="Värske sai ja või taustal" 
          className="w-full h-full object-cover"
        />
        {/* Overlay to ensure text readability while keeping the warm brand feel */}
        <div className="absolute inset-0 bg-brand-cream/75 backdrop-blur-[1px]"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <span className="block text-brand-gold uppercase tracking-[0.2em] mb-4 text-sm md:text-base animate-[fadeInUp_0.6s_ease-out]">
          {t('hero.badge')}
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-brand-dark leading-tight mb-6 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
          {t('hero.title')}<br />
          <span className="italic text-brand-brown">{t('hero.subtitle')}</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-[fadeInUp_1s_ease-out_0.4s_both]">
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