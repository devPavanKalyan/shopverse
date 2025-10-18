import { Heart, MapPin, Search, ShoppingCart, User, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { Logo } from "./logo/Logo";

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
    <header className="px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between gap-4  border-b border-b-2 border-gray-200">
      <h1
        onClick={() => navigate("/")}
        className="hidden md:block text-2xl md:text-3xl font-extrabold tracking-tight text-orange-500 transition-colors duration-300 cursor-pointer"
        role="button"
        onKeyDown={(e) => {
          if (e.key === "Enter") navigate("/");
        }}
      >
        ShopVerse
      </h1>

      <div
        className="flex items-center jusify-center w-fit h-12"
        onClick={() => navigate("/")}
      >
        <Logo />
      </div>

      <div className="flex items-center flex-1 w-full max-w-full relative backdrop-blur-sm border border-2 border-orange-500  py-1 rounded-full transition-all duration-300 md:max-w-lg md:px-2 px-1 gap-2 max-w-sm">
        <button
          onClick={() => navigate(`/?query=${search}`)}
          className="bg-orange-500 text-white h-9 w-9 rounded-full flex items-center justify-center transition-colors flex-shrink-0"
        >
          <Search className="w-5 h-5" />
        </button>

        <div className="flex-1">
          <input
            type="text"
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;

              const trimmedSearch = search.trim();

              if (!trimmedSearch) {
                navigate("/");
                return;
              }

              const url = new URL(window.location.href);
              url.searchParams.set("k", trimmedSearch);

              navigate(`/s?${url.searchParams.toString()}`);
            }}
            className="w-full bg-transparent md:px-2 text-gray-800 placeholder-gray-500 focus:outline-none"
          />
        </div>

        {search && (
          <button
            onClick={() => setSearch("")}
            className="text-gray-500 hover:text-[#4B0082] h-9 w-9 rounded-full flex items-center justify-center transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="flex items-center gap-1 z-10">
        <div className="hidden md:flex items-center gap-1">
          <button className="flex items-center gap-1 px-2 py-2  hover:bg-orange-500 hover:text-white font-semibold px-3 rounded-full transition duration-200">
            <MapPin size={20} />
            <span className="text-sm hidden sm:inline">Hyderabad, 500001</span>
          </button>

          <button
            className="flex items-center gap-1 px-2 py-2  hover:bg-orange-500 hover:text-white font-semibold px-3 rounded-full transition duration-200"
            onClick={() => navigate("/wishlist")}
          >
            <Heart size={20} />
            <span className="text-sm hidden sm:inline">Wishlist</span>
          </button>

          <button
            className="flex items-center gap-1 px-2 py-2  hover:bg-orange-500 hover:text-white font-semibold px-3 rounded-full transition duration-200"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart size={20} />
            <span className="text-sm hidden sm:inline">Cart</span>
          </button>
        </div>

        <div
          className="hidden md:block relative"
          ref={dropdownRef}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="flex items-center gap-1 px-2 py-2  hover:bg-orange-500 hover:text-white font-semibold px-3 rounded-full transition duration-200">
            <User size={20} />
            <span className="text-sm hidden sm:inline md:inline">Account</span>
          </button>

          {dropdownOpen && (
            <DropdownMenu onClose={() => setDropdownOpen(false)} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

// const Header = () => {
//   const [search, setSearch] = useState<string>("");
//   const navigate = useNavigate();
//   return (
//     <header className="p-2 flex items-center justify-center">
//       <div className="flex items-center jusify-between">
//         <div>Logo</div>
//         <div className="flex items-center flex-1 w-full max-w-full relative backdrop-blur-sm border border-2 border-[#4B0082]  py-1 rounded-full transition-all duration-300 md:max-w-lg md:px-2 px-1 gap-2 max-w-sm">
//           <button
//             onClick={() => navigate(`/?query=${search}`)}
//             className="bg-[#4B0082]  h-9 w-9 rounded-full flex items-center justify-center transition-colors flex-shrink-0"
//           >
//             <Search className="w-5 h-5" />
//           </button>

//           <div className="flex-1">
//             <input
//               type="text"
//               value={search}
//               placeholder="Search"
//               onChange={(e) => setSearch(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   const url = new URL(window.location.href);
//                   const params = url.searchParams;

//                   params.set("query", search);

//                   navigate(`${url.pathname}?${params.toString()}`);
//                 }
//               }}
//               className="w-full bg-transparent md:px-2 text-gray-800 placeholder-gray-500 focus:outline-none"
//             />
//           </div>

//           {search && (
//             <button
//               onClick={() => setSearch("")}
//               className="text-gray-500 hover:text-[#4B0082] h-9 w-9 rounded-full flex items-center justify-center transition-colors flex-shrink-0"
//             >
//               <X className="w-4 h-4" />
//             </button>
//           )}
//         </div>
//         <div>Account</div>
//       </div>
//     </header>
//   );
// };

// export default Header;
