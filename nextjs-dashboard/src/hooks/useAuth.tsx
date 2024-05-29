import { useEffect, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

export const useAuth = () => {
  const [token, setToken] = useLocalStorage("jwtToken", ""); // Manage token with useLocalStorage
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Trim leading and trailing double quotes from token
  useEffect(() => {
    const trimmedToken = token.trim();
    if (trimmedToken !== token) {
      setToken(trimmedToken); // Update token in local storage only if needed
    }
  }, [token, setToken]);

  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const accessToken = token;

        const response = await fetch("http://localhost:8000/auth/validate-token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ token: accessToken }),
          mode: "no-cors",
        });

        if (response.ok) {
          setIsAuthenticated(true);
          console.log("User is authenticated");
        } else {
          setIsAuthenticated(false);
          console.error("Invalid access token");
        }
      } catch (error) {
        setIsAuthenticated(false);
        console.error("Error validating token:", error);
      } finally {
        setLoading(false);
      }
    };

    if (token !== "" && loading) {
      validateToken();
    }
  }, [token, loading]);

  return { isAuthenticated, loading, setToken }; // Include setToken in return value
};
