import { useContext, useState } from 'react';
import cartContext from '../../context/CartContext';
import { getCartTotal, mapCartOrder } from '../../utils';
import Field from '../Field/Field';
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [orderId, setOrderId] = useState("");
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const { name, email, phone } = formState;

    const { cart, clear } = useContext(cartContext);

    const onChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const isFormValid = name && email && phone;


    const createOrder = (event) => {
        event.preventDefault();

        if (isFormValid) {
            const order = {
                buyer: formState,
                items: mapCartOrder(cart),
                total,
                date: serverTimestamp(),
            };

            const db = getFirestore();;

            const orderCollection = collection(db, "orders");

            addDoc(orderCollection, order)
                .then((docRef) => {
                    setOrderId(docRef.id)
                    console.log("Orden Creada con ID", docRef.id);
                })
                .catch((err) => {
                    console.log("Error al crear la orden:", err)
                })
            clear();
        };
    };

    if (isLoading) {
        return <h2>Se esta generando la orden.....</h2>
    };

    if (orderId) {
        return (
            <div>
                <h2 className={`text-center pt-5 mb-0 fs-1`}> Tu numero de compra es: {orderId}</h2>
                <h3 className='text-center p-5 '>Esperamos que la disfrutes!!</h3>
            </div>
        )
    };


    const total = getCartTotal(cart);

    return (
        <div>
            <h2 className='text-center m-5'>Resumen de la compra</h2>

            {orderId && <p className='text-center'>Tu codigo de compra es: {orderId}</p>}

            {!orderId && (

                <>
                    <ul className='list-unstyled d-flex flex-wrap justify-content-center'>
                        {cart.map((item) => (
                            <li className='col-md-3 card bg-dark text-white' style={{ listStyle: 'none' }} key={item.id}>
                                <div style={{ width: '150px', height: '150px', overflow: 'hidden', marginLeft: '25%'  }}>
                                    <img src={`../../src/assets/image/${item.imageId}`} alt={item.name} className="card-img-top" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h4 className='text-center'>{item.title}</h4>
                                <h4 className='text-center'>Cantidad: {item.quantity}</h4>
                                <h3 className='text-center'>Precio por unidad: ${item.price}</h3>
                                <h2 className='text-center'>Subtotal: ${item.price * item.quantity}</h2>
                            </li>
                        ))}
                    </ul>
                    <h2 className='text-center m-5 fs-1 bg-info card'>Total de la compra: ${total} </h2>
                    <form onSubmit={createOrder}>
                        <h2 className="text-center mt-3">Ingresa tus datos para completar la compra 🛍</h2>
                        <div className="container p-2">
                            <div className="d-flex justify-content-center">
                                <Field label="Nombre:" name="name" type="text" placeholder="Notorious B.I.G." onChange={onChange} />
                            </div>
                            <div className="d-flex justify-content-center">
                                <Field label="Email:" name="email" type="email" placeholder="Thebigpoppa@gmail.com" onChange={onChange} />
                                <Field label="Telefono:" name="phone" type="tel" placeholder="1123456789" onChange={onChange} />
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <button className="btn btn-success w-25 mx-auto" disabled={!isFormValid} type="submit"> COMPRAR </button>
                            </div>

                        </div>

                    </form>
                </>
            )}
        </div>
    );
};

export default Checkout;
