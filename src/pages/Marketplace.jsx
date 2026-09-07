import { useEffect, useState } from "react";
import { Search, ShoppingBag } from "lucide-react";

import { getProducts } from "../services/marketplaceApi";
import ProductGrid from "../components/marketplace/ProductGrid";

const Marketplace = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getProducts();

        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError(err.message || "Unable to load products");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query)
    );

    setFilteredProducts(filtered);
  }, [search, products]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-purple-600">
              1Fi Marketplace
            </p>

            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              Shop now, pay later
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-5 text-gray-500">
              Choose from selected products and pay through flexible EMI
              plans.
            </p>
          </div>

          <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 sm:flex">
            <ShoppingBag size={20} className="text-purple-600" />
          </div>
        </div>

        <div className="mt-6">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products or brands"
              className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              Featured products
            </h2>

            {!loading && !error && (
              <p className="mt-1 text-xs text-gray-500">
                {filteredProducts.length} products available
              </p>
            )}
          </div>

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="text-xs font-medium text-purple-600 hover:text-purple-700"
            >
              Clear search
            </button>
          )}
        </div>

        <div className="mt-4">
          {error ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
              <h2 className="text-sm font-semibold text-red-900">
                Unable to load Marketplace
              </h2>

              <p className="mt-1 text-sm text-red-700">
                {error}
              </p>

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-xs font-semibold text-white"
              >
                Try again
              </button>
            </div>
          ) : loading ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
                >
                  <div className="h-64 animate-pulse bg-gray-100" />

                  <div className="space-y-3 p-5">
                    <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
                    <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />
                    <div className="h-5 w-1/2 animate-pulse rounded bg-gray-200" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <ProductGrid products={filteredProducts} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;