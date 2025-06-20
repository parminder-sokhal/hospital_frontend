import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/behaviourissue.jpeg", // Replace with your actual image path if different
  sidebarLinks: [
    { title: "ADHD", link: "/ADHD" },
    { title: "Autism", link: "/autism" },
    { title: "Incontinence", link: "/incontinence" },
    { title: "Behaviour Issues", link: "/behaviour-issues" },
    { title: "Conduct Disorder", link: "/conduct-disorder" },
    { title: "Learning Disability", link: "/learning-disability" },
  ],
};

const BehavioralIssues = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Behavioral Issues Therapy: Understanding and Managing Behavioral Challenges
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">
              What are Behavioral Issues?
            </h2>
            <p>
              Behavioral issues refer to a wide range of disruptive, challenging, or difficult behaviors that can impact a person’s ability to function effectively in daily life. These behaviors often disrupt relationships, education, work, and social situations, leading to frustration and emotional distress for both the individual and those around them.
            </p>
            <p>
              Behavioral issues can occur in children, adolescents, and adults, and can manifest in various ways, including aggression, defiance, impulsivity, hyperactivity, emotional outbursts, social difficulties, and non-compliance. In many cases, behavioral issues are symptoms of underlying conditions such as anxiety, depression, ADHD, autism, learning disabilities, or conduct disorders.
            </p>
            <p>
              At [Your Clinic/Practice Name], we provide specialized behavioral issues therapy that helps individuals and their families understand, address, and manage problematic behaviors in a positive, effective, and healthy manner.
            </p>

            <h2 className="font-semibold text-xl">
              Common Types of Behavioral Issues
            </h2>
            <ul className="list-disc pl-6">
              <li><strong>Aggressive Behavior:</strong> Can include hitting, kicking, shouting, or verbal insults, often arising from frustration, anger, or an inability to communicate effectively.</li>
              <li><strong>Defiant Behavior:</strong> Characterized by purposeful resistance to authority or rules, often seen in children or in individuals with conduct disorders or ADHD.</li>
              <li><strong>Impulsivity and Hyperactivity:</strong> Leads to hasty decisions, poor judgment, and risky behaviors, often linked to ADHD or similar conditions.</li>
              <li><strong>Emotional Outbursts and Meltdowns:</strong> Intense reactions to frustration or anxiety, including crying, yelling, or even self-harm, common in individuals with autism or ADHD.</li>
              <li><strong>Social Difficulties:</strong> Trouble forming and maintaining relationships, reading social cues, or withdrawing from social situations, often seen in autism spectrum disorder or social anxiety.</li>
              <li><strong>Non-Compliance:</strong> Refusal to follow rules, instructions, or requests, which may indicate underlying emotional or behavioral difficulties.</li>
              <li><strong>Self-Injurious Behavior:</strong> Intentional self-harm, such as head-banging or cutting, often a coping mechanism for overwhelming emotions.</li>
            </ul>

            <h2 className="font-semibold text-xl">
              What Causes Behavioral Issues?
            </h2>
            <ul className="list-disc pl-6">
              <li><strong>Developmental Disorders:</strong> Conditions like ADHD, autism, or learning disabilities that affect emotional regulation and behavior.</li>
              <li><strong>Mental Health Conditions:</strong> Issues such as anxiety, depression, bipolar disorder, or conduct disorders can manifest as behavioral problems.</li>
              <li><strong>Trauma or Abuse:</strong> Emotional, physical, or sexual trauma may lead to behavioral issues as a way of coping with fear, anger, or insecurity.</li>
              <li><strong>Environmental Stressors:</strong> Factors such as family conflict, bullying, or academic pressures that can exacerbate behavioral issues.</li>
              <li><strong>Lack of Social Skills or Coping Mechanisms:</strong> Individuals who haven’t learned effective communication or coping strategies may express emotions destructively.</li>
              <li><strong>Genetic Factors:</strong> Some behavioral issues may run in families, such as ADHD or certain mood disorders.</li>
            </ul>

            <h2 className="font-semibold text-xl">
              How Can Behavioral Issues Therapy Help?
            </h2>
            <p>
              At [Your Clinic/Practice Name], our behavioral issues therapy aims to address the root causes of problematic behaviors and help individuals develop healthier coping strategies, communication skills, and emotional regulation techniques. We take a comprehensive, individualized approach to therapy, which may include:
            </p>

            <h3 className="font-semibold text-lg">Our therapy may include:</h3>
            <ul className="list-disc pl-6">
              <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Helps individuals understand the connection between thoughts, feelings, and actions, teaching healthier ways to manage emotions and behaviors.</li>
              <li><strong>Applied Behavior Analysis (ABA):</strong> Particularly effective for individuals with autism, this therapy reinforces positive behaviors and reduces undesired ones through consistent rewards.</li>
              <li><strong>Parent Training and Support:</strong> Provides parents with strategies to manage behaviors at home, improving communication and reinforcing positive behaviors.</li>
              <li><strong>Social Skills Training:</strong> Helps individuals develop the ability to interact positively with peers, improve communication, and build friendships.</li>
              <li><strong>Emotional Regulation and Coping Skills:</strong> Teaches individuals to recognize emotional triggers and use techniques like deep breathing and mindfulness to regulate their emotions.</li>
              <li><strong>Behavioral Modification:</strong> Uses rewards and consequences to encourage desired behaviors and reduce inappropriate ones.</li>
              <li><strong>Family Therapy and Support:</strong> Helps family members understand and manage the impact of behavioral issues, improving communication and providing support.</li>
            </ul>

            <h2 className="font-semibold text-xl">
              Benefits of Behavioral Issues Therapy
            </h2>
            <ul className="list-disc pl-6">
              <li><strong>Improved Emotional Regulation:</strong> Helps individuals manage their emotions, reducing impulsive or aggressive behaviors.</li>
              <li><strong>Better Social Skills:</strong> Teaches individuals how to build positive relationships and communicate effectively.</li>
              <li><strong>Increased Self-Esteem:</strong> As individuals gain control over their behavior and develop new skills, their confidence and self-worth improve.</li>
              <li><strong>Stronger Family Relationships:</strong> Therapy helps improve communication and understanding, leading to healthier family dynamics.</li>
              <li><strong>Enhanced Quality of Life:</strong> Reduces disruptive behaviors, improving functioning in school, work, and social settings, leading to a more fulfilling life.</li>
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

export default BehavioralIssues;
