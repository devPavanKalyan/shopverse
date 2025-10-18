import { Logo } from "./logo/Logo";

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#210F37] text-white px-6 pt-16 pb-12 font-sans"
      style={{ fontFamily: `'Poppins', sans-serif` }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 flex items-center justify-center">
              <Logo />
            </div>
            <h3 className="text-xl font-extrabold tracking-tight text-white">
              ShopVerse
            </h3>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Your one-stop shop for the latest and greatest products. Discover
            deals, new arrivals, and exclusive offers tailored just for you.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide text-white">
            Shop
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/products" className="hover:text-gray-300 transition">
                All Products
              </a>
            </li>
            <li>
              <a href="/categories" className="hover:text-gray-300 transition">
                Categories
              </a>
            </li>
            <li>
              <a
                href="/new-arrivals"
                className="hover:text-gray-300 transition"
              >
                New Arrivals
              </a>
            </li>
            <li>
              <a
                href="/best-sellers"
                className="hover:text-gray-300 transition"
              >
                Best Sellers
              </a>
            </li>
            <li>
              <a href="/deals" className="hover:text-gray-300 transition">
                Deals & Offers
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide text-white">
            Customer Service
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/help-center" className="hover:text-gray-300 transition">
                Help Center
              </a>
            </li>
            <li>
              <a
                href="/shipping-info"
                className="hover:text-gray-300 transition"
              >
                Shipping Info
              </a>
            </li>
            <li>
              <a href="/returns" className="hover:text-gray-300 transition">
                Returns & Exchanges
              </a>
            </li>
            <li>
              <a href="/track-order" className="hover:text-gray-300 transition">
                Track Order
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-gray-300 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide text-white">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about-us" className="hover:text-gray-300 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-gray-300 transition">
                Careers
              </a>
            </li>
            <li>
              <a href="/press" className="hover:text-gray-300 transition">
                Press
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gray-300 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="/affiliates" className="hover:text-gray-300 transition">
                Affiliates
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-500 mt-14 pt-6 text-center text-xs text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} ShopVerse Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
