import { useState, useEffect } from 'react'
import ProductCard from './ProductCard.jsx'
import LoadingComponent from './LoadingComponent.jsx'
import { getProducts, getCategory } from '../db/db.js'
import { useParams } from 'react-router-dom'
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
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </section>
                    </>
                ) : <LoadingComponent />
            }
        </>
    )
}