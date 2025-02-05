import { useEffect, useState } from "react";
import NavLink from './NavLink'
import './styles/NavHoverLink.css'

export default function NavHoverLink({ texto, nombre }) {
    const [isShown, setIsShown] = useState(false)

    return (
        <>
            <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                <button name={nombre}>{texto}</button>
                {isShown && (
                    <section className="container-nav-hover">
                        <NavLink texto="Tarjetas Gráficas" nombre="graficas" enlace={""} />
                        <NavLink texto="Procesadores" nombre="procesadores" enlace={""} />
                        <NavLink texto="Memorias" nombre="memorias" enlace={""} />
                        <NavLink texto="Almacenamiento" nombre="almacenamiento" enlace={""} />
                    </section>
                )}
            </div>
        </>
    )
}