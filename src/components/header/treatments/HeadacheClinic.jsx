import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const data = {
  bgImage: "/pictures/headAche.jpeg", // Update this path to your actual image file
  sidebarLinks: [
    { title: "Migraine", link: "/Migraine" },
    { title: "Tension Headache", link: "/Tension-Headache" },
  ],
};

const HeadacheClinic = () => {
  return (
    <div className="w-full bg-white font-sans min-h-screen">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Headache Clinic: Comprehensive Care for Headache and Migraine Management
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-xl font-semibold">What is a Headache?</h2>
            <p>
              A headache is a common condition that causes pain in the head, scalp, or neck. The pain can vary in intensity, frequency, and location. Headaches can significantly impact an individual’s quality of life and are typically classified into primary and secondary types.
            </p>

            <h2 className="text-xl font-semibold">Types of Headaches Treated at Our Clinic</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Tension-Type Headaches:</strong> Constant, dull ache often triggered by stress or poor posture.</li>
              <li><strong>Migraines:</strong> Intense, throbbing pain usually on one side of the head, often accompanied by nausea and light sensitivity.</li>
              <li><strong>Cluster Headaches:</strong> Rare but extremely painful, often occurring around one eye or temple.</li>
              <li><strong>Sinus Headaches:</strong> Pain due to sinus inflammation, often around the forehead, cheeks, and nose.</li>
              <li><strong>Rebound Headaches:</strong> Caused by overuse of pain medications, leading to a cycle of headaches.</li>
              <li><strong>Hemicrania Continua:</strong> Continuous unilateral pain with periods of exacerbation.</li>
              <li><strong>Post-Traumatic Headaches:</strong> Headaches that occur after a head injury or concussion.</li>
              <li><strong>Occipital Neuralgia:</strong> Sharp, stabbing pain caused by irritation of the occipital nerves.</li>
            </ul>

            <h2 className="text-xl font-semibold">Causes and Triggers of Headaches</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Stress and Anxiety:</strong> Emotional stress is one of the most common headache triggers.</li>
              <li><strong>Poor Posture:</strong> Strain on neck and head muscles can lead to headaches.</li>
              <li><strong>Hormonal Changes:</strong> Hormonal fluctuations during menstruation, pregnancy, or menopause.</li>
              <li><strong>Dietary Triggers:</strong> Certain foods like aged cheese, chocolate, caffeine, and alcohol.</li>
              <li><strong>Sleep Disorders:</strong> Poor or irregular sleep patterns can increase headache frequency.</li>
              <li><strong>Environmental Factors:</strong> Bright lights, loud sounds, and changes in weather can trigger headaches.</li>
              <li><strong>Dehydration:</strong> Insufficient hydration can contribute to headaches.</li>
              <li><strong>Medications:</strong> Overuse or withdrawal from pain medications.</li>
            </ul>

            <h2 className="text-xl font-semibold">Diagnosis of Headaches</h2>
            <ul className="list-disc pl-6">
              <li><strong>Medical History and Symptom Review:</strong> A detailed review of headache patterns, triggers, and associated symptoms.</li>
              <li><strong>Physical and Neurological Exam:</strong> Assessment of reflexes, vision, coordination, and cognitive function.</li>
              <li><strong>Imaging Studies (MRI/CT Scan):</strong> Advanced imaging to rule out structural issues like tumors or aneurysms.</li>
              <li><strong>Blood Tests:</strong> Tests to identify infections, inflammation, or metabolic issues.</li>
              <li><strong>Headache Diary:</strong> A log of headache frequency, intensity, and triggers to identify patterns.</li>
            </ul>

            <h2 className="text-xl font-semibold">Treatment Options for Headaches</h2>
            <h3 className="text-lg font-semibold">1. Medications</h3>
            <ul className="list-disc pl-6">
              <li><strong>Pain Relievers:</strong> Over-the-counter medications like ibuprofen or acetaminophen.</li>
              <li><strong>Triptans:</strong> Medications like sumatriptan for migraines to stop the headache once it starts.</li>
              <li><strong>Preventive Medications:</strong> Medications to reduce the frequency of headaches.</li>
              <li><strong>Muscle Relaxants:</strong> For tension headaches, muscle relaxants may be prescribed.</li>
            </ul>

            <h3 className="text-lg font-semibold">2. Lifestyle Modifications</h3>
            <ul className="list-disc pl-6">
              <li><strong>Stress Management:</strong> Relaxation techniques like meditation, yoga, or deep breathing.</li>
              <li><strong>Sleep Hygiene:</strong> Ensuring regular, quality sleep to reduce headaches.</li>
              <li><strong>Hydration and Diet:</strong> Maintaining proper hydration and avoiding food triggers.</li>
              <li><strong>Exercise:</strong> Regular physical activity to reduce stress and improve well-being.</li>
            </ul>

            <h3 className="text-lg font-semibold">3. Physical Therapy</h3>
            <p>If muscle tension or poor posture is contributing to your headaches, physical therapy can help.</p>

            <h3 className="text-lg font-semibold">4. Botox Injections</h3>
            <p>Botox injections can help reduce the frequency and severity of chronic migraines.</p>

            <h3 className="text-lg font-semibold">5. Biofeedback and Behavioral Therapy</h3>
            <p>Biofeedback and Cognitive Behavioral Therapy (CBT) help manage triggers like stress and anxiety.</p>

            <h3 className="text-lg font-semibold">6. Nerve Blocks and Injections</h3>
            <p>Nerve blocks, such as occipital nerve blocks, can be used for headaches resistant to other treatments.</p>

            <h2 className="text-xl font-semibold">Why Choose Our Headache Clinic?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Expert Care:</strong> Our specialists are trained in diagnosing and treating all types of headaches.</li>
              <li><strong>Comprehensive Care:</strong> We offer personalized treatment plans tailored to your specific needs.</li>
              <li><strong>Advanced Diagnostic Tools:</strong> Our clinic uses cutting-edge diagnostic equipment for accurate evaluation.</li>
              <li><strong>Holistic Approach:</strong> We combine medications, lifestyle modifications, and other therapies for effective treatment.</li>
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

export default HeadacheClinic;
