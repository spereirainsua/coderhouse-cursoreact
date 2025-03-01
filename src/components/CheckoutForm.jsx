import './styles/CheckoutForm.css'

export default function CheckoutForm({ checkoutFormRef, handleSubmitForm }) {
    return (
        <>
            <div className="checkout-form-container">
                <form ref={checkoutFormRef} onSubmit={handleSubmitForm} id="checkoutFormId" className="checkout-form">
                    <div className="line-item">
                        <span>Datos del cliente</span>
                    </div>
                    <div className="form-row">
                        <div className="form-column">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="form-column">
                            <label htmlFor="surname">Apellido</label>
                            <input type="text" name="surname" id="surname" />
                        </div>
                    </div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <div className="line-item">
                        <span>Información de envío y facturación</span>
                    </div>
                    <div className="form-row">
                        <div className="form-column">
                            <label htmlFor="city">Ciudad</label>
                            <input type="text" name="city" id="city" />
                        </div>
                        <div className="form-column">
                            <label htmlFor="address">Dirección</label>
                            <input type="text" name="address" id="address" />
                        </div>
                    </div>
                    <label htmlFor="payMethod">Método de pago</label>
                    <select id="payMethod">
                        <option value="" disabled selected>...</option>
                        <option value="Redes de cobranza">Redes de cobranza</option>
                        <option value="TDC">Tarjeta de Crédito</option>
                        <option value="TDD">Tarjeta de Débito</option>
                        <option value="Paypal">Paypal</option>
                    </select>
                </form>
            </div>
        </>
    )
}