import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['Todos', 'Identidad visual', 'Contenido digital', 'Web', 'Branding']

const projects = [
  {
    id: 1,
    title: 'Terraza Sexto Cielo',
    category: 'Identidad visual',
    description: 'Identidad visual completa y estrategia de contenido para terraza-bar, incluyendo diseño de menús, piezas promocionales y gestión de redes sociales.',
    tools: ['Illustrator', 'Photoshop', 'Lightroom'],
    image: null,
    color: 'from-amber-200 to-earth-300',
  },
  {
    id: 2,
    title: 'Maquiagrícola del Norte',
    category: 'Web',
    description: 'Desarrollo de landing pages y optimización web para mejorar la presencia digital de la empresa agrícola.',
    tools: ['Shopify', 'HTML/CSS', 'SEO'],
    image: null,
    color: 'from-green-200 to-emerald-300',
  },
  {
    id: 3,
    title: 'Creative Jungle',
    category: 'Branding',
    description: 'Diseño de piezas gráficas para campañas digitales y apoyo en la conceptualización creativa de proyectos de branding.',
    tools: ['Illustrator', 'InDesign', 'Figma'],
    image: null,
    color: 'from-purple-200 to-violet-300',
  },
  {
    id: 4,
    title: 'Contenido para Redes',
    category: 'Contenido digital',
    description: 'Creación y edición de contenido audiovisual para redes sociales, incluyendo grabación de material y postproducción.',
    tools: ['Photoshop', 'Premiere Pro', 'Lightroom'],
    image: null,
    color: 'from-rose-200 to-pink-300',
  },
  {
    id: 5,
    title: 'Landing Page Corporativa',
    category: 'Web',
    description: 'Diseño y desarrollo de landing page optimizada para conversión con enfoque en UX/UI y principios de accesibilidad.',
    tools: ['Figma', 'HTML/CSS', 'JavaScript'],
    image: null,
    color: 'from-sky-200 to-blue-300',
  },
  {
    id: 6,
    title: 'Identidad de Marca',
    category: 'Identidad visual',
    description: 'Creación de identidad visual completa incluyendo logotipo, paleta cromática, tipografía y aplicaciones de marca.',
    tools: ['Illustrator', 'Photoshop', 'InDesign'],
    image: null,
    color: 'from-orange-200 to-amber-300',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.3 } },
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const filtered = activeFilter === 'Todos'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="proyectos" className="py-24 px-6 bg-cream-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-earth-500 font-medium text-sm uppercase tracking-[0.3em] mb-3">
            Proyectos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-earth-800 mb-4">
            Trabajos destacados
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-earth-600 text-white shadow-md'
                    : 'bg-white text-earth-600 hover:bg-earth-50 border border-cream-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-cream-200/50"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                    <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/80 text-earth-700 font-medium backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-earth-800 mb-2 group-hover:text-earth-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-earth-600/80 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-0.5 rounded bg-cream-100 text-earth-500"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <button className="text-sm font-medium text-earth-600 hover:text-earth-500 transition-colors flex items-center gap-1 group/btn">
                    Ver proyecto
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
