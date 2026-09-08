import ProductCard from "./ProductCard";

const ProductGrid = ({ products = [], loading = false }) => {
  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
          >
            <div className="h-56 animate-pulse bg-gray-100 sm:h-64" />

            <div className="space-y-3 p-5">
              <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />
              <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />
              <div className="h-3 w-1/2 animate-pulse rounded bg-gray-200" />
              <div className="h-6 w-1/3 animate-pulse rounded bg-gray-200" />
              <div className="h-12 animate-pulse rounded-lg bg-gray-100" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white px-6 py-14 text-center">
        <h3 className="text-base font-semibold text-gray-900">
          No products found
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Try searching with a different product or brand.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;