/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/saportalnew',
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com", "swc.iitg.ac.in"],
  },
  distDir: "_next",
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    } else {
      return `${new Date().getTime()}`;
    }
  },
};

module.exports = nextConfig;
