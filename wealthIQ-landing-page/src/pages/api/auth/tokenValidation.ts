// middleware/auth.js

export async function middleware({ request, next }) {
  // Verificar si el usuario está intentando acceder a una página privada
  if (window.location.pathname.startsWith("/private")) {
    const token = Astro.cookies.get("auth_token");
    if (!token) {
      window.location.href = "/login"; // Redirigir al usuario a la página de inicio de sesión si no hay token
      return;
    }

    try {
      // Hacer una solicitud a tu API Spring para validar el token JWT
      const response = await fetch(
        "http://localhost:8000/auth/validate-token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        // El token es válido, permitir que el usuario acceda a la página privada
        return next();
      } else {
        // El token no es válido, redirigir al usuario a la página de inicio de sesión
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Error al validar el token:", error);
      window.location.href = "/login";
    }
  }

  return next();
}
