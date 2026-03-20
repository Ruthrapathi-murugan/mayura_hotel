import { Swiper, SwiperSlide } from 'swiper/react';
import { HashLink } from 'react-router-hash-link';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import heroImg from '../assets/hero.jpg';
import standardImg from '../assets/deluxe.jpg';

const Hero = ({ onBookNow }) => {
  const slides = [
    {
      image: heroImg,
      title: 'Experience Mayura',
      subtitle: 'Authentic Stays near Palani Temple',
      description: 'Your tranquil retreat in the heart of Palani, offering clean, modern rooms and a warm atmosphere for pilgrims.',
    },
    {
      image: standardImg,
      title: 'Family Comfort',
      subtitle: 'Spacious & Clean Accommodations',
      description: 'Well-maintained rooms designed for the modern traveler, ensuring a restful night after your temple visit.',
    },

  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Image with overlay */}
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              
              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-primary-light uppercase tracking-[0.3em] font-semibold text-sm mb-4"
                >
                  {slide.subtitle}
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 max-w-4xl"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white/80 text-lg md:text-xl max-w-2xl mb-12"
                >
                  {slide.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
                >
                  <HashLink 
                    smooth 
                    to="/#rooms-teaser"
                    className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-primary/30 flex items-center justify-center"
                  >
                    Book Your Stay
                  </HashLink>
                  <HashLink 
                    smooth 
                    to="/#gallery"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
                  >
                    View Gallery
                  </HashLink>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-white/40 text-[10px] uppercase tracking-widest mt-2">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
