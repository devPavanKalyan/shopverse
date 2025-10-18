import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:7070/api",
  withCredentials: true // if using cookies for refresh token
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Token expired (401) and we haven't retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          "http://localhost:7070/api/auth/refresh-token",
          {
            refreshToken: localStorage.getItem("refreshToken")
          }
        );

        const newAccessToken = res.data.accessToken;
        localStorage.setItem("accessToken", newAccessToken);

        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token failed", refreshError);
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
