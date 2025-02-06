import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from '../../asyncMock'
import './styles/ItemDetailContainer.css'

const counter = (value, increment) => {
    if (increment === 1) return value + 1
    else if (value > 1) return value - 1
    else return value
}

export default function ItemDetailContainer() {
    const { productId } = useParams()
    const [product, setProduct] = useState(null)
    const [count, setCount] = useState(1)

    useEffect(() => {
        getProduct(productId).then((response) => setProduct(response))
    }, [productId])

    return (
        <>
            {product && (
                <div className="container-lg container-product-detail">
                    <h3>{product?.title}</h3>
                    <img src={product?.image} alt="Imagen del producto" className="card-img-details" />
                    <p>{product?.description}</p>
                    <h4>Precio: ${product?.price}</h4>
                    <div className="counter-container">
                        <button onClick={() => setCount((count) => counter(count, -1))}>-</button>
                        <span>{count}</span>
                        <button onClick={() => setCount((count) => counter(count, 1))}>+</button>
                    </div>
                    <button>Agregar al carrito</button>
                </div>
            )}

        </>
    )
}