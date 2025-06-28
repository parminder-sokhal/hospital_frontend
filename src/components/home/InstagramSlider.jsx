import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLinks } from "../../redux/actions/linksAction";

const InstagramPosts = () => {
  const dispatch = useDispatch();
  const { links } = useSelector((state) => state.links);

  useEffect(() => {
    dispatch(getLinks());
  }, [dispatch]);

  // Filter only homeinsta category
  const instagramPosts =
    links?.filter((link) => link.category === "homeinsta") || [];

  // Helper to extract post ID from the URL
  const extractPostId = (href) => {
    try {
      const parts = href.split("/");
      return parts[4] || ""; // e.g., "DKxDVNKzx7M"
    } catch {
      return "";
    }
  };

  if (instagramPosts.length === 0) return null;

  return (
    <div className="container mx-auto lg:px-40 px-10 py-10">
      <div className="flex justify-between items-center mb-4 px-5">
        <h2 className="lg:text-3xl text-2xl text-black">
          Instagram Highlights
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {instagramPosts.map((post) => {
          const postId = extractPostId(post.url);
          return (
            <div key={post._id} className="relative w-full bg-white shadow-lg">
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                <div className="w-full h-170 overflow-hidden">
                  <iframe
                    src={`https://www.instagram.com/p/${postId}/embed`}
                    frameBorder="0"
                    height="100%"
                    width="100%"
                    title={`Instagram Reel ${postId}`}
                    loading="lazy"
                    style={{
                      border: "none",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InstagramPosts;
