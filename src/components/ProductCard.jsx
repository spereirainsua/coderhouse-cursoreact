import './styles/ProductCard.css'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
    return (
        <>
            <div className="card">
                <div className="img-container">
                    <img src={product.image} alt="Imagen del producto" className="card-img" />
                </div>

                <div className="title-container">
                    <h5>{product.title}</h5>
                    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <button className="btn-card">Más detalles...</button>
                    </Link>
                </div>
            </div>
        </>
    )
}



