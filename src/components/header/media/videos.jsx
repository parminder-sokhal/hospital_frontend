import React, { useState } from 'react';
import { FaYoutube } from 'react-icons/fa';

// Video data with just URLs (no local thumbnails)
const latestvideo=[
    {
        id: 1,
        url: 'https://www.youtube.com/embed/pHv1EFS4UkU',
    }
]
const videosdata = [
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
  {
    id: 4,
    url: 'https://www.youtube.com/embed/pHv1EFS4UkU',
  },
  {
    id: 5,
    url: 'https://www.youtube.com/embed/gqb6HmB9OsU',
  },
  {
    id: 6,
    url: 'https://www.youtube.com/embed/8YsnzW83K4s',
  },
  {
    id: 7,
    url: 'https://www.youtube.com/embed/pHv1EFS4UkU',
  },
  {
    id: 8,
    url: 'https://www.youtube.com/embed/gqb6HmB9OsU',
  },
  {
    id: 9,
    url: 'https://www.youtube.com/embed/8YsnzW83K4s',
  },
];

const getYoutubeThumbnail = (embedUrl) => {
  const videoId = embedUrl.split('/embed/')[1];
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

function videos() {
  const [activeVideos, setActiveVideos] = useState({});
  
    const handlePlay = (id) => {
      setActiveVideos((prev) => ({ ...prev, [id]: true }));
    };
  
    return (
        <>
        <div className="flex justify-center  w-full mt-34 sm:h-92 h-52 bg-cover bg-no-repeat bg-center bg-[url('/images/Treatmentbg.png')]">
        <span className="flex justify-center items-center sm:text-8xl text-5xl font-semibold text-white">Video Gallery </span>
      </div>
      <div className="flex flex-col mx-auto lg:px-60 gap-10 px-6 py-10">

        <div className='sm:px-30'>
        <h2 className="sm:text-3xl py-4 text-center">Trending on Social Media</h2>
          {latestvideo.map((video) => {
            const thumbnailUrl = getYoutubeThumbnail(video.url);
  
            return (
              <div
                key={video.id}
                className="w-full  aspect-video bg-white rounded-md shadow-md overflow-hidden relative cursor-pointer"
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
          {videosdata.map((video) => {
            const thumbnailUrl = getYoutubeThumbnail(video.url);
  
            return (
              <div
                key={video.id}
                className="w-full  aspect-video bg-white rounded-md shadow-md overflow-hidden relative cursor-pointer"
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
      </>
    );
}

export default videos