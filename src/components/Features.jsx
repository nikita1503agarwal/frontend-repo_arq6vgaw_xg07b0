import { motion } from 'framer-motion'
import { BarChart2, Boxes, Receipt, Users, Warehouse, Workflow, Zap } from 'lucide-react'

const features = [
  {
    icon: BarChart2,
    title: 'Finance & Accounting',
    desc: 'Close faster with automated reconciliations, approvals, and real-time reporting.'
  },
  {
    icon: Warehouse,
    title: 'Inventory & SCM',
    desc: 'End-to-end visibility across warehouses with demand forecasting built-in.'
  },
  {
    icon: Users,
    title: 'HR & Payroll',
    desc: 'Onboard, manage, and pay your workforce in one place with compliance baked in.'
  },
  {
    icon: Receipt,
    title: 'Sales & Billing',
    desc: 'Quotes-to-cash streamlined with CPQ, e-invoicing, and collections.'
  },
  {
    icon: Boxes,
    title: 'Manufacturing',
    desc: 'Plan and execute production with MRP, BOM, and shop-floor insights.'
  },
  {
    icon: Workflow,
    title: 'Workflows',
    desc: 'Drag-and-drop automations, approvals, and alerts across every module.'
  },
]

export default function Features() {
  return (
    <section id="modules" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Everything your operations need
          </motion.h2>
          <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1,duration:0.6}} className="mt-3 text-slate-600">
            Modular by design. Unified at the core.
          </motion.p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({icon:Icon,title,desc}, i) => (
            <motion.div
              key={title}
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true, margin:'-100px'}}
              transition={{duration:0.6, delay: i*0.05}}
              className="group rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="h-11 w-11 rounded-xl grid place-items-center bg-rose-50 text-rose-700 ring-1 ring-rose-100 group-hover:bg-rose-100">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
