import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import StaticPage from "./components/StaticPage";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./routes/Cart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<StaticPage page="home" />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
