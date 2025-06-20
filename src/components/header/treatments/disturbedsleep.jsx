import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/disturbedsleep.jpeg", // Update this path to your actual image file
  sidebarLinks: [
    { title: "Insomnia", link: "/Insomnia" },
    { title: "Disturbed Sleep", link: "/Disturbed-Sleep" },
    { title: "Non Refreshing Sleep", link: "/Non-Refreshing-Sleep" },
    { title: "Sleep Talking", link: "/Sleep-Talking" },
    { title: "Sleep Walking", link: "/Sleep-Walking" },
    { title: "Nightmares", link: "/Nightmares" },
  ],
};

const DisturbedSleep = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Disturbed Sleep Clinic: Expert Care for Restful, Restorative Sleep
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-xl font-semibold">What is Disturbed Sleep?</h2>
            <p>
              Disturbed sleep involves any interruption in your ability to fall or stay asleep, often leading to fatigue, irritability, and reduced focus during the day. It can be caused by sleep disorders, stress, medical conditions, or lifestyle factors.
            </p>

            <h2 className="text-xl font-semibold">Common Causes of Disturbed Sleep</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Sleep Disorders:</strong> Insomnia, sleep apnea, RLS, and narcolepsy.</li>
              <li><strong>Stress & Anxiety:</strong> Racing thoughts and tension interfere with sleep cycles.</li>
              <li><strong>Depression:</strong> Can cause early awakenings, hypersomnia, or trouble falling asleep.</li>
              <li><strong>Chronic Pain & Medical Conditions:</strong> Pain or discomfort from health issues disrupts rest.</li>
              <li><strong>Lifestyle Habits:</strong> Irregular schedules, caffeine, alcohol, and screen overuse.</li>
              <li><strong>Environmental Factors:</strong> Noise, light, or temperature issues in your sleep space.</li>
              <li><strong>Hormonal Changes:</strong> Menopause, menstruation, and pregnancy can interfere with sleep.</li>
            </ul>

            <h2 className="text-xl font-semibold">Signs of Disturbed Sleep</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Difficulty falling or staying asleep</li>
              <li>Waking up too early</li>
              <li>Tossing and turning at night</li>
              <li>Daytime tiredness and poor concentration</li>
              <li>Irritability or emotional fluctuations</li>
            </ul>

            <h2 className="text-xl font-semibold">Diagnosis of Disturbed Sleep</h2>
            <p>
              We use a thorough, step-by-step diagnostic process:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Consultation:</strong> In-depth discussion of your sleep patterns, health, and routines.</li>
              <li><strong>Sleep Diary:</strong> Track sleep habits, routines, and symptoms for 1–2 weeks.</li>
              <li><strong>Sleep Study:</strong> Polysomnography or home sleep test to evaluate brain, breathing, and body activity overnight.</li>
            </ul>

            <h2 className="text-xl font-semibold">Treatment for Disturbed Sleep</h2>

            <h3 className="font-semibold text-lg">1. CBT-I (Cognitive Behavioral Therapy for Insomnia)</h3>
            <ul className="list-disc pl-6">
              <li>Sleep restriction and stimulus control</li>
              <li>Relaxation techniques</li>
              <li>Sleep hygiene education</li>
            </ul>

            <h3 className="font-semibold text-lg">2. Medications</h3>
            <p>
              For short-term or specific cases, we may recommend:
            </p>
            <ul className="list-disc pl-6">
              <li>Sedative-hypnotics</li>
              <li>Antidepressants (for mood-related sleep problems)</li>
              <li>Anti-anxiety medications (as needed)</li>
            </ul>

            <h3 className="font-semibold text-lg">3. Stress Management & Relaxation</h3>
            <ul className="list-disc pl-6">
              <li>Breathing techniques</li>
              <li>Progressive muscle relaxation</li>
              <li>Mindfulness and guided meditation</li>
            </ul>

            <h3 className="font-semibold text-lg">4. Sleep Environment Optimization</h3>
            <p>
              We advise on ideal room conditions (dark, cool, quiet), mattress/pillow quality, and managing distractions.
            </p>

            <h3 className="font-semibold text-lg">5. Lifestyle Coaching</h3>
            <ul className="list-disc pl-6">
              <li>Establishing a consistent sleep schedule</li>
              <li>Limiting caffeine, alcohol, and screen exposure</li>
              <li>Promoting regular exercise earlier in the day</li>
            </ul>

            <h2 className="text-xl font-semibold">Why Choose Our Clinic?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Experienced Sleep Team:</strong> Experts in sleep science and behavioral therapy.</li>
              <li><strong>Comprehensive Diagnostics:</strong> Sleep studies and evaluations personalized to your case.</li>
              <li><strong>Personalized Plans:</strong> Tailored solutions for short-term or long-standing sleep issues.</li>
              <li><strong>Holistic Focus:</strong> We combine medical, psychological, and lifestyle approaches for lasting results.</li>
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

export default DisturbedSleep;
