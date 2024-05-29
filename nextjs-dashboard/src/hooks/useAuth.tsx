import { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Import useRouter from Next.js
import useLocalStorage from "@/hooks/useLocalStorage";

export const useAuth = () => {
  const router = useRouter(); // Initialize useRouter

  const [token, setToken] = useLocalStorage("jwtToken", "");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const trimmedToken = token.trim();
    if (trimmedToken !== token) {
      setToken(trimmedToken);
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
          router.push("/login"); // Redirect to login page on 401 error
        }
      } catch (error) {
        setIsAuthenticated(false);
        console.error("Error validating token:", error);
        router.push("/login"); // Redirect to login page on error
      } finally {
        setLoading(false);
      }
    };

    if (token !== "" && loading) {
      validateToken();
    }
  }, [token, loading, router]); // Include router in dependencies

  return { isAuthenticated, loading, setToken };
};
