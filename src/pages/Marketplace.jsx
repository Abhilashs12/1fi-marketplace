import { useEffect, useState } from "react";
import ProductGrid from "../components/marketplace/ProductGrid";
import { getProducts } from "../services/marketplaceApi";

const Marketplace = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getProducts();

        setProducts(data);
      } catch (err) {
        setError("Unable to load products.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-5 py-8">
        <div>
          <p className="text-sm font-medium text-purple-600">
            1Fi
          </p>

          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
            Marketplace
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
            Explore products available with flexible EMI options.
          </p>
        </div>

        <div className="mt-8">
          {loading && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="overflow-hidden rounded-2xl border border-gray-200"
                >
                  <div className="h-64 animate-pulse bg-gray-100" />

                  <div className="space-y-3 p-5">
                    <div className="h-3 w-16 animate-pulse rounded bg-gray-100" />
                    <div className="h-5 w-40 animate-pulse rounded bg-gray-100" />
                    <div className="h-3 w-24 animate-pulse rounded bg-gray-100" />
                    <div className="h-6 w-28 animate-pulse rounded bg-gray-100" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && error && (
            <div className="rounded-2xl border border-red-100 bg-red-50 px-6 py-12 text-center">
              <p className="text-sm text-red-600">
                {error}
              </p>
            </div>
          )}

          {!loading && !error && (
            <ProductGrid products={products} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Marketplace;