import { Footer } from '@/components/Footer';
import { FAQ } from '@/components/home/FAQ';
import { HeroSection } from '@/components/home/HeroSection';
import { Stats } from '@/components/home/Stats';
import NewsLetter from '@/components/home/Updates';
import { Why } from '@/components/home/Why';
import { Navbar } from '@/components/ui/resizable-navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Stats />
      <Why />
      <FAQ />
      <NewsLetter/>
      <Footer />
    </>
  );
}
