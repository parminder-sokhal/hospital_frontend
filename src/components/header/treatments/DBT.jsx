import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/DBT.jpeg", // Replace with your actual image path if different
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

const DBT = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Dialectical Behavior Therapy (DBT)
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">
              Balancing Acceptance and Change for a Healthier Life
            </h2>
            <p>
              Dialectical Behavior Therapy (DBT) is a structured, evidence-based form of cognitive-behavioral therapy developed to help individuals manage intense emotions, reduce harmful behaviors, and improve interpersonal relationships. Originally designed for borderline personality disorder (BPD), it now benefits a wide range of emotional and behavioral challenges.
            </p>
            <p>
              The word “dialectical” reflects DBT’s balance between two opposites—acceptance and change. Clients are encouraged to accept themselves as they are while also working to change behaviors that no longer serve them.
            </p>

            <h2 className="font-semibold text-xl">What Makes DBT Unique?</h2>
            <p>
              DBT merges traditional CBT techniques with mindfulness, acceptance, and emotional regulation strategies. It is highly structured and often includes multiple formats of therapy delivery:
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Individual Therapy:</strong> Weekly one-on-one sessions focused on applying DBT skills to real-life challenges.</li>
              <li><strong>Skills Training Group:</strong> Group-based learning and practice of DBT core skills in a supportive setting.</li>
              <li><strong>Phone Coaching:</strong> On-call therapist support to apply DBT techniques during emotional crises.</li>
              <li><strong>Therapist Consultation Team:</strong> Therapists meet regularly for peer support and quality assurance.</li>
            </ul>

            <h2 className="font-semibold text-xl">The Four Core Skill Modules in DBT</h2>
            <ul className="list-disc pl-6">
              <li><strong>Mindfulness:</strong> Cultivating present-moment awareness without judgment—this forms the foundation of all DBT work.</li>
              <li><strong>Distress Tolerance:</strong> Skills to survive crisis situations without self-harm or impulsive reactions.</li>
              <li><strong>Emotion Regulation:</strong> Understanding and managing overwhelming emotions to reduce vulnerability and increase control.</li>
              <li><strong>Interpersonal Effectiveness:</strong> Improving communication, setting boundaries, and maintaining healthy relationships.</li>
            </ul>

            <h2 className="font-semibold text-xl">Who Can Benefit from DBT?</h2>
            <p>
              DBT is ideal for individuals dealing with emotional instability or high-intensity psychological issues such as:
            </p>
            <ul className="list-disc pl-6">
              <li>Intense mood swings or emotional outbursts</li>
              <li>Chronic emptiness or low self-worth</li>
              <li>Self-harming behaviors or suicidal ideation</li>
              <li>Difficulty managing anger or frustration</li>
              <li>Unstable relationships or fear of abandonment</li>
              <li>Impulsivity (binge eating, substance use, etc.)</li>
            </ul>
            <p>
              Common diagnoses treated with DBT include:
            </p>
            <ul className="list-disc pl-6">
              <li>Borderline Personality Disorder (BPD)</li>
              <li>Post-Traumatic Stress Disorder (PTSD)</li>
              <li>Eating disorders (e.g., binge eating, bulimia)</li>
              <li>Depression and anxiety</li>
              <li>Substance use disorders</li>
              <li>Bipolar disorder (focused on emotion regulation)</li>
            </ul>

            <h2 className="font-semibold text-xl">Why Choose DBT?</h2>
            <p>
              DBT is not a quick fix—it requires commitment—but it offers a proven, life-enhancing toolkit for those who have struggled with emotional regulation and previous therapies. Its benefits include:
            </p>
            <ul className="list-disc pl-6">
              <li>Improved emotional regulation</li>
              <li>Reduction in self-harming and risky behaviors</li>
              <li>Stronger, healthier relationships</li>
              <li>Increased self-acceptance and confidence</li>
              <li>Better daily functioning and life satisfaction</li>
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

export default DBT;
