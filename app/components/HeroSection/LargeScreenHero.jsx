"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function LargeScreenHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const leftPartVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  const middlePartVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  const rightPartVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  const [refLeftPart, inViewLeftPart] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [refMiddlePart, inViewMiddlePart] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [refRightPart, inViewRightPart] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <motion.div
      className="bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="grid grid-cols-3 gap-4">
        <motion.div
          className="w-full h-full flex flex-col justify-evenly"
          variants={leftPartVariants}
          ref={refLeftPart}
          animate={inViewLeftPart ? "visible" : "hidden"}
          initial="hidden"
        >
          <h2 className="text-5xl font-semibold text-blue-950">
            BOUNDLESS WORLDS
            <span className="text-4xl ml-4 text-blue-700">
              ONE UNIFIED PLATFORM
            </span>
          </h2>
          <p className="text-blue-950 text-base font-medium">
            From classics to contemporary tales, find your literary haven here.
            Books that resonate, stories that endure.
          </p>
          <span className="pr-6">
            <div className="flex items-center gap-2 justify-start">
              <Image
                src="/assets/gallery/jobs.jpg"
                alt="Steve-Jobs"
                width={500}
                height={500}
                loading="lazy"
                className="w-12 h-12 lg:w-16 lg:h-16 border-2 border-blue-600 rounded-full"
              />
              <div>
                <p className="italic text-sm font-semibold text-blue-950">
                  Steve Jobs
                </p>
                <p className="text-gray-500 text-sm italic font-medium">
                  "The only way to do great work is to love what you do."
                </p>
              </div>
            </div>
          </span>
          <Image
            src="/assets/gallery/img5.jpg"
            alt="Steve-Jobs"
            width={500}
            height={500}
            loading="lazy"
            className="w-full h-28 rounded-xl object-cover object-center"
          />
        </motion.div>
        <motion.div
          className="w-full h-full"
          variants={middlePartVariants}
          ref={refMiddlePart}
          animate={inViewMiddlePart ? "visible" : "hidden"}
          initial="hidden"
        >
          <Image
            src="/assets/gallery/img7.jpg"
            alt="main-banner"
            height={3000}
            width={3000}
            className="object-cover object-center aspect-auto rounded-xl"
          />
        </motion.div>
        <motion.div
          className="w-full flex flex-col justify-between h-full"
          variants={rightPartVariants}
          ref={refRightPart}
          animate={inViewRightPart ? "visible" : "hidden"}
          initial="hidden"
        >
          <Image
            src="/assets/gallery/banner2.jpg"
            alt="main-banner"
            height={3000}
            width={3000}
            className="object-cover object-center aspect-auto rounded-xl"
          />
          <div className="flex items-center gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-blue-950">
                Explore Books
              </h2>
              <p className="font-medium text-gray-500">
                Find books of different authors, view details, and many more
              </p>
            </div>
            <Link
              href="/login"
              className="hover:scale-75 hover:rotate-45 ease-in-out duration-300 cursor-pointer"
            >
              <ArrowUpRightIcon className="w-16 h-16 bg-blue-700 p-4 rounded-full text-white" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
