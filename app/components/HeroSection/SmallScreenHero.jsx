"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function SmallScreenHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const leftPartVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  const rightPartVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  const bottomPartVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <motion.div
      className="pt-6 min-h-screen bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div
          className="w-full h-full flex flex-col justify-center space-y-6"
          variants={leftPartVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-950">
            BOUNDLESS WORLDS
            <span className="text-xl sm:text-2xl ml-2 text-blue-700">
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
                className="w-14 h-14 border-2 border-blue-600 rounded-full"
              />
              <div>
                <p className="italic text-sm font-semibold text-blue-950">
                  Steve Jobs
                </p>
                <p className="text-gray-500 text-base italic font-medium">
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
          <div className="flex items-center gap-4">
            <div>
              <h2 className="text-lg font-semibold text-blue-950">
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
        <motion.div className="w-full h-full" variants={rightPartVariants}>
          <Image
            src="/assets/gallery/img7.jpg"
            alt="main-banner"
            height={3000}
            width={3000}
            className="object-cover object-center aspect-auto h-full rounded-xl hidden sm:block"
          />
        </motion.div>
      </div>
      <motion.div
        className="w-full pt-4 pb-16 flex flex-col gap-4 h-full"
        variants={bottomPartVariants}
      >
        <Image
          src="/assets/gallery/banner2.jpg"
          alt="main-banner"
          height={3000}
          width={3000}
          priority
          className="object-cover object-center aspect-auto h-9/11 rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
}
