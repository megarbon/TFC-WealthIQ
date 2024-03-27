import { defineMiddleware } from "astro/middleware";
import { checkAuth } from "./utils/authentication";
import { TOKEN, PUBLIC_ROUTES } from "../../../wealthIQ-landing-page/src/constants/constants";

export const config = {
  // Only run the middleware on the marketing route
  matcher: "/private",
};

//const secret = new TextEncoder().encode(import.meta.env.JWT_SECRET_KEY);
const secret = Astro.cookies.get("auth_token");

const verifyAuth = async (token?: string) => {
  if (!token) {
    return {
      status: "unauthorized",
      msg: "please pass a request token",
    };
  }

  try {
    const jwtVerifyResult = await checkAuth(token);

    return {
      status: "authorized",
      payload: jwtVerifyResult.payload,
      msg: "successfully verified auth token",
    };
  } catch (err) {
    return { status: "error", msg: err.message };

    console.debug(err);
    return { status: "error", msg: "could not validate auth token" };
  }
};

export const onRequest = defineMiddleware(async (context, next) => {
  // Ignore auth validation for public routes
  if (PUBLIC_ROUTES.includes(context.url.pathname)) {
    return next();
  }

  // Get the token from cookies and validate it
  const token = Astro.cookies.get("auth_token");
  const validationResult = await verifyAuth(token);

  console.log(validationResult);
  // Handle the validation result
  switch (validationResult.status) {
    // Respond as usual if the user is authorised
    case "authorized":
      return next();

    case "error":
    case "unauthorized":
      // If an API endpoint, return a JSON response
      if (context.url.pathname.startsWith("/api/")) {
        return new Response(JSON.stringify({ message: validationResult.msg }), {
          status: 401,
        });
      } else {
        // Redirect to login page if not authenticated
        return Response.redirect(new URL("/login", context.url));
      }

    default:
      // Otherwise, this is a standard page. Redirect to the root page for the user to login
      return Response.redirect(new URL("/", context.url));
  }
});
