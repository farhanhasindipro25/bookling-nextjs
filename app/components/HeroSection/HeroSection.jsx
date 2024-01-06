import LargeScreenHero from "./LargeScreenHero";
import MediumScreenHero from "./MediumScreenHero";
import SmallScreenHero from "./SmallScreenHero";

export default function HeroSection() {
  return (
    <>
      <div className="hidden lg:block">
        <LargeScreenHero />
      </div>
      <div className="hidden md:block lg:hidden">
        <SmallScreenHero />
      </div>
      <div className="block md:hidden">
        <SmallScreenHero />
      </div>
    </>
  );
}
