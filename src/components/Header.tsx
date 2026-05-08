import { Link } from "react-router"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"

export const Header = () => {
    return (
        <header className=" backdrop-blur-sm sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-white">
            <Link to="/home" aria-label="Ir al inicio">
                <h1 className="uppercase tracking-tight font-black text-2xl sm:text-3xl text-red-600">
                    Las Delicias<br /><span className="text-4xl sm:text-5xl">de La Birria</span>
                </h1>
            </Link>

            <nav className="flex gap-5 uppercase text-base font-black items-center" aria-label="Navegación principal">
                <Link
                    to="/aboutUs"
                    className="text-gray-900 hover:text-red-600 transition-colors"
                >
                    Nosotros
                </Link>
                <Link
                    to="/login"
                    className="text-gray-900 hover:text-red-600 transition-colors"
                >
                    Iniciar Sesión
                </Link>
                <Link
                    to="/login"
                    className="px-5 py-2.5 bg-red-600 text-white hover:bg-red-700 transition-colors"
                >
                    Regístrate
                </Link>
                <button
                    aria-label="Abrir carrito de compras"
                    className="relative text-gray-900 hover:text-red-600 transition-colors"
                >
                    <ShoppingBagIcon className="w-6 h-6" />
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center">
                        0
                    </span>
                </button>
            </nav>
        </header>
    )
}