import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative h-[92vh] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/20 pointer-events-none" />

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-3 py-1 text-xs text-rose-700 shadow-sm backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-rose-500" />
              New: AI-assisted operations across every module
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-4 text-5xl sm:text-6xl font-semibold tracking-tight text-slate-900"
            >
              The modern ERP for teams that move fast
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-4 text-lg text-slate-600"
            >
              Syclo unifies finance, inventory, sales, HR, and operations into one sleek platform. Real-time visibility. Automated workflows. Zero busywork.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3"
            >
              <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-rose-700 transition-colors">
                Book a live demo
              </a>
              <a href="#modules" className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-slate-700 font-medium hover:text-rose-700 transition-colors">
                Explore modules
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
