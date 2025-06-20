import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const data = {
  bgImage: "/pictures/tensionHeadache.jpeg", // Update this path to your actual image file
  sidebarLinks: [
    { title: "Migraine", link: "/Migraine" },
    { title: "Tension Headache", link: "/Tension-Headache" },
  ],
};

const TensionHeadache = () => {
  return (
    <div className="w-full bg-white font-sans min-h-screen">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Tension Headache Clinic: Expert Care for Tension Headache Relief
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-xl font-semibold">What is a Tension Headache?</h2>
            <p>
              A tension headache is the most common type of headache and is often described as a dull, constant pain or pressure around the head, especially at the temples, forehead, or back of the head and neck. The pain is typically mild to moderate but can last anywhere from 30 minutes to several days.
            </p>

            <h2 className="text-xl font-semibold">Symptoms of a Tension Headache</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Dull, aching pain around the head, often described as a feeling of a tight band or pressure around the forehead or temples.</li>
              <li>Neck and shoulder tension, which can exacerbate the headache.</li>
              <li>Mild to moderate pain: Unlike migraines, the pain from tension headaches tends to be less severe but can still be bothersome.</li>
              <li>Tenderness in the scalp, neck, or shoulder muscles.</li>
              <li>No nausea or vomiting: Unlike migraines, tension headaches typically don’t cause nausea or vomiting.</li>
              <li>No sensitivity to light or sound: This distinguishes tension headaches from migraines, which often include photophobia and phonophobia.</li>
            </ul>

            <h2 className="text-xl font-semibold">Causes and Triggers of Tension Headaches</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Stress and Anxiety:</strong> Emotional stress and anxiety are common triggers of tension headaches.</li>
              <li><strong>Poor Posture:</strong> Prolonged poor posture, especially while sitting at a desk, looking at a computer, or using a phone, can strain the muscles in the neck and shoulders.</li>
              <li><strong>Muscle Tension:</strong> Physical strain, whether due to overexertion, lack of physical activity, or muscle stiffness, can contribute to tension headaches.</li>
              <li><strong>Lack of Sleep:</strong> Poor sleep or insufficient rest can exacerbate headache pain and trigger tension headaches.</li>
              <li><strong>Dehydration:</strong> Inadequate fluid intake can lead to dehydration, which is known to trigger headaches.</li>
              <li><strong>Caffeine Withdrawal:</strong> Regular consumption of caffeine followed by sudden cessation or reduced intake can trigger tension headaches.</li>
            </ul>

            <h2 className="text-xl font-semibold">Treatment for Tension Headaches</h2>
            <h3 className="text-lg font-semibold">Acute Treatment</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Over-the-counter pain relievers:</strong> Medications like ibuprofen, aspirin, and acetaminophen.</li>
              <li><strong>Muscle relaxants:</strong> These can help ease the muscle tension that contributes to tension headaches.</li>
              <li><strong>Topical treatments:</strong> Menthol-based creams or patches.</li>
            </ul>

            <h3 className="text-lg font-semibold">Preventive Treatments</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Antidepressants:</strong> Tricyclic antidepressants like amitriptyline.</li>
              <li><strong>Anticonvulsants:</strong> Medications like topiramate.</li>
              <li><strong>Pain relievers:</strong> Low-dose NSAIDs for regular use.</li>
            </ul>

            <h3 className="text-lg font-semibold">Physical Therapy</h3>
            <p>Physical therapy can help address poor posture, neck stiffness, and muscle tension, which are common causes of tension headaches.</p>

            <h3 className="text-lg font-semibold">Stress Management Techniques</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Progressive muscle relaxation</strong></li>
              <li><strong>Biofeedback</strong></li>
              <li><strong>Cognitive Behavioral Therapy (CBT)</strong></li>
            </ul>

            <h2 className="text-xl font-semibold">Why Choose Our Tension Headache Clinic?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Expert Diagnosis:</strong> Our specialists are trained in diagnosing and treating complex headache cases.</li>
              <li><strong>Personalized Treatment Plans:</strong> We create a treatment strategy tailored to your specific symptoms and triggers.</li>
              <li><strong>Comprehensive Care:</strong> We offer a variety of treatments, including both medical and lifestyle-based approaches.</li>
            </ul>
          </div>

          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Headache Clinic
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

export default TensionHeadache;
