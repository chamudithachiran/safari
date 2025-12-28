import React, { useState, useEffect } from 'react';
// Import your gallery photos from src/assets/images/about
// Add your photo imports here - example format:
// import gallery1 from '../../assets/images/about/gallery1.jpg';
// import gallery2 from '../../assets/images/about/gallery2.jpg';
// import gallery3 from '../../assets/images/about/gallery3.jpg';
// import gallery4 from '../../assets/images/about/gallery4.jpg';
// import gallery5 from '../../assets/images/about/gallery5.jpg';
// import gallery6 from '../../assets/images/about/gallery6.jpg';
// import gallery7 from '../../assets/images/about/gallery7.jpg';
// import gallery8 from '../../assets/images/about/gallery8.jpg';
// import gallery9 from '../../assets/images/about/gallery9.jpg';
// import gallery10 from '../../assets/images/about/gallery10.jpg';
// import gallery11 from '../../assets/images/about/gallery11.jpg';
// import gallery12 from '../../assets/images/about/gallery12.jpg';

// Placeholder imports for now - replace these with your actual photo imports
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';
import imgAboutUs from '../../assets/images/aboutus.jpg';
import imgHome from '../../assets/images/home.jpg';
import imgGallery from '../../assets/images/gallary.jpg';
import imgBlog from '../../assets/images/blog.jpg';
import imgTDetail from '../../assets/images/t-detail.jpg';
import imgTuos from '../../assets/images/tuos.jpg';
import imgTesti from '../../assets/images/testi.jpg';

// Gallery photos from src/assets/images/about
import gallery1 from '../../assets/images/about/gallery (1).jpeg';
import gallery2 from '../../assets/images/about/gallery (2).jpeg';
import gallery3 from '../../assets/images/about/gallery (3).jpeg';
import gallery4 from '../../assets/images/about/gallery (4).jpeg';
import gallery5 from '../../assets/images/about/gallery (5).jpeg';
import gallery6 from '../../assets/images/about/gallery (6).jpeg';
import gallery7 from '../../assets/images/about/gallery (7).jpeg';
import gallery8 from '../../assets/images/about/gallery (8).jpeg';
import gallery9 from '../../assets/images/about/gallery (9).jpeg';
import gallery10 from '../../assets/images/about/gallery (10).jpeg';
import gallery11 from '../../assets/images/about/gallery (11).jpeg';
import gallery12 from '../../assets/images/about/gallery (12).jpeg';
import gallery13 from '../../assets/images/about/gallery (13).jpeg';
import gallery14 from '../../assets/images/about/gallery (14).jpeg';
import gallery15 from '../../assets/images/about/gallery (15).jpeg';
import gallery16 from '../../assets/images/about/gallery (16).jpeg';
import gallery17 from '../../assets/images/about/gallery (17).jpeg';
import gallery18 from '../../assets/images/about/gallery (18).jpeg';
import gallery19 from '../../assets/images/about/gallery (19).jpeg';

const GallerySection = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Gallery images from src/assets/images/about
  const images = [
    { id: 1, src: gallery1 },
    { id: 2, src: gallery2 },
    { id: 3, src: gallery3 },
    { id: 4, src: gallery4 },
    { id: 5, src: gallery5 },
    { id: 6, src: gallery6 },
    { id: 7, src: gallery7 },
    { id: 8, src: gallery8 },
    { id: 9, src: gallery9 },
    { id: 10, src: gallery10 },
    { id: 11, src: gallery11 },
    { id: 12, src: gallery12 },
    { id: 13, src: gallery13 },
    { id: 14, src: gallery14 },
    { id: 15, src: gallery15 },
    { id: 16, src: gallery16 },
    { id: 17, src: gallery17 },
    { id: 18, src: gallery18 },
    { id: 19, src: gallery19 },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.id === selectedImage.id);
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex]);
    }
  };

  return (
    <section
      className="relative py-16 px-4 sm:px-6 md:px-8 min-h-screen overflow-hidden"
      style={{ backgroundColor: '#050505' }}
    >
      <div className="relative z-0 max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-5xl md:text-6xl font-black italic uppercase text-white mb-4"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            Photo <span className="text-[#FFC107]">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-[#FFC107] mx-auto"></div>
        </div>

        {/* GALLERY MASONRY */}
        <div
          className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 sm:gap-5 space-y-4"
        >
          {images.map((img, index) => (
            <div
              key={img.id}
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={index * 100}
              className="relative overflow-hidden rounded-xl bg-[#4a1e4a] group cursor-pointer border border-white/10 shadow-lg break-inside-avoid mb-4"
              onClick={() => openLightbox(img)}
            >
              <img
                src={img.src}
                alt={`Gallery image ${img.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100000] flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <button 
              className="absolute top-4 right-4 text-white text-3xl z-10 hover:text-[#FFC107] transition-colors"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl z-10 hover:text-[#FFC107] transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              &#8249;
            </button>
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl z-10 hover:text-[#FFC107] transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              &#8250;
            </button>
            <img
              src={selectedImage.src}
              alt={`Gallery image ${selectedImage.id}`}
              className="w-full h-auto max-h-[80vh] object-contain mx-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;