import axiosInstance from "./axiosInstance";

export const sendOtp = async (phone: string): Promise<boolean> => {
  try {
    console.log(phone);
    const res = await axiosInstance.post(`/auth/send-otp?phoneNumber=${phone}`);
    return res.status === 200;
  } catch (err) {
    console.error("Error sending OTP:", err);
    return false;
  }
};

export const verifyOtp = async (
  phone: string,
  otp: string
): Promise<boolean> => {
  try {
    const res = await axiosInstance.post(
      `/auth/verify-otp?phoneNumber=${phone}&otp=${otp}`
    );
    return res.status === 200;
  } catch (err) {
    console.error("Error verifying OTP:", err);
    return false;
  }
};
