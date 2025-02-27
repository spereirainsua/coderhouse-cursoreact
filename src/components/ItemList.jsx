import { useState, useEffect } from "react"
import ProductCard from "./ProductCard"
import { getProducts, getCategory } from "../db/db.js"
import { useParams } from "react-router-dom"
import "./styles/ItemList.css"

export default function ItemList() {
    const { catId } = useParams()
    const [subtitle, setSubtitle] = useState("Nuestros productos!")
    const [products, setProducts] = useState(null)

    useEffect(() => {
        if (!catId) {
            getProducts().then((response) => {
                setSubtitle("Nuestros productos!")
                setProducts(response)
            })
        } else {
            getCategory(catId).then((response) => {
                setSubtitle(catId.toUpperCase())
                setProducts(response)
            })
        }
    }, [catId]);

    return (
        <>
            {products && (
                <>
                    <h2>{subtitle}</h2>
                    <section className="products-container">
                        {products?.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </section>
                </>
            )}
        </>
    )
}