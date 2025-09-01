import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/naltrexone.jpeg", // Replace with the correct image path if needed
  sidebarLinks: [
    {
      title: "Motivation Enhancement Therapy",
      link: "/motivation-enhancement",
    },
    { title: "Relapse Prevention Therapy", link: "/Relapse-Prevention" },
    {
      title: "Motivation Enhancement By Hypnosis",
      link: "/motivation-by-hypnosis",
    },
    {
      title: "Detox Program",
      link: "/detoxprogram",
    },
    { title: "OST Addiction (Buprenorphine)", link: "/OstAddiction" },
    { title: "Antidote Therapy (Naltrexone)", link: "/AntidoteTherapy" },
  ],
};

const OstAddiction = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          OST Addiction (Buprenorphine)
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">What is OST?</h2>
            <p>
              Opioid Substitution Therapy (OST) is a proven treatment approach for individuals
              struggling with opioid dependence. It helps reduce withdrawal symptoms, cravings,
              and the harmful effects of opioid misuse.
            </p>
            <p>
              One of the most effective medicines used in OST is <strong>Buprenorphine</strong>,
              which works as a partial opioid agonist. It provides relief from withdrawal
              without creating the same level of dependence as other opioids, making recovery
              safer and more manageable.
            </p>

            <h2 className="font-semibold text-xl">Buprenorphine in OST</h2>
            <p>Buprenorphine is widely recommended by psychiatrists and de-addiction specialists because:</p>
            <ul className="list-disc pl-6">
              <li>✅ It helps stabilize patients in recovery</li>
              <li>✅ Reduces the risk of relapse</li>
              <li>✅ Improves quality of life</li>
              <li>✅ Can be safely used under medical supervision</li>
            </ul>

            <h2 className="font-semibold text-xl">Available Brands of Buprenorphine (OST Medication)</h2>
            <p>
              At our center, Buprenorphine is prescribed under trusted brands, including:
            </p>
            <ul className="list-disc pl-6">
              <li>Addnok-N</li>
              <li>Buproex-N</li>
              <li>Opit-N</li>
            </ul>
            <p className="text-sm italic text-red-600">
              (Note: All medications are provided strictly under a qualified doctor’s supervision.
              Self-medication is unsafe and strongly discouraged.)
            </p>

            <h2 className="font-semibold text-xl">Why Choose OST with Buprenorphine?</h2>
            <ul className="list-disc pl-6">
              <li>Scientifically proven treatment for opioid addiction</li>
              <li>Reduces withdrawal pain and cravings</li>
              <li>Helps patients regain control of their personal, social, and professional life</li>
              <li>Supports long-term recovery when combined with counseling and therapy</li>
            </ul>
          </div>

          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Sexual Wellness Program
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

export default OstAddiction;
