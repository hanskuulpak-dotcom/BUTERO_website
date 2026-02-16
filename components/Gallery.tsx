import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">
                <img src="https://picsum.photos/id/292/800/800" alt="Cooking" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
                <img src="https://picsum.photos/id/1080/400/400" alt="Strawberry" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
                <img src="https://picsum.photos/id/1060/400/400" alt="Kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="md:col-span-2 relative group overflow-hidden rounded-2xl">
                <img src="https://picsum.photos/id/493/800/400" alt="Bread and Butter" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;