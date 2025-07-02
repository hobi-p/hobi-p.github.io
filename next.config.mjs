/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export', // Static HTML 내보내기 설정
  reactStrictMode: true,
  images: {
    unoptimized: true, // GitHub Pages에서 이미지 최적화 비활성화
  },
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://hobi-p.github.io' 
    : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
