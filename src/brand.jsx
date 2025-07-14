import React, { useState } from "react";
import { motion } from "motion/react";

const Brand = () => {
  const [activeImage, setActiveImage] = useState(null);

  // Data gambar
  const images = [
    {
      id: 1,
      src: "/src/assets/robot1.jpg",
      title: "Brand 1",
      description: "Experience the beauty of Dal Lake.",
    },
    {
      id: 2,
      src: "/src/assets/robot1.jpg",
      title: "Brand 2",
      description: "Explore Srinagar's floating gardens.",
    },
    {
      id: 3,
      src: "/src/assets/robot1.jpg",
      title: "Brand 3",
      description: "Majestic views of the houseboats.",
    },
    {
      id: 4,
      src: "/src/assets/robot1.jpg",
      title: "Brand 4",
      description: "Tranquil mornings on the lake.",
    },
    {
      id: 5,
      src: "/src/assets/robot1.jpg",
      title: "Brand 5",
      description: "Breathtaking sunset on the water.",
    },
    {
      id: 6,
      src: "/src/assets/robot1.jpg",
      title: "Brand 6",
      description: "The perfect blend of nature and tranquility.",
    },
    {
      id: 7,
      src: "/src/assets/robot1.jpg",
      title: "Brand 7",
      description: "A mesmerizing experience on Dal Lake.",
    },
    {
      id: 8,
      src: "/src/assets/robot1.jpg",
      title: "Brand 8",
      description: "Floating through the serene waters.",
    },
    {
      id: 9,
      src: "/src/assets/robot1.jpg",
      title: "Brand 9",
      description: "Exploring the historic beauty of Srinagar.",
    },
    {
      id: 10,
      src: "/src/assets/robot1.jpg",
      title: "Brand 10",
      description: "Revel in the splendor of Dal Lake.",
    },
    {
      id: 11,
      src: "/src/assets/robot1.jpg",
      title: "Brand 11",
      description: "Floating through the serene waters.",
    },
    {
      id: 12,
      src: "/src/assets/robot1.jpg",
      title: "Brand 12",
      description: "Exploring the historic beauty of Srinagar.",
    },
    {
      id: 13,
      src: "/src/assets/robot1.jpg",
      title: "Brand 13",
      description: "Revel in the splendor of Dal Lake.",
    },
    
  ];

  return (
    <div className="bg-[#f5eedc] container mx-auto border border-[#f5eedc]">
      <div className="flex">
        <motion.div 
        initial={{ x: 0 }} 
        animate={{ x: "-100%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"> 
          {images.map((image, index) => {
            return (
              <img
                className="h-45 w-50 rounded-[28px] p-[12px]"
                src={image.src} // Mengakses src yang benar
                alt={image.title} // Tambahkan alt untuk deskripsi gambar
                key={index}
              />
            );
          })}
        </motion.div>
        <motion.div 
        initial={{ x: 0 }} 
        animate={{ x: "-100%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"> 
          {images.map((image, index) => {
            return (
              <img
                className="h-45 w-50 rounded-[28px] p-[12px]"
                src={image.src} // Mengakses src yang benar
                alt={image.title} // Tambahkan alt untuk deskripsi gambar
                key={index}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Brand;
