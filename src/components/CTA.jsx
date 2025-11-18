import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="demo" className="relative py-24 bg-gradient-to-b from-white to-rose-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h3 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl font-semibold text-slate-900">
              See Syclo in action
            </motion.h3>
            <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1,duration:0.6}} className="mt-3 text-slate-600">
              Get a tailored walk-through for your team and learn how Syclo can streamline your operations.
            </motion.p>

            <form className="mt-8 grid sm:grid-cols-2 gap-3">
              <input className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="Work email" />
              <input className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="Company" />
              <button type="button" className="sm:col-span-2 inline-flex items-center justify-center rounded-lg bg-rose-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-rose-700 transition-colors">
                Request demo
              </button>
            </form>
          </div>

          <div className="relative rounded-2xl border border-rose-200 bg-white p-6 shadow-sm">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-50 to-rose-50 flex items-center justify-center text-rose-600">Interactive preview</div>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
              <li>• Guided onboarding</li>
              <li>• Migration support</li>
              <li>• Dedicated success manager</li>
              <li>• Enterprise-grade security</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
