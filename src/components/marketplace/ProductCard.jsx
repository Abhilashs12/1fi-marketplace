import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const variant = product.variants[0];

  return (
    <Link
      to={`/products/${product.id}`}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white"
    >
      <div className="flex h-64 items-center justify-center bg-gray-50 p-8">
        <img
          src={variant.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-5">
        <p className="text-xs font-medium text-purple-600">
          {product.brand}
        </p>

        <h2 className="mt-2 text-base font-semibold text-gray-900">
          {product.name}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {variant.storage} · {variant.name}
        </p>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-lg font-semibold text-gray-900">
              ₹{variant.price.toLocaleString("en-IN")}
            </p>

            <p className="mt-1 text-xs text-gray-400 line-through">
              ₹{variant.mrp.toLocaleString("en-IN")}
            </p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600">
            <ArrowRight
              size={16}
              strokeWidth={2}
              className="text-white"
            />
          </div>
        </div>

        <div className="mt-4 border-t border-gray-100 pt-4">
          <p className="text-xs text-gray-500">
            EMI starting from
          </p>

          <p className="mt-1 text-sm font-semibold text-gray-900">
            ₹{product.emiPlans[0].monthlyAmount.toLocaleString("en-IN")}
            <span className="font-normal text-gray-500">
              {" "}
              / month
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;