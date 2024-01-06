
import BentoGridGallery from "./components/BentoGallery/BentoGridGallery";
import BooksListView from "./components/BooksList/BooksListView";
import HeroSection from "./components/HeroSection/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BentoGridGallery />
      <BooksListView />
    </div>
  );
}
