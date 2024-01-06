import BentoGridGallery from "./components/BentoGallery/BentoGridGallery";
import BestSellerBooksListView from "./components/BooksList/BestSellerBooksListView";
import HeroSection from "./components/HeroSection/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BentoGridGallery />
      <BestSellerBooksListView />
    </div>
  );
}
