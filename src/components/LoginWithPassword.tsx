import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginWithPassword = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateInputs = (input: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneRegex = /^\d{10}$/;

    if (emailRegex.test(input)) {
      return { isValid: true, type: "email" };
    } else if (phoneRegex.test(input)) {
      return { isValid: true, type: "phone" };
    } else {
      return {
        isValid: false,
        message:
          "Invalid phone number or email. Must be a valid email or 10-digit number."
      };
    }
  };

  useEffect(() => {
    if (identifier && password) {
      setError("");
    }
  }, [identifier, password]);

  const handleLogin = () => {
    if (!identifier || !password) {
      setError("Please enter both fields.");
      return;
    }

    const { isValid, message } = validateInputs(identifier);
    if (!isValid) {
      setError(message || "Invalid input.");
      return;
    }

    // TODO: connect to backend and validate login
    // TODO: show error if credentials don't exist
    // TODO: redirect to home page if login successful
  };

  const isFormValid = identifier && password && !error;

  return (
    <div
      className="flex flex-col items-center font-sans py-20 px-2"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="bg-white w-full max-w-md p-8 md:border md:border-2 md:border-orange-200 rounded-3xl text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Login to your account
        </h2>

        <form className="text-left">
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email or Mobile Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter email or mobile"
              className="w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#210F37]"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#210F37]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </div>
        </form>

        {error && (
          <div className="text-red-500 text-sm font-medium mb-4">{error}</div>
        )}

        <button
          onClick={handleLogin}
          disabled={!isFormValid}
          className={`w-full py-2 text-white font-semibold rounded-full transition duration-200 ${
            isFormValid
              ? "bg-[#210F37] hover:bg-[#3a1d63] cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          LOGIN
        </button>

        <p className="text-sm text-gray-700 mt-6">
          Forgot your password?{" "}
          <span
            className="text-[#210F37] font-semibold cursor-pointer underline underline-offset-2"
            onClick={() => navigate("/forgot")}
          >
            Reset here
          </span>
        </p>

        <p className="text-sm text-gray-700 mt-2">
          Have trouble logging in?{" "}
          <span className="text-[#210F37] font-semibold cursor-pointer underline underline-offset-2">
            Get Help
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginWithPassword;
