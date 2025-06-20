import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/learningdisability.jpeg", // Replace with your actual image path if different
  sidebarLinks: [
    { title: "ADHD", link: "/ADHD" },
    { title: "Autism", link: "/autism" },
    { title: "Incontinence", link: "/incontinence" },
    { title: "Behaviour Issues", link: "/behaviour-issues" },
    { title: "Conduct Disorder", link: "/conduct-disorder" },
    { title: "Learning Disability", link: "/learning-disability" },
  ],
};

const LearningDisabilitiesTherapy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Learning Disabilities Therapy: Understanding and Supporting Academic Success
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">
              Helping Individuals Overcome Learning Challenges
            </h2>
            <p>
              Learning disabilities are neurodevelopmental disorders that affect an individual’s ability to process and understand information in specific areas, such as reading, writing, math, or problem-solving. At [Your Clinic/Practice Name], we offer specialized therapy to support individuals with learning disabilities, helping them overcome academic challenges and build confidence for success.
            </p>
            <p>
              Our therapy approach is personalized to each individual's needs, focusing on evidence-based interventions and strategies to help them achieve their academic potential.
            </p>

            <h2 className="font-semibold text-xl">What Are Learning Disabilities?</h2>
            <ul className="list-disc pl-6">
              <li>Neurodevelopmental disorders affecting information processing</li>
              <li>Challenges in reading, writing, math, or problem-solving</li>
              <li>Not related to intelligence, but to how the brain processes information</li>
              <li>Academic performance may be inconsistent due to difficulties in specific learning domains</li>
            </ul>

            <h2 className="font-semibold text-xl">Types of Learning Disabilities</h2>
            <ul className="list-disc pl-6">
              <li><strong>Dyslexia:</strong> Affects reading, spelling, and writing, making it difficult to process language sounds.</li>
              <li><strong>Dyscalculia:</strong> Difficulty understanding math concepts, numbers, and problem-solving.</li>
              <li><strong>Dysgraphia:</strong> Impacts writing abilities, including handwriting, spelling, and organizing thoughts on paper.</li>
              <li><strong>Auditory Processing Disorder (APD):</strong> Difficulty processing and interpreting sounds, particularly in noisy environments.</li>
              <li><strong>Visual Processing Disorder:</strong> Difficulty interpreting and processing visual information, affecting reading comprehension and visual patterns.</li>
            </ul>

            <h2 className="font-semibold text-xl">Causes of Learning Disabilities</h2>
            <p>
              Learning disabilities can arise from various factors, including genetic, environmental, and brain-based factors. Common causes include:
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Genetics:</strong> Learning disabilities tend to run in families, suggesting a genetic predisposition.</li>
              <li><strong>Brain Structure and Function:</strong> Differences in how the brain processes information can contribute to learning difficulties.</li>
              <li><strong>Prenatal and Birth Factors:</strong> Exposure to toxins, infections, or birth complications can affect brain development.</li>
              <li><strong>Environmental Factors:</strong> Lack of early childhood stimulation, poor nutrition, or trauma may impact cognitive development.</li>
            </ul>

            <h2 className="font-semibold text-xl">How Can Learning Disabilities Therapy Help?</h2>
            <p>
              At [Your Clinic/Practice Name], our therapy program is designed to provide tailored interventions and support for individuals with learning disabilities. Through evidence-based strategies, we help individuals develop skills to overcome academic challenges and foster emotional well-being.
            </p>

            <h2 className="font-semibold text-xl">Therapy Approaches We Use</h2>
            <ul className="list-disc pl-6">
              <li><strong>Individualized Education Plans (IEPs):</strong> Tailored plans with specific accommodations and support for children in school.</li>
              <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Helps individuals address negative self-perceptions and develop coping strategies.</li>
              <li><strong>Skill-Specific Interventions:</strong> Targeted strategies for improving skills in reading, writing, math, and other areas of need.</li>
              <li><strong>Speech and Language Therapy:</strong> Improves listening, comprehension, and articulation for those with auditory or language-related learning disabilities.</li>
              <li><strong>Academic Coaching and Tutoring:</strong> Personalized academic support to help individuals master their subjects at their own pace.</li>
              <li><strong>Organizational Skills Training:</strong> Develop skills for time management, organization, and planning.</li>
              <li><strong>Assistive Technology:</strong> Tools like text-to-speech software and audiobooks to support learning.</li>
              <li><strong>Parent Support and Training:</strong> Equip parents with the tools to better support their child’s learning needs.</li>
            </ul>

            <h2 className="font-semibold text-xl">Benefits of Learning Disabilities Therapy</h2>
            <ul className="list-disc pl-6">
              <li>Improved academic performance in areas such as reading, writing, math, and problem-solving</li>
              <li>Increased confidence and self-esteem</li>
              <li>Better coping strategies for frustration, anxiety, and stress</li>
              <li>Enhanced life skills such as organization, time management, and communication</li>
              <li>Supportive home and school environment through parental involvement</li>
            </ul>
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

export default LearningDisabilitiesTherapy;
