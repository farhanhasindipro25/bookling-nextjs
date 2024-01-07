import Badge from "@/components/Badge";
import Image from "next/image";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

export default function BestSellerBookError() {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <div className="space-y-4 md:space-y-12">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-blue-950">
        BEST SELLERS
        <span className="text-xl md:text-3xl lg:text-4xl ml-4 text-blue-700">
          (RECENT ADDITIONS)
        </span>
      </h2>
      <div className="flex items-center gap-4 bg-red-100 p-4 rounded-lg">
        <ExclamationTriangleIcon className="w-10 p-2 bg-red-600 rounded-full text-white h-10" />
        <h2 className="text-red-600 font-medium text-base">
          The server ran into an issue. Please try again later!
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {[...Array(10).keys()].map((index) => (
          <motion.div
            ref={ref}
            key={index + 1}
            className="w-full rounded-lg bg-white shadow-md relative"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Image
              src={"/assets/img-placeholder.jpg"}
              alt="book-skeleton"
              width={2160}
              height={1080}
              priority
              className="w-full rounded-t-lg object-cover aspect-auto"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="Skeleton" />
            </div>
            <div className="p-4 space-y-2 divide-y divide-gray-200">
              <div className="space-y-2">
                <div className="bg-gray-200 w-3/4 h-3 rounded-full" />
                <div className="bg-gray-100 w-1/2 h-3 rounded-full" />
              </div>
              <div className="flex pt-2 items-center justify-start gap-2">
                <Image
                  src="/assets/img-placeholder.jpg"
                  alt="author-skeleton"
                  width={100}
                  height={100}
                  priority
                  className="w-8 h-8 rounded-full object-cover aspect-auto object-top"
                />
                <div className="bg-gray-200 w-1/2 h-3 rounded-full" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
