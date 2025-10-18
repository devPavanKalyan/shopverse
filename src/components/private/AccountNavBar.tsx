import type React from "react";

interface Navbar {
  navLinks: string[];
}

const AccountNavBar: React.FC<Navbar> = ({ navLinks }) => {
  return (
    <nav className="mb-4 mt-6 text-sm text-gray-600 font-medium tracking-wide ">
      {navLinks.map((link, index) => {
        const isLast = index === navLinks.length - 1;
        return (
          <span key={index} className="inline-flex items-center">
            {!isLast ? (
              <>
                <a href="#" className="text-blue-700 hover:underline">
                  {link}
                </a>
                <span className="mx-1 text-gray-600 select-none">{">"}</span>
              </>
            ) : (
              <span className="text-orange-600 font-semibold hover:underline hover:cursor-pointer">
                {link}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default AccountNavBar;
