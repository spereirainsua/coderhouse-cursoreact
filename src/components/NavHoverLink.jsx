import { useState } from "react"
import NavLink from './NavLink'
import './styles/NavHoverLink.css'

export default function NavHoverLink({ texto, nombre }) {
    const [isShown, setIsShown] = useState(false)

    const handleMouseEnter = () => {
        setIsShown(true)
    }

    const handleMouseLeave = () => {
        setIsShown(false)
    }

    const handleClick = () => {
        setIsShown(false)
    }

    return (
        <>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                <button className="btn-nav-link" name={nombre}>{texto}</button>
                {isShown && (
                    <section className="container-nav-hover">
                        <NavLink texto="Tarjetas Gráficas" nombre="graficas" enlace={"/category/graficas"} />
                        <NavLink texto="Motherboards" nombre="motherboards" enlace={"/category/motherboards"} />
                        <NavLink texto="Procesadores" nombre="procesadores" enlace={"/category/procesadores"} />
                        <NavLink texto="Memorias" nombre="memorias" enlace={"/category/memorias"} />
                        <NavLink texto="Almacenamiento" nombre="almacenamiento" enlace={"/category/almacenamiento"} />
                    </section>
                )}
            </div>
        </>
    )
}