import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Diseño',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    skills: [
      { name: 'Adobe Illustrator', level: 95 },
      { name: 'Adobe Photoshop', level: 90 },
      { name: 'Adobe InDesign', level: 85 },
      { name: 'Figma', level: 80 },
    ],
  },
  {
    title: 'Marketing Digital',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38a.497.497 0 01-.497-.028 10.507 10.507 0 01-4.042-5.231M10.34 15.84A7.5 7.5 0 0012 13.5m0 0a7.5 7.5 0 002.912-4.748M12 13.5a7.499 7.499 0 002.912-4.748m0 0A7.49 7.49 0 0012 4.5a7.49 7.49 0 00-2.912 4.252m5.655 0a7.5 7.5 0 00-2.246 4.252M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    skills: [
      { name: 'Gestión de redes sociales', level: 90 },
      { name: 'Creación de contenido', level: 95 },
      { name: 'SEO básico', level: 75 },
      { name: 'Optimización web', level: 80 },
    ],
  },
  {
    title: 'Desarrollo Web',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    skills: [
      { name: 'Shopify', level: 75 },
      { name: 'Landing pages', level: 85 },
      { name: 'UX/UI', level: 80 },
    ],
  },
]

function SkillBar({ name, level, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-earth-700">{name}</span>
        <span className="text-xs text-earth-400">{level}%</span>
      </div>
      <div className="h-2 bg-cream-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.1 * index, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-earth-400 to-earth-600 rounded-full"
        />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="habilidades" className="py-24 px-6 bg-cream-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-earth-500 font-medium text-sm uppercase tracking-[0.3em] mb-3">
            Habilidades
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-earth-800">
            Mis herramientas y conocimientos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-cream-200/50 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-cream-100 flex items-center justify-center text-earth-500">
                  {category.icon}
                </div>
                <h3 className="font-serif text-lg text-earth-800">{category.title}</h3>
              </div>
              {category.skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} index={i} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
