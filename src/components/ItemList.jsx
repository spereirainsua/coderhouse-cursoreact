import { useState, useEffect } from "react"
import ProductCard from "./ProductCard"
import { getCategory, getProducts } from '../../asyncMock'
import { useParams } from 'react-router-dom'
import './styles/ItemList.css'

export default function ItemList() {
    const { catId } = useParams()
    const [products, setProducts] = useState(null)

    useEffect(() => {
        if (!catId) {
            getProducts().then((response) => setProducts(response))
        } else {
            getCategory(catId).then((response) => setProducts(response))
        }
    }, [catId]);

    return (
        <>
            {products && (
                <section className="products-container">
                    {products?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </section>
            )}

        </>
    )
}