import './styles/NavLink.css'

export default function NavLink({ texto, enlace }) {
    return (
        <>
            <a href={enlace}>{texto}</a>
        </>
    )
}