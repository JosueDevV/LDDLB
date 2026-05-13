import { Link } from "react-router"
import { ShoppingBagIcon, Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { motion } from "framer-motion"

export const Header = () => {
    const [ open, setOpen ] = useState(false)

    const isOpen = () => setOpen(!open)

    return (
        <header className="sticky top-0 z-50 px-6 py-4 bg-brand-dark-red">

            <div className="flex justify-between items-center w-full">
                <Link to="/" aria-label="Ir al inicio">
                    <h1 className="uppercase tracking-tight font-black text-2xl sm:text-3xl text-white">
                        Las Delicias<br /><span className="text-4xl sm:text-5xl text-black">de La Birria</span>
                    </h1>
                </Link>
        
                <nav className="hidden md:flex gap-5 uppercase font-bold items-center" aria-label="Navegación principal">
                    <Link
                        to="/aboutUs"
                        className="text-white hover:text-black transition-colors"
                    >
                        Nosotros
                    </Link>
                    <Link
                        to="/login"
                        className="text-white hover:text-black transition-colors"
                    >
                        Iniciar Sesión
                    </Link>
                    <Link
                        to="/signUp"
                        className="px-5 py-2.5 bg-black text-brand-red hover:bg-gray-900 active:bg-gray-800 transition-colors"
                    >
                        Regístrate
                    </Link>
                    <button
                        aria-label="Abrir carrito de compras"
                        className="relative text-white hover:text-black transition-colors"
                    >
                        <ShoppingBagIcon className="w-6 h-6" />
                        <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center">
                            0
                        </span>
                    </button>
                </nav>

                <div className="md:hidden flex gap-6">
                    <button
                        aria-label="Abrir carrito de compras"
                        className="relative text-white hover:text-black transition-colors"
                    >
                        {!open ? (
                            <Bars4Icon
                                className="w-10"
                                onClick={isOpen}
                            />
                        ): (
                            <XMarkIcon
                                className="w-10"
                                onClick={isOpen}
                            />
                        )}
                    </button>
                    <button
                        aria-label="Abrir carrito de compras"
                        className="relative text-white hover:text-black transition-colors"
                    >
                        <ShoppingBagIcon className="w-6 h-6" />
                        <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center">
                            0
                        </span>
                    </button>
                </div>
            </div>
            { open && (
                <motion.nav 
                    className="md:hidden my-4 pt-4 flex flex-col gap-4 uppercase font-bold text-center"
                    initial={{y: -20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{ type: 'spring', stiffness: 200, damping: 5}}
                >
                    <Link
                        to="/aboutUs"
                        className="text-white hover:text-black transition-colors py-2"
                        onClick={isOpen}
                    >
                        Nosotros
                    </Link>
                    <Link
                        to="/login"
                        className="text-white hover:text-black transition-colors"
                        onClick={isOpen}
                    >
                        Iniciar Sesión
                    </Link>
                    <Link
                        to="/signUp"
                        className="px-5 py-2.5 bg-black text-brand-red hover:bg-gray-900 active:bg-gray-800 transition-colors"
                        onClick={isOpen}
                    >
                        Regístrate
                    </Link>
                </motion.nav>
            )}
            
        </header>
    )
}