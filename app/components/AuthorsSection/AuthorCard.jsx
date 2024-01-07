import { getDateInDMYFormat } from "@/utils/UtilsKit";
import { CakeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
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

export default function AuthorCard({ author }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      className="w-full rounded-lg bg-white border border-gray-300 shadow-md relative"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Image
        src={author.authorImage || "/assets/img-placeholder.jpg"}
        alt={author.authorName}
        width={2160}
        height={1080}
        priority
        className="w-full rounded-t-lg object-cover aspect-auto"
      />

      <div className="p-4 space-y-1 divide-y divide-gray-200">
        <div className="space-y-2">
          <div className="flex justify-between">
            <h2 className="text-blue-950 font-semibold text-base">
              {author.authorName}
            </h2>
            <p className="text-base font-semibold text-gray-500">
              {author.authorGender}
            </p>
          </div>
          <div className="flex items-end justify-end gap-2">
            <CakeIcon className="w-6 h-6 text-blue-700 rounded-md" />
            <p className="truncate text-sm font-medium text-gray-700">
              {author.authorDateOfBirth}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
