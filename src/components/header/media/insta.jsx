import React from "react";
import { Link } from "react-router-dom";

function insta() {
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
    <>
      <div className="flex justify-center  w-full mt-34 sm:h-92 h-52 bg-cover bg-no-repeat bg-center bg-[url('/images/Treatmentbg.png')]">
        <span className="flex justify-center items-center sm:text-8xl text-3xl font-semibold text-white">
          Instagram Highlights
        </span>
      </div>
      <div className="flex flex-col mx-auto lg:px-60 gap-10 px-6 py-10">
        <div>
          <h2 className="sm:text-3xl py-4 text-center">Trending Highlights</h2>

          {/* Flex layout for Instagram posts */}
          <div className="flex flex-col lg:flex-row gap-6 justify-between">
            {instagramPosts.map((post) => (
              <div
                key={post.id}
                className="relative w-full lg:w-1/3 md:w-1/2 sm:w-1/3 bg-white  shadow-lg "
              >
                {/* Instagram post (iframe for Reels) */}
                <Link to={post.href} target="_blank" rel="noopener noreferrer">
                  <div className="w-full  h-170 overflow-hidden">
                    <iframe
                      src={`https://www.instagram.com/p/${post.href.split("/")[4]}/embed`}
                      frameBorder="0"
                      height="100%"
                      width="100%"
                      title="Instagram Reel"
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
      </div>
    </>
  );
}

export default insta;
