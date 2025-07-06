import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/detoxprogram.jpg", // Replace with actual path to detox image
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
  ],
};

const DetoxProgram = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Detox Program for Addiction
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">What is a Detox Program?</h2>
            <p>
              A detox program is a medically supervised process designed to
              safely remove addictive substances from the body, including
              alcohol, opium, chitta, and heroin. This program is essential for
              individuals seeking to overcome substance dependency and begin
              their journey toward recovery.
            </p>

            <h2 className="font-semibold text-xl">Importance of Detoxification</h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>Safe Withdrawal Management:</strong> Our program ensures
                that withdrawal symptoms are managed effectively to minimize
                discomfort and health risks.
              </li>
              <li>
                <strong>Medical Supervision:</strong> Our experienced medical
                team monitors patients throughout the detox process, providing
                support and intervention as needed.
              </li>
              <li>
                <strong>Personalized Care:</strong> Each detox plan is tailored
                to meet the unique needs of the individual, considering factors
                such as the type of substance used, duration of use, and overall
                health.
              </li>
            </ul>

            <h2 className="font-semibold text-xl">
              What to Expect During the Detox Process
            </h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>Assessment:</strong> Upon admission, a comprehensive
                evaluation will be conducted to determine the appropriate detox
                plan.
              </li>
              <li>
                <strong>Detoxification:</strong> Patients will undergo a
                medically supervised detox, where substances are gradually
                eliminated from the body.
              </li>
              <li>
                <strong>Supportive Care:</strong> Throughout the detox process,
                patients will receive emotional and psychological support to
                help them cope with cravings and withdrawal symptoms.
              </li>
              <li>
                <strong>Preparation for Further Treatment:</strong> Once
                detoxification is complete, patients will be prepared for the
                next steps in their recovery journey, which may include
                counseling, therapy, or rehabilitation programs.
              </li>
            </ul>

            <h2 className="font-semibold text-xl">
              Why Choose Our Detox Program?
            </h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>Experienced Professionals:</strong> Our team consists of
                qualified medical and addiction specialists dedicated to
                providing compassionate care.
              </li>
              <li>
                <strong>Comprehensive Approach:</strong> We address not only the
                physical aspects of addiction but also the emotional and
                psychological factors.
              </li>
              <li>
                <strong>Supportive Environment:</strong> We create a safe and
                supportive environment that fosters healing and recovery.
              </li>
            </ul>

            <h2 className="font-semibold text-xl">
              Take the First Step Toward Recovery
            </h2>
            <p>
              If you or a loved one is struggling with addiction, our detox
              program can help. Contact us today to learn more about our
              services and how we can assist you on your path to recovery.
            </p>
          </div>

          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              De-addiction Programme
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

export default DetoxProgram;