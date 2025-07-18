import React, { useState } from "react";
import { motion } from "framer-motion";

const BrandGallery = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const images = [
    { id: 1, src: "/src/assets/robot1.jpg", title: "Brand 1", description: "Experience the beauty of Dal Lake." },
    { id: 2, src: "/src/assets/robot1.jpg", title: "Brand 2", description: "Explore Srinagar's floating gardens." },
    { id: 3, src: "/src/assets/robot1.jpg", title: "Brand 3", description: "Majestic views of the houseboats." },
    { id: 4, src: "/src/assets/robot1.jpg", title: "Brand 4", description: "Tranquil mornings on the lake." },
    { id: 5, src: "/src/assets/robot1.jpg", title: "Brand 5", description: "Breathtaking sunset on the water." },
    { id: 6, src: "/src/assets/robot1.jpg", title: "Brand 6", description: "The perfect blend of nature and tranquility." },
    { id: 7, src: "/src/assets/robot1.jpg", title: "Brand 7", description: "A mesmerizing experience on Dal Lake." },
    { id: 8, src: "/src/assets/robot1.jpg", title: "Brand 8", description: "Floating through the serene waters." },
    { id: 9, src: "/src/assets/robot1.jpg", title: "Brand 9", description: "Exploring the historic beauty of Srinagar." },
    { id: 10, src: "/src/assets/robot1.jpg", title: "Brand 10", description: "Revel in the splendor of Dal Lake." },
    { id: 11, src: "/src/assets/robot1.jpg", title: "Brand 11", description: "Floating through the serene waters." },
    { id: 12, src: "/src/assets/robot1.jpg", title: "Brand 12", description: "Exploring the historic beauty of Srinagar." },
    { id: 13, src: "/src/assets/robot1.jpg", title: "Brand 13", description: "Revel in the splendor of Dal Lake." },
  ];

  return (
    <div className="flex overflow-hidden bg-[#f5eedc] p-8">
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative w-[200px] h-[200px] p-2 flex flex-col justify-between image-card group overflow-hidden"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="w-full h-full object-cover rounded-[20px] transition-transform duration-300 group-hover:scale-100"
              src={image.src}
              alt={image.title}
            />

            {/* Animated Title - Moves up on hover */}
            <div className={`
              absolute bottom-0 left-2 right-2 p-4 
              text-white font-glancyrmedium text-xl 
              transition-all duration-1500 ease-in-out
              ${hovered === index ? "translate-y-[-40px]" : "translate-y-0"}
            `}>
              {image.title}
            </div>

            {/* Description - Appears from bottom on hover */}
            <div className={`
              absolute bottom-0 left-2 right-2 p-4
              text-white font-glancyrlight text-xs
              transition-all duration-1500 ease-in-out
              ${hovered === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}>
              {image.description}
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative w-[200px] h-[200px] p-2 flex flex-col justify-between image-card group overflow-hidden"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="w-full h-full object-cover rounded-[20px] transition-transform duration-300 group-hover:scale-100"
              src={image.src}
              alt={image.title}
            />

            {/* Animated Title - Moves up on hover */}
            <div className={`
              absolute bottom-0 left-2 right-2 p-4 
              text-white font-glancyrmedium text-xl 
              transition-all duration-1500 ease-in-out
              ${hovered === index ? "translate-y-[-40px]" : "translate-y-0"}
            `}>
              {image.title}
            </div>

            {/* Description - Appears from bottom on hover */}
            <div className={`
              absolute bottom-0 left-2 right-2 p-4
              text-white font-glancyrlight text-xs
              transition-all duration-1500 ease-in-out
              ${hovered === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}>
              {image.description}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandGallery;
