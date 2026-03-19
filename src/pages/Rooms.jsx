import { motion } from 'framer-motion';
import { Check, Star, Users, Wind, Map } from 'lucide-react';
import deluxeImg from '../assets/deluxe.jpg';
import standardImg from '../assets/standard.jpg';

const Rooms = ({ onBookNow }) => {
  const roomTypes = [
    {
      id: 'deluxe',
      name: 'Deluxe AC Room',
      image: deluxeImg,
      description: 'Our premier accommodation featuring elegant interiors and modern amenities for a truly relaxing stay.',
      features: ['Valley or Temple View', 'King Size Bed', 'Air Conditioning', 'High-Speed Wi-Fi', 'Satellite LED TV', 'Electric Kettle'],
      price: '4.2/5 MMT Rating',
      capacity: '2 Adults + 1 Child'
    },
    {
      id: 'triple',
      name: 'Triple Bedroom AC',
      image: deluxeImg, // Repurposing for now
      description: 'Spacious room equipped with three comfortable separate beds, ideal for friends or small families.',
      features: ['Three Single Beds', 'Air Conditioning', 'High-Speed Wi-Fi', 'Satellite LED TV', 'Modern Bathroom'],
      price: 'Comfort for Three',
      capacity: '3 Adults'
    },
    {
      id: 'quad',
      name: 'Four Bed Room AC',
      image: standardImg, // This one has two double beds
      description: 'Perfect for larger families or groups, featuring two large double beds for maximum comfort and space.',
      features: ['Two Double Beds', 'Air Conditioning', 'Wi-Fi Access', 'Spacious Interiors', 'Satellite TV', 'Power Backup'],
      price: 'Family Favorite',
      capacity: '4 Adults'
    },
    {
      id: 'standard',
      name: 'Standard Double AC',
      image: standardImg,
      description: 'Clean, comfortable, and functional rooms designed for pilgrims and travelers on a budget who don\'t want to compromise on quality.',
      features: ['Comfortable Double Bed', 'Air Conditioning', 'Wi-Fi Access', 'Clean Bathroom', 'Satellite TV', 'Power Backup'],
      price: 'Budget Friendly',
      capacity: '2 Adults'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-secondary-dark mb-4"
          >
            Our Accommodations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Choose from our range of meticulously maintained rooms, perfectly suited for your pilgrimage or leisure travel to Palani.
          </motion.p>
        </div>

        <div className="space-y-16">
          {roomTypes.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`flex flex-col lg:flex-row items-center gap-12 bg-white rounded-[3rem] overflow-hidden shadow-xl shadow-gray-200/50 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Room Image */}
              <div className="lg:w-1/2 h-[400px] lg:h-[600px] w-full relative">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg flex items-center space-x-2">
                  <Star size={16} className="text-primary fill-primary" />
                  <span className="text-sm font-bold text-secondary-dark">{room.price}</span>
                </div>
              </div>

              {/* Room Details */}
              <div className="lg:w-1/2 p-8 lg:p-16">
                <h2 className="text-3xl font-serif font-bold mb-6 text-secondary-dark">{room.name}</h2>
                <p className="text-gray-500 mb-8 leading-relaxed text-lg">{room.description}</p>
                
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Users size={18} className="text-primary" />
                    <span>{room.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Wind size={18} className="text-primary" />
                    <span>Air Conditioned</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Map size={18} className="text-primary" />
                    <span>Temple/Valley View</span>
                  </div>
                </div>

                <div className="mb-12">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Room Amenities</h4>
                  <ul className="grid grid-cols-2 gap-y-4">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3 text-sm text-gray-500">
                        <Check size={16} className="text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={onBookNow}
                  className="w-full bg-secondary-dark hover:bg-black text-white py-4 rounded-2xl font-bold text-lg transition-all shadow-xl group flex items-center justify-center space-x-3"
                >
                  <span>Book Now</span>
                  <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
