import { LogOut } from "lucide-react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

interface DropdownMenuProps {
  onClose?: () => void; // Optional callback to close dropdown on logout
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);

  const SIGN_IN_REDIRECT = import.meta.env.VITE_SIGN_IN_REDIRECT_URL;

  const handleLogout = () => {
    logout();
    if (onClose) onClose();
  };

  return (
    <div className="absolute right-0 top-10 w-72 bg-white rounded-3xl shadow-lg p-8 z-50 font-sans text-gray-900">
      {isAuthenticated ? (
        <div className="flex flex-col jusify-between">
          <p className="text-sm text-black mb-7">
            Manage your account and orders with ease.
          </p>

          <section className="mb-8">
            <h4 className="text-indigo-800 text-sm font-semibold uppercase tracking-widest mb-4 border-b border-indigo-200 pb-2">
              Your Account
            </h4>
            <ul className="text-sm">
              {[
                { href: "/shopverse.in/account", label: "Your Account" },
                {
                  href: "/shopverse.in/your-account/order-history",
                  label: "Your Orders"
                },
                {
                  href: "/shopverse.in/wishlist",
                  label: "Your Wish List"
                },
                { href: "/keep-shopping", label: "Keep shopping for" },
                { href: "/recommendations", label: "Your Recommendations" },
                { href: "/devices", label: "Devices" },
                {
                  href: "/business-account",
                  label: "Register for a free Business Account"
                }
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block px-3 py-2 rounded-md hover:bg-indigo-50 hover:text-indigo-700 transition duration-200 font-medium"
                    tabIndex={0}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <button
            onClick={handleLogout}
            className="w-full flex justify-center items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-full shadow-md transition duration-300"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      ) : (
        <div className="flex flex-col jusify-between">
          <p className="font-extrabold text-xl mb-2 tracking-tight leading-snug text-gray-900">
            Welcome
          </p>
          <p className="text-sm text-gray-600 mb-6">
            To access account and manage orders, please log in.
          </p>
          <button
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-full shadow-md transition duration-300"
            onClick={() => navigate(`/login?redirect=${SIGN_IN_REDIRECT}`)}
          >
            Login / SignUp
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
