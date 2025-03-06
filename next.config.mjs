/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "images.pexels.com" },
            { protocol: "https", hostname: "via.placeholder.com" },
            { protocol: "https", hostname: "dashboard.zaindev.com.sa" },

        ]

    }

};

export default nextConfig;
