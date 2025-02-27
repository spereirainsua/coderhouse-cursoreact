import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from './context/CartContext'
import './styles/ItemCount.css'

const counter = (value, increment, max) => {
    if (increment === 1 && value < max) return value + 1
    else if (increment != 1 && value > 1) return value - 1
    else return value
}

export default function ItemCount({ stock }) {
    const [count, setCount] = useState(1)
    const { productId } = useParams()
    const [cart, addProduct] = useContext(CartContext)
    const [isAdded, setIsAdded] = useState(false)

    const handleClick = () => {
        setIsAdded(true)
        
        addProduct(productId, count)
    }

    useEffect(() => {
        console.log(cart)
    }, [cart])

    return (
        <>
            {!isAdded ?
                (<>
                    <div className="counter-container">
                        <button onClick={() => setCount((count) => counter(count, -1, stock))}>-</button>
                        <span>{count}</span>
                        <button onClick={() => setCount((count) => counter(count, 1, stock))}>+</button>
                    </div>
                    <span>Stock: {stock}</span>
                    <button onClick={handleClick}>Agregar al carrito</button>
                </>)
                : <span>Agregado al carrito!</span>
            }
        </>
    )
}