import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // Empty Cart
  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-center shadow-sm sm:p-12">
          <div className="text-6xl" aria-hidden="true">
            🛒
          </div>

          <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-gray-600">
            You haven't added any products yet. Start shopping to find something you love!
          </p>

          <Link
            to="/"
            className="mt-8 inline-block rounded-xl bg-brand px-7 py-3 font-semibold text-white transition hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>

          <p className="mt-2 text-gray-600">
            You have {totalItems} items in your cart.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          {/* Cart Products */}
          <section
            className="space-y-5 lg:col-span-2"
            aria-label="Cart products"
          >
            {cart.map((item) => (
              <article
                key={item.id}
                className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-36 w-full rounded-xl object-cover sm:h-28 sm:w-28"
                />

                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-bold text-gray-900">
                    {item.name}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {item.category}
                  </p>

                  <p className="mt-2 font-bold text-brand">
                    ${item.price.toFixed(2)}
                  </p>

                  <p className="mt-2 text-sm text-gray-600">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-1">
                    <button
                      type="button"
                      disabled={item.quantity <= 1}
                      aria-label={`Decrease quantity of ${item.name}`}
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_QUANTITY",
                          payload: {
                            id: item.id,
                            quantity: item.quantity - 1,
                          },
                        })
                      }
                      className="h-9 w-9 rounded-lg bg-gray-100 font-bold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-brand disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      -
                    </button>

                    <span
                      className="min-w-5 text-center font-bold"
                      aria-live="polite"
                    >
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      aria-label={`Increase quantity of ${item.name}`}
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_QUANTITY",
                          payload: {
                            id: item.id,
                            quantity: item.quantity + 1,
                          },
                        })
                      }
                      className="h-9 w-9 rounded-lg bg-gray-100 font-bold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-brand"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item.id,
                      })
                    }
                    className="text-sm font-semibold text-red-600 transition hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </section>

          {/* Order Summary */}
          <aside className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Total Items</span>
                <span className="font-semibold text-gray-900">
                  {totalItems}
                </span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900">
                  ${total.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-semibold text-green-600">
                  Free
                </span>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-lg font-extrabold text-gray-900">
                  <span>Total</span>
                  <span className="text-brand">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="mt-7 block rounded-xl bg-brand px-6 py-3 text-center font-semibold text-white transition hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/"
              className="mt-4 block text-center text-sm font-semibold text-gray-600 hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
            >
              Continue Shopping
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Cart;