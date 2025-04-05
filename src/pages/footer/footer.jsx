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
        <div className=" container mx-auto  lg:px-20 sm:px-14 md:px-18 py-20  ">
          <div className="flex justify-around space-x-8">
            {/* 1st div - Contact Details */}
            <div className="flex flex-col space-y-4 w-1/3 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="flex flex-col space-y-2">
                <h3 className="text-2xl font-semibold">Contact Info</h3>
                <a
                  href="https://maps.app.goo.gl/qiHc2LCpLXkAJtdy6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-[#DB8E00]"
                >
                  <FaMapMarkerAlt className="text-xl" />
                  <span>
                    Site No. 4, behind community centre, Sector 15, Panchkula,
                    Haryana, India
                  </span>
                </a>

                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 hover:text-[#DB8E00]"
                >
                  <FaPhoneAlt className="text-xl" />
                  <span>+91 9882123456</span>
                </a>
                <a
                  href="mailto:example@example.com"
                  className="flex items-center space-x-2 hover:text-[#DB8E00]"
                >
                  <FaEnvelope className="text-xl" />
                  <span>abc@gmail.com</span>
                </a>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Social Media</h3>
                <div className="flex space-x-4">
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
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">About Hospital</h3>
                <p className="text-sm hover:text-[#DB8E00]">
                  Our team consists of experienced psychiatrists, psychologists,
                  therapists, and support staff who work collaboratively to
                  offer personalized treatment plans tailored to meet the unique
                  needs of each patient. We understand that every journey is
                  different, and we are here to support you every step of the
                  way.
                </p>
              </div>
            </div>

            {/* 2nd div - Logo and Contact Information */}
            <div className="flex flex-col items-center space-y-4 w-1/3 transform hover:scale-105 transition duration-300 ease-in-out border-x-2 hover:border-x-[#DB8E00]">
              <div className="w-64 ">
                <img
                  src="/logo/loonahospitalwhite.png"
                  alt="Hospital Logo"
                  className="w-full"
                />
              </div>
              <div className="space-y-2 flex flex-col">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 hover:text-[#DB8E00]"
                >
                  <FaPhoneAlt className="text-xl" />
                  <span>+91 9882123456</span>
                </a>
                <a href="tel:+911234567890" className="text-sm">
                  Contact Number: +91 123 456 7890
                </a>
                <a href="mailto:contact@hospital.com" className="text-sm">
                  Email: contact@hospital.com
                </a>
              </div>
              <div className="flex space-x-4">
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

            {/* 3rd div - Specialities and Treatments */}
            <div className="flex w-1/3 space-x-8 transform hover:scale-105 transition duration-300 ease-in-out">
              {/* Speciality Links */}
              <div className="flex flex-col space-y-2 w-1/2 ">
                <h3 className="text-lg font-semibold">Specialty</h3>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  Alcohol
                </a>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  Heroin
                </a>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  Prescription Drugs
                </a>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  Disorder
                </a>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  Alcohol
                </a>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  Heroin
                </a>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  Prescription Drugs
                </a>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  Disorder
                </a>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  Alcohol
                </a>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  Heroin
                </a>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  Prescription Drugs
                </a>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  Disorder
                </a>
              </div>
              {/* Treatments Links */}
              <div className="flex flex-col space-y-2 w-1/2">
                <h3 className="text-lg font-semibold">Treatments</h3>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  Bipolar Disorder
                </a>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  Depression
                </a>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  Phobia
                </a>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  ADHD
                </a>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  Bipolar Disorder
                </a>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  Depression
                </a>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  Phobia
                </a>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  ADHD
                </a>
              </div>
              <div className="flex flex-col space-y-2 w-1/2">
                <h3 className="text-lg font-semibold">Links</h3>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  Bipolar Disorder
                </a>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  Depression
                </a>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  Phobia
                </a>
                <a href="#" className="text-sm hover:text-[#DB8E00]">
                  ADHD
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
        </div>
        <div className="flex w-full  text-center justify-center  bg-white text-black ">
          <p className="text-lg py-2">
            Loona Hospital© 2025 All Rights Reserved. | Designed & Developed
            by: Loona Hospital
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
