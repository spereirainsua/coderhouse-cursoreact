import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../db/db.js'
import CartProvider from './context/CartContext.jsx'
import LoadingComponent from './LoadingComponent.jsx'
import ItemCount from './ItemCount.jsx'
import './styles/ItemDetailContainer.css'

export default function ItemDetailContainer() {
    const { productId } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProduct(productId).then((response) => setProduct(response))
    }, [productId])

    return (
        <>
            {product ? (
                <div className="container-lg container-product-detail">
                    <h3>{product?.title}</h3>
                    <img src={product?.image} alt="Imagen del producto" className="card-img-details" />
                    <p>{product?.description}</p>
                    <h4>Precio: ${product?.price}</h4>
                    <ItemCount stock={product?.stock} />
                </div>
            ) : <LoadingComponent />}
        </>
    )
}