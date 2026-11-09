
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

// Cart Context
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-surface">

          {/* Skip to Main Content */}
          <a
            href="#main-content"
            className="absolute left-4 top-[-100px] z-[100] rounded-lg bg-white px-5 py-3 font-semibold text-brand shadow-lg focus:top-4 focus:outline-none focus:ring-2 focus:ring-brand"
          >
            Skip to main content
          </a>

          <Navbar />

          <div id="main-content" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route
                path="/products/:productId"
                element={<ProductDetails />}
              />

              <Route path="/cart" element={<Cart />} />

              <Route path="/checkout" element={<Checkout />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;




