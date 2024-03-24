// Function to check if the auth_token cookie exists
export const checkAuth = async (cookies) => {
  const accessToken = cookies;

  if (!accessToken) {
    return false;
  }

  // Send a request to your authentication API to verify the access token
  const response = await fetch("http://localhost:8000/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    // If the access token is invalid, user is not authenticated
    console.error("Invalid access token");
    return false;
  }
  console.log("User is authenticated");
  return true; // User is authenticated
};
