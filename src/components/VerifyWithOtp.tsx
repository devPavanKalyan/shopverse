import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axiosInstance from "../utils/axiosInstance";

export default function VerifyWithOtp() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  // Load phone from localStorage
  useEffect(() => {
    const storedPhone = localStorage.getItem("phone");
    if (!storedPhone) {
      navigate("/");
    } else {
      setPhone(storedPhone);
    }
  }, [navigate]);

  // Countdown timer for OTP expiry
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  // Handle input change
  const handleChange = (index: number, value: string) => {
    setError("");
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  // Handle backspace navigation
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && otp[index] === "") {
      const previousInput = document.getElementById(`otp-${index - 1}`);
      if (previousInput) previousInput.focus();
    }
  };

  // Resend OTP
  const resendOtp = () => {
    axiosInstance
      .post("/auth/send-otp", { phoneNumber: localStorage.getItem("phone") })
      .then((res) => {
        if (res.status === 200) {
          alert("OTP sent successfully!");
          setTimer(30); // restart timer
        } else {
          alert("Failed to send OTP. Please try again later.");
        }
      })
      .catch(() => {
        alert("Something went wrong. Please try again later.");
      });
  };

  // Submit OTP for validation
  const handleSubmit = () => {
    const otpValue = otp.join("");
    if (otpValue.length !== 4) {
      setError("Please enter a valid 4-digit OTP.");
      return;
    }

    axiosInstance
      .post("/auth/validate/otp", { phone, otp: otpValue })
      .then((res) => {
        if (res.status !== 200) return;

        localStorage.removeItem("phone");
        setOtp(["", "", "", ""]); // Clear OTP
        login(res.data); // Save auth data in context
        navigate("/");
      })
      .catch(() => {
        setError("Invalid OTP or verification failed.");
      });
  };

  return (
    <div
      className="flex flex-col items-center font-sans py-20 px-2"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="bg-white w-full max-w-md p-8 md:border md:border-2 md:border-orange-200 rounded-3xl text-center">
        <h2 className="text-2xl font-extrabold text-gray-800">
          Enter the OTP to Verify
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          We've sent it to{" "}
          <span className="font-medium text-black">{phone}</span>
        </p>

        <div className="flex justify-center mt-6 mb-4 gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onFocus={(e) => e.target.select()}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength={1}
              autoComplete="off"
              className="w-12 h-12 text-center border border-gray-300 text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-[#210F37] rounded-md"
              autoFocus={index === 0}
            />
          ))}
        </div>

        {error && (
          <div className="text-red-500 text-sm font-medium mb-4">{error}</div>
        )}

        {timer >= 1 ? (
          <p className="text-sm text-gray-600 mb-4">
            OTP will expire in:{" "}
            <span className="font-bold text-black">
              00:{timer.toString().padStart(2, "0")}
            </span>
          </p>
        ) : (
          <button
            onClick={resendOtp}
            className="text-[#210F37] font-medium text-sm hover:underline transition duration-150 mb-4"
          >
            Resend OTP
          </button>
        )}

        <button
          onClick={handleSubmit}
          className="w-full mt-2 bg-[#210F37] text-white py-2 rounded-lg font-medium hover:bg-[#2e1550] transition"
        >
          Verify OTP
        </button>

        <p
          onClick={() => navigate("/login/password")}
          className="text-sm text-gray-600 mt-4 cursor-pointer"
        >
          Want to log in with{" "}
          <span className="text-[#210F37] font-medium underline underline-offset-2">
            Password?
          </span>
        </p>

        <p className="text-sm text-gray-600 mt-2">
          Having trouble accessing your account?{" "}
          <span className="text-[#210F37] font-medium cursor-pointer underline underline-offset-2">
            Click here for help
          </span>
        </p>
      </div>
    </div>
  );
}
