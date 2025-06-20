import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ADHD.jpeg", // Replace with your actual image path if different
  sidebarLinks: [
    { title: "ADHD", link: "/ADHD" },
    { title: "Autism", link: "/autism" },
    { title: "Incontinence", link: "/incontinence" },
    { title: "Behaviour Issues", link: "/behaviour-issues" },
    { title: "Conduct Disorder", link: "/conduct-disorder" },
    { title: "Learning Disability", link: "/learning-disability" },
  ],
};

const ADHD = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          ADHD Therapy: Understanding and Managing Attention Deficit Hyperactivity Disorder
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">What is ADHD?</h2>
            <p>
              ADHD is a neurodevelopmental condition that affects both children and adults. It is characterized by symptoms of inattention, hyperactivity, and impulsivity. Individuals may struggle with focus, organization, and impulse regulation, affecting various areas of life.
            </p>

            <h2 className="font-semibold text-xl">What Are the Symptoms of ADHD?</h2>
            <h3 className="font-semibold text-lg">1. Inattention Symptoms:</h3>
            <ul className="list-disc pl-6">
              <li>Difficulty sustaining attention</li>
              <li>Careless mistakes</li>
              <li>Poor organization</li>
              <li>Reluctance to do mentally demanding tasks</li>
              <li>Losing things often</li>
              <li>Easily distracted</li>
              <li>Forgetfulness in daily tasks</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">2. Hyperactivity Symptoms:</h3>
            <ul className="list-disc pl-6">
              <li>Fidgeting or squirming</li>
              <li>Leaving seat frequently</li>
              <li>Running/climbing inappropriately</li>
              <li>Loud or disruptive play</li>
              <li>Excessive talking</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">3. Impulsivity Symptoms:</h3>
            <ul className="list-disc pl-6">
              <li>Interrupting others</li>
              <li>Impatience in waiting turns</li>
              <li>Acting without thinking</li>
              <li>Difficulty delaying gratification</li>
            </ul>

            <h2 className="font-semibold text-xl">What Causes ADHD?</h2>
            <ul className="list-disc pl-6">
              <li><strong>Genetics:</strong> Tends to run in families</li>
              <li><strong>Brain Structure:</strong> Differences in brain regions related to attention and impulse control</li>
              <li><strong>Prenatal Factors:</strong> Exposure to substances or premature birth</li>
              <li><strong>Neurotransmitter Imbalance:</strong> Issues with dopamine and norepinephrine</li>
            </ul>

            <h2 className="font-semibold text-xl">How ADHD Impacts Daily Life</h2>
            <ul className="list-disc pl-6">
              <li><strong>Academics:</strong> Struggles with attention and task completion</li>
              <li><strong>Work:</strong> Issues with time management and organization</li>
              <li><strong>Relationships:</strong> Misunderstandings due to impulsivity or inattentiveness</li>
              <li><strong>Emotional Regulation:</strong> Difficulty managing emotions and stress</li>
            </ul>

            <h2 className="font-semibold text-xl">Our ADHD Therapy Program</h2>
            <p>
              At [Your Clinic/Practice Name], we provide a comprehensive therapy plan to support individuals with ADHD through various evidence-based strategies.
            </p>

            <h3 className="font-semibold text-lg">1. ADHD Assessment and Diagnosis</h3>
            <p>
              Includes questionnaires, behavioral observations, and interviews to accurately diagnose ADHD and identify co-occurring conditions.
            </p>

            <h3 className="font-semibold text-lg">2. Behavioral Therapy</h3>
            <ul className="list-disc pl-6">
              <li>Positive reinforcement</li>
              <li>Behavior modification</li>
              <li>Time management coaching</li>
              <li>Self-regulation strategies</li>
            </ul>

            <h3 className="font-semibold text-lg">3. Cognitive Behavioral Therapy (CBT)</h3>
            <p>
              Helps challenge negative thinking patterns and improve emotional coping skills.
            </p>

            <h3 className="font-semibold text-lg">4. ADHD Coaching</h3>
            <p>
              Focused support for executive functioning—organization, goal-setting, planning, and follow-through.
            </p>

            <h3 className="font-semibold text-lg">5. Parent Training (for Children)</h3>
            <p>
              Educates parents to establish structured routines and reinforce positive behavior consistently.
            </p>

            <h3 className="font-semibold text-lg">6. Medication Management</h3>
            <p>
              When appropriate, stimulant and non-stimulant medications are prescribed and monitored by healthcare professionals.
            </p>

            <h3 className="font-semibold text-lg">7. Social Skills Training</h3>
            <p>
              Teaches children and adults how to interpret social cues, engage in positive interactions, and build better relationships.
            </p>

            <h2 className="font-semibold text-xl">Benefits of ADHD Therapy</h2>
            <ul className="list-disc pl-6">
              <li>Improved focus and organization</li>
              <li>Better emotional control</li>
              <li>Stronger personal and professional relationships</li>
              <li>Greater productivity and academic/work performance</li>
              <li>Higher confidence and self-esteem</li>
            </ul>
          </div>

          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Other Services</h2>
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

export default ADHD;
