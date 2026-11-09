import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const linkStyle = ({ isActive }) =>
    `font-medium transition-colors ${
      isActive
        ? "text-brand"
        : "text-gray-600 hover:text-brand"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold text-brand"
          >
            ShopEase
          </Link>

          {/* Navigation links */}
          <div className="flex items-center gap-4 sm:gap-8">

            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>

            <NavLink
              to="/cart"
              className={linkStyle}
            >
              <span className="flex items-center gap-2">
                Cart
                <span className="bg-brand text-white text-xs font-bold rounded-full px-2 py-1">
                  {cartCount}
                </span>
              </span>
            </NavLink>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;