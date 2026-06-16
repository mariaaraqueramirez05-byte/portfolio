import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function AnimatedSection({ children, className }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 px-6 bg-base">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-primary font-medium text-sm uppercase tracking-[0.3em] mb-3 text-center">
            Sobre mí
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-main text-center mb-16">
            Conoce más sobre mi trabajo
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-line to-card shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-primary">
                <svg className="w-32 h-32 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-5">
              <p className="text-main/90 leading-relaxed text-lg">
                Soy diseñadora gráfica apasionada por crear identidades visuales que
                cuentan historias. Creo firmemente que el buen diseño no solo se ve bien
                — también funciona, comunica y transforma.
              </p>
              <p className="text-muted/80 leading-relaxed">
                Mi enfoque combina sensibilidad estética con pensamiento estratégico.
                Me encanta entender las necesidades de cada proyecto para traducirlas en
                soluciones visuales auténticas y efectivas, ya sea a través del diseño
                editorial, la creación de contenido digital, la optimización web o la
                gestión de redes sociales.
              </p>
              <p className="text-muted/80 leading-relaxed">
                Para mí, cada detalle importa. Desde la elección tipográfica hasta el
                último píxel, busco que cada pieza transmita la esencia de la marca y
                conecte genuinamente con su audiencia.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-heading text-xl">
                  MG
                </div>
                <div>
                  <p className="font-heading text-lg text-main">Maria Gabriela Araque Ramírez</p>
                  <p className="text-sm text-primary">Diseñadora Gráfica</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
