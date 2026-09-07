const VariantSelector = ({
  variants,
  selectedVariant,
  onChange,
}) => {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold text-gray-900">
          Choose variant
        </h2>

        <span className="text-right text-xs text-gray-500">
          {selectedVariant.name} · {selectedVariant.storage}
        </span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {variants.map((variant) => {
          const selected = variant.id === selectedVariant.id;

          return (
            <button
              key={variant.id}
              type="button"
              onClick={() => onChange(variant)}
              className={`rounded-xl border p-3 text-left transition ${
                selected
                  ? "border-purple-600 bg-purple-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-sm font-medium text-gray-900">
                  {variant.name}
                </span>

                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                    selected
                      ? "border-purple-600 bg-purple-600"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {selected && (
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  )}
                </span>
              </div>

              <p className="mt-1.5 text-xs text-gray-500">
                {variant.storage}
              </p>

              <p className="mt-2 text-sm font-semibold text-gray-900">
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