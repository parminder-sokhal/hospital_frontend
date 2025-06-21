import React, { useState, useEffect } from 'react';
import { FaYoutube } from 'react-icons/fa';

const getYoutubeThumbnail = (embedUrl) => {
  const videoId = embedUrl.split('/embed/')[1];
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

function Videos() {
  const [activeVideos, setActiveVideos] = useState({});
  const [latestVideo, setLatestVideo] = useState([]);
  const [videosData, setVideosData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://hospital-frontend-d9px.onrender.com/videos.json') 
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch videos');
        return res.json();
      })
      .then((data) => {
        setLatestVideo(data.latestvideo || []);
        setVideosData(data.videosdata || []);
      })
      .catch((err) => {
        console.error(err);
        setError('Unable to load videos.');
      });
  }, []);

  const handlePlay = (id) => {
    setActiveVideos((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <div className="flex justify-center w-full mt-34 sm:h-92 h-52 bg-cover bg-no-repeat bg-center bg-[url('/pictures/Background.jpeg')]">
        <span className="flex justify-center items-center sm:text-8xl text-5xl font-semibold text-white">
          Video Gallery
        </span>
      </div>

      <div className="flex flex-col mx-auto lg:px-40 gap-10 px-6 py-10">
        {error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <>
            <div className="sm:px-30">
              <h2 className="sm:text-3xl py-4 text-center">Trending on Social Media</h2>
              {latestVideo.map((video) => {
                const thumbnailUrl = getYoutubeThumbnail(video.url);
                return (
                  <div
                    key={video.id}
                    className="w-full aspect-video bg-white rounded-md shadow-md overflow-hidden relative cursor-pointer"
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

            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4">
              {videosData.map((video) => {
                const thumbnailUrl = getYoutubeThumbnail(video.url);
                return (
                  <div
                    key={video.id}
                    className="w-full aspect-video bg-white rounded-md shadow-md overflow-hidden relative cursor-pointer"
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
          </>
        )}
      </div>
    </>
  );
}

export default Videos;
