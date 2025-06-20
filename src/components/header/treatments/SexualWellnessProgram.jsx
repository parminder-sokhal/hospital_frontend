import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/sexualProgram.jpeg", // Replace with your actual image path if different
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

const SexualWellnessProgram = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Sexual Wellness Program: Empowering You for a Healthy, Fulfilling Sex
          Life
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">
              What is a Sexual Wellness Program?
            </h2>
            <p>
              A Sexual Wellness Program is a comprehensive therapeutic approach
              designed to support individuals and couples in enhancing their
              sexual health, well-being, and satisfaction...
            </p>
            <p>
              At [Your Clinic/Practice Name], we understand that sexual wellness
              is an essential part of overall health...
            </p>

            <h2 className="font-semibold text-xl">
              Why Choose a Sexual Wellness Program?
            </h2>
            <p>
              Sexual wellness is often overlooked when it comes to overall
              health and well-being...
            </p>
            <ul className="list-disc pl-6">
              <li>Address and overcome sexual dysfunctions</li>
              <li>Improve intimacy and communication in relationships</li>
              <li>Increase self-esteem and confidence</li>
              <li>Foster a healthy sexual relationship</li>
            </ul>

            <h2 className="font-semibold text-xl">
              Who Can Benefit from a Sexual Wellness Program?
            </h2>
            <ul className="list-disc pl-6">
              <li>Low libido or lack of sexual desire</li>
              <li>Sexual dysfunctions</li>
              <li>Relationship difficulties</li>
              <li>Trauma or past sexual experiences</li>
              <li>Body image or self-esteem issues</li>
              <li>Desire for enhanced sexual pleasure and intimacy</li>
              <li>Navigating life transitions</li>
            </ul>

            <h2 className="font-semibold text-xl">
              What to Expect in the Sexual Wellness Program
            </h2>
            <h3 className="font-semibold text-lg">
              1. Initial Assessment and Goal Setting
            </h3>
            <p>
              The process begins with an initial consultation, where we’ll
              assess your sexual health...
            </p>

            <h3 className="font-semibold text-lg">
              2. Education and Awareness
            </h3>
            <p>Education plays a vital role in sexual wellness...</p>

            <h3 className="font-semibold text-lg">3. Therapeutic Techniques</h3>
            <p>
              Depending on your needs, the program may involve techniques such
              as:
            </p>
            <ul className="list-disc pl-6">
              <li>Cognitive Behavioral Therapy (CBT)</li>
              <li>Mindfulness and Relaxation Techniques</li>
              <li>Sex Therapy</li>
              <li>Behavioral Exercises</li>
            </ul>

            <h3 className="font-semibold text-lg">
              4. Couples Sessions (Optional)
            </h3>
            <p>
              For couples, we offer specialized sessions focused on improving
              communication and deepening intimacy...
            </p>

            <h3 className="font-semibold text-lg">
              5. Ongoing Support and Progress Evaluation
            </h3>
            <p>
              Throughout the program, we will regularly evaluate your progress
              and adjust the approach as needed...
            </p>

            <h2 className="font-semibold text-xl">
              Benefits of the Sexual Wellness Program
            </h2>
            <ul className="list-disc pl-6">
              <li>Enhanced sexual satisfaction</li>
              <li>Improved communication</li>
              <li>Boosted self-confidence</li>
              <li>Healing from trauma</li>
              <li>Stronger relationships</li>
              <li>Reduced anxiety and stress</li>
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

export default SexualWellnessProgram;
