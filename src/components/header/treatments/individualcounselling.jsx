import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/individualcounselling.jpeg", // Replace with your actual image path if different
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

const IndividualCounselling = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Individual Counseling & Therapy
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">
              Personalized Support for Growth, Healing, and Change
            </h2>
            <p>
              Individual counseling—also known as individual therapy or talk therapy—is a one-on-one, confidential process between you and a trained therapist. It’s a space to explore thoughts, emotions, and challenges in a safe, judgment-free environment.
            </p>
            <p>
              At [Your Practice Name], we believe in your capacity for growth and healing. Our therapists guide and support you through life’s difficulties with empathy and evidence-based strategies.
            </p>

            <h2 className="font-semibold text-xl">What Is Individual Therapy?</h2>
            <ul className="list-disc pl-6">
              <li>Gain insight into emotions, behaviors, and thoughts</li>
              <li>Develop healthier coping skills</li>
              <li>Heal from trauma or painful experiences</li>
              <li>Improve self-esteem and confidence</li>
              <li>Navigate life transitions and grief</li>
              <li>Set and achieve personal goals</li>
            </ul>

            <h2 className="font-semibold text-xl">What Can It Help With?</h2>
            <ul className="list-disc pl-6">
              <li>Anxiety, panic, or constant worry</li>
              <li>Depression and low mood</li>
              <li>Grief, trauma, and PTSD</li>
              <li>Stress, burnout, or life overwhelm</li>
              <li>Relationship and family issues</li>
              <li>Self-esteem and confidence</li>
              <li>Chronic illness or pain-related stress</li>
            </ul>

            <h2 className="font-semibold text-xl">Therapeutic Approaches We Use</h2>
            <ul className="list-disc pl-6">
              <li>Cognitive Behavioral Therapy (CBT)</li>
              <li>Dialectical Behavior Therapy (DBT)</li>
              <li>Psychodynamic Therapy</li>
              <li>Mindfulness-Based Approaches</li>
              <li>Solution-Focused Therapy</li>
              <li>Acceptance and Commitment Therapy (ACT)</li>
              <li>Person-Centered Therapy</li>
            </ul>

            <h2 className="font-semibold text-xl">Why Choose Individual Therapy?</h2>
            <ul className="list-disc pl-6">
              <li>Better emotional regulation and resilience</li>
              <li>Healthier relationships and boundaries</li>
              <li>More clarity and decision-making skills</li>
              <li>Greater self-awareness and purpose</li>
              <li>Support through life transitions and healing</li>
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

export default IndividualCounselling;
