import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/CBT.jpeg", // Replace with your actual image path if different
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

const CBT = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Cognitive Behavioral Therapy (CBT)
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">
              Evidence-Based Therapy for Real, Lasting Change
            </h2>
            <p>
              Cognitive Behavioral Therapy (CBT) is a highly effective, evidence-based approach to mental health treatment that focuses on the relationship between thoughts, emotions, and behaviors. It empowers individuals to recognize and change unhelpful thought patterns and behaviors that cause distress or dysfunction.
            </p>

            <p>
              CBT is grounded in the principle that our thoughts significantly influence how we feel and act. By shifting distorted or negative thinking into more realistic, balanced thoughts, individuals can improve emotional well-being and cultivate healthier behaviors.
            </p>

            <h2 className="font-semibold text-xl">How CBT Works</h2>
            <p>
              CBT is structured, time-limited, and goal-oriented. Rather than dwelling on the past, it focuses on current issues while incorporating past experiences only when necessary. During therapy, you'll work collaboratively with a therapist to:
            </p>
            <ul className="list-disc pl-6">
              <li>Identify negative or automatic thoughts</li>
              <li>Understand the link between thoughts, emotions, and behaviors</li>
              <li>Challenge and reframe unhelpful thinking patterns</li>
              <li>Develop healthier coping strategies and responses</li>
            </ul>
            <p>
              Homework such as journaling, tracking thoughts, or practicing new behaviors reinforces what is learned in sessions.
            </p>

            <h2 className="font-semibold text-xl">What CBT Can Help With</h2>
            <ul className="list-disc pl-6">
              <li><strong>Anxiety Disorders:</strong> Generalized anxiety, panic, phobias, social anxiety</li>
              <li><strong>Depression:</strong> Major depressive disorder and persistent low mood</li>
              <li><strong>Post-Traumatic Stress Disorder (PTSD):</strong> Trauma recovery and resilience</li>
              <li><strong>Obsessive-Compulsive Disorder (OCD)</strong></li>
              <li><strong>Stress and Burnout</strong></li>
              <li><strong>Anger Management</strong></li>
              <li><strong>Low Self-Esteem and Negative Self-Talk</strong></li>
              <li><strong>Sleep Issues:</strong> Including insomnia</li>
              <li><strong>Health Anxiety and Chronic Illness Management</strong></li>
            </ul>

            <h2 className="font-semibold text-xl">Benefits of CBT</h2>
            <ul className="list-disc pl-6">
              <li>Structured and time-efficient (often 6–20 sessions)</li>
              <li>Focused on practical tools and real-life applications</li>
              <li>Promotes personal empowerment and resilience</li>
              <li>Proven effective in both individual and group settings</li>
              <li>Can be integrated with other therapy models as needed</li>
            </ul>

            <h2 className="font-semibold text-xl">What to Expect in a CBT Session</h2>
            <p>
              The first session focuses on understanding your concerns and goals. Sessions typically include collaborative discussions, problem-solving, and skill-building exercises.
            </p>
            <p>
              You may receive exercises, thought logs, or worksheets to complete between sessions to enhance your progress.
            </p>
            <p>
              CBT is an active, empowering process — your therapist guides, but you play the lead role in creating change.
            </p>
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

export default CBT;
