import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/autism.jpeg", // Replace with your actual image path if different
  sidebarLinks: [
    { title: "ADHD", link: "/ADHD" },
    { title: "Autism", link: "/autism" },
    { title: "Incontinence", link: "/incontinence" },
    { title: "Behaviour Issues", link: "/behaviour-issues" },
    { title: "Conduct Disorder", link: "/conduct-disorder" },
    { title: "Learning Disability", link: "/learning-disability" },
  ],
};

const Autism = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Autism Therapy: Supporting Individuals on the Autism Spectrum
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">What is Autism?</h2>
            <p>
              Autism Spectrum Disorder (ASD) is a developmental disorder that affects how individuals perceive and interact with the world around them. The spectrum of autism is broad, meaning that symptoms and their severity can vary greatly from person to person. With appropriate therapy and support, individuals can make significant strides in improving their quality of life, communication skills, and ability to function independently.
            </p>

            <h2 className="font-semibold text-xl">Common Symptoms and Signs of Autism</h2>
            <h3 className="font-semibold text-lg">1. Social Communication and Interaction Challenges:</h3>
            <ul className="list-disc pl-6">
              <li>Difficulty with verbal and nonverbal communication</li>
              <li>Challenges with social interactions and forming relationships</li>
              <li>Limited interest in sharing experiences with others</li>
              <li>Difficulty maintaining eye contact or using facial expressions</li>
              <li>Challenges in understanding and expressing emotions</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">2. Restricted and Repetitive Behaviors:</h3>
            <ul className="list-disc pl-6">
              <li>Repetitive movements or speech</li>
              <li>Intense focus on specific interests</li>
              <li>Strict adherence to routines</li>
              <li>Sensory sensitivities to stimuli such as light, sound, touch, and smell</li>
            </ul>

            <h2 className="font-semibold text-xl">What Causes Autism?</h2>
            <ul className="list-disc pl-6">
              <li><strong>Genetic Factors:</strong> Autism tends to run in families.</li>
              <li><strong>Brain Development:</strong> Differences in brain structure and connectivity affect social communication and sensory processing.</li>
              <li><strong>Prenatal and Birth Factors:</strong> Advanced parental age, prenatal exposure to certain medications, or complications during birth may increase the likelihood of autism.</li>
              <li><strong>Vaccines:</strong> There is no evidence that vaccines cause autism. This myth has been debunked by scientific research.</li>
            </ul>

            <h2 className="font-semibold text-xl">How Autism Therapy Can Help</h2>
            <p>
              Our Autism Therapy program is designed to address each individual’s unique needs. The therapy focuses on improving communication, social skills, adaptive behaviors, emotional regulation, and promoting independence.
            </p>

            <h3 className="font-semibold text-lg">1. Early Intervention and Developmental Therapy</h3>
            <p>
              Early intervention is key to supporting children with autism. Developmental therapy includes:
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Speech and Language Therapy:</strong> Helps improve communication skills, both verbal and non-verbal.</li>
              <li><strong>Occupational Therapy:</strong> Focuses on motor skills, sensory processing, and adaptive life skills.</li>
              <li><strong>Play Therapy:</strong> Encourages socialization and emotional expression through play.</li>
            </ul>

            <h3 className="font-semibold text-lg">2. Behavioral Therapy</h3>
            <p>
              Behavioral therapy focuses on encouraging positive behaviors and reducing harmful or disruptive ones. Our therapies include:
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Applied Behavior Analysis (ABA):</strong> Uses reinforcement to teach new skills and reduce challenging behaviors.</li>
              <li><strong>Discrete Trial Training (DTT):</strong> Breaks tasks into small steps to teach communication and social skills.</li>
              <li><strong>Pivotal Response Treatment (PRT):</strong> Focuses on improving social communication and motivation.</li>
            </ul>

            <h3 className="font-semibold text-lg">3. Social Skills Training</h3>
            <p>
              Social skills training helps individuals with autism develop better communication and peer relationships. It includes:
            </p>
            <ul className="list-disc pl-6">
              <li>Role-playing to practice social scenarios</li>
              <li>Group therapy to improve social interactions</li>
              <li>Nonverbal communication training to understand body language and facial expressions</li>
            </ul>

            <h3 className="font-semibold text-lg">4. Cognitive Behavioral Therapy (CBT)</h3>
            <p>
              CBT helps individuals with autism address anxiety, stress, and emotional regulation, particularly for those with high-functioning autism. It helps with:
            </p>
            <ul className="list-disc pl-6">
              <li>Anxiety and stress management</li>
              <li>Emotional regulation and resilience</li>
            </ul>

            <h3 className="font-semibold text-lg">5. Family Support and Training</h3>
            <p>
              We believe family support is crucial. Our programs include:
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Parent Training:</strong> Parents are taught how to implement therapeutic techniques at home and support their child’s development.</li>
              <li><strong>Family Counseling:</strong> Helps families manage emotional challenges and create a supportive home environment.</li>
            </ul>

            <h2 className="font-semibold text-xl">Benefits of Autism Therapy</h2>
            <ul className="list-disc pl-6">
              <li>Improved communication skills</li>
              <li>Better social interactions and relationships</li>
              <li>Increased independence in self-care and daily living tasks</li>
              <li>Reduction in problematic behaviors like aggression or self-injury</li>
              <li>Enhanced overall quality of life</li>
            </ul>

            <h2 className="font-semibold text-xl">Why Choose Our Autism Therapy Program?</h2>
            <p>
              At [Your Clinic/Practice Name], we provide a comprehensive, individualized approach to autism therapy, ensuring each person’s unique needs are addressed.
            </p>
            <ul className="list-disc pl-6">
              <li>Experienced, compassionate therapists who specialize in autism</li>
              <li>Evidence-based therapies like ABA, CBT, and speech therapy</li>
              <li>Holistic care focusing on communication, behavior, emotional well-being, and family support</li>
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

export default Autism;
