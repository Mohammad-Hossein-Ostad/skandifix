import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-8xl">
      <Header />
      <HeroSection />
      <AboutSection />
      <Categories />
    </main>
  );
}
