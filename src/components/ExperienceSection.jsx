import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    period: 'Jun 2024 — Jun 2025',
    role: 'Diseñadora gráfica & vendedora',
    company: 'Terraza Sexto Cielo',
    description:
      'Diseño de identidad visual, creación de contenido promocional y atención al cliente, combinando estrategia de marketing con diseño para fortalecer la presencia de la marca.',
    tags: ['Identidad visual', 'Marketing', 'Contenido digital'],
  },
  {
    period: 'Dic 2023 — Feb 2024',
    role: 'Diseñadora gráfica',
    company: 'Creative Jungle',
    description:
      'Desarrollo de piezas gráficas para campañas digitales, diseño editorial y apoyo en la conceptualización creativa de proyectos de branding.',
    tags: ['Branding', 'Diseño editorial', 'Campañas digitales'],
  },
  {
    period: '2023 — 2024',
    role: 'Diseñadora gráfica',
    company: 'Maquiagrícola del Norte',
    description:
      'Creación y edición de contenido audiovisual, grabación de material, gestión de redes sociales, desarrollo de landing pages y optimización de páginas web para mejorar la presencia digital de la empresa.',
    tags: ['Contenido audiovisual', 'Landing pages', 'SEO', 'Redes sociales'],
  },
]

function TimelineItem({ experience, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      className="relative pl-8 md:pl-0 md:flex md:gap-8"
    >
      <div className="hidden md:block md:w-1/2 md:text-right">
        <span className="text-muted text-sm font-medium">{experience.period}</span>
      </div>

      <div className="relative pb-12 md:w-1/2">
        <div className="absolute left-[-25px] md:left-[-24.5px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-base z-10" />
        <div className="md:hidden mb-1">
          <span className="text-muted text-sm font-medium">{experience.period}</span>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-line/50">
          <h3 className="font-heading text-xl text-main mb-1">{experience.role}</h3>
          <p className="text-primary font-medium text-sm mb-3">{experience.company}</p>
          <p className="text-muted/80 text-sm leading-relaxed mb-4">
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-card text-secondary-light font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-[0.3em] mb-3">
            Experiencia
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-main">
            Trayectoria profesional
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[7px] md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-line" />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <TimelineItem key={i} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
