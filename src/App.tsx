import { ThemeProvider } from './context/ThemeContext';
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Lifestyle from './components/Lifestyle';
import Collection from './components/Collection';
import Ecosystem from './components/Ecosystem';
import Benefits from './components/Benefits';
import Stories from './components/Stories';
import Footer from './components/Footer';

function VoltMobile() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen bg-surface-light dark:bg-surface-dark transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <Lifestyle />
        <Collection />
        <Ecosystem />
        <Benefits />
        <Stories />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <VoltMobile />
    </ThemeProvider>
  );
}
