import React, { useState } from 'react';
import { FaYoutube } from 'react-icons/fa';

// Video data with just URLs (no local thumbnails)
const videos = [
  {
    id: 1,
    url: 'https://www.youtube.com/embed/pHv1EFS4UkU',
  },
  {
    id: 2,
    url: 'https://www.youtube.com/embed/gqb6HmB9OsU',
  },
  {
    id: 3,
    url: 'https://www.youtube.com/embed/8YsnzW83K4s',
  },
];

const getYoutubeThumbnail = (embedUrl) => {
  const videoId = embedUrl.split('/embed/')[1];
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

const TrendingYoutube = () => {
  const [activeVideos, setActiveVideos] = useState({});

  const handlePlay = (id) => {
    setActiveVideos((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="container mx-auto lg:px-40 px-6 py-20">
      <h2 className="sm:text-3xl text-2xl text-start mb-8">Trending on Social Media</h2>

      <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
        {videos.map((video) => {
          const thumbnailUrl = getYoutubeThumbnail(video.url);

          return (
            <div
              key={video.id}
              className="w-full lg:w-1/3 aspect-video bg-white rounded-md shadow-md overflow-hidden relative cursor-pointer"
            >
              {!activeVideos[video.id] ? (
                <div onClick={() => handlePlay(video.id)} className="w-full h-full relative group">
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
                  title={`YouTube video ${video.id}`}
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
