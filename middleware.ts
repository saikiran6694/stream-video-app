import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedPoutes = createRouteMatcher([
  "/",
  "/upcoming",
  "/recordings",
  "/previous",
  "/personal-room",
  "/meetings(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (protectedPoutes(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
