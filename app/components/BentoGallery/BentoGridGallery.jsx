import Image from "next/image";

export default function BentoGridGallery() {
  return (
    <div className="space-y-4 md:space-y-12 lg:pt-40">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-blue-950">
        LITERARY TREASURES
        <span className="text-xl md:text-3xl lg:text-4xl ml-4 text-blue-700">
          A VISUAL FEAST
        </span>
      </h2>

      <div className="grid-cols-3 md:grid-cols-5 gap-4 grid">
        <Image
          src="/assets/gallery/img8.jpg"
          alt="bento-1"
          width={2160}
          height={1080}
          priority
          className="w-full h-full object-cover aspect-auto rounded-xl hover:scale-105 hover:rotate-1 ease-in-out duration-500"
        />
        <Image
          src="/assets/gallery/img4.jpg"
          alt="bento-1"
          width={2160}
          height={1080}
          priority
          className="w-full h-full md:col-span-2 object-cover aspect-auto rounded-xl hover:scale-105 hover:rotate-1 ease-in-out duration-500"
        />
        <Image
          src="/assets/gallery/img2.jpg"
          alt="bento-1"
          width={2160}
          height={1080}
          priority
          className="w-full h-full object-cover aspect-auto rounded-xl hover:scale-105 hover:rotate-1 ease-in-out duration-500"
        />
        <Image
          src="/assets/gallery/img3.jpg"
          alt="bento-1"
          width={2160}
          height={1080}
          priority
          className="w-full h-full object-cover aspect-auto rounded-xl hover:scale-105 hover:rotate-1 ease-in-out duration-500"
        />
        <Image
          src="/assets/gallery/img6.jpg"
          alt="bento-1"
          width={2160}
          height={1080}
          priority
          className="w-full h-full md:col-span-2 object-cover aspect-auto rounded-xl hover:scale-105 hover:rotate-1 ease-in-out duration-500"
        />
        <Image
          src="/assets/gallery/img9.jpg"
          alt="bento-1"
          width={2160}
          height={1080}
          priority
          className="w-full h-full object-cover aspect-auto rounded-xl hover:scale-105 hover:rotate-1 ease-in-out duration-500"
        />
        <Image
          src="/assets/gallery/img10.jpg"
          alt="bento-1"
          width={2160}
          height={1080}
          priority
          className="w-full h-full object-cover aspect-auto rounded-xl hover:scale-105 hover:rotate-1 ease-in-out duration-500"
        />
        <Image
          src="/assets/gallery/img13.jpg"
          alt="bento-1"
          width={2160}
          height={1080}
          priority
          className="w-full h-full object-cover aspect-auto rounded-xl hover:scale-105 hover:rotate-1 ease-in-out duration-500"
        />
        <Image
          src="/assets/gallery/img14.jpg"
          alt="bento-1"
          width={2160}
          height={1080}
          priority
          className="w-full h-full object-cover md:h-3/4 aspect-auto rounded-xl hover:scale-105 hover:rotate-1 ease-in-out duration-500"
        />
        <Image
          src="/assets/gallery/img12.jpg"
          alt="bento-1"
          width={2160}
          height={1080}
          priority
          className="w-full h-full md:col-span-2 md:h-3/4 object-cover aspect-auto rounded-xl hover:scale-105 hover:rotate-1 ease-in-out duration-500"
        />
        <Image
          src="/assets/gallery/img15.jpg"
          alt="bento-1"
          width={2160}
          height={1080}
          priority
          className="w-full col-span-2 h-full md:h-3/4 object-cover aspect-auto rounded-xl hover:scale-105 hover:rotate-1 ease-in-out duration-500"
        />
      </div>
    </div>
  );
}
