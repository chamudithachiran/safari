import React from 'react';
import { ExternalLink, MapPin } from 'lucide-react';
import GoogleMapReact from 'google-map-react';

const MapSection = () => {
  // Coordinates for Safari Tales by Podi
  const center = { lat: 7.9712239, lng: 80.7502679 };
  const zoom = 16.2;

  // Exact Grayscale styling for Google Maps
  const mapOptions = {
    styles: [
      { "featureType": "all", "elementType": "all", "stylers": [{ "saturation": -100 }, { "gamma": 0.6 }] },
      { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] },
      { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 20 }] },
      { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }
    ],
    disableDefaultUI: true, // Clean look like the screenshot
    zoomControl: true,
  };

  return (
    /* Changed bg-[#F8F9FA] to bg-black */
    <section id="map-location" className="bg-black py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with "Open in Google Maps" link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[#FFC107] uppercase tracking-[0.3em] font-bold italic text-xs block mb-2">
              Find Us
            </span>
            <h2 
              /* Changed text-[#212529] to text-white */
              className="text-4xl md:text-5xl font-black italic uppercase text-white"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              Our Location
            </h2>
          </div>
          
          <div className="flex flex-col gap-2">
          <a 
            href="https://www.google.com/search?q=safari+tales+by+podi&oq=safari+tales+by+podi&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiiBBiJBTIKCAIQABiABBiiBDIKCAMQABiABBiiBDIKCAQQABiABBiiBDIHCAUQABjvBdIBCDU4NDJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" 
            target="_blank" 
            rel="noopener noreferrer"
            /* Changed default text color to white for the link */
            className="flex items-center gap-2 text-xs font-bold uppercase border-b-2 border-[#FFC107] pb-1 text-white hover:text-[#FFC107] transition-colors self-start md:self-auto"
          >
            Open in Google Maps <ExternalLink size={14} />
          </a>
          <a 
            href="https://www.google.com/maps/reviews/@7.9712239,80.7502679,16.2z/data=!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnTURBcUlqSXBBRRAB!2m1!1s0x0:0xabf742caae05e82a?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            /* Changed default text color to white for the link */
            className="flex items-center gap-2 text-xs font-bold uppercase border-b-2 border-[#FFC107] pb-1 text-white hover:text-[#FFC107] transition-colors self-start md:self-auto"
          >
            View Reviews <ExternalLink size={14} />
          </a>
          </div>
        </div>

        {/* Map Container - Polaroid-style thick white border */}
        <div className="h-[500px] w-full rounded-xl overflow-hidden border-[12px] border-white shadow-2xl relative">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }} // Insert your API Key here
            defaultCenter={center}
            defaultZoom={zoom}
            options={mapOptions}
          >
            <Marker lat={7.9712239} lng={80.7502679} />
          </GoogleMapReact>

          {/* Floating Label overlay */}
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 px-5 rounded shadow-md hidden md:block">
            <p className="text-[10px] font-black uppercase tracking-tighter text-zinc-400">Safari Tales by Podi</p>
            <p className="text-xs font-bold uppercase italic text-black">Our Location</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom Marker Component
const Marker = () => (
  <div className="relative flex items-center justify-center">
    {/* Pulse Animation */}
    <div className="absolute w-12 h-12 bg-[#FFC107]/30 rounded-full animate-ping"></div>
    <div className="relative w-10 h-10 bg-[#FFC107] rounded-full border-4 border-white shadow-xl flex items-center justify-center">
      <MapPin size={20} className="text-black" />
    </div>
  </div>
);

export default MapSection;