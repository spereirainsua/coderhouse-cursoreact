import ReactLoading from 'react-loading'
import './styles/LoadingComponent.css'

export default function LoadingComponent() {
    return (
        <>
            <div className="container-lg loading">
                <div className="item-loading">
                    <ReactLoading type={"cylon"} color={"#efb810"} height={"100%"} width={"100%"} />
                </div>
                <h3>Cargando...</h3>
            </div>
        </>
    )
}