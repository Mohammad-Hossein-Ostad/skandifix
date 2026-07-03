import Header from "./components/Header"
import Card from "./components/Card"
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-8xl flex-col">
    <Header />
    <Card />
    <AboutSection />
    </main>
  );
}
