import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

interface Event {
  id: number;
  title: string;
  date: string;
  image: string;
}

const DUMMY_EVENTS: Event[] = [
  {
    id: 1,
    title: "Digital Marketing Training",
    date: "April 3, 2026",
    image: "https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/659239064_122122303899163406_1365995924491931255_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=3D-nBs_GAvYQ7kNvwEersMy&_nc_oc=AdprgdMXid5AIn31xr5RYYSPfgkCdDg3y3CVOnV9IRiB9ZE1LocDrdPZqtEpx0h6jW8&_nc_zt=23&_nc_ht=scontent.fktm20-1.fna&_nc_gid=SETexVkIsC-733JZ5TUbiA&_nc_ss=7a3a8&oh=00_Af10PhSgANv0JTPPadTP9Ljk7Qcd0mUjRAeifojUYk4swg&oe=69D41ECF"
  },
  {
    id: 2,
    title: "AI & Research Workshop",
    date: "March 24-25, 2026",
    image: "https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/655462757_122120720001163406_4272677869492214374_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=ZMtGSd6iZwwQ7kNvwHDvD45&_nc_oc=Adqc-B-0YiP_RnSlJqYZ9bPiW2Eehl6AxmH8fw94RyPBnkLYdvQ9dLS-8Szwjqcac0I&_nc_zt=23&_nc_ht=scontent.fktm20-1.fna&_nc_gid=9kZqlxymxz2HS2Ys5jp_0A&_nc_ss=7a3a8&oh=00_Af23oKArdA4FCmpAJ31Iafao7Cu_x4HA_lTRMsVXS_CCrA&oe=69D43970"
  },
//   {
//     id: 3,
//     title: "Modern Art Exhibition",
//     date: "July 10, 2026",
//     image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=1000"
//   },
//   {
//     id: 4,
//     title: "Gourmet Food Expo",
//     date: "August 5, 2026",
//     image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000"
//   },
//   {
//     id: 5,
//     title: "Startup Innovation Day",
//     date: "September 12, 2026",
//     image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1000"
//   }
];

const EventCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % DUMMY_EVENTS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + DUMMY_EVENTS.length) % DUMMY_EVENTS.length);
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-brand-dark leading-tight mb-4"
          >
            Explore <span className="text-brand-teal">Events</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto"
          >
            Discover a curated selection of upcoming experiences, from global festivals to exclusive tech showcases.
          </motion.p>
        </div>

        {/* Main Carousel Wrapper - Constrained to card width to position buttons relative to it */}
        <div className="relative max-w-6xl mx-auto min-h-[550px] flex items-center">
          
          {/* Navigation Arrows - Positioned just outside the card edges */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 flex justify-between pointer-events-none -mx-6 md:-mx-16">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 cursor-pointer rounded-full bg-white/90 backdrop-blur-sm shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:shadow-md transition-all duration-300 pointer-events-auto"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 cursor-pointer rounded-full bg-white/90 backdrop-blur-sm shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:shadow-md transition-all duration-300 pointer-events-auto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Carousel Track */}
          <div className="relative w-full z-20">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, scale: 0.98, x: direction > 0 ? 20 : -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98, x: direction > 0 ? -20 : 20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <Card event={DUMMY_EVENTS[currentIndex]} isActive />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Minimal Pagination */}
        <div className="flex justify-center gap-2 mt-10">
          {DUMMY_EVENTS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${
                currentIndex === index ? 'w-8 bg-gray-900' : 'w-2 bg-gray-200 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card: React.FC<{ event: Event; isActive?: boolean }> = ({ event, isActive }) => {
  return (
    <div className="relative group rounded-[2rem] overflow-hidden bg-white h-[550px] md:h-[700px] border border-gray-50">
      {/* Image */}
      <div className="absolute inset-0 bg-white">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content - Sleeker Typography */}
      <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
        <motion.div
          initial={isActive ? { opacity: 0, y: 15 } : {}}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              {event.date}
            </span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">
            {event.title}
          </h3>

          <a 
            href="https://www.facebook.com/profile.php?id=61584902195796" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-3 text-sm font-bold tracking-wider uppercase pb-1 transition-all duration-300"
          >
            Explore Details
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default EventCarousel;
