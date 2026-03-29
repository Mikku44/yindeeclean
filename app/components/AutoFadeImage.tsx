import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AutoFadeImageProps {
  images: string[];
  interval?: number; // milliseconds between automatic changes
  width?: string | number;
  height?: string | number;
  className?: string;
}

const AutoFadeImage: React.FC<AutoFadeImageProps> = ({
  images,
  interval = 3000,
  width = "100%",
  height = "300px",
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Vertical Dots */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white/0 ring-1 ring-white/70" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoFadeImage;
