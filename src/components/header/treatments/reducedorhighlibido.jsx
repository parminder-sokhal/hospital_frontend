import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/ReducedorHighLibido.jpeg", // Use the same background or update if needed
  sidebarLinks: [
    { title: "Premature Ejaculation", link: "/Premature-Ejaculation" },
    { title: "Erectile Dysfunction", link: "/Erectile-Dysfunction" },
    { title: "Reduced Or High Libido", link: "/reduced-high-libido" },
    { title: "Anorgasmia", link: "/Anorgasmia" },
    { title: "DHAT Syndrome", link: "/DHAT-Syndrome" },
  ],
};

const ReducedOrHighLibido = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Understanding Reduced or High Libido
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">Symptoms of Reduced Libido</h2>
            <ul className="list-disc pl-6">
              <li>Decreased interest in sexual activities.</li>
              <li>Difficulty becoming aroused.</li>
              <li>Avoidance of intimate situations.</li>
              <li>Feelings of guilt or frustration related to sexual desire.</li>
            </ul>

            <h2 className="font-semibold text-xl">Understanding High Libido</h2>
            <h3 className="font-semibold text-lg">Common Causes of High Libido</h3>
            <ul className="list-disc pl-6">
              <li>Hormonal Imbalances: Elevated levels of testosterone can lead to increased sexual desire.</li>
              <li>Psychological Factors: Certain mental health conditions, such as hypersexuality, can cause heightened sexual urges.</li>
              <li>Substance Use: Certain drugs or alcohol can temporarily increase libido.</li>
              <li>Life Changes: Events such as a new relationship or improved self-esteem can also lead to increased sexual desire.</li>
            </ul>

            <h3 className="font-semibold text-lg">Symptoms of High Libido</h3>
            <ul className="list-disc pl-6">
              <li>Persistent and intense sexual urges.</li>
              <li>Engaging in sexual activities frequently or compulsively.</li>
              <li>Difficulty controlling sexual impulses.</li>
              <li>Impact on daily life or relationships due to sexual behavior.</li>
            </ul>

            <h2 className="font-semibold text-xl">Treatment Options</h2>
            <h3 className="font-semibold text-lg">For Reduced Libido</h3>
            <ul className="list-disc pl-6">
              <li>Medical Evaluation: Identify underlying medical conditions or hormonal imbalances.</li>
              <li>Therapy: Counseling or sex therapy to address psychological factors.</li>
              <li>Lifestyle Changes: Exercise, balanced diet, and stress management.</li>
              <li>Medication: May be prescribed for hormonal or psychological issues.</li>
            </ul>

            <h3 className="font-semibold text-lg">For High Libido</h3>
            <ul className="list-disc pl-6">
              <li>Therapeutic Support: Manage compulsive behaviors and psychological issues.</li>
              <li>Behavioral Strategies: Coping mechanisms for managing urges.</li>
              <li>Medical Consultation: Evaluate hormonal levels and medication adjustments.</li>
            </ul>

            <h2 className="font-semibold text-xl">Why Choose Our Services?</h2>
            <ul className="list-disc pl-6">
              <li>Experienced Professionals: Licensed therapists, sexologists, and medical experts.</li>
              <li>Holistic Approach: Address both psychological and physiological factors.</li>
              <li>Confidential Environment: Safe and private space to discuss sensitive topics.</li>
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

export default ReducedOrHighLibido;
