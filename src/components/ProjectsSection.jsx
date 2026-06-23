import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['Todos', 'Identidad visual', 'Contenido digital', 'Web', 'Branding']

const behanceProfileUrl = 'https://www.behance.net/gabrieltakafum'

const projects = [
  {
    id: 1,
    title: 'Identidad Visual',
    subtitle: 'Branding para Terraza Sexto Cielo',
    category: 'Identidad visual',
    description: 'Diseño de identidad visual completa: logotipo, paleta cromática, tipografía, piezas promocionales y estrategia de contenido. Un proyecto que requería transmitir calidez y personalidad en cada punto de contacto visual.',
    tools: ['Illustrator', 'Photoshop', 'InDesign'],
    url: 'https://www.behance.net/gallery/224617793/Manual-de-Marca-Terraza-Sexto-Cielo',
    image: '/images/projects/identidad-visual.png',
    color: 'from-primary to-primary-dark',
  },
  {
    id: 2,
    title: 'Diseño Web',
    subtitle: 'Portafolio profesional — proyecto personal',
    category: 'Web',
    description: 'Diseño y desarrollo de este portafolio web con React y Tailwind CSS. Optimizado para rendimiento, responsive, con animaciones fluidas y una experiencia de usuario pensada para destacar el trabajo creativo.',
    tools: ['Figma', 'HTML/CSS', 'JavaScript'],
    url: behanceProfileUrl,
    image: '/images/projects/diseno-web.png',
    color: 'from-secondary to-secondary-light',
  },
  {
    id: 3,
    title: 'SEO y Optimización Web',
    subtitle: 'Proyecto desarrollado para Maquiagrícola del Norte',
    category: 'Web',
    description: 'Optimización de páginas web, desarrollo de landing pages enfocadas en conversión y mejora de posicionamiento SEO. Implementación de buenas prácticas de rendimiento y accesibilidad para maximizar el alcance orgánico.',
    tools: ['Shopify', 'HTML/CSS', 'SEO'],
    url: 'https://www.behance.net/gallery/249117783/Rediseno-Web-MQ-del-Norte',
    image: '/images/projects/seo-optimizacion-web.png',
    color: 'from-amber-400 to-amber-600',
  },
  {
    id: 4,
    title: 'Ilustración Digital',
    subtitle: 'Proyectos personales y comerciales',
    category: 'Contenido digital',
    description: 'Creación de ilustraciones digitales con técnicas vectoriales y rasterizadas. Desde piezas decorativas hasta gráficos funcionales, combinando creatividad y precisión técnica para comunicar visualmente.',
    tools: ['Illustrator', 'Photoshop', 'Procreate'],
    url: 'https://www.behance.net/gallery/221378537/Libro-Kells-Ilustracion',
    image: '/images/projects/ilustracion-digital.png',
    color: 'from-rose-300 to-rose-500',
  },
  {
    id: 5,
    title: 'Infografías',
    subtitle: 'Datos complejos, diseño claro',
    category: 'Contenido digital',
    description: 'Diseño de infografías que transforman información compleja en piezas visuales claras, atractivas y fáciles de digerir. Cada proyecto un ejercicio de síntesis, jerarquía visual y comunicación estratégica.',
    tools: ['Illustrator', 'InDesign', 'Photoshop'],
    url: 'https://www.behance.net/gallery/215474319/Infografia-Energia-Renovable',
    image: '/images/projects/infografias.png',
    color: 'from-sky-400 to-blue-500',
  },
  {
    id: 6,
    title: 'Contenido para Redes Sociales',
    subtitle: 'Gestión y creación para múltiples marcas',
    category: 'Contenido digital',
    description: 'Creación de contenido audiovisual, fotografía, edición de video y diseño gráfico para redes sociales. Estrategia visual coherente que mantiene la identidad de marca mientras genera engagement y alcance.',
    tools: ['Photoshop', 'Premiere Pro', 'Lightroom'],
    url: 'https://www.behance.net/gallery/251562389/Contenido-para-redes-sociales',
    image: '/images/projects/redes-sociales.png',
    color: 'from-emerald-300 to-emerald-500',
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
    <section id="proyectos" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-[0.3em] mb-3">
            Proyectos
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-main mb-4">
            Trabajos destacados
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-card text-secondary-light hover:bg-card border border-line'
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
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-line/50 cursor-pointer block"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-card/80 text-main font-medium backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg text-main group-hover:text-secondary-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted mt-0.5 mb-2">{project.subtitle}</p>
                  <p className="text-secondary-light/80 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-0.5 rounded bg-card text-primary"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-secondary-light group-hover:text-primary transition-colors inline-flex items-center gap-1.5">
                    Ver proyecto
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href={behanceProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 7.5h-8v-1h8v1zm0-3h-8v1h8v-1zM14 12.5c.8.6 1.3 1.5 1.3 2.7 0 2.3-1.5 3.8-4 3.8H6V5.2h5.2c2 0 3.3 1.1 3.3 3 0 1.4-.9 2.4-2.5 2.9v.2c1.9.3 3 1.3 3 3.2zm-5-5.8H9v3.1h1.2c1.1 0 1.7-.5 1.7-1.5s-.6-1.6-1.9-1.6zm0 4.7H9v3.6h1.6c1.2 0 1.9-.6 1.9-1.8s-.8-1.8-2.5-1.8zM24 17.5h-5.2c.3 1.4 1.3 2.1 2.7 2.1 1.1 0 1.9-.4 2.5-1.2l1.5 1c-.9 1.3-2.2 2-4 2-2.9 0-4.8-2.1-4.8-5s1.9-5 4.8-5c2.8 0 4.5 2 4.5 5 0 .4 0 .8-.3 1.1zm-5.3-1.4h3.2c-.2-1.3-1-2-1.8-2s-1.4.7-1.4 2z" />
            </svg>
            Ver todos en Behance
          </a>
        </motion.div>
      </div>
    </section>
  )
}
