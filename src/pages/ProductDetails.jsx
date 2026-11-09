import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import products from "../data/products";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { productId } = useParams();
  const { dispatch } = useContext(CartContext);

  const product = products.find(
    (item) => item.id === Number(productId)
  );

  function handleAddToCart() {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

    alert(`${product.name} added to cart!`);
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Product Not Found</h1>

        <Link
          to="/"
          className="inline-block mt-4 text-brand underline"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <Link to="/" className="text-brand hover:underline">
        ← Back to Products
      </Link>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-80 object-cover rounded-xl"
        />

        <div>
          <p className="text-gray-500">{product.category}</p>

          <h1 className="text-3xl font-bold mt-2">
            {product.name}
          </h1>

          <p className="text-2xl font-bold text-brand mt-4">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-gray-600 mt-6">
            {product.description}
          </p>

          <button
            type="button"
            onClick={handleAddToCart}
            className="mt-8 bg-brand text-white px-6 py-3 rounded-lg hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
