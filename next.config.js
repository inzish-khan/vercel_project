/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

/** __INVWORK_ALLOWED_DEV_ORIGINS__ */
function __invoworkWithAllowedDevOrigins(config) {
  const allowed = process.env.SANDBOX_PUBLIC_URL
    ? [new URL(process.env.SANDBOX_PUBLIC_URL).hostname]
    : [];
  const resolve = typeof config === "function" ? config : () => config;
  return async (...args) => {
    const cfg = await resolve(...args);
    return {
      ...cfg,
      allowedDevOrigins: [...(cfg?.allowedDevOrigins ?? []), ...allowed],
    };
  };
}
module.exports = __invoworkWithAllowedDevOrigins(nextConfig);
