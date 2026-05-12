import { motion } from 'framer-motion';

const menuItems = [
  {
    name: "BIRRIA DE RES",
    description: "Carne deshilachada en caldo de chiles secos, especias y hierbitas",
    price: "$189",
    image: "10-PlatoBirria.jpg"
  },
  {
    name: "QUESABIRRIA",
    description: "Tortilla de queso con birria, acompañada de consume",
    price: "$149",
    image: "2-QuesaBirria.jpg"
  },
  {
    name: "BIRRIA RAMEN",
    description: "Fideos en consume de birria con tortilla crujiente",
    price: "$159",
    image: "9-RammenGrande.jpg"
  }
];

export const MenuSection = () => {
  return (
    <section className='relative py-24 bg-brand-red overflow-hidden'>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className='absolute -top-20 -right-20 w-80 h-80 bg-black/10 rounded-full'
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className='absolute -bottom-32 -left-32 w-96 h-96 bg-black/10 rounded-full'
      />

      <div className='relative z-10 max-w-6xl mx-auto px-6'>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <span className='text-xs font-bold text-white/80 tracking-[0.4em] uppercase mb-4 block'>
            Especialidades
          </span>
          <h2 className='text-[clamp(2rem,5vw,3.5rem)] font-black text-white leading-[0.9] tracking-tight'>
            NUESTROS PLATILLOS
          </h2>
        </motion.div>

        <div className='grid md:grid-cols-3 gap-8'>
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              whileHover={{ y: -10 }}
              className='group cursor-pointer'
            >
              <div className='relative overflow-hidden rounded-2xl mb-4'>
                <div className='absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300' />
                <img 
                  src={item.image}
                  alt={item.name}
                  className='w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute top-4 right-4 bg-white px-4 py-2 rounded-full'>
                  <span className='text-xs font-black text-brand-red'>{item.price}</span>
                </div>
              </div>
              <h3 className='text-xl font-black text-white leading-tight mb-2'>
                {item.name}
              </h3>
              <p className='text-white/80 text-sm leading-relaxed'>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className='text-center mt-12'
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#DC2626' }}
            whileTap={{ scale: 0.95 }}
            className='bg-black text-white px-10 py-4 text-sm font-bold uppercase tracking-widest rounded-full cursor-pointer transition-all'
          >
            VER MENÚ COMPLETO
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};