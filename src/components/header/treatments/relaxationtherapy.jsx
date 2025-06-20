import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/relaxationtherapy.jpeg", // Replace with your actual image path if different
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

const RelaxationTherapy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Relaxation Therapy
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">What Is Relaxation Therapy?</h2>
            <p>
              Relaxation Therapy uses scientifically supported techniques to help reduce stress, calm the body and mind, and enhance emotional well-being. It's beneficial for anxiety, chronic pain, insomnia, and overall mental health support.
            </p>

            <h2 className="font-semibold text-xl">How Does It Work?</h2>
            <p>
              By activating the parasympathetic nervous system, relaxation therapy counteracts the stress response, improving heart rate, breathing, muscle tension, and emotional balance.
            </p>

            <h2 className="font-semibold text-xl">Core Techniques</h2>
            <ul className="list-disc pl-6">
              <li>Deep Breathing (Diaphragmatic)</li>
              <li>Progressive Muscle Relaxation (PMR)</li>
              <li>Guided Imagery / Visualization</li>
              <li>Mindfulness and Meditation</li>
              <li>Autogenic Training</li>
              <li>Biofeedback (where available)</li>
            </ul>

            <h2 className="font-semibold text-xl">Who Can Benefit?</h2>
            <ul className="list-disc pl-6">
              <li>Stress and burnout</li>
              <li>Anxiety and panic disorders</li>
              <li>Depression</li>
              <li>Chronic pain conditions</li>
              <li>Insomnia and sleep issues</li>
              <li>PTSD and trauma recovery</li>
              <li>High blood pressure and heart conditions</li>
            </ul>

            <h2 className="font-semibold text-xl">What to Expect in a Session</h2>
            <p>
              A therapist will guide you through calming techniques tailored to your needs. Sessions may involve breathing, visualization, or relaxation training, and you’ll learn how to use these methods in daily life.
            </p>

            <h2 className="font-semibold text-xl">Benefits of Relaxation Therapy</h2>
            <ul className="list-disc pl-6">
              <li>Reduces anxiety and depression</li>
              <li>Improves sleep and energy levels</li>
              <li>Enhances mental clarity and mood</li>
              <li>Supports chronic pain and tension relief</li>
              <li>Boosts immune function and emotional resilience</li>
              <li>Safe, natural, and non-invasive</li>
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

export default RelaxationTherapy;
