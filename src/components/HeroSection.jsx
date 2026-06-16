import { motion } from 'framer-motion'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 bg-gradient-to-b from-base to-card relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-dark/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 bg-line">
            <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-5xl font-heading">
              MG
            </div>
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-primary font-medium text-sm md:text-base uppercase tracking-[0.3em] mb-4"
        >
          Diseñadora Gráfica
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-main leading-tight mb-6"
        >
          Maria Gabriela
          <br />
          <span className="text-primary">Araque Ramírez</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-muted/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transformo ideas en experiencias visuales que conectan, comunican y perduran.
          Cada proyecto es una oportunidad para crear algo auténtico y significativo.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#proyectos"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#proyectos')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-3.5 bg-primary-dark text-white rounded-full font-medium text-sm hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Ver proyectos
          </a>
          <a
            href="#"
            className="px-8 py-3.5 border-2 border-primary text-main rounded-full font-medium text-sm hover:bg-primary/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Descargar CV
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
