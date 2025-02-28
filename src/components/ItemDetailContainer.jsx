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
    const [cart, addProduct] = useContext(CartContext)
    const [isAdded, setIsAdded] = useState(false)
    const [count, setCount] = useState(1)

    useEffect(() => {
        getProduct(productId).then((response) => setProduct(response))
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
            {product ? (
                <div className="container-lg container-product-detail">
                    <h3>{product.title}</h3>
                    <img src={product.image} alt="Imagen del producto" className="card-img-details" />
                    <p>{product.description}</p>
                    <h4>Precio: ${product.price}</h4>
                    {!isAdded ?
                        (<>
                            <div className="item-count-container">
                                <ItemCount stock={product.stock} count={count} updateCount={updateCount} />
                                <span>Stock: {product.stock}</span>
                                <button onClick={handleClick}>Agregar al carrito</button>
                            </div>
                        </>)
                        : <span>Agregado al carrito!</span>
                    }
                </div>
            ) : <LoadingComponent />}
        </>
    )
}