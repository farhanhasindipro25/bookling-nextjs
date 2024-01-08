import ImageCard from "./ImageCard";

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
  {
    src: "/assets/gallery/img18.jpg",
  },
  {
    src: "/assets/gallery/img19.jpg",
  },
  {
    src: "/assets/gallery/img20.jpg",
  },
];

export default function BentoGridGallery() {
  return (
    <div className="space-y-4 md:space-y-12 py-20 lg:py-24">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-blue-950">
        LITERARY TREASURES
        <span className="text-xl md:text-3xl lg:text-4xl ml-4 text-blue-700">
          A VISUAL FEAST
        </span>
      </h2>

      <div className="grid-cols-3 md:grid-cols-5 gap-4 grid">
        {images?.map((image, index) => (
          <ImageCard key={index + 1} image={image} index={index} />
        ))}
      </div>
    </div>
  );
}
