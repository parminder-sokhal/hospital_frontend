import React from "react";
import { Link } from "react-router-dom";

const InstagramPosts = () => {
  // Instagram post data with Reels URLs
  const instagramPosts = [
    {
      id: 1,
      image: "/images/insta1.jpg", // This is a fallback image (for visual consistency)
      href: "https://www.instagram.com/reel/CfEYPJaIA_f/?hl=en", // Reel URL
    },
    {
      id: 2,
      image: "/images/insta2.jpg", // This is a fallback image (for visual consistency)
      href: "https://www.instagram.com/reel/CQySPD3HGmQ/?hl=en", // Reel URL
    },
    {
      id: 3,
      image: "/images/insta3.jpg", // This is a fallback image (for visual consistency)
      href: "https://www.instagram.com/reel/C4oiRnhADfI/?hl=en", // Reel URL
    },
  ];

  return (
    <div className="container mx-auto lg:px-40 px-10 py-10">
      <div className="flex justify-between items-center mb-4 px-5">
        <h2 className="lg:text-3xl text-2xl text-black">
          Instagram Highlights
        </h2>
      </div>

      {/* Flex layout for Instagram posts */}
      <div className="flex flex-col lg:flex-row gap-6 justify-between">
        {instagramPosts.map((post) => (
          <div
            key={post.id}
            className="relative w-full  lg:w-1/3 md:w-1/2 sm:w-1/3 bg-white  shadow-lg "
          >
            {/* Instagram post (iframe for Reels) */}
            <Link to={post.href} target="_blank" rel="noopener noreferrer">
              <div className="w-full h-170  overflow-y-hidden">
                <iframe
                  src={`https://www.instagram.com/p/${post.href.split("/")[4]}/embed`}
                  frameBorder="0"
                  height="100%"
                  width="100%"
                  title="Instagram Reel"
                  loading="lazy"
                  style={{
                    border: "none",
                    borderRadius: "8px", // Optional: Makes the iframe corners rounded
                  }}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramPosts;
