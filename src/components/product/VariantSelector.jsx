const VariantSelector = ({ variants, selectedVariant, onChange }) => {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-900">
          Choose variant
        </h2>

        <span className="text-xs text-gray-500">
          {selectedVariant.name} · {selectedVariant.storage}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {variants.map((variant) => {
          const selected = variant.id === selectedVariant.id;

          return (
            <button
              key={variant.id}
              type="button"
              onClick={() => onChange(variant)}
              className={`rounded-xl border p-4 text-left transition ${
                selected
                  ? "border-purple-600 bg-purple-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">
                  {variant.name}
                </span>

                <span
                  className={`h-4 w-4 rounded-full border ${
                    selected
                      ? "border-purple-600 bg-purple-600"
                      : "border-gray-300 bg-white"
                  }`}
                />
              </div>

              <p className="mt-2 text-xs text-gray-500">
                {variant.storage}
              </p>

              <p className="mt-3 text-sm font-semibold text-gray-900">
                ₹{variant.price.toLocaleString("en-IN")}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default VariantSelector;