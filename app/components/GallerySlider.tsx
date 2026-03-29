import { useRef } from "react";
import { motion } from "framer-motion";
export function GallerySlider() {
  const ref = useRef(null);

  const images = [
    "clean2.jpg",
    "clean7.jpg",
    "kitchen_cleaning.jpg",
    "clean5.jpg",
    "homeclean.jpg"
  ];

  return (
    <div className="relative container-x">

      <motion.div
        ref={ref}
        className="flex gap-6 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={ref}
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="min-w-[260px] md:min-w-[320px] h-[360px] rounded-2xl overflow-hidden relative"
            whileHover={{ scale: 0.97 }}
          >
            <img
              src={src}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition" />
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}