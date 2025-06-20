import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/prematureejaculation.jpeg", // Replace with your actual image path if different
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

const PrematureEjaculation = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Sexual Wellness Program for Premature Ejaculation
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">What is Premature Ejaculation (PE)?</h2>
            <p>
              Premature Ejaculation (PE) is one of the most common sexual concerns for men. It is defined as ejaculation that occurs sooner than desired during sexual activity, often before or shortly after penetration...
            </p>
            <p>
              At [Your Clinic/Practice Name], we offer a Sexual Wellness Program for Premature Ejaculation tailored to help individuals overcome this challenge...
            </p>

            <h2 className="font-semibold text-xl">Why Choose Our Sexual Wellness Program for Premature Ejaculation?</h2>
            <p>
              Premature ejaculation can impact more than just sexual satisfaction—it can affect self-esteem, relationship dynamics, and overall quality of life...
            </p>
            <ul className="list-disc pl-6">
              <li>Understanding the causes of premature ejaculation</li>
              <li>Reducing anxiety and stress associated with PE</li>
              <li>Improving sexual techniques and communication</li>
              <li>Increasing confidence and self-esteem</li>
            </ul>

            <h2 className="font-semibold text-xl">What Causes Premature Ejaculation?</h2>
            <ul className="list-disc pl-6">
              <li><strong>Psychological Factors:</strong> Anxiety, performance pressure, depression, etc.</li>
              <li><strong>Biological and Physiological Factors:</strong> Sensitivity, hormonal imbalance, etc.</li>
              <li><strong>Lifestyle Factors:</strong> Substance use, poor health habits, sleep deprivation.</li>
              <li><strong>Relationship Dynamics:</strong> Emotional issues or lack of communication with partner.</li>
            </ul>

            <h2 className="font-semibold text-xl">How Our Sexual Wellness Program Helps Treat Premature Ejaculation</h2>
            <h3 className="font-semibold text-lg">1. Initial Assessment and Goal Setting</h3>
            <p>
              A comprehensive assessment of your sexual health, including symptoms, history, relationship context, and lifestyle habits.
            </p>

            <h3 className="font-semibold text-lg">2. Education and Awareness</h3>
            <p>
              Learn about the physiology of arousal and ejaculation, and the role anxiety and stress play.
            </p>

            <h3 className="font-semibold text-lg">3. Therapeutic Techniques to Control Ejaculation</h3>
            <ul className="list-disc pl-6">
              <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Address performance anxiety and negative thought patterns.</li>
              <li><strong>Sex Therapy:</strong> Improve communication and intimacy; includes sensate focus techniques.</li>
              <li><strong>Mindfulness and Relaxation Techniques:</strong> Manage stress and remain present during intimacy.</li>
              <li><strong>Pelvic Floor Exercises:</strong> Strengthen muscles involved in ejaculatory control.</li>
              <li><strong>Start-Stop and Squeeze Techniques:</strong> Learn behavioral tools to delay ejaculation.</li>
            </ul>

            <h3 className="font-semibold text-lg">4. Building Emotional Intimacy and Communication</h3>
            <p>
              Strengthen your emotional bond and reduce performance pressure through open dialogue and connection with your partner.
            </p>

            <h3 className="font-semibold text-lg">5. Ongoing Support and Follow-Up</h3>
            <p>
              Continued evaluation and adjustments to your treatment plan ensure sustained progress and support.
            </p>

            <h2 className="font-semibold text-xl">What Are the Benefits of the Sexual Wellness Program for Premature Ejaculation?</h2>
            <ul className="list-disc pl-6">
              <li>Improved ejaculatory control</li>
              <li>Reduced performance anxiety</li>
              <li>Enhanced relationship satisfaction</li>
              <li>Increased self-esteem</li>
              <li>Better overall sexual satisfaction</li>
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

export default PrematureEjaculation;
