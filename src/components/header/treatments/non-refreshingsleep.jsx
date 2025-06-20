import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/nonrefreshingsleep.jpeg", // Update this path to your actual image file
  sidebarLinks: [
    { title: "Insomnia", link: "/Insomnia" },
    { title: "Disturbed Sleep", link: "/Disturbed-Sleep" },
    { title: "Non Refreshing Sleep", link: "/Non-Refreshing-Sleep" },
    { title: "Sleep Talking", link: "/Sleep-Talking" },
    { title: "Sleep Walking", link: "/Sleep-Walking" },
    { title: "Nightmares", link: "/Nightmares" },
  ],
};

const NonRefreshingSleep = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Non-Refreshing Sleep Clinic: Achieve Restorative, Rejuvenating Sleep
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-xl font-semibold">What is Non-Refreshing Sleep?</h2>
            <p>
              Non-refreshing sleep is when you wake up feeling unrefreshed and tired despite sleeping for an adequate amount of time. It can lead to daytime fatigue, low energy, mental fog, and diminished quality of life.
            </p>

            <h2 className="text-xl font-semibold">Signs and Symptoms</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Persistent fatigue throughout the day</li>
              <li>Difficulty focusing or remembering tasks</li>
              <li>Irritability and mood changes</li>
              <li>Morning grogginess or muscle aches</li>
              <li>Frequent night wakings or fragmented sleep</li>
            </ul>

            <h2 className="text-xl font-semibold">Common Causes</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Sleep Disorders:</strong> Sleep apnea, insomnia, narcolepsy, RLS</li>
              <li><strong>Medical Conditions:</strong> Chronic pain, thyroid disorders, GERD, anxiety, depression</li>
              <li><strong>Stress & Mental Health:</strong> High stress and anxiety can interrupt deep sleep stages</li>
              <li><strong>Poor Sleep Hygiene:</strong> Irregular routines, screens, or caffeine before bed</li>
              <li><strong>Environmental Disruptions:</strong> Noise, light, or uncomfortable temperature</li>
              <li><strong>Hormonal Changes:</strong> Menopause, pregnancy, or hormonal imbalances</li>
            </ul>

            <h2 className="text-xl font-semibold">Diagnosis Process</h2>
            <p>We use a step-by-step diagnostic approach to uncover the root cause of your non-refreshing sleep:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Initial Consultation:</strong> Review of symptoms, sleep patterns, and medical history</li>
              <li><strong>Sleep Diary:</strong> Track sleep habits and disturbances over a few weeks</li>
              <li><strong>Polysomnography:</strong> In-lab or home-based sleep study to evaluate sleep quality and disorders</li>
              <li><strong>Blood Work:</strong> Screen for thyroid issues, anemia, or vitamin deficiencies</li>
            </ul>

            <h2 className="text-xl font-semibold">Treatment Options</h2>
            <p>We customize treatment based on your individual sleep issues:</p>

            <h3 className="font-semibold text-lg">1. Cognitive Behavioral Therapy for Insomnia (CBT-I)</h3>
            <ul className="list-disc pl-6">
              <li>Sleep restriction and stimulus control</li>
              <li>Relaxation strategies for stress reduction</li>
              <li>Sleep hygiene coaching and routine building</li>
            </ul>

            <h3 className="font-semibold text-lg">2. Sleep Apnea Treatment</h3>
            <p>
              We may recommend CPAP therapy or oral appliances if sleep apnea is detected, along with weight loss or lifestyle modifications.
            </p>

            <h3 className="font-semibold text-lg">3. Medications</h3>
            <ul className="list-disc pl-6">
              <li>Sleep aids for short-term relief</li>
              <li>Antidepressants or anti-anxiety medications (if mood is contributing)</li>
              <li>Pain relief or hormone therapies as needed</li>
            </ul>

            <h3 className="font-semibold text-lg">4. Lifestyle & Environmental Adjustments</h3>
            <ul className="list-disc pl-6">
              <li>Establish a consistent sleep schedule</li>
              <li>Reduce caffeine/alcohol intake before bedtime</li>
              <li>Upgrade your sleep environment (e.g., blackout curtains, white noise, cooling mattress)</li>
            </ul>

            <h3 className="font-semibold text-lg">5. Relaxation Techniques</h3>
            <ul className="list-disc pl-6">
              <li>Mindfulness and meditation practices</li>
              <li>Breathing techniques</li>
              <li>Progressive muscle relaxation</li>
            </ul>

            <h2 className="text-xl font-semibold">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Sleep Expertise:</strong> Board-certified sleep specialists and licensed therapists</li>
              <li><strong>Personalized Approach:</strong> We tailor plans based on your symptoms, sleep data, and lifestyle</li>
              <li><strong>Advanced Diagnostics:</strong> In-lab and at-home studies for accurate evaluation</li>
              <li><strong>Comprehensive Care:</strong> We address medical, behavioral, and environmental factors for long-term improvement</li>
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

export default NonRefreshingSleep;
