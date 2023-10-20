import CartWidget from "../CartWidget/CartWidget";
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className=" bg-dark-subtle navbar navbar-expand-lg">
            <div className="container-fluid">

                <Link to="/" className="navbar-brand">TuInsumoTattoo</Link>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/category/Machines" className="nav-link fw-bold">Máquinas</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/Cartridges" className="nav-link fw-bold">Cartuchos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/Needles" className="nav-link fw-bold">Agujas</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/HygieneAndSafety" className="nav-link fw-bold">Higiene y Seguridad</NavLink>
                    </li>
                </ul>

                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;