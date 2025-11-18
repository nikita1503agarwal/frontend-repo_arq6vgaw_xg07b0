import { motion } from 'framer-motion'

const logos = ['Acme', 'Orbit', 'Nova', 'Vertex', 'Pulse', 'Zenit']

export default function LogoTicker() {
  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center text-slate-500 text-sm">Trusted by modern operations teams</div>
        <div className="relative mt-6 overflow-hidden">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 16, ease: 'linear', repeat: Infinity }}
          >
            {[...logos, ...logos].map((l, i) => (
              <div key={i} className="text-slate-400 text-xl font-medium">{l}</div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
