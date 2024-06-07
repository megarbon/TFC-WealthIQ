import { useEffect, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

export const useAuth = () => {
  const [token, setToken] = useLocalStorage("jwtToken", ""); // Manage token with useLocalStorage
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

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
        console.log("No token found, redirecting to login page");
        window.location.href = "http://localhost:4321/login"; // Redirect to login page
        return;
      }

      try {
        const accessToken = token;

        const response = await fetch("http://localhost:8080/auth/validate-token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ token: accessToken }),
        });

        const data = await response.text(); // Log the response text for debugging
        console.log("Response data:", data);

        if (response.ok) {
          setIsAuthenticated(true);
          console.log("User is authenticated");
        } else {
          setIsAuthenticated(false);
          console.error("Invalid access token");
          window.location.href = "http://localhost:4321/login"; // Redirect to login page
        }
      } catch (error) {
        setIsAuthenticated(false);
        console.error("Error validating token:", error);
        window.location.href = "http://localhost:4321/login"; // Redirect to login page
      } finally {
        setLoading(false);
      }
    };

    if (token !== "" && loading) {
      validateToken();
    } else if (!loading && !isAuthenticated) {
      console.log("Not authenticated, redirecting to login page");
      window.location.href = "http://localhost:4321/login"; // Redirect to login page
    }
  }, [token, loading, isAuthenticated]);

  return { isAuthenticated, loading, setToken }; // Include setToken in return value
};
