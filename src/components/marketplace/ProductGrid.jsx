import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
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
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;