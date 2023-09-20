/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com'
            }
        ],
        domains: ["res.cloudinary.com"]
    }
}

module.exports = nextConfig
