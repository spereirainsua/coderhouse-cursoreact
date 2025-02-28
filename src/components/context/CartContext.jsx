import { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(null)

    const addProduct = (product, quantity) => {
        setCart(prevCart => {
            if (!cart) {
                return [{ ...product, quantity }]
            } else {
                const isInCartIndex = prevCart.findIndex(cartItem => cartItem.id === product.id)
                if (isInCartIndex >= 0) {
                    const updatedCart = [...prevCart]
                    updatedCart[isInCartIndex].quantity += quantity
                    return updatedCart
                } else {
                    return [...prevCart, { ...product, quantity }]
                }
            }
        })
    }

    const removeProduct = (productId) => {
        setCart(prevCart => {
            return prevCart.filter(product => product.id != productId)
        })
    }

    const cleanCart = () => {
        setCart(null)
    }

    return (
        <CartContext.Provider value={[cart, addProduct, removeProduct, cleanCart]}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider