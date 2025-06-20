import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/psychiatrycare.jpeg", // Replace with your actual image path
  sidebarLinks: [
    { title: " Psychiatric Care", link: "/psychiatric-care" },
    { title: "De-addiction Programs", link: "/deaddiction" },
    { title: "Sexual Wellness Services", link: "/sexual-wellness" },
  ],
};

const PsychiatricCare = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Psychiatric Care
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">
              Welcome to Our Psychiatric Care Services
            </h2>
            <p>
              We understand that mental health is a
              crucial component of overall well-being. Our team of experienced
              psychiatrists is committed to providing compassionate,
              personalized, and evidence-based care.
            </p>

            <h2 className="font-semibold text-xl">Our Services</h2>

            <h3 className="font-semibold text-lg">
              Personalized Treatment Plans
            </h3>
            <p>
              We tailor every treatment to the individual, considering your
              medical history, lifestyle, and goals to develop a comprehensive
              strategy.
            </p>

            <h3 className="font-semibold text-lg">Evidence-Based Therapies</h3>
            <ul className="list-disc pl-6">
              <li>
                <strong>Depression:</strong> Effective techniques to improve
                mood.
              </li>
              <li>
                <strong>Anxiety Disorders:</strong> Practical strategies to
                manage anxiety.
              </li>
              <li>
                <strong>Bipolar Disorder:</strong> Support for managing
                emotional stability.
              </li>
              <li>
                <strong>Other Conditions:</strong> Including PTSD, OCD, ADHD,
                and more.
              </li>
            </ul>

            <h3 className="font-semibold text-lg">Holistic Healing Approach</h3>
            <ul className="list-disc pl-6">
              <li>
                <strong>Medication Management:</strong> Careful prescribing and
                monitoring of psychiatric medication.
              </li>
              <li>
                <strong>Psychotherapy:</strong> CBT, DBT, and mindfulness-based
                therapies.
              </li>
              <li>
                <strong>Lifestyle Integration:</strong> Focus on nutrition,
                exercise, and stress reduction.
              </li>
            </ul>

            <h2 className="font-semibold text-xl">Conclusion</h2>
            <p>
              Our mission is to support your mental health with integrity,
              expertise, and compassion. Contact us to begin your journey toward
              wellness.
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

export default PsychiatricCare;
