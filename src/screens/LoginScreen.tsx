import { motion } from 'framer-motion'

export const LoginScreen = () => {
    return (
        <section className="flex justify-center items-center bg-brand-red min-h-screen w-full p-6 overflow-hidden">

            <div className='absolute inset-0 opacity-20'>
                <img 
                src="/1-Taco de birria.jpg" 
                alt="Plato de birria" 
                className='w-full h-full object-cover'
                style={{ filter: 'blur(8px) brightness(0.7)', transform: 'scale(1.1)' }}
                />
            </div>

            <motion.div
                className="flex flex-col px-8 py-12 space-y-6 w-full max-w-md bg-brand-dark-red rounded-xl shadow-2xl will-change-transform"
                initial={{ scale: 0, y: 20 }} 
                animate={{ scale: 1, y: 0 }}    
                transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.2 }}
            >
                <h1 className="uppercase font-black text-3xl text-white text-center tracking-tight">
                    Inicio Sesión
                </h1>

                <form className="space-y-5">
                    <div className='flex flex-col space-y-1.5'>
                        <label htmlFor='email' className='font-black text-md uppercase text-white ml-1'>
                            Correo Electrónico *
                        </label>
                        <motion.input 
                            initial={{ y: 2, borderColor: '#DC2626', boxShadow: '0px 5px 10px #DC2626' }}
                            transition={{ type: 'spring'}}
                            whileFocus={{ y: 0, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
                            id="email"
                            type="email"
                            placeholder="tu@email.com"
                            className="bg-white rounded-md shadow-inset px-4 py-3 outline-none transition-all"    
                        />
                    </div>

                    <div className='flex flex-col space-y-1.5'>
                        <label htmlFor='password' className='font-black text-md uppercase text-white ml-1'>
                            Contraseña *
                        </label>
                        <motion.input 
                            initial={{ y: 2, borderColor: '#DC2626', boxShadow: '0px 5px 10px #DC2626' }}
                            transition={{ type: 'spring'}}
                            whileFocus={{ y: 0, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
                            id="password"
                            type="password"
                            placeholder="********"
                            className="bg-white rounded-md shadow-inner px-4 py-3 outline-none transition-all"    
                        />
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="w-full bg-slate-900 text-brand-red font-black p-4 uppercase rounded-md shadow-lg mt-4 cursor-pointer hover:bg-slate-800 transition-colors"
                    >
                        Iniciar Sesión
                    </motion.button>
                </form>

            </motion.div>
        </section>
    )
}