"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

export default function ImageCard({ image, index }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  return (
    <motion.div
      ref={ref}
      key={index}
      initial="hidden"
      variants={cardVariants}
      animate={inView ? "visible" : "hidden"}
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
  );
}
