import './styles/CartItem.css'

export default function CartItem({ product, onRemove }) {

    const handleRemove = () => {
        onRemove(product.id)
    }

    return (
        <>
            <div className="card-row">
                <div className="counter-container">
                    <span>{product.quantity} x</span>
                </div>
                <div className="img-container-row">
                    <img src={product.image} alt="Imagen del producto" className="card-img-row" />
                </div>
                <div className="title-container-row">
                    <span>{product.title}</span>
                </div>
                <div className="subtotal-row-container">
                    <span>${(product.quantity * product.price).toFixed(2)}</span>
                </div>
                <div className="btn-delete-row">
                    <button className="btn btn-delete" onClick={handleRemove}><img src="/img/delete.svg" alt="Eliminar" /></button>
                </div>
            </div>
        </>
    )
}