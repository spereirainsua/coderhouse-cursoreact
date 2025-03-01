import CartWidjet from './CartWidjet'
import LogoComponent from './LogoComponent'
import NavLink from './NavLink'
import NavHoverLink from './NavHoverLink'
import './styles/NavBar.css'

export default function NavBar() {
    return (
        <header>
            <section className="container-lg container-nav">
                <LogoComponent />
                <nav>
                    <NavLink texto="Inicio" nombre="inicio" enlace={"/"} />
                    <NavHoverLink texto="Categorías" nombre="categorias" enlace={"/"} />
                </nav>
                <CartWidjet />
            </section>
        </header>
    )
}