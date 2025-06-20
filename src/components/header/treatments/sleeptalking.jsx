import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const data = {
  bgImage: "/pictures/sleeptalking.jpeg", // Update this path to your actual image file
  sidebarLinks: [
    { title: "Insomnia", link: "/Insomnia" },
    { title: "Disturbed Sleep", link: "/Disturbed-Sleep" },
    { title: "Non Refreshing Sleep", link: "/Non-Refreshing-Sleep" },
    { title: "Sleep Talking", link: "/Sleep-Talking" },
    { title: "Sleep Walking", link: "/Sleep-Walking" },
    { title: "Nightmares", link: "/Nightmares" },
  ],
};

const SleepTalking = () => {
  return (
    <div className="w-full bg-white font-sans min-h-screen">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Sleep Talking Clinic: Understanding and Managing Sleep Talking
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-xl font-semibold">What is Sleep Talking?</h2>
            <p>
              Sleep talking (somniloquy) is a parasomnia where a person speaks during sleep without awareness. It ranges from mumbling to loud conversations and may occur during any sleep stage, though it is most common during REM sleep.
            </p>

            <h2 className="text-xl font-semibold">Signs and Symptoms</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Incoherent or loud talking during the night</li>
              <li>Speech ranging from mumbling to full conversations</li>
              <li>Occasional laughter, shouting, or emotional expressions</li>
              <li>Disrupted sleep for partners or roommates</li>
            </ul>

            <h2 className="text-xl font-semibold">Causes of Sleep Talking</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Sleep stages:</strong> Often occurs during REM or light non-REM stages</li>
              <li><strong>Stress and anxiety:</strong> Can increase frequency and intensity</li>
              <li><strong>Other sleep disorders:</strong> Linked with sleepwalking, night terrors, and sleep apnea</li>
              <li><strong>Medications:</strong> Especially sedatives and antidepressants</li>
              <li><strong>Sleep deprivation:</strong> Poor or irregular sleep increases episodes</li>
              <li><strong>Genetics:</strong> Family history can increase risk</li>
              <li><strong>Alcohol or drug use:</strong> Disrupts normal sleep stages</li>
              <li><strong>Psychological factors:</strong> Including depression and emotional stress</li>
            </ul>

            <h2 className="text-xl font-semibold">When to Seek Help</h2>
            <p>
              While usually harmless, sleep talking may require evaluation if it's frequent, disruptive, or associated with behaviors like sleepwalking or aggression. It can also indicate deeper sleep issues or mental health concerns.
            </p>

            <h2 className="text-xl font-semibold">Diagnosis</h2>
            <ul className="list-disc pl-6">
              <li><strong>Initial Consultation:</strong> Discussion of sleep patterns, stress levels, and history</li>
              <li><strong>Sleep Diary:</strong> Track episodes, bedtime habits, and triggers</li>
              <li><strong>Polysomnography:</strong> Sleep study to detect related disorders like sleep apnea or REM behavior disorder</li>
            </ul>

            <h2 className="text-xl font-semibold">Treatment Options</h2>

            <h3 className="text-lg font-semibold">1. Cognitive Behavioral Therapy (CBT-I)</h3>
            <p>Helps address anxiety, stress, and poor sleep habits that may contribute to sleep talking.</p>

            <h3 className="text-lg font-semibold">2. Relaxation Techniques</h3>
            <ul className="list-disc pl-6">
              <li>Breathing exercises</li>
              <li>Mindfulness and meditation</li>
              <li>Progressive muscle relaxation</li>
            </ul>

            <h3 className="text-lg font-semibold">3. Medication</h3>
            <p>
              If linked to anxiety, depression, or another sleep disorder, medications may be prescribed to improve sleep stability and reduce episodes.
            </p>

            <h3 className="text-lg font-semibold">4. Treatment of Underlying Conditions</h3>
            <p>
              Addressing sleep apnea, night terrors, or other conditions often helps reduce or eliminate sleep talking.
            </p>

            <h3 className="text-lg font-semibold">5. Lifestyle Adjustments</h3>
            <ul className="list-disc pl-6">
              <li>Stick to a regular sleep routine</li>
              <li>Avoid alcohol and stimulants before bedtime</li>
              <li>Practice a calming bedtime routine</li>
              <li>Limit screen time before sleep</li>
            </ul>

            <h2 className="text-xl font-semibold">Why Choose Our Clinic?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Experienced Professionals:</strong> Specialists in sleep behavior and parasomnias</li>
              <li><strong>Comprehensive Evaluations:</strong> Including sleep studies and mental health screening</li>
              <li><strong>Tailored Care:</strong> Personalized treatment plans based on your symptoms and lifestyle</li>
              <li><strong>Supportive Environment:</strong> Compassionate care to help you or your loved one sleep better</li>
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

export default SleepTalking;
