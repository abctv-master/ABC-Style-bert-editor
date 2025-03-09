// import packageJson from './package.json' assert { type: 'json' };

// const version = packageJson.version;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   env: {
//     version,
//   },
// };

// export default nextConfig;

import fs from 'fs';
const packageJson = JSON.parse(fs.readFileSync(new URL('./package.json', import.meta.url), 'utf-8'));

const version = packageJson.version;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  env: {
    version,
  },
};

export default nextConfig;
