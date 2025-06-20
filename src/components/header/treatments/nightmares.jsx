import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const data = {
  bgImage: "/pictures/nightmares.jpeg", // Update this path to your actual image file
  sidebarLinks: [
    { title: "Insomnia", link: "/Insomnia" },
    { title: "Disturbed Sleep", link: "/Disturbed-Sleep" },
    { title: "Non Refreshing Sleep", link: "/Non-Refreshing-Sleep" },
    { title: "Sleep Talking", link: "/Sleep-Talking" },
    { title: "Sleep Walking", link: "/Sleep-Walking" },
    { title: "Nightmares", link: "/Nightmares" },
  ],
};

const Nightmares = () => {
  return (
    <div className="w-full bg-white font-sans min-h-screen">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Nightmare Clinic: Understanding and Managing Nightmares
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-xl font-semibold">What Are Nightmares?</h2>
            <p>
              Nightmares are disturbing dreams that evoke fear, anxiety, or sadness, often waking the dreamer from sleep. These vivid dreams can involve themes of danger, death, or persecution, and can disrupt your overall well-being.
            </p>

            <h2 className="text-xl font-semibold">Common Signs and Symptoms</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Vivid, disturbing dreams that are emotional and highly detailed</li>
              <li>Frequent waking from sleep with feelings of fear or anxiety</li>
              <li>Difficulty returning to sleep after a nightmare</li>
              <li>Physical symptoms such as rapid heart rate and sweating</li>
              <li>Fatigue and irritability from disturbed sleep</li>
            </ul>

            <h2 className="text-xl font-semibold">Causes of Nightmares</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Stress and Anxiety:</strong> Heightened emotional tension can trigger nightmares.</li>
              <li><strong>Trauma and PTSD:</strong> Past trauma can lead to vivid, distressing dreams.</li>
              <li><strong>Sleep Disorders:</strong> Sleep apnea, insomnia, and night terrors can contribute.</li>
              <li><strong>Medications and Substances:</strong> Certain drugs can interfere with sleep patterns and lead to nightmares.</li>
              <li><strong>Psychological Issues:</strong> Conditions like depression and bipolar disorder may cause nightmares.</li>
              <li><strong>Irregular Sleep Patterns:</strong> Poor sleep hygiene and sleep deprivation are common triggers.</li>
              <li><strong>Eating Before Bed:</strong> Heavy or spicy foods close to bedtime may disrupt sleep.</li>
              <li><strong>Genetics:</strong> A family history of nightmares may increase your risk.</li>
            </ul>

            <h2 className="text-xl font-semibold">When to Seek Help</h2>
            <p>
              Seek help if nightmares are frequent, persistent, or lead to distress such as difficulty sleeping, feelings of fear or anxiety after waking, or daytime impairment like fatigue and irritability.
            </p>

            <h2 className="text-xl font-semibold">Diagnosis of Nightmares</h2>
            <ul className="list-disc pl-6">
              <li><strong>Sleep History and Psychological Evaluation:</strong> We assess your sleep patterns and emotional health.</li>
              <li><strong>Assessment of Underlying Conditions:</strong> We evaluate for sleep disorders or mental health conditions.</li>
              <li><strong>Polysomnography (Sleep Study):</strong> An overnight study to monitor sleep stages and disruptions.</li>
            </ul>

            <h2 className="text-xl font-semibold">Treatment for Nightmares</h2>

            <h3 className="text-lg font-semibold">1. Cognitive Behavioral Therapy for Nightmares (CBT-N)</h3>
            <ul className="list-disc pl-6">
              <li><strong>Imagery Rehearsal Therapy (IRT):</strong> Rewrite the script of your nightmare while awake to create a more positive ending.</li>
              <li><strong>Exposure Therapy:</strong> Gradually face the feared content in a controlled, therapeutic environment.</li>
            </ul>

            <h3 className="text-lg font-semibold">2. Relaxation Techniques</h3>
            <p>Relaxation techniques like deep breathing, progressive muscle relaxation, and mindfulness can help reduce anxiety and stress, improving sleep quality.</p>

            <h3 className="text-lg font-semibold">3. Sleep Hygiene Improvements</h3>
            <ul className="list-disc pl-6">
              <li>Establish a consistent bedtime routine</li>
              <li>Avoid caffeine, alcohol, or heavy meals before bed</li>
              <li>Create a relaxing sleep environment</li>
              <li>Go to bed and wake up at the same time each day</li>
            </ul>

            <h3 className="text-lg font-semibold">4. Medication</h3>
            <ul className="list-disc pl-6">
              <li>Antidepressants or anti-anxiety medications for emotional distress</li>
              <li><strong>Prazosin:</strong> Medication for PTSD-related nightmares</li>
              <li>Sleep aids for individuals with sleep disorders</li>
            </ul>

            <h3 className="text-lg font-semibold">5. Trauma-Focused Therapy</h3>
            <p>If nightmares are linked to trauma, therapies like EMDR (Eye Movement Desensitization and Reprocessing) can help process memories and reduce their impact on your dreams.</p>

            <h3 className="text-lg font-semibold">6. Stress Management Techniques</h3>
            <p>Reducing daily stress through lifestyle changes or therapy is crucial in managing nightmares. Techniques include cognitive restructuring and mindfulness.</p>

            <h2 className="text-xl font-semibold">Why Choose Our Nightmare Clinic?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Comprehensive Evaluation:</strong> A thorough assessment to identify the cause of your nightmares.</li>
              <li><strong>Personalized Treatment Plans:</strong> Tailored approaches based on your individual needs and symptoms.</li>
              <li><strong>Expert Care:</strong> Our team includes experienced sleep specialists and mental health professionals.</li>
              <li><strong>Holistic Approach:</strong> We address both physical and emotional aspects of nightmares to provide well-rounded care.</li>
            </ul>
          </div>

          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Sleep Clinic 
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

export default Nightmares;
