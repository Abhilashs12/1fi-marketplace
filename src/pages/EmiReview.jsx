import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, ShieldCheck } from "lucide-react";

const EmiReview = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  if (!data || !data.product || !data.variant || !data.plan) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
            <h1 className="text-lg font-semibold text-gray-900">
              EMI selection not found
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Please select a product and EMI plan before continuing.
            </p>

            <Link
              to="/marketplace"
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white"
            >
              Go to Marketplace
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { product, variant, plan } = data;

  const handleConfirm = () => {
    navigate("/emi-success", {
      state: data,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-gray-900"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <div className="mt-6">
          <p className="text-sm font-medium text-purple-600">
            1Fi Marketplace
          </p>

          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-gray-900">
            Review your EMI plan
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Check your selected product and EMI details before continuing.
          </p>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="flex items-center gap-4 border-b border-gray-100 p-5">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-gray-50 p-3">
              <img
                src={variant.image}
                alt={`${product.name} ${variant.name}`}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-medium text-purple-600">
                {product.brand}
              </p>

              <h2 className="mt-1 text-base font-semibold text-gray-900">
                {product.name}
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                {variant.name} · {variant.storage}
              </p>

              <p className="mt-2 text-sm font-semibold text-gray-900">
                ₹{variant.price.toLocaleString("en-IN")}
              </p>
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-50">
                <ShieldCheck
                  size={19}
                  className="text-purple-600"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Selected EMI plan
                </p>

                <p className="text-xs text-gray-500">
                  Your selected payment option
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-500">
                  Monthly EMI
                </p>

                <p className="mt-1 text-lg font-bold text-gray-900">
                  ₹{plan.monthlyAmount.toLocaleString("en-IN")}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-500">
                  Tenure
                </p>

                <p className="mt-1 text-lg font-bold text-gray-900">
                  {plan.tenure} months
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-500">
                  Interest
                </p>

                <p className="mt-1 text-lg font-bold text-gray-900">
                  {plan.interestRate === 0
                    ? "0%"
                    : `${plan.interestRate}%`}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl border border-green-100 bg-green-50 p-4">
              <div>
                <p className="text-sm font-medium text-green-900">
                  {plan.interestRate === 0
                    ? "No Cost EMI"
                    : "EMI plan selected"}
                </p>

                <p className="mt-1 text-xs text-green-700">
                  Cashback: ₹
                  {plan.cashback.toLocaleString("en-IN")}
                </p>
              </div>

              <Check
                size={20}
                className="text-green-600"
              />
            </div>

            <button
              type="button"
              onClick={handleConfirm}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-purple-700"
            >
              <Check size={17} />
              Confirm & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiReview;