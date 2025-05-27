import { FaPhoneAlt } from "react-icons/fa"; // Import the phone icon
import { Link } from "react-router-dom";

const VideoPlayHeader = () => {
  return (
    <header className="relative w-full h-[400px] sm:h-[480px]  md:h-[600px] lg:h-[720px] top-20">
      <video
        autoPlay
        loop
        playsInline
        muted
        className="w-full h-full object-cover"
      >
        <source
          src="https://www.dropbox.com/scl/fi/6nrif2ivlzc1shm2a6fst/bgvideo.mp4?rlkey=1majbp4e125q8olv89e0zvzbt&st=f12sztmx&raw=1"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-1/2 right-12 transform -translate-y-1/2 translate-x-1/2 rotate-90 flex justify-around items-center">
        <Link
          to="tel:+919815015212"
          className="flex items-center text-white space-x-2"
        >
          <div className="icon text-red-700 hover:text-blue-700 hover:bg-red-700 bg-blue-500 rounded-full p-2 shadow-lg flex justify-center items-center">
            <FaPhoneAlt size={30} />
          </div>
          <div className="call lg:text-2xl sm:text-xl md:text-xl text-black hover:text-blue-700 font-semibold text-center flex flex-col gap-1 items-center">
            <span className="bg-white px-1 py-1 rounded-sm">
              {"+91 9815015212"}
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default VideoPlayHeader;
