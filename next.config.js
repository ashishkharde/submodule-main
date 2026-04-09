/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpile submodule packages so Next.js processes JSX in them
  transpilePackages: [
    "./submodules/ui",
    "./submodules/features",
  ],
};

module.exports = nextConfig;
