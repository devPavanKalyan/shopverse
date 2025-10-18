import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import LoginOrSignUp from "./components/LoginOrSignUp";
import LoginWithPassword from "./components/LoginWithPassword";
import ResetPasswordChange from "./components/PasswordChange";
import LoginAndSecurity from "./components/private/LoginAndSecurity";
import ResetPassword from "./components/ResetPassword";
import ShoppingLayout from "./components/ShoppingLayout";
import VerifyWithOtp from "./components/VerifyWithOtp";
import HeaderLayout from "./layouts/HeaderLayout";
import BuyAgain from "./pages/buy/BuyAgain";
import CartItemsPage from "./pages/cart/CartItemsPage";
import OrderHistory from "./pages/orders/OrderHistory";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import WishlistPage from "./pages/wishlists/WishlistPage";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  const open_links = [
    "/login",
    "/otplogin",
    "/login/password",
    "/forgot",
    "/password-change"
  ];

  const location = useLocation();
  const isheaderfooter = open_links.includes(location.pathname);
  return (
    <div className="flex flex-col jusify-between min-h-screen">
      {!isheaderfooter && <HeaderLayout />}

      <main className="flex-1 flex-grow">
        <Routes>
          <Route path="/" element={<ShoppingLayout />} />
          <Route path="/login" element={<LoginOrSignUp />} />
          <Route path="/otplogin" element={<VerifyWithOtp />} />
          <Route path="/login/password" element={<LoginWithPassword />} />
          <Route path="/forgot" element={<ResetPassword />} />
          <Route path="/password-change" element={<ResetPasswordChange />} />

          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <LoginAndSecurity />
              </ProtectedRoute>
            }
          />

          <Route path="/product/:slug" element={<ProductDetailsPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />

          <Route
            path="/your-account/order-history"
            element={<OrderHistory />}
          />

          <Route path="/buyagain" element={<BuyAgain />} />

          <Route path="/cart" element={<CartItemsPage />} />

          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </main>
      <div className="bottom-0">{!isheaderfooter && <Footer />}</div>
    </div>
  );
}

export default App;
