import { motion } from 'framer-motion'

const socialLinks = [
  {
    name: 'Behance',
    href: '#',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 7.5h-8v-1h8v1zm0-3h-8v1h8v-1zM14 12.5c.8.6 1.3 1.5 1.3 2.7 0 2.3-1.5 3.8-4 3.8H6V5.2h5.2c2 0 3.3 1.1 3.3 3 0 1.4-.9 2.4-2.5 2.9v.2c1.9.3 3 1.3 3 3.2zm-5-5.8H9v3.1h1.2c1.1 0 1.7-.5 1.7-1.5s-.6-1.6-1.9-1.6zm0 4.7H9v3.6h1.6c1.2 0 1.9-.6 1.9-1.8s-.8-1.8-2.5-1.8zM24 17.5h-5.2c.3 1.4 1.3 2.1 2.7 2.1 1.1 0 1.9-.4 2.5-1.2l1.5 1c-.9 1.3-2.2 2-4 2-2.9 0-4.8-2.1-4.8-5s1.9-5 4.8-5c2.8 0 4.5 2 4.5 5 0 .4 0 .8-.3 1.1zm-5.3-1.4h3.2c-.2-1.3-1-2-1.8-2s-1.4.7-1.4 2z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
]

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-[0.3em] mb-3">
            Contacto
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-main">
            Trabajemos juntos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-main mb-1.5">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-line bg-card text-main placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-main mb-1.5">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-line bg-card text-main placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-main mb-1.5">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-line bg-card text-main placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3.5 bg-primary text-white rounded-xl font-medium text-sm hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Enviar mensaje
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="font-heading text-2xl text-main mb-4">
                Hablemos de tu próximo proyecto
              </h3>
              <p className="text-muted/80 leading-relaxed mb-8">
                Estoy abierta a nuevas oportunidades y colaboraciones. 
                Si tienes un proyecto en mente o simplemente quieres saludar, 
                no dudes en escribirme.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href="mailto:maria@example.com"
                  className="flex items-center gap-3 text-secondary-light hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  maria@example.com
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-secondary-light mb-4">Encuéntrame en:</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card border border-line flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
