import '@/App.css';
import { SmoothScroll } from '@/components/landing/SmoothScroll';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { Manifesto } from '@/components/landing/Manifesto';
import { Technology } from '@/components/landing/Technology';
import { EditorialMarquee } from '@/components/landing/EditorialMarquee';
import { Capabilities } from '@/components/landing/Capabilities';
import { Impact } from '@/components/landing/Impact';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';

function App() {
  return (
    <SmoothScroll>
      <div className="App relative bg-[#050505] text-white">
        {/* Grain texture overlay */}
        <div className="grain-overlay pointer-events-none fixed inset-0 z-[100] opacity-[0.05] mix-blend-overlay" />

        <Navbar />
        <main>
          <Hero />
          <Manifesto />
          <Technology />
          <EditorialMarquee />
          <Capabilities />
          <Impact />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
