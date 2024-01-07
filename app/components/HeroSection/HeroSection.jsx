import LargeScreenHero from "./LargeScreenHero";
import SmallScreenHero from "./SmallScreenHero";

export default function HeroSection() {
  return (
    <>
      <div className="block lg:hidden">
        <SmallScreenHero />
      </div>
      <div className="hidden lg:block">
        <LargeScreenHero />
      </div>
    </>
  );
}
