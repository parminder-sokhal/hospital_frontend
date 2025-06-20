import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/sleepClinic.jpeg", // Update this path to your actual image file
  sidebarLinks: [
    { title: "Insomnia", link: "/Insomnia" },
    { title: "Disturbed Sleep", link: "/Disturbed-Sleep" },
    { title: "Non Refreshing Sleep", link: "/Non-Refreshing-Sleep" },
    { title: "Sleep Talking", link: "/Sleep-Talking" },
    { title: "Sleep Walking", link: "/Sleep-Walking" },
    { title: "Nightmares", link: "/Nightmares" },
  ],
};

const SleepClinic = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Sleep Clinic: Expert Care for Better Sleep and Restful Nights
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-xl font-semibold">What is a Sleep Clinic?</h2>
            <p>
              A Sleep Clinic is a specialized facility that diagnoses and treats sleep disorders. At [Your Clinic/Practice Name], we offer comprehensive care to improve your sleep quality and overall health.
            </p>

            <h2 className="text-xl font-semibold">Common Sleep Disorders We Treat</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Insomnia:</strong> Difficulty falling or staying asleep.</li>
              <li><strong>Sleep Apnea:</strong> Interrupted breathing during sleep; treated with CPAP, oral devices, or surgery.</li>
              <li><strong>Restless Legs Syndrome:</strong> Unpleasant leg sensations and an urge to move, especially at night.</li>
              <li><strong>Narcolepsy:</strong> Sudden daytime sleep episodes and muscle weakness (cataplexy).</li>
              <li><strong>Parasomnias:</strong> Includes sleepwalking, night terrors, and REM behavior disorder.</li>
              <li><strong>Circadian Rhythm Disorders:</strong> Misalignment between internal clock and daily schedule.</li>
              <li><strong>Sleep Deprivation:</strong> Chronic lack of sleep affecting mental and physical health.</li>
              <li><strong>Snoring:</strong> Often harmless, but can indicate obstructive sleep apnea.</li>
            </ul>

            <h2 className="text-xl font-semibold">How Our Sleep Clinic Works</h2>
            <h3 className="font-semibold text-lg">1. Comprehensive Sleep Assessment</h3>
            <p>
              We begin with an in-depth consultation to evaluate your sleep patterns, medical history, lifestyle, and emotional health.
            </p>

            <h3 className="font-semibold text-lg">2. Sleep Studies</h3>
            <p>
              We may recommend a polysomnography (in-lab sleep study) or a Home Sleep Apnea Test (HSAT) to monitor brain activity, oxygen levels, and breathing while you sleep.
            </p>

            <h3 className="font-semibold text-lg">3. Diagnosis & Personalized Treatment Plan</h3>
            <p>
              Based on the results, we develop a treatment plan which may include:
            </p>
            <ul className="list-disc pl-6">
              <li>CBT-I (Cognitive Behavioral Therapy for Insomnia)</li>
              <li>CPAP/BiPAP therapy</li>
              <li>Medications for RLS, narcolepsy, or other sleep disorders</li>
              <li>Sleep hygiene education and lifestyle guidance</li>
              <li>Mindfulness and relaxation strategies</li>
            </ul>

            <h3 className="font-semibold text-lg">4. Ongoing Support & Follow-Up</h3>
            <p>
              We monitor your progress and adjust treatment as needed to ensure long-term improvement in your sleep quality and daytime function.
            </p>

            <h2 className="text-xl font-semibold">Why Choose Our Sleep Clinic?</h2>
            <ul className="list-disc pl-6">
              <li><strong>Expertise:</strong> Our sleep specialists are trained in diagnosing and treating a wide range of disorders.</li>
              <li><strong>Advanced Diagnostics:</strong> Access to state-of-the-art tools including in-lab and home sleep studies.</li>
              <li><strong>Personalized Plans:</strong> Tailored treatments based on your unique needs and diagnosis.</li>
              <li><strong>Holistic Care:</strong> We incorporate behavioral and wellness strategies alongside medical treatments.</li>
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

export default SleepClinic;
