import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/behaviourtherapy.jpeg", // Replace with your actual image path if different
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

const BehaviourTherapy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Behaviour Therapy
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">What Is Behaviour Therapy?</h2>
            <p>
              Behaviour Therapy is an evidence-based approach focused on modifying unhealthy behaviours through practical, goal-driven strategies. Rooted in behavioural psychology, it emphasizes current actions and helps clients develop more effective coping mechanisms.
            </p>

            <h2 className="font-semibold text-xl">Core Principles of Behaviour Therapy</h2>
            <ul className="list-disc pl-6">
              <li>Behaviour is learned—and can be unlearned or changed</li>
              <li>Focus on present-day behaviours</li>
              <li>Clear goals and measurable outcomes</li>
              <li>Use of reinforcement and consequences</li>
            </ul>

            <h2 className="font-semibold text-xl">Common Techniques Used</h2>
            <ul className="list-disc pl-6">
              <li>Positive Reinforcement</li>
              <li>Systematic Desensitization</li>
              <li>Exposure Therapy</li>
              <li>Token Economies</li>
              <li>Modeling and Imitation</li>
              <li>Aversion Therapy (with ethical care)</li>
            </ul>

            <h2 className="font-semibold text-xl">Who Can Benefit?</h2>
            <ul className="list-disc pl-6">
              <li>Anxiety and panic disorders</li>
              <li>Depression</li>
              <li>ADHD</li>
              <li>Substance use disorders</li>
              <li>Anger and impulse control</li>
              <li>Eating disorders</li>
              <li>Autism spectrum disorders</li>
            </ul>

            <h2 className="font-semibold text-xl">What to Expect in a Session</h2>
            <ul className="list-disc pl-6">
              <li>Identify behaviours and triggers</li>
              <li>Set actionable goals</li>
              <li>Learn and apply new behaviour strategies</li>
              <li>Track and evaluate progress</li>
              <li>Homework to reinforce change</li>
            </ul>

            <h2 className="font-semibold text-xl">Benefits of Behaviour Therapy</h2>
            <ul className="list-disc pl-6">
              <li>Effective, structured, and practical</li>
              <li>Scientifically validated techniques</li>
              <li>Promotes lasting change and self-empowerment</li>
              <li>Adaptable across age groups and environments</li>
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

export default BehaviourTherapy;
