import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/naltrexone.jpeg", // Replace with your actual image path
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

const AntidoteTherapy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Antidote Therapy (Naltrexone)
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">What is Antidote Therapy?</h2>
            <p>
              Antidote Therapy with <strong>Naltrexone</strong> is a modern and
              effective treatment for individuals recovering from alcohol or
              opioid dependence. Unlike substitution medicines, Naltrexone
              works as an antidote by blocking the pleasurable effects of
              alcohol and opioids. This reduces cravings and helps prevent
              relapse.
            </p>

            <h2 className="font-semibold text-xl">How Naltrexone Works</h2>
            <ul className="list-disc pl-6">
              <li>🛑 Blocks opioid receptors in the brain</li>
              <li>🚫 Prevents the “high” from alcohol or opioids</li>
              <li>✅ Reduces cravings and risk of relapse</li>
              <li>🔒 Supports long-term abstinence</li>
            </ul>
            <p>
              When patients know that alcohol or opioids will no longer give
              them any effect, they are less likely to return to substance use.
            </p>

            <h2 className="font-semibold text-xl">
              Benefits of Naltrexone Therapy
            </h2>
            <ul className="list-disc pl-6">
              <li>Non-addictive and safe under medical supervision</li>
              <li>Helps maintain complete abstinence</li>
              <li>
                Effective for both alcohol dependence and opioid dependence
              </li>
              <li>
                Improves self-control, motivation, and quality of life
              </li>
            </ul>

            <h2 className="font-semibold text-xl">Forms of Naltrexone</h2>
            <p>
              Naltrexone is available in different forms, prescribed according
              to individual needs:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Tablets (oral form)</strong> – taken daily under
                supervision
              </li>
              <li>
                <strong>Depot injections (long-acting)</strong> – once a month
                for better compliance
              </li>
            </ul>

            <h2 className="font-semibold text-xl">
              Why Choose Antidote Therapy?
            </h2>
            <ul className="list-disc pl-6">
              <li>Scientifically proven to prevent relapse</li>
              <li>
                Works best when combined with counseling, therapy, and family
                support
              </li>
              <li>
                Gives patients a real chance at long-term recovery and healthier
                living
              </li>
            </ul>

            <p className="text-sm italic text-red-600">
              ⚠️ Important: Naltrexone therapy should only be started after
              complete detoxification and under the guidance of a qualified
              psychiatrist or de-addiction specialist. Self-medication can be
              harmful.
            </p>

            <p className="font-semibold text-blue-600 mt-4">
              👉 Looking for safe and effective de-addiction treatment? <br />
              Contact our experts today to know if Antidote Therapy with
              Naltrexone is the right choice for you or your loved one.
            </p>
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

export default AntidoteTherapy;
