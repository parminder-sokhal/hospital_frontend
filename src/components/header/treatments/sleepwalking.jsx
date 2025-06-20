import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const data = {
  bgImage: "/pictures/sleepwalking.jpeg", // Update this path to your actual image file
  sidebarLinks: [
    { title: "Insomnia", link: "/Insomnia" },
    { title: "Disturbed Sleep", link: "/Disturbed-Sleep" },
    { title: "Non Refreshing Sleep", link: "/Non-Refreshing-Sleep" },
    { title: "Sleep Talking", link: "/Sleep-Talking" },
    { title: "Sleep Walking", link: "/Sleep-Walking" },
    { title: "Nightmares", link: "/Nightmares" },
  ],
};

const SleepWalking = () => {
  return (
    <div className="w-full bg-white font-sans min-h-screen">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Sleep Walking Clinic: Understanding and Managing Sleep Walking
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-xl font-semibold">What is Sleep Walking?</h2>
            <p>
              Sleepwalking (somnambulism) is a parasomnia in which a person walks or performs activities while still asleep, typically during the deep stages of non-REM sleep. Most people do not remember the event and may be confused if awakened.
            </p>

            <h2 className="text-xl font-semibold">Signs and Symptoms</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Walking or moving about while asleep with eyes open but glazed</li>
              <li>Performing complex tasks like eating, dressing, or even driving</li>
              <li>No memory of the event upon waking</li>
              <li>Confusion or disorientation if awakened</li>
              <li>Potential for dangerous or harmful behavior</li>
            </ul>

            <h2 className="text-xl font-semibold">Causes of Sleep Walking</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Genetics:</strong> Family history increases risk</li>
              <li><strong>Sleep disorders:</strong> Sleep apnea, insomnia, or night terrors</li>
              <li><strong>Stress and anxiety:</strong> Emotional stress can disrupt sleep cycles</li>
              <li><strong>Sleep deprivation:</strong> Poor sleep quality heightens risk</li>
              <li><strong>Fever/Illness:</strong> Especially in children</li>
              <li><strong>Medications:</strong> Sedatives, antidepressants, or sleep aids</li>
              <li><strong>Neurological conditions:</strong> Parkinson’s, epilepsy, dementia</li>
            </ul>

            <h2 className="text-xl font-semibold">Diagnosis</h2>
            <ul className="list-disc pl-6">
              <li><strong>Initial Consultation:</strong> Review of symptoms, triggers, and medical history</li>
              <li><strong>Sleep Diary:</strong> Logging sleepwalking episodes and related activities</li>
              <li><strong>Polysomnography:</strong> In-lab sleep study to observe brain activity and sleep stages</li>
              <li><strong>Actigraphy:</strong> Wrist device that tracks sleep-wake patterns and movements</li>
            </ul>

            <h2 className="text-xl font-semibold">Treatment Options</h2>

            <h3 className="text-lg font-semibold">1. Improving Sleep Hygiene</h3>
            <ul className="list-disc pl-6">
              <li>Establish consistent bedtimes and wake times</li>
              <li>Limit caffeine and alcohol intake</li>
              <li>Create a calming bedtime routine</li>
              <li>Eliminate disruptive noises and lights</li>
            </ul>

            <h3 className="text-lg font-semibold">2. Cognitive Behavioral Therapy (CBT)</h3>
            <p>CBT techniques like relaxation training and stress management can help reduce episodes by addressing anxiety or poor sleep habits.</p>

            <h3 className="text-lg font-semibold">3. Medication</h3>
            <ul className="list-disc pl-6">
              <li><strong>Benzodiazepines:</strong> Reduce frequency of sleepwalking</li>
              <li><strong>Antidepressants:</strong> If episodes are linked to mood disorders</li>
              <li><strong>Melatonin:</strong> Helps regulate circadian rhythms</li>
            </ul>

            <h3 className="text-lg font-semibold">4. Safety Measures</h3>
            <ul className="list-disc pl-6">
              <li>Install safety locks and alarms on doors/windows</li>
              <li>Clear walkways of sharp or dangerous objects</li>
              <li>Use bed rails or padding if needed</li>
              <li>Alert housemates or use monitoring devices</li>
            </ul>

            <h3 className="text-lg font-semibold">5. Treat Underlying Conditions</h3>
            <p>If sleepwalking is linked to another issue like sleep apnea, seizures, or medication side effects, we’ll tailor treatment to address the root cause.</p>

            <h2 className="text-xl font-semibold">Why Choose Our Clinic?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Expert Evaluation:</strong> Our sleep specialists are trained in diagnosing complex parasomnias</li>
              <li><strong>Holistic Treatment:</strong> We address both symptoms and root causes with comprehensive care plans</li>
              <li><strong>Advanced Tools:</strong> Sleep studies, actigraphy, and neuro-evaluations available</li>
              <li><strong>Safety Focus:</strong> We prioritize your well-being with practical safety strategies</li>
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

export default SleepWalking;
