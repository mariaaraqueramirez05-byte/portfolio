import { motion } from 'framer-motion'

const testimonials = [
  {
    text: 'El espacio está preparado para recibir tus recomendaciones. Esta sección se llenará pronto con las experiencias de quienes han trabajado conmigo.',
    author: '¿Trabajamos juntos?',
    role: 'Tu opinión es importante',
    placeholder: true,
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-24 px-6 bg-base">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-[0.3em] mb-3">
            Testimonios
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-main">
            Lo que dicen de mí
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-line/50 text-center"
        >
          <svg className="w-10 h-10 text-line mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.144 11 15c0 2.21-1.79 4-4 4-1.2 0-2.197-.447-3.417-1.679zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.144 21 15c0 2.21-1.79 4-4 4-1.2 0-2.197-.447-3.417-1.679z" />
          </svg>
          <p className="text-muted/90 text-lg leading-relaxed mb-8 italic">
            "{testimonials[0].text}"
          </p>
          <div>
            <p className="font-heading text-lg text-main">{testimonials[0].author}</p>
            <p className="text-sm text-muted mt-1">{testimonials[0].role}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
