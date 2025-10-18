import { Logo } from "./logo/Logo";

export default function Footer() {
  return (
    <footer
      className="w-full text-black px-6 pt-16 pb-12 font-sans bg-gray-100 border-t border-t-2 border-orange-500"
      style={{ fontFamily: `'Poppins', sans-serif` }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 flex items-center justify-center">
              <Logo />
            </div>
            <h3 className="text-xl font-extrabold tracking-tight text-black">
              ShopVerse
            </h3>
          </div>
          <p className="text-sm text-black leading-relaxed">
            Your one-stop shop for the latest and greatest products. Discover
            deals, new arrivals, and exclusive offers tailored just for you.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide text-black">
            Shop
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              "All Products",
              "Categories",
              "New Arrivals",
              "Best Sellers",
              "Deals & Offers"
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-orange-500 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide text-black">
            Customer Service
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              "Help Center",
              "Shipping Info",
              "Returns & Exchanges",
              "Track Order",
              "Contact Us"
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-orange-500 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide text-black">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            {["About Us", "Careers", "Press", "Blog", "Affiliates"].map(
              (item) => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-500 transition">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <div className="border-t mt-14 pt-6 text-center text-xs text-black">
        <p>
          &copy; {new Date().getFullYear()} ShopVerse Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
