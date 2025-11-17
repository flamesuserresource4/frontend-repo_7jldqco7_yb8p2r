import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
      <footer className="border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} MPU KI – Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Impressum</a>
            <a href="#" className="hover:text-gray-900">Datenschutz</a>
            <a href="#" className="hover:text-gray-900">AGB</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
