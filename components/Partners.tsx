import React from 'react';
import { PARTNER_LOGOS } from '../constants';
import { PartnerLogo } from '../types';
import { useLanguage } from '../LanguageContext';

interface HexagonTileProps {
  partner: PartnerLogo;
  className?: string;
}

// Hexagon Tile Component
const HexagonTile: React.FC<HexagonTileProps> = ({ partner, className = "" }) => {
  if (!partner) return null;
  const { link, image, name, placeholder } = partner;

  return (
    <div className={`relative group w-28 h-28 md:w-32 md:h-32 flex-shrink-0 transition-all duration-300 hover:-translate-y-1 hover:z-20 ${className}`}>
      {/* Drop Shadow Wrapper */}
      <div className="w-full h-full filter drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300">
        <a 
          href={String(link)} 
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full bg-white transition-colors duration-300 group-hover:bg-brand-cream flex flex-col items-center justify-center text-center p-2"
          style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
        >
          {image ? (
            <img src={String(image)} alt={String(name)} className="w-20 h-20 object-contain mb-0" />
          ) : (
            <span className="font-serif font-bold text-2xl text-brand-gold/80 group-hover:text-brand-dark transition-colors">
              {String(placeholder)}
            </span>
          )}
          
          {!image && (
            <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-brand-brown transition-colors">
              {String(name)}
            </span>
          )}
        </a>
      </div>
      
      {/* Decorative Border Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none bg-brand-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
        style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        }}
      />
    </div>
  );
};

interface HoneycombClusterProps {
  partners: PartnerLogo[];
}

// Helper to render a 2-3-2 cluster (7 items)
const HoneycombCluster: React.FC<HoneycombClusterProps> = ({ partners }) => {
  if (!partners || partners.length === 0) return null;
  // Structure: 2 on top, 3 in middle, 2 on bottom
  const row1 = partners.slice(0, 2);
  const row2 = partners.slice(2, 5);
  const row3 = partners.slice(5, 7);

  return (
    <div className="flex flex-col items-center">
      {/* Row 1 */}
      <div className="flex gap-3 mb-[-2rem] z-10">
        {row1.map(p => <HexagonTile key={p.id} partner={p} />)}
      </div>
      {/* Row 2 */}
      <div className="flex gap-3 z-20">
        {row2.map(p => <HexagonTile key={p.id} partner={p} />)}
      </div>
      {/* Row 3 */}
      <div className="flex gap-3 mt-[-2rem] z-10">
        {row3.map(p => <HexagonTile key={p.id} partner={p} />)}
      </div>
    </div>
  );
};

export default function Partners() {
  const { t } = useLanguage();
  const partners = PARTNER_LOGOS;
  
  // Split logos into two groups of 7 for the left and right clusters
  const leftCluster = partners.slice(0, 7);
  const rightCluster = partners.slice(7, 14);

  return (
    <section className="py-24 bg-brand-light relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235D4037' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }}></div>

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
            
            {/* Header */}
            <div className="text-center mb-20">
                <h2 className="text-sm font-bold text-brand-gold tracking-widest uppercase mb-3">
                    {t('partners.badge')}
                </h2>
                <h3 className="font-serif text-3xl md:text-4xl text-brand-dark mb-4">
                    {t('partners.title')}
                </h3>
                <p className="text-gray-600 max-w-xl mx-auto font-light text-sm md:text-base">
                    {t('partners.description')}
                </p>
            </div>

            {/* DESKTOP LAYOUT */}
            <div className="hidden xl:flex items-center justify-center gap-12">
                <HoneycombCluster partners={leftCluster} />
                <div className="relative w-64 h-64 flex-shrink-0 flex items-center justify-center z-30">
                    <div className="absolute inset-0 bg-white rounded-full shadow-2xl shadow-brand-gold/20"></div>
                    <div className="absolute inset-4 border border-brand-gold/20 rounded-full animate-pulse-slow"></div>
                    <img 
                        src="https://www.upload.ee/image/19026566/butero_logo_canvas.png" 
                        alt="Butero" 
                        className="relative w-48 h-auto z-10"
                    />
                </div>
                <HoneycombCluster partners={rightCluster} />
            </div>

            {/* TABLET LAYOUT */}
            <div className="hidden md:flex xl:hidden flex-col items-center gap-12">
                 <div className="relative w-48 h-48 flex items-center justify-center bg-white rounded-full shadow-xl">
                    <img 
                        src="https://www.upload.ee/image/19026566/butero_logo_canvas.png" 
                        alt="Butero" 
                        className="w-32 h-auto"
                    />
                 </div>
                 <div className="flex gap-8 scale-90">
                    <HoneycombCluster partners={leftCluster} />
                    <HoneycombCluster partners={rightCluster} />
                 </div>
            </div>

            {/* MOBILE LAYOUT */}
            <div className="md:hidden flex flex-col items-center">
                <div className="mb-12 relative">
                     <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center border border-brand-cream relative z-10">
                        <img 
                            src="https://www.upload.ee/image/19026566/butero_logo_canvas.png" 
                            alt="Butero" 
                            className="w-24 h-auto"
                        />
                     </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {partners.map(partner => (
                        <div key={partner.id} className="filter drop-shadow-sm">
                             <a 
                                href={String(partner.link)}
                                className="block w-28 h-28 bg-white hover:bg-brand-cream transition-colors flex flex-col items-center justify-center text-center p-2"
                                style={{
                                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                                }}
                             >
                                {partner.image ? (
                                    <img src={String(partner.image)} alt={String(partner.name)} className="w-20 h-20 object-contain" />
                                ) : (
                                    <>
                                        <span className="font-serif font-bold text-xl text-brand-dark/80">{String(partner.placeholder)}</span>
                                        <span className="text-[9px] uppercase tracking-wide mt-1 text-gray-500">{String(partner.name)}</span>
                                    </>
                                )}
                             </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}