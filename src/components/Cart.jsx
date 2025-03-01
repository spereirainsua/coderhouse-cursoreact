import { useContext, useEffect, useState, useRef } from 'react'
import { CartContext } from './context/CartContext'
import CartItem from './CartItem'
import './styles/Cart.css'
import LoadingComponent from './LoadingComponent'
import CheckoutForm from './CheckoutForm'



export default function Cart() {
    const IVA = 22
    const shipPrice = 250
    const { cart, removeProduct, getSubtotal } = useContext(CartContext)
    const [isLoading, setIsLoading] = useState(true)
    const [isEmpty, setIsEmpty] = useState(true)
    const [subTotal, setSubTotal] = useState(0)
    const [calcIva, setCalcIva] = useState(0)
    const [total, setTotal] = useState(0)
    const [checkout, setCheckout] = useState(false)
    const checkoutFormRef = useRef()

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

    const handleClickPurchase = () => {
        if (!checkout) setCheckout(true)
        else {
            
            //realizar submit a formulario
            checkoutFormRef.current.requestSubmit()

        }
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()

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
                        <CheckoutForm checkoutFormRef={checkoutFormRef} handleSubmitForm={handleSubmitForm} />
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
                            <button onClick={handleClickPurchase} className="btn-finalize">Finalizar Compra</button>
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