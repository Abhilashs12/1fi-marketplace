import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  if (!products.length) {
    return (
      <div className="rounded-2xl border border-gray-200 px-6 py-16 text-center">
        <p className="text-sm text-gray-500">
          No products available.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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