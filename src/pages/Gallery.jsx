import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../data/galleryImages';
import { ArrowLeft, Maximize2, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Gallery = () => {
  const location = useLocation();
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    if (location.state?.filter) {
      setFilter(location.state.filter);
    }
  }, [location.state]);

  const categories = ['All', 'Rooms', 'Restaurant', 'Bathrooms', 'Exterior'];

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <Link to="/" className="inline-flex items-center text-primary font-bold hover:underline mb-4 group">
              <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary-dark">Photo Gallery</h1>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square overflow-hidden rounded-3xl group cursor-pointer bg-white shadow-md"
                onClick={() => setSelectedImg(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 size={32} className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform" />
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-secondary-dark transition-transform group-hover:scale-110">
                  {img.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedImg(null)}
            >
              <button 
                className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                onClick={() => setSelectedImg(null)}
              >
                <X size={32} />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImg}
                className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
