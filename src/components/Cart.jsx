import { useContext, useEffect } from 'react'
import { CartContext } from './context/CartContext'
import ProductCardRow from './ProductCardRow'
import './styles/Cart.css'

export default function Cart() {
    const [cart, removeProduct] = useContext(CartContext)

    return (
        <>
            <div className="container-lg">
                {
                    cart && cart.length > 0 ?
                        <>
                            {
                                cart.map((product) => (
                                    <>
                                        <ProductCardRow key={product.id} product={product} onRemove={removeProduct} />
                                    </>
                                ))
                            }
                        </>
                        :
                        <div className="cart-message">
                            <h4>El carrito esta vacio!</h4>
                        </div>
                }

            </div>
        </>
    )
}