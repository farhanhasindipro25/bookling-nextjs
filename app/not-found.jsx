import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="space-y-6 flex flex-col items-center justify-center">
      <Image
        src="/assets/404.jpg"
        alt="404"
        width={2160}
        height={1080}
        className="w-full h-full sm:w-3/4 sm:h-3/4 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3 object-cover aspect-auto rounded-lg"
      />

      <h2 className="text-lg lg:text-xl font-semibold text-blue-950 text-center">
        It seems like the page you are looking for doesn't exist.
        <span className="ml-2 text-blue-700">
          Take a seat and pick a good read!
        </span>
      </h2>
    </div>
  );
}
