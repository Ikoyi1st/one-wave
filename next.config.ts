const nextConfig = {
  typescript: { ignoreBuildErrors: false },
  // Enable static HTML export so the site can run on any static host without a Node server.
  output: 'export',
  images: {
    // Use unoptimized images when exporting since there is no Image Optimization server.
    unoptimized: true,
  },
};

export default nextConfig;
