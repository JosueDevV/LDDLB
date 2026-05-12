import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section className='relative py-24 bg-white overflow-hidden'>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className='absolute top-20 left-0 w-40 h-40 bg-brand-red/10 rounded-full -translate-x-1/2'
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
        className='absolute bottom-10 right-0 w-56 h-56 bg-brand-red/10 rounded-full translate-x-1/3'
      />

      <div className='relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center'>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className='relative'>
            <div className='absolute inset-0 bg-brand-red transform translate-x-4 translate-y-4 rounded-2xl' />
            <img 
              src="/1-Taco de birria.jpg" 
              alt="Birria tradicional"
              className='relative w-full h-100 object-cover rounded-2xl shadow-2xl'
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className='text-xs font-bold text-brand-red tracking-[0.4em] uppercase mb-4 block'>
           Nuestra Historia
          </span>
          <h2 className='text-[clamp(2rem,5vw,3.5rem)] font-black text-black leading-[0.9] tracking-tight mb-6'>
            TRADICIÓN QUE
            <br />
            <span className='text-brand-red'>SE SABOREA</span>
          </h2>
          <p className='text-gray-600 text-lg leading-relaxed mb-6'>
            Desde 1985, Las Delicias de la Birria ha sido el destino preferido de los amantes de la auténtica cocina mexicana. Nuestra receta ancestral se transmite de generación en generación, manteniendo los ingredientes más frescos y el sabor que nos ha caracterizado por décadas.
          </p>
          <p className='text-gray-600 text-lg leading-relaxed mb-8'>
            Cada platillo que servimos es una celebración de nuestra herencia culinaria y el amor por la gastronomía mexicana.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-brand-red text-white px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-full cursor-pointer transition-all hover:bg-brand-dark-red'
          >
            CONOCE NUESTRA HISTORIA
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};