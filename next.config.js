const { i18n } = require('./next-i18next.config')


/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,

  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,  
      fs: false, // the solution
    };
    
    return config;
  },
}

module.exports = nextConfig
