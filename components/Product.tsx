import React from 'react';
import { FEATURES, PRODUCT_VARIANTS } from '../constants';
import { Droplet, Hand, Leaf } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Product: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'droplet': return <Droplet className="w-8 h-8 text-brand-gold" />;
      case 'hand': return <Hand className="w-8 h-8 text-brand-gold" />;
      case 'leaf': return <Leaf className="w-8 h-8 text-brand-gold" />;
      default: return null;
    }
  };

  // Helper to map index to translation key
  const getFeatureTranslation = (index: number) => {
    const keys = [
      { title: 'product.features.f1_title', desc: 'product.features.f1_desc' },
      { title: 'product.features.f2_title', desc: 'product.features.f2_desc' },
      { title: 'product.features.f3_title', desc: 'product.features.f3_desc' },
    ];
    return keys[index];
  };

  return (
    <section id="product" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section - Centered Layout */}
        <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-sm font-bold text-brand-gold tracking-widest uppercase mb-2">{t('product.badge')}</h2>
            <h3 className="font-serif text-4xl text-brand-dark mb-6">{t('product.title')}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              {t('product.desc1')}
            </p>
            <p className="text-gray-600 mb-16 leading-relaxed text-lg">
              {t('product.desc2')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {FEATURES.map((feature, index) => {
                 const trans = getFeatureTranslation(index);
                 return (
                    <div key={index} className="flex flex-col items-center text-center group">
                      <div className="flex-shrink-0 p-4 bg-brand-light rounded-full shadow-sm mb-4 group-hover:bg-brand-butter transition-colors duration-300">
                        {getIcon(feature.icon)}
                      </div>
                      <div>
                        <h4 className="font-serif text-xl text-brand-dark mb-2">{t(trans.title)}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{t(trans.desc)}</p>
                      </div>
                    </div>
                 );
              })}
            </div>
        </div>

        {/* Product Variants (Our Flavors) */}
        <div id="product-selection" className="mt-20 scroll-mt-24">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold text-brand-gold tracking-widest uppercase mb-4">{t('product.selection_badge')}</h3>
            <h2 className="font-serif text-4xl text-brand-dark">{t('product.selection_title')}</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
            {PRODUCT_VARIANTS.map((variant) => (
              <div key={variant.id} className="flex flex-col items-center group">
                
                {/* Image Container */}
                <div className="relative w-64 h-64 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src={String(variant.image)} 
                    alt={t(`product.variants.${variant.id}_name`)}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Description below label */}
                <div className="mt-6 text-center max-w-[200px]">
                  <h4 className="font-serif text-xl font-bold text-brand-dark">{t(`product.variants.${variant.id}_name`)}</h4>
                  <p className="text-sm text-gray-500 mt-1">{t(`product.variants.${variant.id}_desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Product;