import { getDateInDMYFormat } from "@/utils/UtilsKit";
import Badge from "@/components/Badge";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CakeIcon } from "@heroicons/react/24/outline";

const cardVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

export default function BookCard({ book }) {
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
        src={book.bookImg || "/assets/img-placeholder.jpg"}
        alt={book.bookName}
        width={2160}
        height={1080}
        priority
        className="w-full rounded-t-lg object-cover aspect-auto"
      />
      <div className="absolute top-4 left-4">
        <Badge variant={book.bookCategory}>{book.bookCategory}</Badge>
      </div>
      <div className="p-4 space-y-1 divide-y divide-gray-200">
        <div>
          <h2 className="text-blue-950 font-semibold text-base">
            {book.bookName}
          </h2>
          <p className="text-gray-500 font-medium text-sm">
            {getDateInDMYFormat(book.publicationDate)}
          </p>
        </div>
        <div className="flex pt-2 items-center justify-start gap-2">
          <Image
            src={book.authorAvatar || "/assets/img-placeholder.jpg"}
            alt={book.bookName}
            width={100}
            height={100}
            priority
            className="w-12 h-12 rounded-full object-cover aspect-auto object-top"
          />
          <div>
            <h2 className="font-medium text-blue-950 text-sm">
              {book.authorName}
            </h2>
            <div className="flex items-end gap-2">
              <CakeIcon className="w-6 h-6 text-blue-700 rounded-md" />
              <p className="text-sm font-medium text-gray-700">
                {" "}
                {getDateInDMYFormat(book.authorBirthYear)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
