import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className='relative bg-black py-16 overflow-hidden'>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className='absolute -top-20 -left-20 w-60 h-60 bg-brand-red/20 rounded-full'
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className='absolute top-20 right-0 w-40 h-40 bg-brand-red/20 rounded-full translate-x-1/2'
      />

      <div className='relative z-10 max-w-6xl mx-auto px-6'>
        <div className='grid md:grid-cols-4 gap-10 mb-12'>
          <div className='md:col-span-2'>
            <h3 className='text-3xl font-black text-white leading-none mb-4'>
              LAS DELICIAS
              <br />
              <span className='text-brand-red'>DE LA BIRRIA</span>
            </h3>
            <p className='text-white/60 text-sm leading-relaxed mt-4'>
              Tradición mexicana desde 1985. ¡Visítanos y vive la experiencia!
            </p>
          </div>

          <div>
            <h4 className='text-xs font-bold text-white tracking-[0.3em] uppercase mb-4'>
              Horario
            </h4>
            <ul className='text-white/60 text-sm space-y-2'>
              <li>Lun - Jue: 9am - 10pm</li>
              <li>Vie - Sáb: 9am - 11pm</li>
              <li>Domingo: 9am - 9pm</li>
            </ul>
          </div>

          <div>
            <h4 className='text-xs font-bold text-white tracking-[0.3em] uppercase mb-4'>
              Contacto
            </h4>
            <ul className='text-white/60 text-sm space-y-2'>
              <li>📞 (55) 1234-5678</li>
              <li>📧 info@deliciasbirria.com</li>
              <li>📍 Av. Principal #123</li>
            </ul>
          </div>
        </div>

        <div className='border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-white/40 text-xs'>
            © 2026 Las Delicias de la Birria. Todos los derechos reservados.
          </p>
          <div className='flex gap-4'>
            {['🍕', '📸', '🐦'].map((icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, color: '#DC2626' }}
                className='text-white/60 text-xl transition-colors'
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};