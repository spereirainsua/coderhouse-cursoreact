import './styles/ItemListContainer.css'

export default function ItemListContainer({tituloBienvenida, textoBienvenida}) {
    return (
        <section className="container-body">
            <h1>{tituloBienvenida}</h1>
            <p>{textoBienvenida}</p>
        </section>
    )
}