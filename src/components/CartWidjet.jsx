import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext'
import './styles/CartWidjet.css'

export default function CartWidjet() {
    const { cart, getProductQty } = useContext(CartContext)
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(getProductQty())
    }, [cart])

    return (
        <>
            <Link to={"/cart"} style={{ textDecoration: 'none', color: 'inherit' }}>
                <button className="btn-cart"><img className="img" src="/img/shopping_cart.svg" alt="Carrito" />
                {count > 0 ?
                    <span className="item-count">{count}</span>
                :<></>}
                </button>
            </Link>
        </>
    )
}