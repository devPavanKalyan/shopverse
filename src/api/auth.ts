// src/api/auth.ts
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

// export type AuthResponse = {
//   code: number;
//   message: string;
//   data: {
//     status: number;
//     message: "PASSWORD_MODIFIED" | "PASSWORD_NOT_MODIFIED";
//     mfaEnabled?: boolean;
//     mfaType?: string;
//     emailVerified?: boolean;
//     userType?: string;
//     error?: string;
//   };
// };

// type ExistenceResponse = {
//   code: number;
//   collegeId: string;
//   email: string;
//   password_modified: boolean;
// };

export const existence = async (username: string): Promise<any> => {
  const response = await axios.post(`${API_BASE_URL}/auth/check/existence`, {
    username
  });
  return response; // let errors bubble to handleLogin
};

export const generate_token = async (object: any): Promise<any | null> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/generate/token`, {
      object
    });

    if (response.status === 200) {
      return response.data || null;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Failed to fetch password token:", error);
    return null;
  }
};

export const validate_token = async (
  username: string
): Promise<boolean | false> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/token/validate`, {
      username
    });

    if (response.status === 200) {
      return response.data || false;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Failed to validate token:", error);
    return false;
  }
};

export const send_reset_email = async (userId: string): Promise<any | null> => {
  try {
    const response = await axios.post(
      `http://localhost:8080/api/auth/reset/password/email`,
      {
        userId
      }
    );

    if (response.status === 200 && response.data) {
      return response.data;
    }

    console.warn("Unexpected response format:", response);
    return null;
  } catch (error: any) {
    console.error(
      "Failed to send reset email:",
      error?.response?.data || error.message
    );
    return null;
  }
};

export const check_password_changed = async (
  userId: string
): Promise<boolean> => {
  try {
    const res = await axios.get<boolean>(
      `${API_BASE_URL}/auth/check/password/changed`,
      { params: { userId } }
    );
    console.log("Res", res);
    return res.data;
  } catch (error) {
    console.error("Error checking password changed status:", error);
    return false; // or throw error based on your design
  }
};
