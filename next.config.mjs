import withTwin from './withTwin.mjs';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
};

export default withTwin(nextConfig);