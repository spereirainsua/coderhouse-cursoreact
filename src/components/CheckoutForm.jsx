import './styles/CheckoutForm.css'
import { useForm } from 'react-hook-form'
import { forwardRef, useImperativeHandle } from 'react'

const CheckoutForm = forwardRef(({ onSubmit }, ref) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    useImperativeHandle(ref, () => ({
        submitFormExternamente: () => handleSubmit(onSubmit)()
    }))

    const submitFormExternamente = () => {
        handleSubmit(onSubmit)()
    }

    
    return (
        <>
            <div className="checkout-form-container">
                <form onSubmit={handleSubmit(onSubmit)} id="checkoutFormId" className="checkout-form">
                    <div className="line-item">
                        <span>Datos del cliente</span>
                    </div>
                    <div className="form-row">
                        <div className="form-column">
                            <label htmlFor="name">Nombre</label>
                            <input className={`${errors.name ? 'input-error' : ''}`} {...register("name", { required: '*Este campo es obligatorio' })} type="text" name="name" id="name" />
                            <span class="tick-icon">✔</span>
                            {errors.name && <span className="error-message">{errors.name.message}</span>}
                        </div>
                        <div className="form-column">
                            <label htmlFor="lastname">Apellido</label>
                            <input className={`${errors.lastname ? 'input-error' : ''}`} {...register("lastname", { required: '*Este campo es obligatorio' })} type="text" name="lastname" id="lastname" />
                            <span class="tick-icon">✔</span>
                            {errors.lastname && <span className="error-message">{errors.lastname.message}</span>}
                        </div>
                    </div>
                    <div className="form-row-email">
                    <label htmlFor="email">Email</label>
                    <input className={`${errors.email ? 'input-error' : ''}`} {...register("email", { required: '*Este campo es obligatorio', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: '*Correo no válido' } })} type="email" name="email" id="email" />
                    <span class="tick-icon">✔</span>
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                    </div>
                    <div className="line-item">
                        <span>Información de envío y facturación</span>
                    </div>
                    <div className="form-row">
                        <div className="form-column">
                            <label htmlFor="city">Ciudad</label>
                            <input className={`${errors.city ? 'input-error' : ''}`} {...register("city", { required: '*Este campo es obligatorio' })} type="text" name="city" id="city" />
                            <span class="tick-icon">✔</span>
                            {errors.city && <span className="error-message">{errors.city.message}</span>}
                        </div>
                        <div className="form-column">
                            <label htmlFor="address">Dirección</label>
                            <input className={`${errors.address ? 'input-error' : ''}`} {...register("address", { required: '*Este campo es obligatorio' })} type="text" name="address" id="address" />
                            <span class="tick-icon">✔</span>
                            {errors.address && <span className="error-message">{errors.address.message}</span>}
                        </div>
                    </div>
                    <label htmlFor="payMethod">Método de pago</label>
                    <select className={`${errors.paymethod ? 'input-error' : ''}`} {...register("paymethod", { required: '*Este campo es obligatorio' })} id="payMethod" defaultValue="">
                        <option value="" disabled>...</option>
                        <option value="Redes de cobranza">Redes de cobranza</option>
                        <option value="TDC">Tarjeta de Crédito</option>
                        <option value="TDD">Tarjeta de Débito</option>
                        <option value="Paypal">Paypal</option>
                    </select>
                    <span class="tick-icon">✔</span>
                    {errors.paymethod && <span className="error-message">{errors.paymethod.message}</span>}
                </form>
            </div>
        </>
    )
})

export default CheckoutForm