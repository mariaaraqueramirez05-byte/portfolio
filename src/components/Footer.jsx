import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-base border-t border-line py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-muted"
        >
          &copy; {new Date().getFullYear()} Maria Gabriela Araque Ramírez. Todos los derechos reservados.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-line"
        >
          Diseñado con <span className="text-muted">&#9829;</span> y café
        </motion.p>
      </div>
    </footer>
  )
}
