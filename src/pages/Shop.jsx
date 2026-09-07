import { Link } from "react-router-dom";
import { ArrowRight, MapPin, ShoppingBag, Store } from "lucide-react";

const shopOptions = [
  {
    title: "Top Brands",
    description: "Explore products from leading brands",
    icon: Store,
    path: "/shop/top-brands",
  },
  {
    title: "Nearby Stores",
    description: "Find stores available near you",
    icon: MapPin,
    path: "/shop/nearby-stores",
  },
  {
    title: "1Fi Marketplace",
    description: "Shop products with flexible EMI options",
    icon: ShoppingBag,
    path: "/marketplace",
  },
];

const Shop = () => {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-5 py-8">
        <div>
          <p className="text-sm font-medium text-purple-600">
            Shop
          </p>

          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
            Explore shopping options
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
            Choose how you want to discover products and stores.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {shopOptions.map((option) => {
            const Icon = option.icon;

            return (
              <Link
                key={option.title}
                to={option.path}
                className="group rounded-2xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50">
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                      className="text-purple-600"
                    />
                  </div>

                  <ArrowRight
                    size={17}
                    strokeWidth={1.8}
                    className="text-gray-400"
                  />
                </div>

                <h2 className="mt-6 text-base font-semibold text-gray-900">
                  {option.title}
                </h2>

                <p className="mt-2 text-sm leading-5 text-gray-500">
                  {option.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Shop;