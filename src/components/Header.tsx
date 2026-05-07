import { ShoppingBagIcon } from "@heroicons/react/24/solid"
export const Header = () => {
    return (
        <header className="flex justify-between px-5 py-10">
            <h1 className="uppercase tracking-tighter font-black text-2xl"> Las Delicias de La Birria </h1>

            <div className="flex gap-3 uppercase text-xl font-black items-center">
                <ShoppingBagIcon className="font-bold w-5"/>
                <h1>Iniciar Sesion</h1>
                <h1>Registrate</h1>
            </div>
        </header>
    )
}