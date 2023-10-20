import PropTypes from "prop-types";
import { Link } from "react-router-dom";    

const ItemDetail = ({ item, isLoading, addItem}) => {
    if (isLoading) {
        return <h1 className="text-center">Cargando...</h1>
    }

    if (!item) {
        return <h2>Producto no encontrado!</h2>;
    }

    

    return (
        <div className="container ">
            <div className="row d-flex justify-content-center align-items-center mt-4">
                <div className="col-md-3 m-0 p-0">
                    <button onClick={() => addItem(item, 1)} className="btn btn-primary btn-lg p-3">Añadir al carrito</button>
                </div>
                <div className="col-md-6 m-0 p-0">
                    <div className="card bg-dark text-white" style={{ margin: 'auto', maxWidth: '300px', maxHeight: '600px' }}>
                        <h1 className="card-title text-center">{item.title}</h1>
                        <h3 className="card-text text-center">${item.price}</h3>
                        <p className="card-text text-center">{item.categoryId}</p>
                        <div className="d-flex justify-content-center align-items-center" style={{ maxHeight: '600px', maxWidth: '400px', overflow: 'hidden' }}>
                            <img src={`../images/${item.imageId}`}alt={item.name} className="card-img-top" style={{ width: '100%', objectFit: 'contain' }} />
                        </div>
                        <h5 className="card-text text-center">{item.description}</h5>
                        <h5 className="card-text text-center bg-danger"> STOCK: {item.stock} unidades</h5>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-end m-0 p-0">
                    <Link to="/Checkout" onClick={() => addItem(item, 1)} className="btn btn-success btn-lg p-3">Comprar</Link>
                </div>
            </div>
        </div>


    );
};



ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool,
    addItem: PropTypes.func,
}

export default ItemDetail;