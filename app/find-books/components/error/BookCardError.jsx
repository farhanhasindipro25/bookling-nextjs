import Badge from "@/components/Badge";
import Image from "next/image";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { CakeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SelectField from "@/components/forms/SelectField";

const cardVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

export default function BookCardError() {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-center gap-4 w-full">
        <div className="w-full md:w-1/3">
          <SelectField
            label="Publication Date"
            name="publication_date"
            id="publication_date"
            disabled={true}
          />
        </div>
        <div className="w-full md:w-1/3">
          <SelectField
            label="Author Gender"
            name="author_gender"
            id="author_gender"
          />
        </div>
        <div className="w-full md:w-1/3">
          <SelectField
            label="Book Category"
            name="book_category"
            id="book_category"
          />
        </div>
      </div>
      <div className="space-y-4 md:space-y-6">
        <div className="flex items-center gap-2 w-fit bg-red-100 py-2 px-4 rounded-lg">
          <ExclamationTriangleIcon className="w-7 p-1 bg-red-600 rounded-full text-white h-7" />
          <h2 className="text-red-600 font-medium text-sm">
            The server ran into an issue. Please have patience and try again
            later!
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
                <div className="space-y-4">
                  <div className="flex pt-2 items-center justify-start gap-2">
                    <Image
                      src="/assets/img-placeholder.jpg"
                      alt="author-skeleton"
                      width={100}
                      height={100}
                      priority
                      className="w-10 h-10 rounded-full object-cover aspect-auto object-top"
                    />
                    <div className="w-full space-y-2">
                      <div className="bg-gray-200 w-3/4 h-3 rounded-full" />
                      <div className="bg-gray-200 w-1/2 h-3 rounded-full" />
                    </div>
                  </div>
                  <div className="flex justify-end items-center gap-2">
                    <CakeIcon className="w-6 h-6 text-gray-300 rounded-md" />
                    <div className="bg-gray-200 w-1/2 h-3 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
