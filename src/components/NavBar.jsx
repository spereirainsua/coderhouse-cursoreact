import CartWidjet from './CartWidjet'
import LogoComponent from './LogoComponent'
import './styles/NavBar.css'
import NavLink from './NavLink'
import NavHoverLink from './NavHoverLink'

export default function NavBar() {
    return (
        <header>
            <section className="container-nav">
                <LogoComponent />
                <nav>
                    <NavLink texto="Inicio" nombre="inicio" enlace={"/"} />
                    <NavLink texto="Busqueda" nombre="busqueda" enlace={"/busqueda"} />
                    <NavHoverLink texto="Categorías" nombre="categorias" enlace={"/"} />
                </nav>
                <CartWidjet />
            </section>
        </header>
    )
}