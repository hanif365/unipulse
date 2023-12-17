export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/mycollege/:path*", "/admission/:path*"],
};
