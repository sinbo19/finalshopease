import { useState } from "react";

function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (status === "error") {
      setStatus("idle");
      setError("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.address.trim()
    ) {
      setError("Please fill in all fields.");
      setStatus("error");
      return;
    }

    // Check email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setError("");
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
    }, 1000);
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Checkout
          </h1>

          <p className="mt-3 text-gray-600">
            Enter your delivery information to complete your order.
          </p>
        </div>

        {/* Checkout Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
          noValidate
        >
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              aria-invalid={
                status === "error" && !formData.name.trim()
              }
              aria-describedby={
                status === "error" ? "form-error" : undefined
              }
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              aria-invalid={
                status === "error" &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
              }
              aria-describedby={
                status === "error" ? "form-error" : undefined
              }
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          {/* Delivery Address */}
          <div>
            <label
              htmlFor="address"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Delivery Address
            </label>

            <textarea
              id="address"
              name="address"
              autoComplete="street-address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your delivery address"
              rows={4}
              aria-invalid={
                status === "error" && !formData.address.trim()
              }
              aria-describedby={
                status === "error" ? "form-error" : undefined
              }
              className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          {/* Error Message */}
          {status === "error" && (
            <p
              id="form-error"
              role="alert"
              className="rounded-lg bg-red-50 p-3 text-sm font-medium text-red-700"
            >
              {error}
            </p>
          )}

          {/* Success Message */}
          {status === "success" && (
            <p
              role="status"
              className="rounded-lg bg-green-50 p-3 text-sm font-medium text-green-700"
            >
              Your order information was submitted successfully!
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className="w-full rounded-xl bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "submitting"
              ? "Submitting..."
              : status === "success"
              ? "Order Submitted"
              : "Place Order"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default Checkout;

