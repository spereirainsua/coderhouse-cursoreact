import { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addProduct = (productId, quantity) => {
        setCart(prevCart => {
            const isInCartIndex = prevCart.findIndex(product => product.id === productId)
            if (isInCartIndex >= 0) {
                const updatedCart = [...prevCart]
                updatedCart[isInCartIndex].quantity += quantity
                return updatedCart
            } else {
                return [...prevCart, { id: productId, quantity }]
            }
        })
    }

    const removeProduct = (productId) => {
        setCart(prevCart => {
            return prevCart.filter(product => product.id != productId)
        })
    }

    const cleanCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={[cart, addProduct, removeProduct, cleanCart]}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider