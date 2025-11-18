import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import LogoTicker from './components/LogoTicker'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="[scroll-behavior:smooth]">
        <Hero />
        <LogoTicker />
        <Features />
        <CTA />
        <footer className="border-t border-slate-200 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-rose-500 to-rose-600" />
              <span className="text-sm text-slate-600">© {new Date().getFullYear()} Syclo. All rights reserved.</span>
            </div>
            <nav className="flex items-center gap-6 text-sm text-slate-600">
              <a href="#" className="hover:text-rose-700">Privacy</a>
              <a href="#" className="hover:text-rose-700">Terms</a>
              <a href="#" className="hover:text-rose-700">Security</a>
            </nav>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
