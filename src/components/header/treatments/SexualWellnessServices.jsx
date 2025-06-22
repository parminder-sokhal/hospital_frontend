import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/sexualWellness.jpeg", // Replace with your actual image path
  sidebarLinks: [
    { title: " Psychiatric Care", link: "/psychiatric-care" },
    { title: "De-addiction Programs", link: "/deaddiction" },
    { title: "Sexual Wellness Services", link: "/sexual-wellness" },
  ],
};

const SexualWellnessServices = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Sexual Wellness Services
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">Introduction</h2>
            <p>
              Understanding and addressing sexual health is crucial for overall
              well-being.We believe that sexual wellness
              is an integral part of a healthy lifestyle. Our dedicated
              specialists provide support and care in a safe, confidential
              environment.
            </p>

            <h2 className="font-semibold text-xl">Our Services</h2>

            <h3 className="font-semibold text-lg">1. Erectile Dysfunction</h3>
            <p>
              ED can affect men of all ages and may result from physical or
              psychological causes. We provide:
              <ul className="list-disc pl-6">
                <li>Medications</li>
                <li>Lifestyle changes</li>
                <li>Therapy options</li>
              </ul>
            </p>

            <h3 className="font-semibold text-lg">2. Low Libido</h3>
            <p>
              Decreased desire can stem from hormonal, emotional, or relational
              factors. We offer:
              <ul className="list-disc pl-6">
                <li>Hormonal therapy</li>
                <li>Counseling</li>
                <li>Lifestyle modifications</li>
              </ul>
            </p>

            <h3 className="font-semibold text-lg">3. Sexual Trauma</h3>
            <p>
              We provide trauma-informed care to help individuals heal through:
              <ul className="list-disc pl-6">
                <li>Individual therapy</li>
                <li>Support groups</li>
                <li>Educational resources</li>
              </ul>
            </p>

            <h2 className="font-semibold text-xl">
              Confidential Consultations
            </h2>
            <p>
              Your privacy is our priority. All consultations are confidential,
              offering you a safe space to speak openly.
            </p>

            <h2 className="font-semibold text-xl">Highest Standard of Care</h2>
            <p>
              Our team is dedicated to providing evidence-based and
              compassionate care, always prioritizing your well-being.
            </p>

            <h2 className="font-semibold text-xl">Conclusion</h2>
            <p>
              Don’t let sexual health concerns hold you back. Contact us today
              to begin your journey toward wellness.
            </p>
          </div>

          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Other Services
            </h2>
            <ul className="space-y-4">
              {data.sidebarLinks.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-blue-600 hover:text-blue-800 cursor-pointer"
                >
                  <FaAngleRight className="mr-2" />
                  <Link to={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SexualWellnessServices;
