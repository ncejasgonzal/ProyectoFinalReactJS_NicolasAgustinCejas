import { useContext } from "react";
import cartContext from "../../context/CartContext";
import { getCartQuantity } from "../../utils";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { cart } = useContext(cartContext);

    const quantity = getCartQuantity(cart);

    if (!!quantity && quantity)
        return (
            <div>
                <Link to="/Cart" className="btn btn-outline-dark position-relative m-1">
                    <i className="bi bi-cart3"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {!!quantity && quantity}
                        <span className="visually-hidden"> Productos en carrito </span>
                    </span>
                </Link>
            </div>
        );
};

export default CartWidget;