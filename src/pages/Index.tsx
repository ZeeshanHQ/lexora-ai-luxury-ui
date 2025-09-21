import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PricingSection } from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PricingSection />
      </main>
    </div>
  );
};

export default Index;
