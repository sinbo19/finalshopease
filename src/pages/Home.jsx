
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-200">
            Welcome to ShopEase
          </p>

          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Discover Products You Love
          </h1>

          <p className="mt-4 max-w-2xl text-base text-indigo-100 sm:text-lg">
            Find quality products at great prices.
            Your shopping journey starts here.
          </p>
        </div>
      </section>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">

        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Our Products
            </h2>

            <p className="mt-2 text-gray-600">
              Explore our collection and find your favorites.
            </p>
          </div>

          <p className="text-sm font-medium text-gray-500">
            {filteredProducts.length} products found
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="sm:col-span-2">
            <label
              htmlFor="product-search"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Search products
            </label>

            <input
              id="product-search"
              type="search"
              placeholder="Search by product name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <div>
            <label
              htmlFor="category-filter"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Category
            </label>

            <select
              id="category-filter"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200"
            >
              <option value="All">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Home">Home</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <div className="col-span-full rounded-2xl bg-white py-16 text-center shadow-sm">
              <h3 className="text-xl font-bold text-gray-800">
                No products found
              </h3>

              <p className="mt-2 text-gray-500">
                Try another search or select a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="mt-5 rounded-lg bg-brand px-5 py-2 font-semibold text-white hover:bg-brand-dark"
              >
                Clear Filters
              </button>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}

export default Home;
