import LargeScreenHero from "./LargeScreenHero";
import MediumScreenHero from "./MediumScreenHero";

export default function HeroSection() {
  return (
    <>
      <div className="hidden lg:block">
        <LargeScreenHero />
      </div>
      <div className="hidden md:block">
        <MediumScreenHero />
      </div>
    </>
  );
}
