import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-600 text-white ">
        <div className="container mx-auto  lg:px-20 px-10 py-15">
          <div className="flex flex-col gap-4 sm:flex-row md:flex-row lg:flex-row justify-center space-y-8 sm:space-y-0 lg:space-y-0 sm:space-x-0 md:space-x-8 lg:space-x-8">
            {/* 1st div - Specialty and Treatments */}
            <div className="flex justify-around gap-15 w-1/3 sm:flex-col md:flex-row lg:flex-row space-y-8 sm:space-y-0 transform hover:scale-105 transition duration-300 ease-in-out">
              {/* Speciality Links */}
              <div className="flex flex-col space-y-2 w-full">
                <h3 className="text-2xl font-semibold">Services</h3>
                <a href="#" className="text-md hover:text-[#DB8E00]">
                  General Psychiatry
                </a>
                <a href="#" className="text-md hover:text-[#DB8E00]">
                  De-addiction Services
                </a>
                <a href="#" className="text-md hover:text-[#DB8E00]">
                  Counseling & Psychotherapy
                </a>
                <a href="#" className="text-md hover:text-[#DB8E00]">
                  Psycho-Diagnostic Services
                </a>
                <a href="#" className="text-md hover:text-[#DB8E00]">
                  Sexual Wellness Disorders
                </a>
              </div>
              {/* Treatments Links */}
              <div className="flex flex-col space-y-2 w-full">
                <h3 className="text-2xl font-semibold">Treatments</h3>
                <a href="/depression" className="text-md hover:text-[#DB8E00]">
                  Psychiatry
                </a>
                <a href="#" className="text-md hover:text-[#DB8E00]">
                  Counselling and therapy
                </a>
                <a href="#" className="text-md hover:text-[#DB8E00]">
                  Mental health issues and children
                </a>
                <a href="#" className="text-md hover:text-[#DB8E00]">
                  De-addiction programme
                </a>
                <a href="#" className="text-md hover:text-[#DB8E00]">
                  sexual wellness program
                </a>
                <a href="#" className="text-md hover:text-[#DB8E00]">
                  Headache clinic
                </a>
                <a href="#" className="text-md hover:text-[#DB8E00]">
                  Epilepsy clinic
                </a>
                <a href="#" className="text-md hover:text-[#DB8E00]">
                  Sleep clinic
                </a>
              </div>
            </div>

            {/* 2nd div - Logo and Contact Information */}
            <div className="flex flex-col items-center space-y-4  sm:w-1/3 transform hover:scale-105 transition duration-300 ease-in-out  lg:border-x-2  py-10 hover:border-x-[#DB8E00]">
              <div className="w-4/5 justify-center">
                <img
                  src="/logo/loonahospitalwhite.png"
                  alt="Hospital Logo"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Social Media</h3>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="text-white text-xl hover:text-red-600" />
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-white text-xl hover:text-blue-600 hover:bg-white rounded-3xl" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-white text-xl hover:text-red-500" />
                  </a>
                </div>
              </div>
            </div>

            {/* 3rd div - Contact Info */}
            <div className="flex flex-col justify-center space-y-4 sm:w-1/3 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="flex flex-col space-y-2 gap-4">
                <h3 className="text-2xl font-semibold">Contact Info</h3>
                <a
                  href="https://maps.app.goo.gl/qiHc2LCpLXkAJtdy6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-[#DB8E00]"
                >
                  <FaMapMarkerAlt className="text-lg" />
                  <span>
                    Site No. 4, behind community centre, Sector 15,
                    <br /> Panchkula, Haryana, India
                  </span>
                </a>

                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 hover:text-[#DB8E00]"
                >
                  <FaPhoneAlt className="text-lg" />
                  <span>+91 9882123456</span>
                </a>
                <a
                  href="mailto:example@example.com"
                  className="flex items-center space-x-2 hover:text-[#DB8E00]"
                >
                  <FaEnvelope className="text-lg" />
                  <span>abc@gmail.com</span>
                </a>
              </div>

              <div className="space-y-2 py-5">
                <h3 className="text-xl font-semibold">About Hospital</h3>
                <p className="text-sm w-4/5 hover:text-[#DB8E00]">
                  Loona Hospital is a dedicated mental health and wellness
                  center offering expert care in psychiatry, sexual wellness,
                  and de-addiction. Our experienced team provides personalized
                  treatment in a safe, supportive environment—helping you heal,
                  grow, and thrive
                </p>
              </div>
            </div>
            {/* 3rd div - Specialities and Treatments */}
          </div>

          {/* Footer Bottom */}
        </div>
        <div className="flex w-full text-center justify-center bg-white text-black">
          <p className="sm:text-sm px-4 py-2">
            Loona Hospital© 2025 All Rights Reserved. | Designed & Developed
            by: 
            <a href="/dashboard" className="hover:text-gray-700">
              Loona Hospital
              </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
