/** @type {import('next').NextConfig} */

const normalizeBaseUrl = (value, fallback) => {
  if (!value || typeof value !== 'string') {
    return fallback;
  }

  try {
    return new URL(value.trim()).origin;
  } catch {
    return fallback;
  }
};

const nextConfig = {
  env: {
    APP_BASE_URL: process.env.APP_BASE_URL,
    API_BASE_URL: process.env.API_BASE_URL,
  },
}

module.exports = nextConfig

