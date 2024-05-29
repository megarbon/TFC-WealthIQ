import { useEffect } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

export const useAuth = () => {
  const [token, setToken] = useLocalStorage("jwtToken", "");

  useEffect(() => {
    console.log("Token from local storage:", token); // Log the token for debugging
    if (!token) {
      console.log("Token not found, redirecting to login page");
      // Redirect to login page if token doesn't exist
      window.location.href = "/login";
    } else {
      console.log("Token found, user authenticated");
    }
  }, [token]);

  return token;
};
