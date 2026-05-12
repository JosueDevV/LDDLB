import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center bg-brand-red overflow-hidden'>
      
      <div className='absolute inset-0 opacity-20'>
        <img 
          src="/10-PlatoBirria.jpg" 
          alt="Plato de birria" 
          className='w-full h-full object-cover'
          style={{ filter: 'blur(8px) brightness(0.7)', transform: 'scale(1.2)' }}
        />
      </div>
      
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
        className='absolute top-0 right-0 w-80 h-80 bg-black/10 rounded-full -translate-y-1/2 translate-x-1/3'
      />
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.4 }}
        className='absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/3'
      />

      <div className='relative z-10 text-center max-w-3xl px-6'>
        
        <motion.div
          initial={{ scale: 0, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.1 }}
          className='text-[0.7rem] font-bold text-white tracking-[0.4em] uppercase mb-6'
        >
          Desde 1985
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className='text-[clamp(2.5rem,10vw,6rem)] font-black text-black leading-[0.85] tracking-tighter m-0'
        >
          LAS DELICIAS
        </motion.h1>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: -10 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 1 }}
          className='text-[clamp(1.5rem,5vw,3.5rem)] font-bold text-white my-2'
        >
          DE
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          className='text-[clamp(2.5rem,10vw,6rem)] font-black text-black leading-[0.85] tracking-tighter m-0'
        >
          LA BIRRIA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='text-[0.75rem] text-white font-semibold mt-6 mb-8 tracking-[0.3em] opacity-90'
        >
          TRADICIÓN EN CADA BOCADO
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, backgroundColor: '#000000' }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.2 }}
          className='bg-black text-brand-red px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-full cursor-pointer transition-all duration-300'
        >
          ¡RESERVAR AHORA!
        </motion.button>

      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute bottom-6 left-1/2 -translate-x-1/2'
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </motion.div>

    </section>
  );
}