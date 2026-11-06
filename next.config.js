/** @type {import('next').NextConfig} */
const DEFAULT_APP_BASE_URL = 'http://localhost:3000';
const DEFAULT_API_BASE_URL = 'http://localhost:8000';

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
    APP_BASE_URL: normalizeBaseUrl(process.env.APP_BASE_URL, DEFAULT_APP_BASE_URL),
    API_BASE_URL: normalizeBaseUrl(process.env.API_BASE_URL, DEFAULT_API_BASE_URL),
  },
  /*
    async headers() {
      return [{
        source: '/', 
        headers: [
          {
            key: 'x-hello',
            value: 'world',
          },
        ],
      },]
    }*/

}


//  poweredByHeader: false,
/* async redirects() {
   return [
     {
       source: '/students',
       destination: '/teachers',
       permanent: true,
     },
   ]
 }*/


module.exports = nextConfig
