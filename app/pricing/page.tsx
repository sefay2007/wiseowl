import PricingSection from "@/components/PricingSection";
import Header from "@/components/Header";
import ComparePlans from "@/components/ComparePlans";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
      <div>
          <Header />
          <PricingSection />
          <ComparePlans />
          <Footer/>
      </div>
  );
}
