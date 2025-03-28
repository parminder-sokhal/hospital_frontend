import { FaPhoneAlt } from "react-icons/fa"; // Import the phone icon

const VideoPlayHeader = () => {
  return (
    <header className="relative w-full h-[400px] sm:h-[480px]  md:h-[600px] lg:h-[720px]">
      <video
        autoPlay
        loop
        playsInline
        muted
        className="w-full h-full object-cover"
      >
        <source src="/videos/LoonaHospital1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 translate-x-1/2 rotate-90 flex justify-around items-center">
        <a
          href="tel:+91-9812345678"
          className="flex items-center text-white space-x-2"
        >
          <div className="icon text-red-700 hover:text-blue-700 hover:bg-red-700 bg-blue-500 rounded-full p-2 shadow-lg flex justify-center items-center">
            <FaPhoneAlt size={40} />
          </div>
          <div className="call text-3xl text-black hover:text-blue-700 hover:bg-red-700 font-semibold text-center flex flex-col gap-1 items-center">
            <span className="bg-white px-2 py-1 rounded-sm">
              {"+91-9812345678"}
            </span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default VideoPlayHeader;
