import { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import { getOrder } from '../db/db.js'
import CartItem from './CartItem.jsx'
import './styles/CheckoutPage.css'
import LoadingComponent from "./LoadingComponent.jsx"

export default function CheckoutPage() {
    const { orderId } = useParams()
    const location = useLocation()
    const [order, setOrder] = useState(location.state)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!order) {
            getOrder(orderId)
                .then(response => {
                    setOrder(response)
                    setIsLoading(false)
                })
                .catch((error) => console.log("Error al recuperar la orden: " + error.message))
        } else {
            setIsLoading(false)
        }

    }, [orderId])

    return (
        <>
            {!isLoading ?
                <>
                    <div className="container-lg checkout-page-container">
                        {order ? (
                            <>
                                <h2 className="checkout-page-title">Pedido enviado correctamente!</h2>
                                <p className="order-id"><strong>Id del pedido: </strong> {orderId}</p>
                                <h3>Información del pedido:</h3>
                                <div className="checkout-page-order">
                                    <p className="checkout-page-line"><strong>Nombre:</strong> {order.name} {order.lastname}</p>
                                    <p className="checkout-page-line"><strong>Email:</strong> {order.email}</p>
                                    <p className="checkout-page-line"><strong>Dirección:</strong> {order.address}, {order.city}</p>
                                    <p className="checkout-page-line"><strong>Método de pago:</strong> {order.payMethod}</p>
                                    <p className="checkout-page-line"><strong>Fecha:</strong> {order.createdAt}</p>
                                    <p className="checkout-page-line"><strong>Total:</strong> ${order.totalOrder}</p>
                                </div>
                                <div className="checkout-page-order">
                                    {order.products.map((product) => (
                                        <>
                                            <CartItem key={product.id} product={product} />
                                        </>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <p className="checkout-page-line-not-found">No se encontró la orden.</p>
                        )}
                    </div>
                </> 
                : <LoadingComponent />
            }
        </>
    )
}