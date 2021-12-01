import { NavBar } from "./componentes/NavBar/NavBar";
import { Footer } from "./componentes/Footer/Footer";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./componentes/CartContext/CartContext";
import { Cart } from "./componentes/Cart/Cart";
import { Checkout } from "./componentes/Checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
