import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import './styles/ItemListContainer.css'
import { useParams } from 'react-router-dom'

export default function ItemListContainer({ tituloBienvenida, textoBienvenida }) {
    const [subtitle, setSubtitle] = useState("Nuestros productos")
    const { catId } = useParams()

    useEffect(() => {
        if (catId) {
            setSubtitle(catId.toUpperCase())
        } else {
            setSubtitle("Nuestros productos")
        }
    }, [catId])

    return (
        <>
            {tituloBienvenida &&
                (<section className="container-lg container-body">
                    <h1>{tituloBienvenida}</h1>
                    <p>{textoBienvenida}</p>
                </section>)
            }
            <div className="container-lg container-cards">
                <h2>{subtitle}</h2>
                <ItemList subtitulo={subtitle} />
            </div>
        </>
    )
}