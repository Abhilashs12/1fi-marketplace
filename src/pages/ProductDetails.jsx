import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Check, ShieldCheck } from "lucide-react";

import { getProduct } from "../services/marketplaceApi";
import VariantSelector from "../components/product/VariantSelector";

const calculateEmi = (principal, annualRate, tenure) => {
  if (annualRate === 0) {
    return Math.round(principal / tenure);
  }

  const monthlyRate = annualRate / 12 / 100;

  const emi =
    (principal *
      monthlyRate *
      Math.pow(1 + monthlyRate, tenure)) /
    (Math.pow(1 + monthlyRate, tenure) - 1);

  return Math.round(emi);
};

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getProduct(productId);

        setProduct(data);
        setSelectedVariant(data.variants[0]);
      } catch (err) {
        setError(err.message || "Unable to load product");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [productId]);

  const emiPlans = useMemo(() => {
    if (!product || !selectedVariant) {
      return [];
    }

    return product.emiPlans.map((plan) => ({
      ...plan,
      monthlyAmount: calculateEmi(
        selectedVariant.price,
        plan.interestRate,
        plan.tenure
      ),
    }));
  }, [product, selectedVariant]);

  const selectedPlan =
    emiPlans.find((plan) => plan.id === selectedPlanId) ?? emiPlans[0] ?? null;

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
    setSelectedPlanId(null);
  };

  const handleProceed = () => {
    if (!selectedPlan || !selectedVariant || !product) {
      return;
    }

    navigate("/emi-review", {
      state: {
        product,
        variant: selectedVariant,
        plan: selectedPlan,
      },
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-6">
        <div className="mx-auto max-w-6xl">
          <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />

          <div className="mt-6 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="h-[520px] animate-pulse rounded-2xl bg-gray-200" />

            <div className="space-y-5">
              <div className="h-5 w-24 animate-pulse rounded bg-gray-200" />
              <div className="h-10 w-3/4 animate-pulse rounded bg-gray-200" />
              <div className="h-32 animate-pulse rounded-2xl bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/marketplace"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600"
          >
            <ArrowLeft size={16} />
            Back to Marketplace
          </Link>

          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6">
            <h1 className="text-lg font-semibold text-red-900">
              Product unavailable
            </h1>

            <p className="mt-2 text-sm text-red-700">
              {error || "The requested product could not be found."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!selectedVariant) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        <Link
          to="/marketplace"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-gray-900"
        >
          <ArrowLeft size={16} />
          Back to Marketplace
        </Link>

        <div className="mt-5 grid items-start gap-5 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 md:sticky md:top-5">
            <div className="flex h-[320px] items-center justify-center rounded-xl bg-gray-50 p-6 sm:h-[360px] sm:p-8 lg:h-[400px]">
              <img
                src={selectedVariant.image}
                alt={`${product.name} ${selectedVariant.name}`}
                className="max-h-[270px] max-w-full object-contain sm:max-h-[310px] lg:max-h-[350px]"
              />
            </div>

            <div className="mt-4 rounded-xl border border-gray-100 bg-gray-50 p-4">
              <p className="text-xs text-gray-500">Selected variant</p>

              <div className="mt-1 flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-gray-900">
                  {selectedVariant.name}
                </p>

                <p className="text-sm font-medium text-gray-700">
                  {selectedVariant.storage}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-sm font-medium text-purple-600">
              {product.brand}
            </p>

            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-5 text-gray-500">
              {product.description}
            </p>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-2xl font-bold text-gray-900">
                ₹{selectedVariant.price.toLocaleString("en-IN")}
              </span>

              <span className="text-sm text-gray-400 line-through">
                ₹{selectedVariant.mrp.toLocaleString("en-IN")}
              </span>
            </div>

            <VariantSelector
              variants={product.variants}
              selectedVariant={selectedVariant}
              onChange={handleVariantChange}
            />

            <div className="mt-7">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-gray-900">
                  Choose EMI plan
                </h2>

                <span className="text-xs text-gray-500">
                  {emiPlans.length} plans available
                </span>
              </div>

              <div className="mt-3 grid gap-2">
                {emiPlans.map((plan) => {
                  const selected = plan.id === selectedPlanId;

                  return (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setSelectedPlanId(plan.id)}
                      className={`w-full rounded-xl border p-3 text-left transition ${
                        selected
                          ? "border-purple-600 bg-purple-50"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                            selected
                              ? "border-purple-600 bg-purple-600"
                              : "border-gray-300 bg-white"
                          }`}
                        >
                          {selected && (
                            <Check
                              size={12}
                              strokeWidth={3}
                              className="text-white"
                            />
                          )}
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-sm font-semibold text-gray-900">
                              ₹{plan.monthlyAmount.toLocaleString("en-IN")}
                              /month
                            </p>

                            {plan.interestRate === 0 ? (
                              <span className="shrink-0 rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-medium text-green-700">
                                No Cost EMI
                              </span>
                            ) : (
                              <span className="shrink-0 text-[11px] font-medium text-gray-500">
                                {plan.interestRate}% interest
                              </span>
                            )}
                          </div>

                          <div className="mt-1 flex items-center justify-between">
                            <p className="text-xs text-gray-500">
                              {plan.tenure} months
                            </p>

                            {plan.cashback > 0 && (
                              <p className="text-xs font-medium text-purple-600">
                                ₹{plan.cashback.toLocaleString("en-IN")} cashback
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-xl bg-gray-50 p-3.5">
              <ShieldCheck
                size={19}
                className="mt-0.5 shrink-0 text-purple-600"
              />

              <div>
                <p className="text-sm font-medium text-gray-900">
                  Flexible EMI payment
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Select a plan and continue with your chosen EMI option.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleProceed}
              disabled={!selectedPlan}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Check size={16} />

              {selectedPlan
                ? `Proceed with ₹${selectedPlan.monthlyAmount.toLocaleString(
                    "en-IN"
                  )}/month EMI`
                : "Select an EMI plan"}
            </button>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-gray-900">
            Product details
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Details for your selected configuration
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-gray-50 p-3.5">
              <p className="text-xs text-gray-500">Brand</p>

              <p className="mt-1 text-sm font-medium text-gray-900">
                {product.brand}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-3.5">
              <p className="text-xs text-gray-500">Variant</p>

              <p className="mt-1 text-sm font-medium text-gray-900">
                {selectedVariant.name}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-3.5">
              <p className="text-xs text-gray-500">Storage</p>

              <p className="mt-1 text-sm font-medium text-gray-900">
                {selectedVariant.storage}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-3.5">
              <p className="text-xs text-gray-500">Selected EMI</p>

              <p className="mt-1 text-sm font-medium text-gray-900">
                {selectedPlan
                  ? `${selectedPlan.tenure} months`
                  : "Not selected"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;