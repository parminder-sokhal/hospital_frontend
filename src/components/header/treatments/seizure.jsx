import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const data = {
  bgImage: "/pictures/seizure.jpeg", // Update this path to your actual image file
  sidebarLinks: [
    { title: "Seizure", link: "/seizure" },
   
  ],
};

const Seizure = () => {
  return (
    <div className="w-full bg-white font-sans min-h-screen">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Seizure Clinic: Comprehensive Care for Seizure Management
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-xl font-semibold">What is a Seizure?</h2>
            <p>
              A seizure is a sudden, abnormal electrical discharge in the brain that can lead to various physical and mental changes. Seizures can manifest in numerous ways, from brief lapses in consciousness or unusual sensations to violent shaking and loss of control. While anyone can experience a seizure, repeated, unprovoked seizures are a hallmark of epilepsy, a neurological condition that requires specialized care.
            </p>

            <h2 className="text-xl font-semibold">What Causes Seizures?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Epilepsy:</strong> A chronic neurological disorder causing recurrent, unprovoked seizures.</li>
              <li><strong>Brain Injuries:</strong> Head trauma or accidents can damage brain cells and cause seizures.</li>
              <li><strong>Stroke:</strong> Interruption of blood flow to the brain can result in brain damage and seizures.</li>
              <li><strong>Infections:</strong> Infections like meningitis or encephalitis can cause brain inflammation leading to seizures.</li>
              <li><strong>Tumors or Lesions:</strong> Abnormal growths in the brain can trigger seizures.</li>
              <li><strong>Genetic Factors:</strong> Some forms of epilepsy are inherited, making seizures more likely due to genetic mutations.</li>
              <li><strong>Metabolic Imbalances:</strong> Issues like low blood sugar or electrolyte imbalances can result in seizures.</li>
              <li><strong>Alcohol or Drug Use:</strong> Withdrawal or substance abuse can provoke seizures.</li>
              <li><strong>Other Medical Conditions:</strong> Conditions such as diabetes and high blood pressure may contribute to seizures.</li>
            </ul>

            <h2 className="text-xl font-semibold">Symptoms of Seizures</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Convulsions (uncontrollable shaking or jerking movements)</li>
              <li>Loss of consciousness or awareness</li>
              <li>Staring spells or periods of unresponsiveness</li>
              <li>Muscle stiffness or rigidity</li>
              <li>Sensory disturbances, such as tingling or déjà vu</li>
              <li>Confusion or memory loss during or after a seizure</li>
              <li>Odd sensations like strange smells or visual disturbances</li>
              <li>Involuntary movements or repetitive actions (e.g., lip-smacking or hand-rubbing)</li>
            </ul>

            <h2 className="text-xl font-semibold">How We Diagnose Seizures</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Medical History Review:</strong> A thorough review of symptoms, previous seizures, and family history.</li>
              <li><strong>Neurological Examination:</strong> A detailed neurological exam to assess brain function and muscle coordination.</li>
              <li><strong>Electroencephalogram (EEG):</strong> A test to detect abnormal brain wave activity.</li>
              <li><strong>Imaging Studies (MRI/CT Scan):</strong> Brain scans to detect potential causes like tumors or brain lesions.</li>
              <li><strong>Blood Tests:</strong> To check for metabolic issues or infections contributing to seizures.</li>
              <li><strong>Video EEG Monitoring:</strong> A test that records both brain activity and physical symptoms over time to track seizure activity.</li>
            </ul>

            <h2 className="text-xl font-semibold">Treatment Options for Seizures</h2>
            <h3 className="text-lg font-semibold">Medications (Antiepileptic Drugs - AEDs)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Levetiracetam</strong></li>
              <li><strong>Valproate</strong></li>
              <li><strong>Carbamazepine</strong></li>
              <li><strong>Lamotrigine</strong></li>
              <li><strong>Phenytoin</strong></li>
            </ul>

            <h3 className="text-lg font-semibold">Other Treatment Options</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Ketogenic Diet:</strong> A high-fat, low-carb diet used to reduce seizures.</li>
              <li><strong>Vagus Nerve Stimulation (VNS):</strong> A device to help control seizures when medications are ineffective.</li>
              <li><strong>Epilepsy Surgery:</strong> Surgical options to remove or treat the brain areas causing seizures.</li>
              <li><strong>Responsive Neurostimulation (RNS):</strong> A device that delivers electrical pulses to prevent seizures from spreading.</li>
              <li><strong>Psychological Support:</strong> Therapy to help with the emotional and social effects of living with epilepsy.</li>
            </ul>

            <h2 className="text-xl font-semibold">Why Choose Our Seizure Clinic?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Expert Diagnosis and Treatment:</strong> Our specialists are highly trained in treating seizures and epilepsy.</li>
              <li><strong>Personalized Care:</strong> We provide tailored treatment plans for each patient based on their unique needs.</li>
              <li><strong>Comprehensive Approach:</strong> We offer both medical and lifestyle-based treatments for managing seizures.</li>
            </ul>
          </div>

          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Epilepsy Clinic
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

export default Seizure;
