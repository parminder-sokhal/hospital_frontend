import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/stressmanagement.jpeg", // Replace with your actual image path if different
  sidebarLinks: [
    { title: "CBT", link: "/cbt" },
    { title: "DBT", link: "/DBT" },
    { title: "Individual Counselling", link: "/individual-counselling" },
    { title: "Stress Management", link: "/stress-management" },
    { title: "Behaviour Therapy", link: "/behaviour-therapy" },
    { title: "Relaxation Therapy", link: "/relaxation-therapy" },
    { title: "Social Skills Training", link: "/social-skills-training" },
  ],
};

const StressManagement = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Stress Management Therapy
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">
              Regain Control. Restore Balance. Rebuild Peace of Mind.
            </h2>
            <p>
              Stress Management Therapy helps you manage stress with practical tools, emotional insight, and lifestyle strategies. We work with you to identify triggers, understand their effects, and build resilience for a healthier life.
            </p>

            <h2 className="font-semibold text-xl">What Is Stress Management Therapy?</h2>
            <ul className="list-disc pl-6">
              <li>Identify internal and external sources of stress</li>
              <li>Understand how stress affects body and mind</li>
              <li>Learn calming and mindfulness techniques</li>
              <li>Build emotional regulation and resilience</li>
              <li>Set boundaries and create healthy routines</li>
            </ul>

            <h2 className="font-semibold text-xl">Common Sources of Stress We Address</h2>
            <ul className="list-disc pl-6">
              <li>Work-related stress and burnout</li>
              <li>Academic or career pressure</li>
              <li>Family or relationship conflicts</li>
              <li>Financial instability</li>
              <li>Chronic illness or caregiving stress</li>
              <li>Perfectionism and people-pleasing</li>
              <li>Overthinking and constant worry</li>
            </ul>

            <h2 className="font-semibold text-xl">Therapy Techniques We Use</h2>
            <ul className="list-disc pl-6">
              <li><strong>CBT:</strong> Reframe unhelpful thinking patterns</li>
              <li><strong>MBSR:</strong> Mindfulness-based techniques</li>
              <li><strong>Somatic tools:</strong> Grounding, breathwork, relaxation</li>
              <li><strong>Time and energy management:</strong> Balance and boundaries</li>
              <li><strong>Emotional regulation:</strong> Build healthy response strategies</li>
              <li><strong>Lifestyle coaching:</strong> Sleep, diet, and exercise support</li>
            </ul>

            <h2 className="font-semibold text-xl">Signs You May Need Stress Therapy</h2>
            <ul className="list-disc pl-6">
              <li>Feeling constantly on edge or overwhelmed</li>
              <li>Physical issues: tension, headaches, insomnia</li>
              <li>Irritability, emotional outbursts, or withdrawal</li>
              <li>Using food, substances, or isolation to cope</li>
            </ul>

            <h2 className="font-semibold text-xl">Why Choose Stress Therapy?</h2>
            <ul className="list-disc pl-6">
              <li>Respond with clarity, not reactivity</li>
              <li>Prevent burnout and emotional fatigue</li>
              <li>Reconnect with your values and priorities</li>
              <li>Improve your well-being, focus, and relationships</li>
            </ul>
          </div>

          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Other Counselling and Therapy</h2>
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

export default StressManagement;
