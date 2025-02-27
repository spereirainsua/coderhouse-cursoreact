import './styles/CartWidjet.css'
import { useState, useEffect, useContext } from 'react'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom'

const itemCount = (cart) => {
    return cart.reduce((total, product) => total + product.quantity, 0)
}

export default function CartWidjet() {
    const [cart] = useContext(CartContext)
    const [count, setCount] = useState(0)
    useEffect(() => {
        setCount(itemCount(cart))
    }, [cart])

    return (
        <>
            <Link to={"/cart"} style={{ textDecoration: 'none', color: 'inherit' }}>
                <button className="btn-cart"><img src="/img/shopping_cart.svg" alt="Carrito" /><span id="itemCount" className="cart-item-count">{count}</span></button>
            </Link>
        </>
    )
}