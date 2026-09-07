import { Link, useLocation } from "react-router-dom";
import { Check } from "lucide-react";

const EmiSucess = () => {
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-8">
        <div className="mx-auto max-w-xl rounded-2xl border border-gray-200 bg-white p-6 text-center">
          <h1 className="text-lg font-semibold text-gray-900">
            No EMI selection found
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Please select a product and EMI plan before continuing.
          </p>

          <Link
            to="/marketplace"
            className="mt-5 inline-flex rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
          >
            Back to Marketplace
          </Link>
        </div>
      </div>
    );
  }

  const { product, variant, plan } = data;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-xl">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center sm:p-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
            <Check
              size={28}
              strokeWidth={2.5}
              className="text-green-600"
            />
          </div>

          <p className="mt-5 text-sm font-medium text-purple-600">
            1Fi Marketplace
          </p>

          <h1 className="mt-1 text-2xl font-semibold text-gray-900">
            EMI plan confirmed
          </h1>

          <p className="mt-2 text-sm leading-5 text-gray-500">
            Your selected product and EMI plan are ready to proceed.
          </p>

          <div className="mt-6 rounded-xl bg-gray-50 p-4 text-left">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-white p-2">
                <img
                  src={variant.image}
                  alt={`${product.name} ${variant.name}`}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-purple-600">
                  {product.brand}
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-900">
                  {product.name}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {variant.name} · {variant.storage}
                </p>

                <p className="mt-2 text-sm font-semibold text-gray-900">
                  ₹{variant.price.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-left">
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-500">
                Monthly EMI
              </p>

              <p className="mt-1 text-base font-bold text-gray-900">
                ₹{plan.monthlyAmount.toLocaleString("en-IN")}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-500">
                Tenure
              </p>

              <p className="mt-1 text-base font-bold text-gray-900">
                {plan.tenure} months
              </p>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3 text-left">
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-500">
                Interest
              </p>

              <p className="mt-1 text-base font-bold text-gray-900">
                {plan.interestRate === 0
                  ? "0%"
                  : `${plan.interestRate}%`}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-500">
                Cashback
              </p>

              <p className="mt-1 text-base font-bold text-purple-600">
                ₹{plan.cashback.toLocaleString("en-IN")}
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4 text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-600">
                <Check
                  size={16}
                  strokeWidth={3}
                  className="text-white"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-green-900">
                  Selection confirmed
                </p>

                <p className="mt-1 text-xs text-green-700">
                  Your selected EMI configuration has been recorded.
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/marketplace"
            className="mt-6 flex w-full items-center justify-center rounded-xl bg-purple-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-purple-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmiSucess;