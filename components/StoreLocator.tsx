import React, { useEffect, useState, useMemo, useRef } from 'react';
import { LOCATIONS } from '../constants';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Navigation, ChevronRight, Store } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

// Fix Leaflet's default icon path issues
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom Premium Marker Icon
const createCustomIcon = (isActive: boolean) => {
  const colorClass = isActive ? 'bg-brand-brown scale-125 z-50' : 'bg-brand-gold';
  return L.divIcon({
    className: 'custom-marker-icon',
    html: `
      <div class="relative w-8 h-8 group transition-all duration-500">
        <div class="absolute inset-0 ${colorClass} rounded-full shadow-xl border-2 border-white transform transition-all duration-300"></div>
        <div class="absolute inset-0 m-auto w-2 h-2 bg-brand-dark rounded-full"></div>
        <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-${isActive ? 'brand-brown' : 'brand-gold'}"></div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 36], // Center bottom
    popupAnchor: [0, -40], // Above the icon
  });
};

const defaultIcon = createCustomIcon(false);
const activeIcon = createCustomIcon(true);

// Helper to strictly validate location coordinates
const isValidLocation = (loc: any): boolean => {
  return (
    loc &&
    typeof loc.lat === 'number' &&
    !isNaN(loc.lat) &&
    typeof loc.lng === 'number' &&
    !isNaN(loc.lng)
  );
};

// Component to handle map movement/zoom and popups
function MapHandler({ 
  locations, 
  selectedLocationId, 
  markerRefs 
}: { 
  locations: typeof LOCATIONS, 
  selectedLocationId: number | null,
  markerRefs: React.MutableRefObject<{[key: number]: L.Marker | null}> 
}) {
  const map = useMap();

  // Fit bounds when list changes (group filter change), but only if no specific location is selected
  useEffect(() => {
    if (locations.length > 0 && !selectedLocationId) {
      // Strict filtering of valid points
      const validPoints = locations
        .filter(isValidLocation)
        .map(loc => [loc.lat, loc.lng] as [number, number]);

      if (validPoints.length > 0) {
        try {
          const bounds = L.latLngBounds(validPoints);
          if (bounds.isValid()) {
             map.flyToBounds(bounds, { 
              padding: [50, 50],
              duration: 1.2,
              easeLinearity: 0.25
            });
          }
        } catch (e) {
          console.error("Error setting bounds:", e);
        }
      }
    }
  }, [locations, map, selectedLocationId]);

  // Fly to specific location and open popup when selected from list
  useEffect(() => {
    if (selectedLocationId) {
      const loc = locations.find(l => l.id === selectedLocationId);
      if (isValidLocation(loc)) {
        try {
          map.flyTo([loc!.lat, loc!.lng], 15, { duration: 1.5 });
          
          const marker = markerRefs.current[selectedLocationId];
          if (marker) {
             setTimeout(() => {
               marker.openPopup();
             }, 1500); // Wait for flyTo to finish roughly
          }
        } catch (e) {
           console.error("Error flying to location:", e);
        }
      }
    } else {
        map.closePopup();
    }
  }, [selectedLocationId, locations, map, markerRefs]);

  return null;
}

export default function StoreLocator() {
  const { t } = useLanguage();
  const [isClient, setIsClient] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('All'); // Default to All
  const [selectedLocationId, setSelectedLocationId] = useState<number | null>(null);
  const markerRefs = useRef<{[key: number]: L.Marker | null}>({});

  // Calculate unique groups for filters
  const groups = useMemo(() => {
    const uniqueGroups = Array.from(new Set(LOCATIONS.map(l => l.group)));
    return uniqueGroups.sort();
  }, []);

  // Filter locations
  const filteredLocations = useMemo(() => {
    if (activeFilter === 'All') return LOCATIONS;
    return LOCATIONS.filter(l => l.group === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLocationClick = (id: number) => {
      setSelectedLocationId(id);
      // Scroll to map on mobile if needed? 
      // For now, layout puts map side-by-side on desktop.
  };

  const handleFilterChange = (group: string) => {
      setActiveFilter(group);
      setSelectedLocationId(null);
  };

  return (
    <section id="locations" className="py-20 bg-brand-light relative scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-brand-gold tracking-widest uppercase mb-3">
            {t('locations.badge')}
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl text-brand-dark">
            {t('locations.title')}
          </h3>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[700px]">
            
            {/* Left Panel: Filters & List */}
            <div className="lg:col-span-4 flex flex-col h-full bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden order-2 lg:order-1">
                {/* Header & Filter Pills */}
                <div className="p-6 bg-brand-cream border-b border-brand-gold/10">
                    <h4 className="font-serif text-xl text-brand-dark mb-4">{t('locations.choose_area')}</h4>
                    <div className="flex flex-wrap gap-2">
                        {groups.map((group) => (
                          <button
                            key={group}
                            onClick={() => handleFilterChange(group)}
                            className={`
                              px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300
                              ${activeFilter === group 
                                ? 'bg-brand-brown text-white shadow-md' 
                                : 'bg-white text-gray-500 hover:text-brand-dark hover:bg-brand-light border border-gray-200'}
                            `}
                          >
                            {group}
                          </button>
                        ))}
                         <button
                            onClick={() => handleFilterChange('All')}
                            className={`
                              px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300
                              ${activeFilter === 'All' 
                                ? 'bg-brand-brown text-white shadow-md' 
                                : 'bg-white text-gray-500 hover:text-brand-dark hover:bg-brand-light border border-gray-200'}
                            `}
                          >
                            {t('locations.all')}
                          </button>
                    </div>
                </div>

                {/* Scrollable List */}
                <div className="flex-1 overflow-y-auto p-2 space-y-2 custom-scrollbar">
                    {filteredLocations.map((loc) => (
                        <div 
                            key={loc.id}
                            onClick={() => handleLocationClick(loc.id)}
                            className={`
                                group p-4 rounded-xl cursor-pointer transition-all duration-300 border
                                ${selectedLocationId === loc.id 
                                    ? 'bg-brand-cream border-brand-gold shadow-md transform scale-[1.02]' 
                                    : 'bg-white border-transparent hover:border-gray-200 hover:bg-gray-50'}
                            `}
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h5 className={`font-serif text-lg font-bold mb-1 transition-colors ${selectedLocationId === loc.id ? 'text-brand-brown' : 'text-brand-dark'}`}>
                                        {loc.name}
                                    </h5>
                                    <div className="flex items-center text-sm text-gray-500 mb-1">
                                        <MapPin size={14} className="mr-1 text-brand-gold" />
                                        {loc.address}, {loc.city}
                                    </div>
                                </div>
                                <div className={`mt-2 text-brand-gold transition-transform duration-300 ${selectedLocationId === loc.id ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`}>
                                    <ChevronRight size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {filteredLocations.length === 0 && (
                         <div className="text-center py-10 text-gray-400">
                             {t('locations.no_results')}
                         </div>
                    )}
                </div>
            </div>

            {/* Right Panel: Map */}
            <div className="lg:col-span-8 h-[500px] lg:h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white order-1 lg:order-2 relative">
               {isClient ? (
                 <MapContainer 
                    center={[58.8, 25.5]} 
                    zoom={7} 
                    scrollWheelZoom={false} 
                    className="w-full h-full z-0 bg-brand-cream/20"
                 >
                    {/* Desaturated tiles for premium look */}
                    <div className="map-tiles-filter grayscale-[0.2] sepia-[0.1]">
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                    </div>
                    
                    {filteredLocations
                      .filter(isValidLocation)
                      .map((location) => (
                      <Marker 
                        key={location.id} 
                        position={[location.lat, location.lng]}
                        icon={selectedLocationId === location.id ? activeIcon : defaultIcon}
                        ref={(ref) => {
                            if (ref) {
                                markerRefs.current[location.id] = ref;
                            }
                        }}
                        eventHandlers={{
                            click: () => handleLocationClick(location.id),
                        }}
                      >
                        <Popup className="premium-popup" closeButton={false}>
                          <div className="p-4 min-w-[240px] text-center font-sans">
                            <div className="flex justify-center mb-3">
                               <div className="p-3 bg-brand-light rounded-full text-brand-gold shadow-sm">
                                  <Store size={24} />
                               </div>
                            </div>
                            <h3 className="font-serif text-xl font-bold text-brand-dark mb-1 leading-tight">
                              {location.name}
                            </h3>
                            <p className="text-xs font-bold text-brand-brown uppercase tracking-widest mb-3">
                              {location.city}
                            </p>
                            
                            <div className="text-sm text-gray-600 mb-5 px-2 leading-relaxed border-t border-b border-gray-100 py-3">
                              {location.address}
                            </div>
    
                            <a 
                              href={location.googleMapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.name + ' ' + location.city)}`}
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 w-full py-3 bg-brand-dark text-white hover:bg-brand-gold hover:text-brand-dark text-xs font-bold uppercase tracking-widest rounded-lg transition-all duration-300 group shadow-lg"
                            >
                              <span>{t('locations.open_maps')}</span>
                              <Navigation size={14} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                    
                    <MapHandler 
                        locations={filteredLocations} 
                        selectedLocationId={selectedLocationId}
                        markerRefs={markerRefs}
                    />
                 </MapContainer>
               ) : (
                <div className="w-full h-full bg-brand-light flex items-center justify-center animate-pulse">
                  <span className="text-brand-gold/50 font-serif text-2xl">{t('locations.loading')}</span>
                </div>
               )}
            </div>
        </div>
      </div>

      <style>{`
        /* Custom tweaks for Leaflet popup */
        .leaflet-popup-content-wrapper {
          border-radius: 1.5rem;
          padding: 0;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(212, 175, 55, 0.1);
        }
        .leaflet-popup-content {
          margin: 0;
          width: auto !important;
        }
        .leaflet-popup-tip {
          background: white;
        }
        .map-tiles-filter .leaflet-tile-container {
            filter: grayscale(20%) sepia(10%) contrast(105%);
        }
        
        /* Custom Scrollbar for list */
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #D4AF37; 
            border-radius: 10px;
            opacity: 0.5;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #5D4037; 
        }
      `}</style>
    </section>
  );
}