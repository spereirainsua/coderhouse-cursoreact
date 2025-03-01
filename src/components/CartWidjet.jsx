import './styles/CartWidjet.css'
import { useState, useEffect, useContext } from 'react'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom'

export default function CartWidjet() {
    const {cart, getProductQty} = useContext(CartContext)
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(getProductQty())
    }, [cart])

    return (
        <>
            <Link to={"/cart"} style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* <button className="btn-cart"><img src="/img/shopping_cart.svg" alt="Carrito" /><span id="itemCount" className="cart-item-count">{count}</span></button> */}
                <button className="btn-cart"><img className="img" src="/img/shopping_cart.svg" alt="Carrito" /><span className="item-count">{count}</span></button>
            </Link>
        </>
    )
}