import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

type LoginDetails = {
  phone: string;
  acceptedTermsAndPolicy: boolean;
};

const LoginOrSignUp = () => {
  const [disable, setDisable] = useState<boolean>(true);
  const navigate = useNavigate();

  const [loginData, setLoginDetails] = useState<LoginDetails>({
    phone: "",
    acceptedTermsAndPolicy: false
  });

  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    setLoginDetails((prev) => ({ ...prev, phone: value }));
  };

  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginDetails((prev) => ({
      ...prev,
      acceptedTermsAndPolicy: e.target.checked
    }));
  };

  useEffect(() => {
    const { phone, acceptedTermsAndPolicy } = loginData;
    if (phone.length === 10 && acceptedTermsAndPolicy) {
      localStorage.setItem("phone", phone);
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [loginData]);

  const handleLogin = () => {
    axiosInstance
      .post("/auth/sign_access", loginData, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((res) => {
        if (res.status !== 200) {
          return;
        }
        localStorage.setItem("phone", loginData.phone);
        setLoginDetails({ phone: "", acceptedTermsAndPolicy: false });
        navigate(
          "/otplogin?redirect=http://localhost:5100/shopverse.in/&show=true"
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 font-sans"
      style={{ fontFamily: `'Poppins', sans-serif` }}
    >
      <div className="bg-white w-full max-w-md p-8 rounded-3xl border border-gray-100 shadow-md mt-20 mb-[199px]">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 leading-tight tracking-tight ">
          Login or Signup
        </h2>

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number
          </label>
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <span className="flex items-center px-3 text-gray-500 bg-gray-100 border-r border-gray-300 text-sm">
              +91
            </span>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="w-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#210F37] text-gray-800"
              value={loginData.phone}
              onChange={handlePhoneInputChange}
              minLength={10}
              maxLength={10}
              autoFocus
            />
          </div>
        </div>

        <div className="flex items-start mb-5 text-sm text-gray-700">
          <input
            type="checkbox"
            className="mt-1 mr-2"
            checked={loginData.acceptedTermsAndPolicy}
            onChange={handleTermsChange}
          />
          <p>
            By continuing, I agree to the{" "}
            <span className="text-[#210F37] font-semibold cursor-pointer underline underline-offset-2">
              Terms of Use
            </span>{" "}
            &{" "}
            <span className="text-[#210F37] font-semibold cursor-pointer underline underline-offset-2">
              Privacy Policy
            </span>
            .
          </p>
        </div>

        <button
          disabled={disable}
          className={`w-full text-white font-semibold py-2.5 rounded-full transition-all duration-200 text-base ${
            disable
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#210F37] hover:bg-[#3A1B60] cursor-pointer"
          }`}
          onClick={() => {
            handleLogin();
          }}
        >
          Continue
        </button>

        <p className="text-sm text-gray-600 mt-6 text-center">
          Having trouble logging in?{" "}
          <span className="text-[#210F37] font-semibold cursor-pointer underline underline-offset-2">
            Get help
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginOrSignUp;
