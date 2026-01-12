import Header from '../components/Header'
import DashboardSection from '../components/DashboardSection';
import LogoScroller from '../components/LogoScroller';
import HowItWorksSection from '../components/HowItWorksSection';
import PerformanceBreakdownSection from '../components/PerformanceBreakdownSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';



export default function Home() {
  return (
    <div>
      <Header/>
      <DashboardSection/>
      <LogoScroller/>
      <HowItWorksSection/>
      <PerformanceBreakdownSection/>
      <TestimonialsSection/>
      <Footer/>
    </div>
  );
}

