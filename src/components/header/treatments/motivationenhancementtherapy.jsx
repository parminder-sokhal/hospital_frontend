import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/MET.jpeg", // Replace with your actual image path if different
  sidebarLinks: [
    {
      title: "Motivation Enhancement Therapy",
      link: "/motivation-enhancement",
    },
    { title: "Relapse Prevention Therapy", link: "/Relapse-Prevention" },
    { title: "Individual Counselling", link: "/Individual-Counselling" },
    {
      title: "Motivation Enhancement By Hypnosis",
      link: "/motivation-by-hypnosis",
    },
  ],
};

const MotivationEnhancementTherapy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Motivation Enhancement Therapy (MET)
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">
              What is Motivation Enhancement Therapy?
            </h2>
            <p>
              Motivation Enhancement Therapy (MET) is a client-centered
              counseling approach designed to help individuals increase their
              motivation to change behaviors that are detrimental to their
              well-being. This therapy is particularly effective for those
              struggling with addiction, mental health issues, or lifestyle
              changes.
            </p>
            <p>
              MET is based on the principles of motivational interviewing and
              aims to enhance an individual’s intrinsic motivation to change. By
              exploring and resolving ambivalence, clients can move towards
              positive behavioral changes.
            </p>

            <h2 className="font-semibold text-xl">Key Principles of MET</h2>
            <ul className="list-disc pl-6">
              <li>Client-Centered: Focuses on the individual's needs and perspectives.</li>
              <li>Empathy: Therapists use empathic listening to understand client’s feelings and thoughts.</li>
              <li>Collaboration: Therapist and client identify goals and strategies together.</li>
              <li>Support for Self-Efficacy: Encouraging belief in one’s ability to change.</li>
            </ul>

            <h2 className="font-semibold text-xl">Benefits of MET</h2>
            <ul className="list-disc pl-6">
              <li>Increased motivation to change</li>
              <li>Improved self-awareness and insight</li>
              <li>Enhanced coping strategies</li>
              <li>Reduction in ambivalence towards change</li>
              <li>Support in setting and achieving personal goals</li>
            </ul>

            <h2 className="font-semibold text-xl">Techniques Used in MET</h2>
            <p>Therapists use several core techniques, including:</p>
            <ul className="list-disc pl-6">
              <li>Reflective Listening</li>
              <li>Open-Ended Questions</li>
              <li>Affirmations</li>
              <li>Summarization</li>
            </ul>

            <h2 className="font-semibold text-xl">Who Can Benefit from MET?</h2>
            <ul className="list-disc pl-6">
              <li>Substance abuse issues</li>
              <li>Weight management</li>
              <li>Chronic illness management</li>
              <li>Behavioral issues in children and adolescents</li>
              <li>General life changes and personal growth</li>
            </ul>

            <h2 className="font-semibold text-xl">Getting Started with MET</h2>
            <p>
              If you are interested in exploring Motivation Enhancement Therapy,
              consider reaching out to a qualified therapist who specializes in
              this approach. Together, you can develop a personalized plan to
              enhance your motivation and achieve your goals.
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

export default MotivationEnhancementTherapy;
