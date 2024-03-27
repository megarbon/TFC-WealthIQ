// Importa el módulo de Astro necesario
import type { APIRoute } from "astro";

// Middleware para verificar la autenticación del token
export async function middleware({ request, next }) {
  // Verificar si el usuario está intentando acceder a una página privada
  if (window.location.pathname.startsWith("/private")) {
    // Obtener el token de autenticación del navegador
    const token = Astro.cookies.get("auth_token");
    if (!token) {
      // Redirigir al usuario a la página de inicio de sesión si no hay token
      window.location.href = "/login";
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
      // Manejar cualquier error durante la validación del token
      console.error("Error al validar el token:", error);
      window.location.href = "/login";
    }
  }

  // Continuar con el siguiente middleware o controlador de ruta
  return next();
}

// Controlador de ruta GET para la validación del token
export const GET: APIRoute = async ({ request }) => {
  try {
    // Realiza la lógica de validación del token aquí
    // Por ejemplo, verifica si el token es válido o ha expirado

    // Retorna una respuesta exitosa si el token es válido
    return new Response(
      JSON.stringify({
        message: "Token is valid",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("There was an error!", error);
    // Retorna una respuesta de error si ocurre algún problema
    return new Response(
      JSON.stringify({
        message: "There was an error processing your request",
      }),
      { status: 500 }
    );
  }
};
