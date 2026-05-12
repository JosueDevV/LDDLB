import { Link } from "react-router"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-brand-dark-red">
            <Link to="/" aria-label="Ir al inicio">
                <h1 className="uppercase tracking-tight font-black text-2xl sm:text-3xl text-white">
                    Las Delicias<br /><span className="text-4xl sm:text-5xl text-black">de La Birria</span>
                </h1>
            </Link>

            <nav className="flex gap-5 uppercase font-bold items-center" aria-label="Navegación principal">
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
        </header>
    )
}