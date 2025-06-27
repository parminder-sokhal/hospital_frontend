import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLinks } from "../../../redux/actions/linksAction"; // Adjust the path as needed

const Insta = () => {
  const dispatch = useDispatch();
  const { links } = useSelector((state) => state.links);

  useEffect(() => {
    dispatch(getLinks());
  }, [dispatch]);

  // Filter only Instagram Reels with category "mediainsta"
  const instagramPosts =
    links?.filter((link) => link.category === "mediainsta") || [];

  return (
    <>
      <div className="flex justify-center w-full mt-34 sm:h-92 h-52 bg-cover bg-no-repeat bg-center bg-[url('/pictures/Background.jpeg')]">
        <span className="flex justify-center items-center sm:text-8xl text-3xl font-semibold text-white">
          Instagram Highlights
        </span>
      </div>

      <div className="flex flex-col mx-auto lg:px-40 gap-10 px-6 py-10">
        <div>
          <h2 className="sm:text-3xl py-4 text-center">Trending Highlights</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {instagramPosts.map((post) => {
              const reelCode = post.url.split("/reel/")[1]?.split("/")[0];

              return (
                <div
                  key={post._id}
                  className="bg-white shadow-lg w-full h-170 rounded-lg overflow-hidden"
                >
                  <Link to={post.url} target="_blank" rel="noopener noreferrer">
                    <iframe
                      src={`https://www.instagram.com/reel/${reelCode}/embed`}
                      frameBorder="0"
                      height="100%"
                      width="100%"
                      title={`Instagram Reel ${post._id}`}
                      style={{
                        border: "none",
                        borderRadius: "8px",
                      }}
                      loading="lazy"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Insta;
