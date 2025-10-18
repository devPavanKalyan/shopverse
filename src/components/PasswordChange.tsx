import { useEffect, useState } from "react";

const ResetPasswordChange = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const [eightCharacters, setEightCharacters] = useState(false);
  const [oneDigit, setOneDigit] = useState(false);
  const [oneUpper, setOneUpper] = useState(false);

  const testEightCharacters = (input: string) => input.length >= 8;

  const testOneUpperCase = (input: string) => /[A-Z]/.test(input);

  const testOneNumeric = (input: string) => /\d/.test(input);

  useEffect(() => {
    setEightCharacters(testEightCharacters(newPassword));
    setOneUpper(testOneUpperCase(newPassword));
    setOneDigit(testOneNumeric(newPassword));

    const isValidPassword =
      newPassword &&
      confirmPassword &&
      newPassword === confirmPassword &&
      testEightCharacters(newPassword) &&
      testOneUpperCase(newPassword) &&
      testOneNumeric(newPassword);

    setIsDisabled(!isValidPassword);
    if (newPassword !== confirmPassword && confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
    }
  }, [newPassword, confirmPassword]);

  const handleSubmit = () => {
    if (!newPassword || !confirmPassword) {
      setError("Both fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSuccess("Your password has been updated.");
    setError("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white w-full max-w-md p-8 border border-gray-200 shadow-sm text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Set New Password
        </h2>

        <div className="text-left mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New Password<span className="text-pink-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:[var(--border-color)] rounded-none"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div className="mb-4 text-sm flex flex-wrap gap-2">
          {[
            { label: "8 Characters", isValid: eightCharacters },
            { label: "1 Uppercase", isValid: oneUpper },
            { label: "1 Numeric", isValid: oneDigit }
          ].map(({ label, isValid }) => (
            <div
              key={label}
              className={`py-1 px-2 rounded transition-colors duration-200 ${
                isValid
                  ? "bg-green-300 text-green-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        <div className="text-left mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password<span className="text-pink-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Re-enter new password"
            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-none"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-2">{success}</p>}

        <button
          onClick={handleSubmit}
          disabled={isDisabled}
          className={`w-full py-2 text-white font-semibold rounded-none transition ${
            isDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#EC4899] hover:bg-[#8e1350] cursor-pointer"
          }`}
        >
          RESET PASSWORD
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordChange;
