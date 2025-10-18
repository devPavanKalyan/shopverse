import { useEffect, useState } from "react";

const ResetPassword = () => {
  const [identifier, setIdentifier] = useState("");
  const [error, setError] = useState("");

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
          "Invalid phone number or email. Must be 10 digits for phone number."
      };
    }
  };

  useEffect(() => {
    if (identifier) setError("");
  }, [identifier]);

  const handleSendLink = () => {
    if (!identifier) {
      setError("Please enter the field to get the link.");
      return;
    }

    const { isValid, message } = validateInputs(identifier);
    if (!isValid) {
      setError(message || "Invalid input.");
      return;
    }

    // TODO: Connect to backend API.
    console.log("Reset link sent (mock)");
  };

  return (
    <div
      className="min-h-[100vh] flex flex-col items-center justify-center bg-gray-50 px-4  font-sans"
      style={{ fontFamily: `'Poppins', sans-serif` }}
    >
      <div className="bg-white w-full max-w-md p-8 rounded-3xl border border-gray-100 shadow-md mt-20 mb-[199px] text-left">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2 leading-tight tracking-tight">
          Reset Password
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Enter your email or mobile number and we’ll send a link on your email
          to reset your password.
        </p>

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email or Mobile Number
            <span className="text-[#210F37]">*</span>
          </label>
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Email or Mobile Number"
              className="w-full px-4 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#210F37]"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              autoFocus
            />
          </div>
          {error && <div className="text-red-500 mt-1 text-xs">{error}</div>}
        </div>

        <button
          onClick={handleSendLink}
          className="w-full text-white font-semibold py-2.5 rounded-full transition-all duration-200 text-base bg-[#210F37] hover:bg-[#3A1B60] cursor-pointer"
        >
          Send Link
        </button>

        <p className="text-sm text-gray-600 mt-6 text-center">
          Unable to reset password?{" "}
          <span className="text-[#210F37] font-semibold cursor-pointer underline underline-offset-2">
            Get help
          </span>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
