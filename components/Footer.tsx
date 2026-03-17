import React from 'react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-dark text-white/60 py-12 text-center text-sm">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif text-2xl text-white mb-6">BUTERO</h2>
            <div className="flex justify-center space-x-6 mb-8">
                <a href="#hero" className="hover:text-white transition-colors">{t('nav.home')}</a>
                <a href="#product" className="hover:text-white transition-colors">{t('nav.product')}</a>
                <a href="#story" className="hover:text-white transition-colors">{t('nav.story')}</a>
            </div>
            <div className="flex justify-center space-x-4 mb-8">
                <a href="https://www.facebook.com/butero/?locale=et_EE" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Facebook</a>
            </div>
            <p>&copy; {new Date().getFullYear()} Butero OÜ. {t('footer.rights')}</p>
            <p className="mt-2 text-xs">{t('footer.made_in')}</p>
        </div>
    </footer>
  );
};

export default Footer;