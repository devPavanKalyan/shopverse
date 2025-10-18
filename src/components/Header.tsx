import { Heart, MapPin, Search, ShoppingCart, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  const [search, setSearch] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <header className="w-full bg-[#210F37] shadow-md">
      <div className="flex items-center justify-between py-3 px-4 md:px-6 gap-4">
        <div className="flex-shrink-0">
          <h1
            onClick={() => navigate("/")}
            className="text-sm sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white hover:text-orange-500 transition-colors duration-300 cursor-pointer"
            style={{ fontFamily: `'Poppins', sans-serif` }}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === "Enter") navigate("/");
            }}
          >
            ShopVerse
          </h1>
        </div>

        <div className="flex-grow max-w-[500px]">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 pointer-events-none">
              <Search size={18} />
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search shopverse.in"
              aria-label="Search products"
              className="w-full pl-9 pr-4 py-2 bg-white border border-gray-300 rounded-full shadow-md text-sm font-medium placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 z-10">
          <button className="flex items-center gap-1 px-2 py-2 text-white hover:bg-[#3C1A5B] rounded-full transition duration-200">
            <MapPin size={20} />
            <span className="text-sm hidden sm:inline">Hyderabad, 500001</span>
          </button>

          <button
            className="flex items-center gap-1 px-2 py-2 text-white hover:bg-[#3C1A5B] rounded-full transition duration-200"
            onClick={() => {
              navigate("/wishlist");
            }}
          >
            <Heart size={20} />
            <span className="text-sm hidden sm:inline">Wishlist</span>
          </button>

          <button
            className="flex items-center gap-1 px-2 py-2 text-white hover:bg-[#3C1A5B] rounded-full transition duration-200"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <ShoppingCart size={20} />
            <span className="text-sm hidden sm:inline">Cart</span>
          </button>

          {/* User Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 px-2 py-2 text-white hover:bg-[#3C1A5B] rounded-full transition duration-200">
              <User size={20} />
              <span className="text-sm hidden sm:inline">Account</span>
            </button>

            {dropdownOpen && (
              <DropdownMenu onClose={() => setDropdownOpen(false)} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
