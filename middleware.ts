import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["am", "en", "ru"],  // ավելացրինք "ru"
    defaultLocale: "am",
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(am|en|ru)/:path*']  // ավելացրինք "ru"
};
