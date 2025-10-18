import { Navigate, Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginOrSignUp from "./components/LoginOrSignUp";
import LoginWithPassword from "./components/LoginWithPassword";
import ResetPasswordChange from "./components/PasswordChange";
import ResetPassword from "./components/ResetPassword";
import ShoppingLayout from "./components/ShoppingLayout";
import VerifyWithOtp from "./components/VerifyWithOtp";
import LoginAndSecurity from "./components/private/LoginAndSecurity";
import ProductPage from "./components/product/ProductPage";
import ScrollToTop from "./hooks/ScrollToTop";
import SearchLayout from "./layouts/SearchLayout";
import BuyAgain from "./pages/buy/BuyAgain";
import CartItemsPage from "./pages/cart/CartItemsPage";
import OrderHistory from "./pages/orders/OrderHistory";
import WishlistPage from "./pages/wishlists/WishlistPage";
import ProtectedRoute from "./routes/ProtectedRoute";

// function App() {
//   const open_links = [
//     "/login",
//     "/otplogin",
//     "/login/password",
//     "/forgot",
//     "/password-change"
//   ];

//   const location = useLocation();
//   const isheaderfooter = open_links.includes(location.pathname);
//   return (
//     <div className="flex flex-col jusify-between min-h-screen">
//       {!isheaderfooter && <HeaderLayout />}

//       <main className="flex-1 flex-grow">
//         <Routes>
//           <Route path="/" element={<ShoppingLayout />} />
//           <Route path="/login" element={<LoginOrSignUp />} />
//           <Route path="/otplogin" element={<VerifyWithOtp />} />
//           <Route path="/login/password" element={<LoginWithPassword />} />
//           <Route path="/forgot" element={<ResetPassword />} />
//           <Route path="/password-change" element={<ResetPasswordChange />} />

//           <Route
//             path="/account"
//             element={
//               <ProtectedRoute>
//                 <LoginAndSecurity />
//               </ProtectedRoute>
//             }
//           />

//           <Route path="/product/:slug" element={<ProductDetailsPage />} />

//           <Route path="*" element={<Navigate to="/" replace />} />

//           <Route
//             path="/your-account/order-history"
//             element={<OrderHistory />}
//           />

//           <Route path="/buyagain" element={<BuyAgain />} />

//           <Route path="/cart" element={<CartItemsPage />} />

//           <Route path="/wishlist" element={<WishlistPage />} />
//         </Routes>
//       </main>
//       {/* <div className="bottom-0">{!isheaderfooter && <Footer />}</div> */}
//     </div>
//   );
// }

// export default App;

const App = () => {
  return (
    <div className="flex flex-col jusify-between min-h-screen">
      <ScrollToTop />
      <Header />
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

          <Route path="/farming_categories" element={<Categories />} />

          {/* <Route path="/:slug" element={<ProductDetailsPage />} /> */}

          <Route path="/:slug" element={<ProductPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />

          <Route
            path="/your-account/order-history"
            element={<OrderHistory />}
          />

          <Route path="/s" element={<SearchLayout />} />

          <Route path="/buyagain" element={<BuyAgain />} />

          <Route path="/cart" element={<CartItemsPage />} />

          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
