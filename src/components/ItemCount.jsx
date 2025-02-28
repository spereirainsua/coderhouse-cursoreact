import './styles/ItemCount.css'

const counter = (value, increment, max) => {
    if (increment === 1 && value < max) return value + 1
    else if (increment != 1 && value > 1) return value - 1
    else return value
}

export default function ItemCount({ stock, count, updateCount }) {
    return (
        <>
            <div>
                <div className="input-group">
                    <button className="btn-counter btn" onClick={() => updateCount((count) => counter(count, -1, stock))}>
                    <img src="/img/remove.svg" alt="Quitar" />
                    </button>
                    <span className="input-group-text">{count}</span>
                    <button className="btn-counter btn" onClick={() => updateCount((count) => counter(count, 1, stock))}>
                    <img src="/img/add.svg" alt="Agregar" />
                    </button>
                </div>
            </div>
        </>
    )
}