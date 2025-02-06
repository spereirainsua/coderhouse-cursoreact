import './styles/NavLink.css'
import { Link } from 'react-router-dom'

export default function NavLink({ texto, nombre, enlace }) {
    return (
        <>
            <button name={nombre}><Link to={enlace} style={{ textDecoration: 'none', color: 'inherit' }}>{texto}</Link></button>
        </>
    )
}