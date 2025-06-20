import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const data = {
  bgImage: "/pictures/migraine.jpeg", // Update this path to your actual image file
  sidebarLinks: [
    { title: "Migraine", link: "/Migraine" },
    { title: "Tension Headache", link: "/Tension-Headache" },
  ],
};

const Migraine = () => {
  return (
    <div className="w-full bg-white font-sans min-h-screen">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Migraine Clinic: Specialized Care for Migraine Management
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-xl font-semibold">What is a Migraine?</h2>
            <p>
              A migraine is more than just a severe headache; it is a neurological condition characterized by recurrent, intense pain, usually on one side of the head. Migraines are often accompanied by other symptoms, such as nausea, vomiting, and heightened sensitivity to light, sound, or smells. The pain is typically throbbing or pulsating and can last from a few hours to several days.
            </p>

            <h2 className="text-xl font-semibold">Symptoms of a Migraine</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Severe, throbbing head pain, typically on one side of the head, but it can affect both sides.</li>
              <li>Nausea and vomiting, which often accompany the headache.</li>
              <li>Sensitivity to light (photophobia), sound (phonophobia), or smell (osmophobia).</li>
              <li>Aura: Some people experience visual disturbances (such as flashes of light, zigzag patterns, or blind spots) before the migraine attack begins.</li>
              <li>Neck pain and stiffness may accompany the headache.</li>
              <li>Fatigue or feeling drained after a migraine attack.</li>
              <li>Difficulty concentrating or "brain fog" during or after the headache.</li>
            </ul>

            <h2 className="text-xl font-semibold">Phases of a Migraine Attack</h2>
            <h3 className="text-lg font-semibold">1. Prodrome Phase (Pre-Migraine)</h3>
            <p>This phase may occur hours or even days before the actual migraine begins. Early warning signs can include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Irritability</li>
              <li>Mood changes</li>
              <li>Food cravings</li>
              <li>Fatigue</li>
              <li>Neck stiffness</li>
            </ul>

            <h3 className="text-lg font-semibold">2. Aura Phase</h3>
            <p>Around 20-30% of people experience an aura before the migraine begins. This phase includes visual disturbances like flashing lights, blind spots, or wavy lines. Some individuals may also experience tingling sensations, difficulty speaking, or even partial paralysis.</p>

            <h3 className="text-lg font-semibold">3. Headache Phase</h3>
            <p>This is the most painful part of a migraine, typically characterized by throbbing pain on one side of the head. The pain can last from a few hours to up to three days and can be severe enough to interfere with daily activities. Nausea and vomiting are common.</p>

            <h3 className="text-lg font-semibold">4. Postdrome Phase (After-Effects)</h3>
            <p>After the migraine subsides, individuals may feel drained, fatigued, or "hungover." Some may have difficulty concentrating or feel mentally foggy for a period of time.</p>

            <h2 className="text-xl font-semibold">Causes and Triggers of Migraines</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Genetics:</strong> Migraines tend to run in families, suggesting a genetic predisposition.</li>
              <li><strong>Hormonal Changes:</strong> Hormonal fluctuations, particularly in women, can be a significant trigger.</li>
              <li><strong>Stress and Anxiety:</strong> Emotional stress and anxiety are common triggers.</li>
              <li><strong>Environmental Triggers:</strong> Bright lights, loud sounds, strong odors, and changes in weather can provoke a migraine.</li>
              <li><strong>Sleep Issues:</strong> Irregular sleep patterns, lack of sleep, or sleeping too much can disrupt brain neurotransmitters and lead to migraines.</li>
              <li><strong>Dietary Triggers:</strong> Certain foods and drinks are known to trigger migraines, including aged cheese, processed meats, caffeine, and alcohol.</li>
              <li><strong>Medications:</strong> Some medications, especially pain relievers (when used excessively), can lead to medication overuse headaches or rebound migraines.</li>
              <li><strong>Physical Exertion:</strong> Strenuous physical activity or even coughing, sneezing, or sexual activity may trigger migraines in susceptible individuals.</li>
            </ul>

            <h2 className="text-xl font-semibold">Diagnosis of Migraines</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Medical History Review:</strong> Your doctor will review your medical history, including the frequency, duration, and severity of your headaches.</li>
              <li><strong>Neurological Examination:</strong> A thorough examination to rule out other conditions.</li>
              <li><strong>Imaging Studies (MRI/CT Scan):</strong> Advanced imaging techniques are recommended in certain cases to rule out other conditions.</li>
              <li><strong>Blood Tests:</strong> These tests may help detect underlying conditions such as infections or metabolic imbalances.</li>
              <li><strong>Headache Diary:</strong> Keeping a diary of your migraine triggers and patterns will help with the diagnosis.</li>
            </ul>

            <h2 className="text-xl font-semibold">Treatment for Migraines</h2>
            <h3 className="text-lg font-semibold">1. Acute (Abortive) Treatments</h3>
            <p>Acute treatments are used to relieve symptoms once a migraine begins. They are most effective when taken early in the attack.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Pain Relievers:</strong> Over-the-counter medications like ibuprofen or acetaminophen.</li>
              <li><strong>Triptans:</strong> Prescription medications such as sumatriptan designed to treat migraines.</li>
              <li><strong>Anti-Nausea Medications:</strong> Medications like metoclopramide can help control nausea and vomiting.</li>
              <li><strong>Ergots:</strong> Ergotamine or dihydroergotamine can help with migraines, particularly those lasting longer.</li>
            </ul>

            <h3 className="text-lg font-semibold">2. Preventive (Prophylactic) Treatments</h3>
            <p>For frequent or chronic migraines, preventive treatments can reduce frequency and severity.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Medications:</strong> Beta-blockers, anticonvulsants, antidepressants, and calcium channel blockers.</li>
              <li><strong>Botox Injections:</strong> Botox injections for individuals with more than 15 migraines per month.</li>
              <li><strong>CGRP Inhibitors:</strong> New medications that block CGRP protein to prevent migraines.</li>
              <li><strong>Lifestyle Modifications:</strong> Dietary changes, stress management, and sleep improvements.</li>
            </ul>

            <h3 className="text-lg font-semibold">3. Non-Pharmacological Treatments</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Biofeedback:</strong> Learning to control bodily functions like heart rate and muscle tension.</li>
              <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Helps reduce stress and teaches coping strategies.</li>
              <li><strong>Acupuncture:</strong> Some individuals find relief from acupuncture, which alleviates pain.</li>
            </ul>

            <h2 className="text-xl font-semibold">Why Choose Our Migraine Clinic?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Expert Diagnosis:</strong> Our specialists are trained in diagnosing and treating complex migraine cases.</li>
              <li><strong>Comprehensive Care:</strong> We offer a variety of treatments tailored to your needs.</li>
              <li><strong>Personalized Treatment Plans:</strong> We create a treatment strategy unique to your triggers and symptoms.</li>
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

export default Migraine;
