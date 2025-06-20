import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/insomnia.jpeg", // Update this path to your actual image file
  sidebarLinks: [
    { title: "Insomnia", link: "/Insomnia" },
    { title: "Disturbed Sleep", link: "/Disturbed-Sleep" },
    { title: "Non Refreshing Sleep", link: "/Non-Refreshing-Sleep" },
    { title: "Sleep Talking", link: "/Sleep-Talking" },
    { title: "Sleep Walking", link: "/Sleep-Walking" },
    { title: "Nightmares", link: "/Nightmares" },
  ],
};

const Insomnia = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Insomnia Sleep Clinic: Expert Care for Better Sleep and Restful Nights
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-xl font-semibold">What is Insomnia?</h2>
            <p>
              Insomnia is a sleep disorder involving difficulty falling or staying asleep, or waking up too early. It can be acute or chronic, and may lead to fatigue, irritability, poor concentration, and lowered productivity.
            </p>

            <h2 className="text-xl font-semibold">Symptoms of Insomnia</h2>
            <ul className="list-disc pl-6">
              <li>Difficulty falling asleep</li>
              <li>Waking up frequently during the night</li>
              <li>Waking too early and not falling back asleep</li>
              <li>Fatigue upon waking</li>
              <li>Daytime drowsiness and reduced focus</li>
              <li>Increased anxiety related to sleep</li>
            </ul>

            <h2 className="text-xl font-semibold">Types of Insomnia</h2>
            <p>
              <strong>Acute Insomnia:</strong> Usually triggered by stress or a life event and lasts a few days or weeks.{" "}
              <br />
              <strong>Chronic Insomnia:</strong> Occurs at least three times a week for three months or more, often due to medical or psychological conditions.
            </p>

            <h2 className="text-xl font-semibold">Causes of Insomnia</h2>
            <ul className="list-disc pl-6">
              <li>Stress and anxiety</li>
              <li>Depression or mood disorders</li>
              <li>Chronic pain or medical conditions</li>
              <li>Lifestyle habits (e.g., poor sleep hygiene)</li>
              <li>Medication or substance use</li>
              <li>Hormonal changes</li>
              <li>Other sleep disorders</li>
            </ul>

            <h2 className="text-xl font-semibold">Diagnosis of Insomnia</h2>
            <p>
              We conduct a thorough consultation, review your medical and sleep history, and may use tools like sleep diaries and overnight studies to assess causes and patterns.
            </p>

            <h2 className="text-xl font-semibold">Treatment for Insomnia</h2>
            <h3 className="font-semibold text-lg">1. Cognitive Behavioral Therapy for Insomnia (CBT-I)</h3>
            <ul className="list-disc pl-6">
              <li>Sleep restriction</li>
              <li>Stimulus control</li>
              <li>Relaxation techniques</li>
              <li>Sleep hygiene education</li>
            </ul>

            <h3 className="font-semibold text-lg">2. Medications</h3>
            <p>
              Short-term or occasional use of sleep aids may be considered, tailored to your individual needs and health conditions.
            </p>

            <h3 className="font-semibold text-lg">3. Mindfulness and Relaxation Techniques</h3>
            <p>
              We guide you through practices such as meditation, breathing exercises, progressive muscle relaxation, and guided imagery to quiet the mind and body before bed.
            </p>

            <h3 className="font-semibold text-lg">4. Lifestyle Modifications</h3>
            <ul className="list-disc pl-6">
              <li>Regular sleep-wake schedule</li>
              <li>Optimizing your sleep environment</li>
              <li>Limiting caffeine, alcohol, and screen use before bed</li>
              <li>Increasing daily physical activity</li>
            </ul>

            <h3 className="font-semibold text-lg">5. Light Therapy</h3>
            <p>
              For circadian-related insomnia, we may use bright light therapy to reset your internal body clock.
            </p>

            <h2 className="text-xl font-semibold">Why Choose Our Sleep Clinic for Insomnia?</h2>
            <ul className="list-disc pl-6">
              <li><strong>Experienced Specialists:</strong> Experts in diagnosing and managing sleep disorders.</li>
              <li><strong>Personalized Care:</strong> Individualized plans based on your unique sleep challenges.</li>
              <li><strong>Behavioral and Medical Integration:</strong> We combine the best of therapy and medical options.</li>
              <li><strong>Technology-Driven:</strong> In-lab and home sleep studies available for detailed assessments.</li>
              <li><strong>Ongoing Support:</strong> Continued care to ensure lasting results.</li>
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

export default Insomnia;
