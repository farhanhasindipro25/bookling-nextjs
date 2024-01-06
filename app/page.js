import BaseNavbar from "./components/BaseNavbar";
import BentoGridGallery from "./components/BentoGallery/BentoGridGallery";
import HeroSection from "./components/HeroSection/HeroSection";

export default function Home() {
  return (
    <div>
      <BaseNavbar />
      <HeroSection />
      <BentoGridGallery />
    </div>
  );
}
