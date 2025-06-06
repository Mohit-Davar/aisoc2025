import { HeroSection } from "@/components/home/HeroSection";
import { Stats } from "@/components/home/Stats";
import { Why } from "@/components/home/Why";
import { Navbar } from "@/components/ui/resizable-navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Stats />
      <Why />
      <div className="min-h-screen">

      </div>
    </>
  );
}
