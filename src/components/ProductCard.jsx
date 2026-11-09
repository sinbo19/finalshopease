
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext);

  function handleAddToCart() {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <Link
        to={`/products/${product.id}`}
        className="block overflow-hidden bg-gray-100"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Product Information */}
      <div className="flex flex-1 flex-col p-5">

        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          {product.category}
        </p>

        <Link to={`/products/${product.id}`}>
          <h2 className="mt-2 text-lg font-bold text-gray-900 transition hover:text-brand">
            {product.name}
          </h2>
        </Link>

        <p className="mt-3 text-xl font-extrabold text-brand">
          ${product.price.toFixed(2)}
        </p>

        {/* Add to Cart Button */}
        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-auto w-full rounded-xl bg-brand px-4 py-3 font-semibold text-white transition duration-200 hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
        >
          Add to Cart
        </button>

      </div>
    </article>
  );
}

export default ProductCard;
