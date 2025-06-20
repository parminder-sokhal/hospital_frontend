import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/mentalHealth.jpeg", // Replace with your actual image path if different
  sidebarLinks: [
    { title: "ADHD", link: "/ADHD" },
    { title: "Autism", link: "/autism" },
    { title: "Incontinence", link: "/incontinence" },
    { title: "Behaviour Issues", link: "/behaviour-issues" },
    { title: "Conduct Disorder", link: "/conduct-disorder" },
    { title: "Learning Disability", link: "/learning-disability" },
  ],
};

const MentalHealthIssuesandChildren = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Mental Health Issues in Children
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">
              Understanding Mental Health Issues in Children
            </h2>
            <p>
              Mental health issues in children are more common than many realize and can significantly impact their development, behavior, and overall quality of life. Early intervention, support, and treatment can make a profound difference in a child’s ability to thrive socially, academically, and emotionally.
            </p>
            <p>
              At [Your Clinic/Practice Name], we understand that mental health challenges such as ADHD, Autism Spectrum Disorder, Conduct Disorder, and Learning Disabilities require specialized care and tailored therapeutic approaches.
            </p>

            <h2 className="font-semibold text-xl">Common Mental Health Issues in Children</h2>

            <h3 className="font-semibold text-lg mt-4">1. Attention-Deficit/Hyperactivity Disorder (ADHD)</h3>
            <p>
              ADHD is a neurodevelopmental disorder characterized by difficulties with attention, hyperactivity, and impulsivity. Children with ADHD may struggle with staying focused, following instructions, or controlling their impulses.
            </p>
            <ul className="list-disc pl-6">
              <li>Inattention (e.g., difficulty focusing on tasks, easily distracted)</li>
              <li>Hyperactivity (e.g., fidgeting, excessive talking)</li>
              <li>Impulsivity (e.g., interrupting others, making hasty decisions)</li>
            </ul>
            <p className="mt-2"><strong>Therapy Options:</strong></p>
            <ul className="list-disc pl-6">
              <li>Behavior Therapy</li>
              <li>Parent Training</li>
              <li>Cognitive-Behavioral Therapy (CBT)</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">2. Autism Spectrum Disorder (ASD)</h3>
            <p>
              ASD is a developmental disorder that affects communication, behavior, and social interaction.
            </p>
            <ul className="list-disc pl-6">
              <li>Difficulty with verbal and non-verbal communication</li>
              <li>Limited ability to form relationships</li>
              <li>Repetitive behaviors or rigid routines</li>
              <li>Sensory sensitivities</li>
            </ul>
            <p className="mt-2"><strong>Therapy Options:</strong></p>
            <ul className="list-disc pl-6">
              <li>Applied Behavior Analysis (ABA)</li>
              <li>Speech Therapy</li>
              <li>Occupational Therapy</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">3. Conduct Disorder</h3>
            <p>
              Conduct Disorder involves patterns of aggressive, defiant, and antisocial behavior.
            </p>
            <ul className="list-disc pl-6">
              <li>Aggression toward people or animals</li>
              <li>Destruction of property</li>
              <li>Deceitfulness or theft</li>
              <li>Serious violations of rules</li>
            </ul>
            <p className="mt-2"><strong>Therapy Options:</strong></p>
            <ul className="list-disc pl-6">
              <li>Cognitive-Behavioral Therapy (CBT)</li>
              <li>Parent-Child Interaction Therapy (PCIT)</li>
              <li>Multisystemic Therapy (MST)</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">4. Learning Disabilities</h3>
            <p>
              Learning disabilities affect how children process and respond to information.
            </p>
            <ul className="list-disc pl-6">
              <li>Difficulty with reading, writing, or math</li>
              <li>Struggling to follow instructions</li>
              <li>Memory or concentration problems</li>
            </ul>
            <p className="mt-2"><strong>Therapy Options:</strong></p>
            <ul className="list-disc pl-6">
              <li>Specialized Educational Support</li>
              <li>Cognitive Therapy</li>
              <li>Speech and Language Therapy</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">5. Anxiety and Depression in Children</h3>
            <p>
              Children can experience anxiety and depression, just like adults.
            </p>
            <ul className="list-disc pl-6">
              <li>Excessive worry or fear</li>
              <li>Loss of interest in activities</li>
              <li>Irritability or mood swings</li>
              <li>Difficulty concentrating</li>
            </ul>
            <p className="mt-2"><strong>Therapy Options:</strong></p>
            <ul className="list-disc pl-6">
              <li>Cognitive-Behavioral Therapy (CBT)</li>
              <li>Mindfulness Techniques</li>
              <li>Family Therapy</li>
            </ul>

            <h2 className="font-semibold text-xl mt-6">Therapy and Treatment Approaches for Children</h2>
            <ul className="list-disc pl-6">
              <li>Individual Therapy</li>
              <li>Family Therapy</li>
              <li>School-based Interventions</li>
              <li>Medication (when necessary)</li>
            </ul>

            <h2 className="font-semibold text-xl mt-6">Why Early Intervention Matters</h2>
            <p>
              Addressing mental health challenges early can dramatically improve a child’s future. Early intervention can reduce symptom severity, support healthy development, and empower families to create a stable, nurturing environment.
            </p>
          </div>

          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Mental Health Issues and Children</h2>
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

export default MentalHealthIssuesandChildren;
