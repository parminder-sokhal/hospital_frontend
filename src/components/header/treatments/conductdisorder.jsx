import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/conductdisorder.jpeg", // Replace with your actual image path if different
  sidebarLinks: [
    { title: "ADHD", link: "/ADHD" },
    { title: "Autism", link: "/autism" },
    { title: "Incontinence", link: "/incontinence" },
    { title: "Behaviour Issues", link: "/behaviour-issues" },
    { title: "Conduct Disorder", link: "/conduct-disorder" },
    { title: "Learning Disability", link: "/learning-disability" },
  ],
};

const ConductDisorder = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Conduct Disorder Therapy: Understanding and Addressing Conduct Problems in Children and Adolescents
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">
              What is Conduct Disorder?
            </h2>
            <p>
              Conduct Disorder (CD) is a serious behavioral and emotional disorder that affects children and adolescents. It is characterized by persistent patterns of antisocial behaviors, aggression, and a disregard for the rights of others and societal rules. Children and teenagers with conduct disorder often exhibit behaviors such as bullying, stealing, lying, physical aggression, and destruction of property, among others.
            </p>
            <p>
              This condition can significantly impact the individual’s relationships, academic performance, and overall functioning. Without early intervention and appropriate treatment, conduct disorder can escalate into more severe behavioral and legal problems in adulthood.
            </p>
            <p>
              At [Your Clinic/Practice Name], we offer specialized conduct disorder therapy to help children and adolescents develop healthier coping mechanisms, improve their social interactions, and reduce disruptive behaviors. Our experienced team works closely with each patient and their family to create a personalized treatment plan that targets the root causes of the behavior.
            </p>

            <h2 className="font-semibold text-xl">
              Signs and Symptoms of Conduct Disorder
            </h2>
            <ul className="list-disc pl-6">
              <li>Aggression to people and animals</li>
              <li>Destruction of property</li>
              <li>Deceitfulness or theft</li>
              <li>Serious violations of rules</li>
              <li>Lack of empathy</li>
              <li>Impulsivity and irresponsibility</li>
            </ul>

            <h2 className="font-semibold text-xl">
              What Causes Conduct Disorder?
            </h2>
            <ul className="list-disc pl-6">
              <li>Genetic factors</li>
              <li>Brain development and neurobiology</li>
              <li>Environmental factors</li>
              <li>Parenting styles</li>
              <li>Peer influence</li>
              <li>Other mental health disorders</li>
            </ul>

            <h2 className="font-semibold text-xl">
              How Can Conduct Disorder Therapy Help?
            </h2>
            <p>
              At [Your Clinic/Practice Name], our conduct disorder therapy program is designed to help children and adolescents address the behaviors that are disrupting their lives. Through a combination of evidence-based therapeutic approaches, our team works with the individual and their family to create a comprehensive treatment plan tailored to their unique needs.
            </p>

            <h3 className="font-semibold text-lg">Our therapy may include:</h3>
            <ul className="list-disc pl-6">
              <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Helps individuals understand the relationship between thoughts, emotions, and behaviors, teaching healthier thinking patterns and behaviors.</li>
              <li><strong>Parent Management Training (PMT):</strong> Equips parents with effective discipline strategies and tools to support positive behavior changes.</li>
              <li><strong>Social Skills Training:</strong> Focuses on teaching how to engage positively with peers, express oneself appropriately, and resolve conflicts without aggression.</li>
              <li><strong>Anger Management and Emotional Regulation:</strong> Focuses on managing anger and emotional dysregulation through coping strategies like deep breathing, mindfulness, and relaxation techniques.</li>
              <li><strong>Family Therapy:</strong> Helps the entire family improve communication and develop strategies for coping with the behaviors associated with conduct disorder.</li>
              <li><strong>Multisystemic Therapy (MST):</strong> A community-based treatment approach that strengthens relationships and addresses environmental factors influencing behavior.</li>
              <li><strong>School-Based Interventions:</strong> Collaborates with schools to create an individualized behavioral plan to support the child’s goals within the school environment.</li>
            </ul>

            <h2 className="font-semibold text-xl">
              Benefits of Conduct Disorder Therapy
            </h2>
            <ul className="list-disc pl-6">
              <li>Improved behavior and relationships with family, peers, and teachers</li>
              <li>Increased self-control and emotional regulation</li>
              <li>Better social skills and relationship-building</li>
              <li>Strengthened family dynamics and healthier home environment</li>
              <li>Reduced risk of future behavioral or legal problems</li>
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

export default ConductDisorder;
