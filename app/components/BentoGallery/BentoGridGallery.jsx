"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const images = [
  {
    src: "/assets/gallery/img8.jpg",
  },
  {
    src: "/assets/gallery/img4.jpg",
  },
  {
    src: "/assets/gallery/img2.jpg",
  },
  {
    src: "/assets/gallery/img3.jpg",
  },
  {
    src: "/assets/gallery/img6.jpg",
  },
  {
    src: "/assets/gallery/img9.jpg",
  },
  {
    src: "/assets/gallery/img10.jpg",
  },
  {
    src: "/assets/gallery/img13.jpg",
  },
  {
    src: "/assets/gallery/img14.jpg",
  },
  {
    src: "/assets/gallery/img12.jpg",
  },
  {
    src: "/assets/gallery/img15.jpg",
  },
  {
    src: "/assets/gallery/img17.jpg",
  },
];

export default function BentoGridGallery() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const fadeInTransition = {
    duration: 0.5,
    ease: "easeInOut",
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="space-y-4 md:space-y-12 lg:pt-24 py-20">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-blue-950">
        LITERARY TREASURES
        <span className="text-xl md:text-3xl lg:text-4xl ml-4 text-blue-700">
          A VISUAL FEAST
        </span>
      </h2>

      <div className="grid-cols-5 gap-4 hidden md:grid">
        {images?.slice(0, 10).map((image, index) => (
          <motion.div
            key={index}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
            transition={fadeInTransition}
          >
            <Image
              src={image.src}
              alt={`bento-${index + 1}`}
              width={2160}
              height={1080}
              priority
              className="w-full h-full object-cover aspect-auto rounded-lg"
            />
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4  md:hidden">
        {images.map((image, index) => (
          <motion.div
            key={index}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
            transition={fadeInTransition}
          >
            <Image
              src={image.src}
              alt={`bento-${index + 1}`}
              width={2160}
              height={1080}
              priority
              className="w-full h-full object-cover aspect-auto rounded-lg"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
