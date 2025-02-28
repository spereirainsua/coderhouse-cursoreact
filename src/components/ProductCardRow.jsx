import './styles/ProductCardRow.css'

export default function ProductCardRow({ product, onRemove }) {

    const handleRemove = () => {
        onRemove(product.id)
    }
    return (
        <>
            <div className="card-row">
                <div className="img-container-row">
                    <img src={product.image} alt="Imagen del producto" className="card-img-row" />
                </div>
                <div className="title-container-row">
                    <h5>{product.title}</h5>
                </div>
                <div className="counter-container">
                    <span>{product.quantity}</span>
                </div>
                <div className="btn-delete-row">
                    <button className="btn btn-delete"><img src="/img/delete.svg" alt="Eliminar" onClick={handleRemove} /></button>
                </div>
            </div>
        </>
    )
}