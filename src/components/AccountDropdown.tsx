import { User } from "lucide-react";

export default function AccountDropdown() {
  return (
    <div className="relative group inline-block">
      {/* Trigger button */}
      <button className="p-2 text-gray-700 hover:text-blue-600 font-semibold">
        <User className="inline mr-1" size={20} />
        Account & Lists
      </button>

      {/* Dropdown Menu */}
      <div className="absolute right-10 -translate-x-1/2 mt-3 w-[500px] bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto">
        {/* Triangle */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>

        {/* Content */}
        <div className="p-4">
          {/* Sign-in Button */}
          <div className="text-center mb-4">
            <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-500">
              Sign in
            </button>
            <p className="text-sm mt-2">
              New customer?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Start here.
              </a>
            </p>
          </div>

          <hr className="my-4" />

          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <h3 className="font-bold mb-2">Your Lists</h3>
              <ul className="space-y-1">
                <li>📝 Create a Wish List</li>
                <li>🌐 Wish from Any Website</li>
                <li>👶 Baby Wishlist</li>
                <li>🎨 Discover Your Style</li>
                <li>🛋️ Explore Showroom</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Your Account</h3>
              <ul className="space-y-1">
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>Your Wish List</li>
                <li>Your Recommendations</li>
                <li>Your Prime Membership</li>
                <li>Your Prime Video</li>
                <li>Your Subscribe & Save Items</li>
                <li>Memberships & Subscriptions</li>
                <li>Your Seller Account</li>
                <li>Manage Your Content and Devices</li>
                <li>Register for a free Business Account</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
