import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/i-scholi-mas',                    destination: '/#i-scholi',     permanent: true },
      { source: '/ypiresies',                       destination: '/#ypiresies',    permanent: true },
      { source: '/ypiresies/:slug',                 destination: '/#ypiresies',    permanent: true },
      { source: '/syxnes-erotiseis',                destination: '/#epikoinonia',  permanent: true },
      { source: '/kritikes',                        destination: '/#kritikes',     permanent: true },
      { source: '/epikoinonia',                     destination: '/#epikoinonia',  permanent: true },
    ];
  },
};

export default nextConfig;
