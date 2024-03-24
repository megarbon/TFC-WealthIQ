// Importa el módulo de Astro necesario
import type { APIRoute } from "astro";

// Define la ruta del endpoint POST
export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    // Recibe los datos del formulario

    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");
    console.log(username);
    console.log(password);

    // Validación de los datos
    if (!username) {
      return new Response(
        JSON.stringify({
          message: "Missing username",
        }),
        { status: 400 }
      );
    } else if (!password) {
      return new Response(
        JSON.stringify({
          message: "Missing Password",
        }),
        { status: 400 }
      );
    }

    // Envía los datos a tu API de autenticación
    const response = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    const token = responseData.jwt;

    // Set the token as a cookie
    cookies.set("auth_token", token, {
      sameSite: "strict",
      path: "/",
      secure: true,
    });

    // Retorna una respuesta exitosa
    return new Response(
      JSON.stringify({
        token, //retornar datos desde tu API de autenticación
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("There was an error!", error);
    // Retorna una respuesta de error
    return new Response(
      JSON.stringify({
        message: "There was an error processing your request",
      }),
      { status: 500 }
    );
  }
};
