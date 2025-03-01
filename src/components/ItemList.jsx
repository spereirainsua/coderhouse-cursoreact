import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getCategory } from '../db/db.js'
import Item from './Item'
import LoadingComponent from './LoadingComponent'
import './styles/ItemList.css'

export default function ItemList() {
    const { catId } = useParams()
    const [subtitle, setSubtitle] = useState("Nuestros productos!")
    const [products, setProducts] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(false)
        if (!catId) {
            getProducts().then((response) => {
                setSubtitle("Nuestros productos!")
                setProducts(response)
                setIsLoaded(true)
            })
        } else {
            getCategory(catId).then((response) => {
                setSubtitle(catId.toUpperCase())
                setProducts(response)
                setIsLoaded(true)
            })
        }
    }, [catId]);

    return (
        <>
            {
                isLoaded ? (
                    <>
                        <h2>{subtitle}</h2>
                        <section className="products-container">
                            {products.map((product) => (
                                <Item key={product.id} product={product} />
                            ))}
                        </section>
                    </>
                ) : <LoadingComponent />
            }
        </>
    )
}