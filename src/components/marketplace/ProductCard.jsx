import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const variant = product.variants[0];

  return (
    <Link
      to={`/products/${product.id}`}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-lg"
    >
      <div className="flex h-64 items-center justify-center bg-gray-50 p-8">
        <img
          src={variant.image}
          alt={`${product.name} ${variant.name}`}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-5">
        <p className="text-xs font-medium text-purple-600">
          {product.brand}
        </p>

        <h3 className="mt-1 text-base font-semibold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          {variant.name} · {variant.storage}
        </p>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-lg font-bold text-gray-900">
            ₹{variant.price.toLocaleString("en-IN")}
          </span>

          <span className="text-xs text-gray-400 line-through">
            ₹{variant.mrp.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="mt-3 rounded-lg bg-purple-50 px-3 py-2">
          <p className="text-xs text-gray-500">
            EMI starting from
          </p>

          <p className="mt-0.5 text-sm font-semibold text-purple-700">
            ₹
            {Math.round(
              variant.price / product.emiPlans[0].tenure
            ).toLocaleString("en-IN")}
            /month
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-xs font-medium text-gray-600">
            View product
          </span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition group-hover:bg-purple-600">
            <ArrowRight
              size={15}
              className="text-gray-600 transition group-hover:text-white"
            />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;