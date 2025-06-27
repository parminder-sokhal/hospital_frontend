import React, { useState, useEffect } from "react";
import { FaYoutube } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getLinks } from "../../../redux/actions/linksAction"; // adjust path as needed

const getYoutubeThumbnail = (embedUrl) => {
  const videoId = embedUrl.split("/embed/")[1];
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

function Videos() {
  const dispatch = useDispatch();
  const { links } = useSelector((state) => state.links);
  const [activeVideos, setActiveVideos] = useState({});

  // Fetch links on mount
  useEffect(() => {
    dispatch(getLinks());
  }, [dispatch]);

  // Filter links by category
  const latestVideos = links?.filter((link) => link.category === "mediayoutubelatest") || [];
  const videosData = links?.filter((link) => link.category === "mediayoutube") || [];

  const handlePlay = (id) => setActiveVideos((prev) => ({ ...prev, [id]: true }));

  if (links.length === 0) return null; // or loading indicator

  return (
    <>
      <div className="flex justify-center w-full mt-34 sm:h-92 h-52 bg-cover bg-no-repeat bg-center bg-[url('/pictures/Background.jpeg')]">
        <span className="flex justify-center items-center sm:text-8xl text-5xl font-semibold text-white">
          Video Gallery
        </span>
      </div>

      <div className="flex flex-col mx-auto lg:px-60 gap-10 px-6 py-10">
        {/* Latest Trending */}
        {latestVideos.length > 0 && (
          <div className="sm:px-30">
            <h2 className="sm:text-3xl py-4 text-center">
              Trending on Social Media
            </h2>
            {latestVideos.map((video) => {
              const thumbnailUrl = getYoutubeThumbnail(video.url);
              return (
                <div
                  key={video._id}
                  className="w-full aspect-video bg-white rounded-md shadow-md overflow-hidden relative cursor-pointer mb-6"
                >
                  {!activeVideos[video._id] ? (
                    <div
                      onClick={() => handlePlay(video._id)}
                      className="w-full h-full relative group"
                    >
                      <img
                        src={thumbnailUrl}
                        alt="YouTube video thumbnail"
                        className="w-full h-full object-cover bg-white"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 transition duration-300">
                        <FaYoutube className="text-red-600 text-6xl" />
                      </div>
                    </div>
                  ) : (
                    <iframe
                      className="w-full h-full"
                      loading="lazy"
                      src={`${video.url}?autoplay=1`}
                      title={`YouTube video ${video._id}`}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Video Grid */}
        {videosData.length > 0 && (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4">
            {videosData.map((video) => {
              const thumbnailUrl = getYoutubeThumbnail(video.url);
              return (
                <div
                  key={video._id}
                  className="w-full aspect-video bg-white rounded-md shadow-md overflow-hidden relative cursor-pointer"
                >
                  {!activeVideos[video._id] ? (
                    <div
                      onClick={() => handlePlay(video._id)}
                      className="w-full h-full relative group"
                    >
                      <img
                        src={thumbnailUrl}
                        alt="YouTube video thumbnail"
                        className="w-full h-full object-cover bg-white"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 transition duration-300">
                        <FaYoutube className="text-red-600 text-6xl" />
                      </div>
                    </div>
                  ) : (
                    <iframe
                      className="w-full h-full"
                      loading="lazy"
                      src={`${video.url}?autoplay=1`}
                      title={`YouTube video ${video._id}`}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Videos;
