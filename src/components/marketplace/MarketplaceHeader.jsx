import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MarketplaceHeader = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/shop"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
          aria-label="Back to Shop"
        >
          <ArrowLeft size={17} />
        </Link>

        <div>
          <p className="text-xs font-medium text-purple-600">1Fi Marketplace</p>
          <h1 className="text-lg font-semibold text-gray-900">
            Shop products with EMI
          </h1>
        </div>
      </div>
    </header>
  );
};

export default MarketplaceHeader;