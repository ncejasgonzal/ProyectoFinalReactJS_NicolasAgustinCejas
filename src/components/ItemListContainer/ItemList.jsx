import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ items, isLoading }) => {
    if (isLoading) {
        return <h1 className="text-center">Cargando...</h1>
    }

    return (
        <div>
            <div className="container">
                <h1 className="text-center mt-5">Bienvenido a Tu Insumo Tattoo!</h1>
                <h3 className="text-center mb-4">Aquí encontrarás todo lo necesario para desenvolverte como un gran profesional.</h3>
            </div>

            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    {items.map((item) => (
                        <div className="col-md-3 "  key={item.id}>
                            <Link to={`/item/${item.id}`} className="card-link" style={{ textDecoration: 'none' }}>
                                <div className="card bg-dark text-white" style={{ maxWidth: '800px', margin: 'auto' }}>
                                    <div className="card-img-container" style={{ maxHeight: '300px', overflow: 'hidden' }}>
                                        <img src={`../../src/assets/image/${item.imageId}`}  className="card-img-top" alt={item.title} style={{ width: '100%', objectFit: 'cover' }}  />
                                    </div >
                                    <div className="card-body bg-dark text-center">
                                        <h5 className="card-title " >{item.title}</h5>
                                        <p className="card-text">${item.price}</p>
                                        <p className="card-text">{item.categoryId}</p>
                                        <button className=" btn btn-primary">
                                            <h3>Ver detalles</h3>
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
};

ItemList.propTypes = {
    items: propTypes.array.isRequired,
    isLoading: propTypes.bool,
};

export default ItemList;