import React, { useState, useEffect } from 'react';
import bg1 from '../../assets/images/dnori.jpeg';
import bg2 from '../../assets/images/ameliya.jpeg';
import bg3 from '../../assets/images/james.jpeg';
import bg4 from '../../assets/images/aboutus.jpg';

const testimonials = [
  {
    name: "Dnori",
    role: "",
    bgImage: bg1,
    quote: "We’ve just had an amazing Safari with Podi. He was super chilled and drove very safe and stopped for as much time to enjoy looking at the elephants as we wanted to.Very much recommended!Thanks a lot Podi! 🤗"
  },
  {
    name: "Amelia Zielińska",
    role: "",
    bgImage: bg2,
    quote: "We had this Safari organised by our resort, it was amazing. We visited Kaudulla National Park with them. Car is very comfy, the guys were really great. They put all the effort to show us all the elephants and other animals and we were lucky to spot around 70 elephants. We reccomend them very much!"
  },
  {
    name: "James Topal",
    role: "",
    bgImage: bg3,
    quote: "Great driver and told me a lot about the animals. The tour was great and I saw loads of elephants !"
  },
  // Duplicated cards
  {
    name: "Dnori",
    role: "",
    bgImage: bg1,
    quote: "We’ve just had an amazing Safari with Podi. He was super chilled and drove very safe and stopped for as much time to enjoy looking at the elephants as we wanted to.Very much recommended!Thanks a lot Podi! 🤗"
  },
  {
    name: "Amelia Zielińska",
    role: "",
    bgImage: bg2,
    quote: "We had this Safari organised by our resort, it was amazing. We visited Kaudulla National Park with them. Car is very comfy, the guys were really great. They put all the effort to show us all the elephants and other animals and we were lucky to spot around 70 elephants. We reccomend them very much!"
  },
  {
    name: "Alexandra Elena Anton",
    role: "",
    bgImage: bg4,
    quote: "The driver was very nice and had a respectful approach towards the animals encountered. We felt safe the entire time and were able to enjoy the experience to the fullest. Highly recommended!"
  }
];

const Testimonialsection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(false);
  
  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTransition(true);
      setTimeout(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
        setTransition(false);
      }, 500); // Duration of the animation
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  // Get the 3 cards to display (current and next 2)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-24 px-6 font-sans" style={{ backgroundColor: '#050505' }}>
      <div className="max-w-6xl mx-auto text-center">

        <h2
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-3xl md:text-4xl font-bold text-orange-500 uppercase tracking-widest"
        >
          Testimonials
        </h2>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1500"
          className="w-20 h-1 bg-orange-500 mx-auto mt-3 mb-16 rounded-full"
        />

        {/* Testimonial Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 transition-transform duration-500 ease-in-out ${
              transition ? 'opacity-75' : 'opacity-100'
            }`}
          >
            {visibleTestimonials.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay={index * 200}
                className={`relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out group border border-white/10 ${
                  index === 1
                    ? 'md:scale-110 z-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
                    : 'z-0'
                }`}
              >
                {/* BACKGROUND IMAGE */}
                <div
                  className="absolute inset-0 bg-cover bg-center duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[0.0px] group-hover:bg-black/60 transition-colors duration-500" />

                {/* CONTENT */}
                <div className="relative z-10 p-8">
                  <div className="text-left">
                    <p className="text-gray-200 text-sm italic mb-8 min-h-30">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <h4 className="text-orange-500 font-bold text-lg">
                      {item.name}
                    </h4>
                    <span className="text-white/60 text-[10px] uppercase tracking-[0.2em]">
                      {item.role}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-600'}`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonialsection;