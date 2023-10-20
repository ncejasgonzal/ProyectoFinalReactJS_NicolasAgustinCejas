import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { getCartTotal } from '../../utils';

const Cart = () => {
    const { cart, addItem, removeItem, clear } = useContext(CartContext);

    const total = getCartTotal(cart);

    return (
        <div className="container">
            <ul>
                {cart.map((item) => (
                    <li style={{ listStyle: 'none', marginBottom: '20px', marginLeft: '150px' }} key={item.id} className="d-flex align-items-center justify-content-between">
                        <div style={{ width: '300px', height: '300px', overflow: 'hidden', marginRight: '20px' }}>
                            <img src={`./images/${item.imageId}`} alt={item.name} className="card-img-top" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ marginRight: '150px' }}>
                            <h4>{item.title}</h4>
                            <h4>Cantidad: {item.quantity}</h4>
                            <h3>Precio por unidad: ${item.price}</h3>
                            <h2>Subtotal: ${item.price * item.quantity}</h2>
                            <button className='btn btn-dark m-2' onClick={() => addItem(item, 1)}>Agregar 1 unidad</button>
                            <button className='btn btn-danger m-2' onClick={() => removeItem(item.id, 1)}>Eliminar producto</button>
                        </div>
                    </li>
                ))}
            </ul>

            <h2 className='text-center bg-warning btn-lg'>Precio total de la compra: ${total}</h2>
            <Link to="/Checkout" className="btn btn-outline-success btn-lg mx-auto d-block m-4">
                Finalizar compra
            </Link>
            <button onClick={clear} className="btn btn-secondary btn-lg mx-auto d-block m-8">
                Vaciar carrito
            </button>

        </div>
    );
};

export default Cart;