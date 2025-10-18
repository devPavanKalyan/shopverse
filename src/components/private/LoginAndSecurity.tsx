import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { sendOtp } from "../../utils/otpUtils";
import {
  updateEmail,
  updateName,
  updatePassword,
  updatePhone
} from "../../utils/userUpdateHandlers";
import AccountNavBar from "./AccountNavBar";

const LoginAndSecurity: React.FC = () => {
  const links: string[] = ["Account", "Profile and Security"];
  const { authState } = useContext(AuthContext);
  const accessToken = authState?.accessToken;

  const initialName = authState?.user?.name?.trim() || "";
  const initialEmail = authState?.user?.email?.trim() || "";
  const initialPhone = authState?.user?.phone?.trim() || "";

  const [editingField, setEditingField] = useState<
    null | "name" | "email" | "phone" | "password"
  >(null);
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState(initialPhone);
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async () => {
    try {
      setLoading(true);
      const phoneToSend = phone || initialPhone;
      const result = await sendOtp(phoneToSend);
      alert(
        `📲 OTP sent successfully to +91${phoneToSend}.\nMessage: ${result}`
      );
      setOtpSent(true);
    } catch (error: any) {
      alert(`❌ Failed to send OTP. ${error.message || "Try again later."}`);
      console.error("OTP send failed", error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyAndSave = async (
    field: "name" | "email" | "phone" | "password"
  ) => {
    try {
      setLoading(true);
      if (!accessToken) {
        alert("Access token missing. Please log in again.");
        return;
      }

      let result: { message: string; status: number };

      if (field === "name") {
        result = await updateName({ phone, name, otp }, accessToken);
      } else if (field === "email") {
        result = await updateEmail({ phone, email, otp }, accessToken);
      } else if (field === "phone") {
        result = await updatePhone(
          { oldPhone: initialPhone, newPhone: phone, otp },
          accessToken
        );
      } else {
        result = await updatePassword({ phone, password, otp }, accessToken);
      }

      setEditingField(null);
      setOtp("");
      setOtpSent(false);

      alert(
        `✅ ${field.toUpperCase()} updated successfully.\nStatus: ${
          result.status
        }\nMessage: ${result.message}`
      );
    } catch (error: any) {
      alert(`❌ Update failed. ${error.message || "Something went wrong."}`);
      console.error("Update error:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderField = (field: "name" | "email" | "phone" | "password") => {
    const isEditing = editingField === field;

    if (isEditing) {
      const inputType =
        field === "email"
          ? "email"
          : field === "password"
          ? "password"
          : "text";
      const value =
        field === "name"
          ? name
          : field === "email"
          ? email
          : field === "phone"
          ? phone
          : password;

      const onChange =
        field === "name"
          ? setName
          : field === "email"
          ? setEmail
          : field === "phone"
          ? setPhone
          : setPassword;

      return (
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <input
            type={inputType}
            className="border rounded px-2 py-1 text-sm"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={`Enter new ${field}`}
          />
          {!otpSent && (
            <button
              className="px-3 py-1.5 bg-blue-600 text-white rounded text-xs hover:bg-blue-700"
              onClick={handleSendOtp}
              disabled={loading}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          )}
          {otpSent && (
            <>
              <input
                type="text"
                className="border rounded px-2 py-1 text-sm"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
              />
              <div className="flex gap-2">
                <button
                  className="px-3 py-1.5 bg-green-600 text-white rounded text-xs hover:bg-green-700"
                  onClick={() => handleVerifyAndSave(field)}
                  disabled={loading}
                >
                  {loading ? "Verifying..." : "Verify & Save"}
                </button>
                <button
                  className="px-3 py-1.5 bg-gray-300 text-gray-700 rounded text-xs hover:bg-gray-400"
                  onClick={() => {
                    setEditingField(null);
                    setOtp("");
                    setOtpSent(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      );
    } else {
      if (field === "password") return "**********";
      if (field === "phone") return phone ? `+91${phone}` : "Not provided";
      if (field === "email") return email || "Not provided";
      return name || "Not provided";
    }
  };

  const accountItems: AccountItem[] = [
    {
      label: "Name",
      value: renderField("name"),
      actionLabel: editingField === "name" ? "" : "Edit",
      onAction: () => setEditingField("name")
    },
    {
      label: "Email",
      value: renderField("email"),
      actionLabel: editingField === "email" ? "" : "Edit",
      onAction: () => setEditingField("email")
    },
    {
      label: "Primary mobile number",
      value: renderField("phone"),
      description:
        "Quickly sign in, easily recover passwords and receive security notifications with this mobile number.",
      actionLabel: editingField === "phone" ? "" : "Edit",
      onAction: () => setEditingField("phone")
    },
    {
      label: "Passkey",
      value: (
        <>
          <span className="mr-1" role="img" aria-label="warning">
            ⚠️
          </span>
          Sign in the same way you unlock your device by using your face,
          fingerprint, or PIN.
        </>
      ),
      actionLabel: "Set up"
    },
    {
      label: "Password",
      value: renderField("password"),
      actionLabel: editingField === "password" ? "" : "Edit",
      onAction: () => setEditingField("password")
    },
    {
      label: "2-step verification",
      value: phone ? `+91${phone}` : "Not provided",
      description:
        "Enter a code sent to your verification method, in addition to your password, to sign in securely.",
      actionLabel: "Manage"
    }
  ];

  return (
    <main className="max-w-2xl mx-auto px-4 py-10 font-sans text-gray-900 antialiased">
      <AccountNavBar navLinks={links} />

      <h1 className="text-xl font-bold mb-6 tracking-tight text-gray-900">
        Login and Security
      </h1>

      <section className="border border-gray-200 rounded-xl divide-y divide-gray-200 shadow-sm">
        {accountItems.map(
          ({ label, value, description, actionLabel, onAction }, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 py-4 hover:bg-gray-50 transition cursor-default"
            >
              <div className="md:flex-1 min-w-0">
                <p className="font-medium text-gray-800 text-sm">{label}</p>
                <div className="mt-0.5 text-gray-900 text-sm break-words flex flex-col gap-1">
                  {value}
                </div>
                {description && (
                  <p className="mt-1 text-xs text-gray-600 leading-snug max-w-md">
                    {description}
                  </p>
                )}
              </div>
              {actionLabel && onAction && (
                <div className="mt-3 md:mt-0 md:ml-6">
                  <button
                    type="button"
                    className="px-4 py-1.5 rounded-full border border-gray-300 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-gray-900 font-medium text-xs"
                    onClick={onAction}
                  >
                    {actionLabel}
                  </button>
                </div>
              )}
            </div>
          )
        )}
      </section>
    </main>
  );
};

export default LoginAndSecurity;

type AccountItem = {
  label: string;
  value: React.ReactNode;
  description?: React.ReactNode;
  actionLabel: string;
  onAction?: () => void;
};
