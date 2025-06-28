import React, { useState, useEffect } from "react";
import { FaYoutube } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getLinks } from "../../redux/actions/linksAction"; // Adjust path if needed

const getYoutubeThumbnail = (embedUrl) => {
  const videoId = embedUrl.split("/embed/")[1];
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

const TrendingYoutube = () => {
  const dispatch = useDispatch();
  const { links } = useSelector((state) => state.links);
  const [activeVideos, setActiveVideos] = useState({});

  useEffect(() => {
    dispatch(getLinks());
  }, [dispatch]);

  const homeYoutubeVideos =
    links?.filter((link) => link.category === "homeyoutube") || [];

  const handlePlay = (id) => {
    setActiveVideos((prev) => ({ ...prev, [id]: true }));
  };

  if (homeYoutubeVideos.length === 0) return null;

  return (
    <div className="container mx-auto lg:px-40 px-6 py-20">
      <h2 className="sm:text-3xl text-2xl text-start mb-8">
        Trending on Social Media
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {homeYoutubeVideos.map((video, index) => {
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
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingYoutube;
