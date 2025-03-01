import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../db/db.js'
import { CartContext } from './context/CartContext'
import LoadingComponent from './LoadingComponent.jsx'
import ItemCount from './ItemCount.jsx'
import './styles/ItemDetailContainer.css'

export default function ItemDetailContainer() {
    const { productId } = useParams()
    const [product, setProduct] = useState(null)
    const { cart, addProduct, isInCart } = useContext(CartContext)
    const [isAdded, setIsAdded] = useState(isInCart(productId))
    const [count, setCount] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getProduct(productId).then((response) => {
            setProduct(response)
            setIsLoading(false)
        })

    }, [productId])

    const updateCount = (newCount) => {
        setCount(newCount)
    }

    const handleClick = () => {
        setIsAdded(true)
        addProduct(product, count)
    }

    return (
        <>
            {!isLoading ? (
                <div className="container-lg container-product-detail">
                    <h3>{product.title}</h3>
                    <img src={product.image} alt="Imagen del producto" className="card-img-details" />
                    <p>{product.description}</p>
                    <div className="item-count-container">
                        <div>
                            <span className="item-price">${(product.price).toFixed(2)}</span>
                        </div>

                        {product.stock > 0 ?
                            !isAdded ?
                            <>
                                <ItemCount stock={product.stock} count={count} updateCount={updateCount} />
                                <span>Stock: {product.stock}</span>
                                <button className="btn-add-to-cart" onClick={handleClick}>Agregar al carrito</button>

                            </>
                            : <span className="added-to-cart">Agregado al carrito!</span>
                            : <span className="without-stock">Sin stock!</span>
                        }
                    </div>

                </div>
            ) : <LoadingComponent />}
        </>
    )
}