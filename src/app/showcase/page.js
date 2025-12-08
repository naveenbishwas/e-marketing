import Navbar from '../../components/Marketing/Navbar';
import Process from '../../components/Marketing/Process';
import FeaturedWork from '@/components/Marketing/FeaturedWork';
import TrustIcons from '@/components/Marketing/TrustIcons';
import ProportionalServiceGrid from '@/components/Marketing/ProportionalServiceGrid';
import Industries from '@/components/Marketing/Industries';
import SocialProof from '../../components/Marketing/SocialProof';
import LeadForm from '../../components/Marketing/LeadForm';
import Footer from '../../components/Marketing/Footer';
import DirectionAwareBanner from '@/components/Marketing/DirectionAwareBanner';
// import ClientLogoGrid from '@/components/Marketing/ClientLogoGrid';
import ImageAccordion from '@/components/Marketing/ImageAccordion';

export default function Showcase() {
    return (
        <main style={{ minHeight: '100vh' }}>
            <Navbar />
            <DirectionAwareBanner />
            <Process />
            <ImageAccordion />
            <FeaturedWork />
            <TrustIcons />
            <ProportionalServiceGrid />
            {/* <ClientLogoGrid /> */}
            <Industries />
            <SocialProof />
            <LeadForm />
            <Footer />
        </main>
    );
}
