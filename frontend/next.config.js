/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/saportal',
  reactStrictMode: true,
  images: {
    domains: ["swc.iitg.ac.in"],
  },
  env:{
    NEXT_PUBLIC_API_ENDPOINT:"https://swc.iitg.ac.in/sa_portal_backend/"
  },
 
};

module.exports = nextConfig;
