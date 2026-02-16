import React from 'react';
import { useLanguage } from '../LanguageContext';

const Story: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="story" className="py-24 bg-brand-brown text-white relative overflow-hidden scroll-mt-24">
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")'}}></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs tracking-widest uppercase mb-6 text-brand-butter">
                {t('story.badge')}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
                {t('story.title')}<br/> 
                <span className="italic text-brand-butter">{t('story.subtitle')}</span>
            </h2>
            <div className="text-lg text-white/80 space-y-6 font-light leading-relaxed">
                <p>{t('story.p1')}</p>
                <p>{t('story.p2')}</p>
                <p>{t('story.p3')}</p>
            </div>
            
            <div className="mt-12">
                <img 
                    src="https://picsum.photos/id/656/100/100" 
                    alt="Allkiri" 
                    className="h-20 w-20 rounded-full border-2 border-brand-butter mx-auto object-cover grayscale opacity-80"
                />
                <p className="mt-4 font-serif italic text-brand-butter">{t('story.signature')}</p>
            </div>
        </div>
    </section>
  );
};

export default Story;