import { motion } from 'framer-motion'

export const LoginScreen = () => {
    return (
        <section className="flex justify-center items-center bg-brand-red min-h-screen w-full p-6 overflow-hidden">

            <motion.div
                className="flex flex-col px-8 py-12 space-y-6 w-full max-w-md bg-brand-dark-red rounded-xl shadow-2xl"
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}    
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <h1 className="uppercase font-black text-3xl text-white text-center tracking-tight">
                    Inicio Sesión
                </h1>

                <form className="space-y-5">
                    <div className='flex flex-col space-y-1.5'>
                        <label htmlFor='email' className='font-bold text-sm text-white ml-1'>
                            Correo Electrónico
                        </label>
                        <input 
                            id="email"
                            type="email"
                            placeholder="tu@email.com"
                            className="bg-white rounded-md shadow-inner px-4 py-3 outline-none focus:ring-4 focus:ring-brand-red transition-all"    
                        />
                    </div>

                    <div className='flex flex-col space-y-1.5'>
                        <label htmlFor='password' className='font-bold text-sm text-white ml-1'>
                            Contraseña
                        </label>
                        <input 
                            id="password"
                            type="password"
                            placeholder="********"
                            className="bg-white rounded-md shadow-inner px-4 py-3 outline-none focus:ring-3 focus:ring-brand-red transition-all"    
                        />
                    </div>
                    
                    <div className='flex flex-col space-y-1.5'>
                        <label htmlFor='address' className='font-bold text-sm text-white ml-1'>
                            Domicilio
                        </label>
                        <input 
                            id="address"
                            type="text" 
                            placeholder="Av. Principal 123"
                            className="bg-white rounded-md shadow-inner px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900 transition-all"    
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