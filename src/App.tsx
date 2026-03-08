import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { HowItWorks } from './sections/HowItWorks';
import { Demo } from './sections/Demo';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Demo />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
