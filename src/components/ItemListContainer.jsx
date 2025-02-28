import ItemList from './ItemList'
import './styles/ItemListContainer.css'

export default function ItemListContainer({ tituloBienvenida, textoBienvenida }) {
    return (
        <>
            {tituloBienvenida &&
                (<section className="container-lg container-body">
                    <h1>{tituloBienvenida}</h1>
                    <p>{textoBienvenida}</p>
                </section>)
            }
            <div className="container-lg container-cards">
                <ItemList />
            </div>
        </>
    )
}