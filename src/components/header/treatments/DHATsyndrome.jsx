import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/DHATsyndrome.jpeg", // Replace with your actual image path if different
  sidebarLinks: [
    {
      title: "Premature Ejaculation",
      link: "/Premature-Ejaculation",
    },
    { title: "Erectile Dysfunction", link: "/Erectile-Dysfunction" },
    { title: "Reduced Or High Libido", link: "/reduced-high-libido" },
    {
      title: "Anorgasmia",
      link: "/Anorgasmia",
    },
    {
      title: "DHAT Syndrome",
      link: "/DHAT-Syndrome",
    },
  ],
};

const DHATSyndrome = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Sexual Wellness Program for Anorgasmia and DHAT Syndrome
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">What is Anorgasmia?</h2>
            <p>
              Anorgasmia is the persistent difficulty or inability to achieve orgasm despite adequate sexual stimulation and desire...
            </p>

            <h2 className="font-semibold text-xl">What is DHAT Syndrome?</h2>
            <p>
              DHAT Syndrome is a culture-bound condition seen predominantly in South Asia, where individuals experience anxiety, fatigue, and distress due to perceived semen loss...
            </p>

            <h2 className="font-semibold text-xl">Why Choose Our Sexual Wellness Program for Anorgasmia and DHAT Syndrome?</h2>
            <ul className="list-disc pl-6">
              <li>Identify and address root causes—physical, psychological, and relational</li>
              <li>Reduce anxiety, guilt, and performance pressure</li>
              <li>Improve sexual communication and intimacy with your partner</li>
              <li>Restore confidence, satisfaction, and emotional well-being</li>
            </ul>

            <h2 className="font-semibold text-xl">What Causes Anorgasmia?</h2>
            <h3 className="font-semibold">Physical Causes:</h3>
            <ul className="list-disc pl-6">
              <li>Hormonal imbalances</li>
              <li>Chronic medical conditions (e.g., diabetes, MS)</li>
              <li>Medication side effects</li>
              <li>Nerve damage</li>
              <li>Pelvic floor dysfunction</li>
            </ul>

            <h3 className="font-semibold">Psychological Causes:</h3>
            <ul className="list-disc pl-6">
              <li>Sexual trauma or abuse</li>
              <li>Depression and anxiety</li>
              <li>Performance anxiety</li>
              <li>Relationship issues</li>
            </ul>

            <h2 className="font-semibold text-xl">What Causes DHAT Syndrome?</h2>
            <ul className="list-disc pl-6">
              <li>Cultural beliefs about semen loss</li>
              <li>Guilt and anxiety from masturbation or nocturnal emissions</li>
              <li>Psychological trauma and stress</li>
            </ul>

            <h2 className="font-semibold text-xl">How Our Program Helps</h2>

            <h3 className="font-semibold text-lg">1. Initial Assessment and Goal Setting</h3>
            <p>
              We start with a detailed evaluation of your symptoms, health, beliefs, and relationship dynamics to design a tailored treatment plan.
            </p>

            <h3 className="font-semibold text-lg">2. Education and Awareness</h3>
            <p>
              We help you understand your sexual function, debunk myths, and replace unhealthy beliefs with medically accurate knowledge.
            </p>

            <h3 className="font-semibold text-lg">3. Therapies for Anorgasmia</h3>
            <ul className="list-disc pl-6">
              <li><strong>CBT:</strong> Reframe anxious thoughts and boost confidence.</li>
              <li><strong>Mindfulness-Based Therapy:</strong> Stay present during sexual activity to enhance sensation and response.</li>
              <li><strong>Sex Therapy:</strong> Work through emotional and relational blocks with a certified therapist.</li>
              <li><strong>Pelvic Floor Rehab:</strong> Strengthen muscles that support orgasmic function.</li>
            </ul>

            <h3 className="font-semibold text-lg">4. Therapies for DHAT Syndrome</h3>
            <ul className="list-disc pl-6">
              <li><strong>CBT:</strong> Challenge myths and replace fears with factual understanding.</li>
              <li><strong>Stress Management:</strong> Use relaxation tools to ease emotional distress.</li>
              <li><strong>Psychodynamic Therapy:</strong> Explore deep-rooted cultural and personal beliefs.</li>
              <li><strong>Culturally Sensitive Counseling:</strong> Respect cultural views while guiding healthier practices.</li>
            </ul>

            <h3 className="font-semibold text-lg">5. Couples Counseling</h3>
            <p>
              If relationship factors play a role, we offer counseling to build trust, improve communication, and enhance intimacy.
            </p>

            <h3 className="font-semibold text-lg">6. Ongoing Support and Monitoring</h3>
            <p>
              We provide ongoing sessions and check-ins to track progress, adjust plans, and ensure long-term success.
            </p>

            <h2 className="font-semibold text-xl">Benefits of the Program</h2>
            <ul className="list-disc pl-6">
              <li>Achieve orgasm and improve sexual satisfaction</li>
              <li>Reduce anxiety and guilt surrounding sex and semen loss</li>
              <li>Increase emotional intimacy and partner connection</li>
              <li>Boost confidence and emotional resilience</li>
              <li>Understand and respect your body and culture in a healthy way</li>
            </ul>
          </div>

          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Sexual Wellness Program
            </h2>
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

export default DHATSyndrome;
