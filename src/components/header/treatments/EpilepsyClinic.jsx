import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const data = {
  bgImage: "/pictures/epilepsyClinic.jpeg", // Update this path to your actual image file
  sidebarLinks: [
    { title: "Seizure", link: "/seizure" },
   
  ],
};

const EpilepsyClinic = () => {
  return (
    <div className="w-full bg-white font-sans min-h-screen">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Epilepsy Clinic: Comprehensive Care for Seizure Disorders
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="text-xl font-semibold">What is Epilepsy?</h2>
            <p>
              Epilepsy is a neurological disorder characterized by recurrent and unprovoked seizures. A seizure is caused by abnormal electrical activity in the brain, which can lead to changes in behavior, movement, feelings, or consciousness. While many individuals may experience a seizure at some point in their lives, people with epilepsy have frequent, unexplained seizures that disrupt daily life.
            </p>
            <p>
              Epilepsy can affect people of all ages, and its causes vary widely, including genetic factors, brain injuries, infections, and conditions such as stroke or brain tumors. The severity and frequency of seizures vary from person to person, and managing epilepsy effectively requires a comprehensive and personalized treatment plan.
            </p>

            <h2 className="text-xl font-semibold">Symptoms of Epilepsy</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Convulsions: Uncontrollable shaking or jerking movements</li>
              <li>Loss of Consciousness: Fainting or a temporary loss of awareness</li>
              <li>Staring Spells: Episodes of vacant staring or a lack of responsiveness</li>
              <li>Confusion: Disorientation or inability to recall events before or after a seizure</li>
              <li>Auras: A sensation or feeling that precedes a seizure, such as strange smells, sounds, or visual disturbances</li>
              <li>Muscle Stiffness: Sudden stiffness or rigidity in the body</li>
              <li>Unusual Sensations: Tingling, numbness, or unusual sensations in the limbs or body</li>
            </ul>
            <p>
              Seizures can vary in type, such as:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Focal Seizures: Affect one area of the brain and can involve either a change in sensation or motor control.</li>
              <li>Generalized Seizures: Affect the entire brain, leading to loss of consciousness or widespread muscle spasms.</li>
              <li>Absence Seizures: Brief lapses in consciousness, often appearing as though the person is staring off into space.</li>
            </ul>

            <h2 className="text-xl font-semibold">Diagnosis of Epilepsy</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Medical History and Physical Exam:</strong> A thorough evaluation of your medical history, family history, and any history of seizures or neurological symptoms.</li>
              <li><strong>Electroencephalogram (EEG):</strong> A test to monitor brain activity and detect abnormal brain waves.</li>
              <li><strong>Neuroimaging (MRI or CT Scans):</strong> Brain scans to identify structural abnormalities.</li>
              <li><strong>Blood Tests:</strong> Used to rule out other potential causes of seizures.</li>
              <li><strong>Video EEG Monitoring:</strong> Continuous brain activity recording while the patient is observed to capture seizures in real-time.</li>
            </ul>

            <h2 className="text-xl font-semibold">Treatment Options for Epilepsy</h2>
            <h3 className="text-lg font-semibold">1. Antiepileptic Medications (AEDs)</h3>
            <p>Medications are the cornerstone of epilepsy treatment. Common AEDs include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Phenytoin</li>
              <li>Carbamazepine</li>
              <li>Valproate</li>
              <li>Levetiracetam</li>
              <li>Lamotrigine</li>
            </ul>

            <h3 className="text-lg font-semibold">2. Ketogenic Diet</h3>
            <p>In certain cases, especially drug-resistant epilepsy, the ketogenic diet can help reduce seizures, especially in children.</p>

            <h3 className="text-lg font-semibold">3. Vagus Nerve Stimulation (VNS)</h3>
            <p>This involves implanting a small device under the skin to send electrical impulses to the vagus nerve, helping reduce seizure activity.</p>

            <h3 className="text-lg font-semibold">4. Epilepsy Surgery</h3>
            <p>For refractory epilepsy, surgery may be considered, such as:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Resection Surgery: Removal of the brain tissue causing seizures.</li>
              <li>Laser Ablation: A minimally invasive technique using lasers.</li>
              <li>Multiple Subpial Transections (MST): A technique for patients whose seizures originate from inaccessible brain areas.</li>
            </ul>

            <h3 className="text-lg font-semibold">5. Responsive Neurostimulation (RNS)</h3>
            <p>RNS involves implanting a device in the brain that detects seizures and provides electrical stimulation to stop them.</p>

            <h3 className="text-lg font-semibold">6. Psychological and Supportive Therapies</h3>
            <p>Our clinic offers counseling services to help patients cope with the emotional and psychological aspects of epilepsy.</p>

            <h2 className="text-xl font-semibold">Managing Seizure Triggers and Lifestyle Modifications</h2>
            <p>We provide guidance on the following lifestyle modifications to manage triggers:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Sleep Hygiene: Ensure regular, sufficient sleep.</li>
              <li>Stress Management: Practice mindfulness, relaxation, and breathing techniques.</li>
              <li>Avoiding Triggers: Identify and avoid triggers like flashing lights and dehydration.</li>
              <li>Exercise and Nutrition: Maintain a healthy diet and regular physical activity.</li>
            </ul>

            <h2 className="text-xl font-semibold">Why Choose Our Epilepsy Clinic?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>State-of-the-Art Diagnostic Tools:</strong> We use advanced techniques to accurately diagnose epilepsy.</li>
              <li><strong>Comprehensive Treatment Options:</strong> Including medications, diet therapy, and advanced surgical options.</li>
              <li><strong>Personalized Care Plans:</strong> Tailored to meet each patient's unique needs.</li>
              <li><strong>Patient Education and Support:</strong> Empowering patients and families with knowledge and resources.</li>
              <li><strong>Compassionate Care:</strong> We address both the physical and emotional aspects of epilepsy.</li>
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

export default EpilepsyClinic;
