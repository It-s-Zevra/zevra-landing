import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import WhyUs from "@/components/sections/WhyUs";
import ProductsShowcase from "@/components/sections/ProductsShowcase";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <WhyUs />
      <ProductsShowcase />
      <CtaBanner />
    </main>
  );
}
