import { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

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

    const isInCart = (id) => {
        return (cart.filter(product => product.id == id)).length > 0
    }

    const getProductQty = () => {
        return cart.reduce((total, product) => total + product.quantity, 0)
    }

    const getSubtotal = () => {
        let total = 0
        cart.forEach(product => {
            total += product.quantity * product.price
        })
        return total
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
        <CartContext.Provider value={{ cart, addProduct, removeProduct, cleanCart, getProductQty, getSubtotal, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider