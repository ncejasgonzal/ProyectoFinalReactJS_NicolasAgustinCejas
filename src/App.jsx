import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./context/CartProvider";
import Checkout from "./components/Checkout/Checkout";
import Cart from "./components/Cart/Cart";

function App() {
  return(
    <CartProvider>
      <NavBar/>

      
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Checkout" element={<Checkout/>}/>
      </Routes>
    </CartProvider>
  )
}

export default App
