import { api } from "../api/apiClient";
import { verifyOtp } from "../utils/otpUtils"; // adjust path if needed

const getHeaders = (token?: string) => ({
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json"
});

export const updateName = async (
  updates: { phone?: string; name?: string; otp: string },
  accessToken?: string
): Promise<{ message: string; status: number }> => {
  const verified = await verifyOtp(updates.phone || "", updates.otp);
  if (!verified) {
    throw new Error("OTP verification failed. Name update aborted.");
  }

  try {
    const response = await api.put("/user/update/name", updates, {
      headers: getHeaders(accessToken)
    });
    if (response.status === 200) {
      localStorage.setItem("name", updates?.name || "");
    }
    return {
      message: response.data.message || "Name updated successfully",
      status: response.status
    };
  } catch (error: any) {
    const message = error.response?.data?.message || "Failed to update name.";
    console.error("Error updating name:", message);
    const status = error.response?.status || 500;
    const err = new Error(message);
    (err as any).status = status;
    throw err;
  }
};

export const updateEmail = async (
  updates: { phone?: string; email?: string; otp: string },
  accessToken?: string
): Promise<{ message: string; status: number }> => {
  const verified = await verifyOtp(updates.phone || "", updates.otp);
  if (!verified) {
    throw new Error("OTP verification failed. Email update aborted.");
  }

  try {
    const response = await api.put("/user/update/email", updates, {
      headers: getHeaders(accessToken)
    });
    if (response.status === 200) {
      localStorage.setItem("email", updates?.email || "");
    }
    return {
      message: response.data.message || "Email updated successfully",
      status: response.status
    };
  } catch (error: any) {
    const message = error.response?.data?.message || "Failed to update email.";
    console.error("Error updating email:", message);
    const status = error.response?.status || 500;
    const err = new Error(message);
    (err as any).status = status;
    throw err;
  }
};

export const updatePhone = async (
  updates: { oldPhone: string; newPhone: string; otp: string },
  accessToken?: string
): Promise<{ message: string; status: number }> => {
  const verified = await verifyOtp(updates.oldPhone, updates.otp);
  if (!verified) {
    throw new Error("OTP verification failed. Phone update aborted.");
  }

  try {
    const response = await api.put("/user/update/phone", updates, {
      headers: getHeaders(accessToken)
    });
    if (response.status === 200) {
      localStorage.setItem("phone", updates?.newPhone || "");
    }
    return {
      message: response.data.message || "Phone updated successfully",
      status: response.status
    };
  } catch (error: any) {
    const message = error.response?.data?.message || "Failed to update phone.";
    console.error("Error updating phone:", message);
    const status = error.response?.status || 500;
    const err = new Error(message);
    (err as any).status = status;
    throw err;
  }
};

export const updatePassword = async (
  updates: { phone: string; password: string; otp: string },
  accessToken?: string
): Promise<{ message: string; status: number }> => {
  const verified = await verifyOtp(updates.phone, updates.otp);
  if (!verified) {
    throw new Error("OTP verification failed. Password update aborted.");
  }

  try {
    const response = await api.put("/user/update/password", updates, {
      headers: getHeaders(accessToken)
    });

    return {
      message: response.data.message || "Password updated successfully",
      status: response.status
    };
  } catch (error: any) {
    const message =
      error.response?.data?.message || "Failed to update password.";
    console.error("Error updating password:", message);
    const status = error.response?.status || 500;
    const err = new Error(message);
    (err as any).status = status;
    throw err;
  }
};
