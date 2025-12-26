// import Navbar from '../../components/Marketing/Navbar';
import Process from "../../components/Marketing/Process";
import FeaturedWork from "@/components/Marketing/FeaturedWork";
import TrustIcons from "@/components/Marketing/TrustIcons";
import ProportionalServiceGrid from "@/components/Marketing/ProportionalServiceGrid";
import Industries from "@/components/Marketing/Industries";
import SocialProof from "../../components/Marketing/SocialProof";
import LeadForm from "../../components/Marketing/LeadForm";
// import Footer from "../../components/Marketing/Footer";
import DirectionAwareBanner from "@/components/Marketing/DirectionAwareBanner";
// import ClientLogoGrid from '@/components/Marketing/ClientLogoGrid';
import ImageAccordion from "@/components/Marketing/ImageAccordion";
import Header from "@/components/Header/page";
import StickyScrollAnimation from "@/components/Marketing/StickyScrollAnimation"
import Footer from "@/components/footer/page";

export default function Showcase() {
  return (
    <main style={{ minHeight: "100vh" }}>
      {/* <Navbar /> */}
      <Header />
      <DirectionAwareBanner />
      <Process />
      {/* <FeaturedWork /> */}
      <TrustIcons />
      <ImageAccordion />
      <ProportionalServiceGrid />
      {/* <ClientLogoGrid /> */}
      {/* <Industries /> */}
      <StickyScrollAnimation/>
      <SocialProof />
      <LeadForm />
      <Footer />
    </main>
  );
}
