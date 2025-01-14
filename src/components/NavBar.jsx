import CartWidjet from './CartWidjet'
import LogoComponent from './LogoComponent'
import './styles/NavBar.css'
import NavLink from './NavLink'

export default function NavBar() {
    return (
        <header>
            <section className="container-nav">
                <LogoComponent />
                <nav>
                    <NavLink texto="Inicio" enlace="" />
                    <NavLink texto="Busqueda" enlace="" />
                    <NavLink texto="Categorías" enlace="" />
                </nav>
                <CartWidjet />
            </section>
        </header>
    )
}