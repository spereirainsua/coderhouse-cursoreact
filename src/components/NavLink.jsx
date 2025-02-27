import './styles/NavLink.css'
import { Link } from 'react-router-dom'

export default function NavLink({ texto, nombre, enlace }) {
    return (
        <>
            <Link to={enlace} style={{ textDecoration: 'none', color: 'inherit' }}>
                <button name={nombre}>{texto}</button>
            </Link>
        </>
    )
}