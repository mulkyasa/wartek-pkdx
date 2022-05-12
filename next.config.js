const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com', 'res.cloudinary.com'],
  },
  webpack(config, _options) {
    config.resolve.alias['@pages'] = path.join(__dirname, 'pages');
    config.resolve.alias['@containers'] = path.join(__dirname, 'containers');
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@utils'] = path.join(__dirname, 'utils');
    config.resolve.alias['@models'] = path.join(__dirname, 'models');

    return config;
  },
}

module.exports = nextConfig
