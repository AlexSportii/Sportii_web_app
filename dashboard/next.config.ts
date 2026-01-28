
/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  async redirects() {
    return [
      {
        source: "/home",
        destination: `http://localhost:3000/`,
        permanent: false,
      }
    ];
  },
};

module.exports = nextConfig;