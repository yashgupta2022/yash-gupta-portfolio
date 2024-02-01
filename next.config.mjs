/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {   protocol:"https",
                hostname:'encrypted-tbn0.gstatic.com',
                pathname:"**"
            },
            {   protocol:"https",
                hostname:'info.mssmedia.com',
                pathname:"**"
            },
            // {   protocol:"https",
            //     hostname:'encrypted-tbn0.gstatic.com',
            //     pathname:"**"
            // },
            // {   protocol:"https",
            //     hostname:'encrypted-tbn0.gstatic.com',
            //     pathname:"**"
            // },
        ],
    },
};

export default nextConfig;
