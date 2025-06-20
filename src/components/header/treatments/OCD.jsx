import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/OCD.jpeg", // Replace with the correct image path
  sidebarLinks: [
    { title: "Depression", link: "/depression" },
    { title: "Anxiety", link: "/anxiety" },
    { title: "Bipolar Disorder", link: "/bipolar-disorder" },
    { title: "Schizophrenia", link: "/schizophrenia" },
    { title: "OCD", link: "/ocd" },
  ],
};

const OCD = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* ✅ Top Banner */}
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* ✅ Main Content */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Obsessive-Compulsive Disorder (OCD): A Complete Guide
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Text Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              <strong>What is OCD?</strong>
              <br />
              Obsessive-Compulsive Disorder (OCD) is a chronic mental health
              condition involving unwanted thoughts (obsessions) and/or
              repetitive behaviors (compulsions) that significantly interfere
              with daily life.
            </p>

            <p>
              Contrary to stereotypes, OCD is not just about neatness — it’s a
              serious, disruptive condition requiring proper treatment.
            </p>

            <h2 className="text-xl font-semibold">Key Features of OCD</h2>
            <ul className="list-disc pl-6">
              <li>
                Obsessions: Intrusive, distressing thoughts, urges, or images
              </li>
              <li>
                Compulsions: Rituals to reduce anxiety or prevent feared events
              </li>
              <li>
                Behaviors feel uncontrollable and irrational, yet difficult to
                resist
              </li>
            </ul>

            <h2 className="text-xl font-semibold">Common Obsessions</h2>
            <ul className="list-disc pl-6">
              <li>Contamination fears (germs, illness)</li>
              <li>Harm (to self or others)</li>
              <li>Doubt (e.g., leaving doors unlocked)</li>
              <li>Symmetry or exactness</li>
              <li>Intrusive forbidden thoughts (violent, sexual, religious)</li>
            </ul>

            <h2 className="text-xl font-semibold">Common Compulsions</h2>
            <ul className="list-disc pl-6">
              <li>Excessive cleaning or washing</li>
              <li>Checking rituals (locks, stoves)</li>
              <li>Counting or repeating actions</li>
              <li>Ordering or arranging objects</li>
              <li>Mental rituals (e.g., silent prayers, canceling thoughts)</li>
            </ul>

            <h2 className="text-xl font-semibold">OCD vs. Normal Behavior</h2>
            <table className="w-full table-auto border text-sm mt-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left">Normal Concern</th>
                  <th className="border px-4 py-2 text-left">OCD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">
                    Double-checking a lock once
                  </td>
                  <td className="border px-4 py-2">Checking it 20+ times</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Preferring cleanliness</td>
                  <td className="border px-4 py-2">Hand washing for hours</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Organizing a desk</td>
                  <td className="border px-4 py-2">
                    Spending hours making it "just right"
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Pre-exam nerves</td>
                  <td className="border px-4 py-2">
                    Constant intrusive thoughts of failure
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-xl font-semibold">Causes and Risk Factors</h2>
            <ul className="list-disc pl-6">
              <li>Genetics: Family history</li>
              <li>
                Brain chemistry: Serotonin imbalance, abnormal brain circuits
              </li>
              <li>Personality traits: Perfectionism, high responsibility</li>
              <li>Stress or trauma</li>
              <li>PANDAS (rare childhood onset linked to strep infection)</li>
            </ul>

            <h2 className="text-xl font-semibold">Who is Affected?</h2>
            <ul className="list-disc pl-6">
              <li>1–2% of the global population</li>
              <li>
                Often begins in childhood, adolescence, or early adulthood
              </li>
              <li>Occurs equally in males and females (earlier in males)</li>
            </ul>

            <h2 className="text-xl font-semibold">Diagnosis</h2>
            <ul className="list-disc pl-6">
              <li>Clinical interviews</li>
              <li>DSM-5 criteria</li>
              <li>Use of Yale-Brown Obsessive Compulsive Scale (Y-BOCS)</li>
              <li>Symptoms cause distress or take over 1 hour/day</li>
            </ul>

            <h2 className="text-xl font-semibold">Types of OCD (Subtypes)</h2>
            <ul className="list-disc pl-6">
              <li>Contamination OCD</li>
              <li>Harm OCD</li>
              <li>Sexual/aggressive thoughts OCD</li>
              <li>Scrupulosity (religious/moral OCD)</li>
              <li>Symmetry and order OCD</li>
              <li>Relationship OCD</li>
              <li>“Pure-O” (mostly obsessions, minimal visible compulsions)</li>
            </ul>

            <h2 className="text-xl font-semibold">Treatment Options</h2>
            <h3 className="font-medium">
              1. Cognitive Behavioral Therapy (CBT)
            </h3>
            <p>
              Specifically Exposure and Response Prevention (ERP): exposes
              people to fears while preventing rituals. It’s the gold-standard
              treatment.
            </p>

            <h3 className="font-medium">2. Medications</h3>
            <ul className="list-disc pl-6">
              <li>SSRIs: Fluoxetine, fluvoxamine, sertraline, paroxetine</li>
              <li>
                Clomipramine: A tricyclic antidepressant, effective but more
                side effects
              </li>
              <li>May take 8–12 weeks to show effects</li>
            </ul>

            <h3 className="font-medium">3. Additional Therapies</h3>
            <ul className="list-disc pl-6">
              <li>Family therapy</li>
              <li>Support groups</li>
            </ul>

            <h3 className="font-medium">
              4. Advanced Interventions (for treatment-resistant OCD)
            </h3>
            <ul className="list-disc pl-6">
              <li>Deep Brain Stimulation (DBS)</li>
              <li>Transcranial Magnetic Stimulation (TMS)</li>
              <li>Intensive outpatient or residential programs</li>
            </ul>

            <h2 className="text-xl font-semibold">
              Self-Help & Lifestyle Tips
            </h2>
            <ul className="list-disc pl-6">
              <li>Educate yourself about OCD</li>
              <li>Practice mindfulness and relaxation</li>
              <li>Track symptoms and triggers</li>
              <li>Limit caffeine, avoid sleep deprivation</li>
              <li>Avoid reassurance-seeking and compulsions</li>
            </ul>

            <h2 className="text-xl font-semibold">Living With OCD</h2>
            <p>
              OCD is chronic but manageable. Many improve significantly,
              especially with consistent treatment. Recovery can be gradual —
              patience and persistence are key.
            </p>

            <h2 className="text-xl font-semibold">When to Seek Help</h2>
            <ul className="list-disc pl-6">
              <li>Daily life is disrupted by obsessions or compulsions</li>
              <li>You feel ashamed or isolated due to symptoms</li>
              <li>You feel hopeless or have suicidal thoughts</li>
            </ul>

            <p>
              <strong>Emergency Help:</strong> Contact emergency services or a
              crisis helpline if in immediate danger.
            </p>

            <h2 className="text-xl font-semibold">Myths vs. Facts About OCD</h2>
            <table className="w-full table-auto border text-sm mt-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left">Myth</th>
                  <th className="border px-4 py-2 text-left">Fact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">OCD is about cleanliness</td>
                  <td className="border px-4 py-2">
                    It involves many types of obsessions and compulsions
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    People with OCD know it’s irrational
                  </td>
                  <td className="border px-4 py-2">
                    Insight varies — some have poor insight
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    You can “snap out” of OCD
                  </td>
                  <td className="border px-4 py-2">
                    OCD is a medical condition that needs treatment
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Only adults get OCD</td>
                  <td className="border px-4 py-2">
                    OCD can start in childhood or adolescence
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-xl font-semibold">Conclusion</h2>
            <p>
              OCD is serious but treatable. With ERP, medication, and strong
              support, individuals can reduce symptoms and lead fulfilling
              lives. Early diagnosis and intervention offer the best outcomes.
            </p>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Psychiatry Treatments
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

export default OCD;
