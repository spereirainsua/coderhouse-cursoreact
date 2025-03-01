import { useContext, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from './context/CartContext'
import { sendOrder } from '../db/db.js'
import CartItem from './CartItem'
import CheckoutForm from './CheckoutForm'
import LoadingComponent from './LoadingComponent'
import './styles/Cart.css'

const getDateNow = () => {
    const date = new Date()
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
}

export default function Cart() {
    const IVA = 22
    const shipPrice = 250
    const { cart, removeProduct, getSubtotal, cleanCart } = useContext(CartContext)
    const [isLoading, setIsLoading] = useState(true)
    const [isEmpty, setIsEmpty] = useState(true)
    const [subTotal, setSubTotal] = useState(0)
    const [calcIva, setCalcIva] = useState(0)
    const [total, setTotal] = useState(0)
    const [checkout, setCheckout] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (cart && cart.length > 0) {
            setIsEmpty(false)
            setSubTotal(getSubtotal())
            setIsLoading(false)
        } else {
            setIsLoading(false)
            setIsEmpty(true)
        }
    }, [cart])

    useEffect(() => {
        setCalcIva(((subTotal * IVA) / 100))
    }, [subTotal])

    useEffect(() => {
        setTotal(subTotal + calcIva + shipPrice)
    }, [calcIva])

    const checkoutFormRef = useRef()

    const handleClickPurchase = () => {
        if (!checkout) setCheckout(true)
        else {
            checkoutFormRef.current.submitFormExternamente()
        }
    }

    const handleClickBack = () => {
        if (checkout) setCheckout(false)
    }

    const onSubmit = (data) => {
        const order = {
            name: data.name,
            lastname: data.lastname,
            email: data.email,
            city: data.city,
            address: data.address,
            payMethod: data.paymethod,
            shipPrice: shipPrice,
            totalOrder: total,
            products: [...cart],
            createdAt: getDateNow()
        }
        sendOrder(order).then((resultOrder) => {
            cleanCart()
            navigate("/order/" + resultOrder.id, { state: order })
        }).catch((error) => console.log("Error al realizar la compra: " + error.message))
    }

    return (
        <>
            {!isLoading ? !isEmpty ?
                <div className="container-lg cart-container">
                    {!checkout ?
                        <div>
                            <div className="title-table-container">
                                <span className="align-title-text"><b>Cantidad</b></span>
                                <span className="align-title-text"><b>Producto</b></span>
                                <span><b>Nombre</b></span>
                                <span className="align-title-text"><b>Precio</b></span>
                            </div>
                            {
                                cart.map((product) => (
                                    <>
                                        <CartItem key={product.id} product={product} onRemove={removeProduct} />
                                    </>
                                ))
                            }
                        </div>
                        :
                        <CheckoutForm ref={checkoutFormRef} onSubmit={onSubmit} />
                    }
                    <div className="purchase-summary">
                        <div className="line-item">
                            <span><b>CheckOut</b></span>
                        </div>
                        <div className="line-item">
                            <span>Subtotal</span><span>${subTotal.toFixed(2)}</span>
                        </div>
                        <div className="line-item">
                            <span>IVA ({IVA}%)</span><span>${calcIva.toFixed(2)}</span>
                        </div>
                        <div className="line-item">
                            <span>Envío</span><span>${shipPrice.toFixed(2)}</span>
                        </div>
                        <div className="line-item total">
                            <span>Total</span><span>${total.toFixed(2)}</span>
                        </div>
                        {!checkout ?
                            <button onClick={handleClickPurchase} className="btn-finalize">Continuar Compra</button>
                            :
                            <>
                                <button onClick={handleClickPurchase} className="btn-finalize">Finalizar Compra</button>
                                <button onClick={handleClickBack} className="btn-back">Volver</button>
                            </>
                        }
                    </div>
                </div>
                :
                <div className="container-lg cart-empty">
                    <h4>Tu carrito está vacío</h4>
                    <h5>Agrega algunos productos para comenzar a comprar.</h5>
                </div>
                :
                <LoadingComponent />
            }
        </>
    )
}