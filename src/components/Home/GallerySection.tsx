import { motion } from 'framer-motion';

const galleryImages = [
  "5-Burrito.jpg",
  "11-BirriaTorta.jpg",
  "17-Taco Suadero.jpg",
  "13-Birria x Kilo.jpg",
  "25-Torta de Arrachera.jpg",
  "18-Torta al pastor con queso.jpg",
];

export const GallerySection = () => {
  return (
    <section className='relative py-24 bg-white overflow-hidden'>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className='absolute top-0 right-1/4 w-32 h-32 bg-brand-yellow/20 rounded-full -translate-y-1/2'
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className='absolute bottom-10 left-10 w-24 h-24 bg-brand-orange/20 rounded-full'
      />

      <div className='relative z-10 max-w-6xl mx-auto px-6'>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <span className='text-xs font-bold text-brand-red tracking-[0.4em] uppercase mb-4 block'>
            Experiencia
          </span>
          <h2 className='text-[clamp(2rem,5vw,3.5rem)] font-black text-black leading-[0.9] tracking-tight'>
            VIVEN LA EXPERIENCIA
          </h2>
          <p className='text-gray-600 text-lg mt-4 max-w-2xl mx-auto'>
            Descubre el ambiente acogedor y la autenticidad de nuestra cocina en cada visita
          </p>
        </motion.div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ amount: 'some' }}
              transition={{ delay: index * 0.1}}
              whileHover={{ scale: 1.05 }} 
              className='relative overflow-hidden rounded-xl cursor-pointer'
            >
              <img 
                src={src}
                alt={`Galería ${index + 1}`}
                className='w-full h-48 md:h-56 object-cover'
              />
              <div className='absolute inset-0 bg-brand-red/0 hover:bg-brand-red/30 transition-colors duration-300' />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className='mt-12 text-center'
        >
          <h3 className='text-2xl font-black text-black mt-2 mb-2'>VISÍTANOS</h3>
          <p className='text-gray-600'>Calle 26 #103 Col. Estado de Mexico, Nezahualcoyotl.</p>
          <p className='text-gray-600'>Abierto: Lun-Vie 9:00 AM - 9:00 PM</p>
        </motion.div>
      </div>
    </section>
  );
};