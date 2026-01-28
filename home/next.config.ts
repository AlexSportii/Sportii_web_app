
/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  async redirects() {
    return [
      {
        source: "/events",
        destination: `http://localhost:3001/events`,
        permanent: false,
      },
      {
        source: "/login",
        destination: `http://localhost:3001/login`,
        permanent: false,
      },
      {
        source: "/signup",
        destination: `http://localhost:3001/signup`,
        permanent: false,
      },
      {
        source: "/auth/:path*",
        destination: `http://localhost:3001/auth/:path*`,
        permanent: false,
      },
      {
        source: "/forgot-password",
        destination: `http://localhost:3001/forgot-password`,
        permanent: false,
      },
      {
        source: "/reset-password",
        destination: `http://localhost:3001/reset-password`,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;