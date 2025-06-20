import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/bipolarDisorder.jpeg", // Replace with actual image path
  sidebarLinks: [
    { title: "Depression", link: "/depression" },
    { title: "Anxiety", link: "/anxiety" },
    { title: "Bipolar Disorder", link: "/bipolar-disorder" },
    { title: "Schizophrenia", link: "/schizophrenia" },
    { title: "OCD", link: "/ocd" },
  ],
};

const BipolarDisorder = () => {
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
          Bipolar Disorder: A Complete Guide
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Text Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              <strong>What is Bipolar Disorder?</strong>
              <br />
              Bipolar Disorder is a chronic mental health condition
              characterized by extreme mood swings that include emotional highs
              (mania or hypomania) and lows (depression). These shifts in mood,
              energy, and activity levels can severely impact a person's ability
              to function in daily life.
            </p>

            <p>
              While it is a lifelong condition, with the right treatment and
              support, people with bipolar disorder can live stable, productive
              lives.
            </p>

            <h2 className="text-xl font-semibold">Types of Bipolar Disorder</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Bipolar I Disorder:</strong> At least one manic episode
                lasting 7+ days or requiring hospitalization. Often includes
                depressive episodes and psychotic symptoms.
              </li>
              <li>
                <strong>Bipolar II Disorder:</strong> At least one major
                depressive and one hypomanic episode. No full manic episodes.
              </li>
              <li>
                <strong>Cyclothymic Disorder:</strong> Milder but chronic mood
                fluctuations lasting 2+ years (1 year in children).
              </li>
              <li>
                <strong>Other Specified/Unspecified:</strong> Bipolar-like
                symptoms that don't meet standard diagnostic criteria.
              </li>
            </ul>

            <h2 className="text-xl font-semibold">
              Symptoms of Bipolar Disorder
            </h2>
            <h3 className="font-medium">Manic Episode (Highs):</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Elevated or irritable mood</li>
              <li>Inflated self-esteem or grandiosity</li>
              <li>Reduced need for sleep</li>
              <li>Rapid speech or racing thoughts</li>
              <li>Impulsive or risky behavior</li>
              <li>Psychotic symptoms in severe cases</li>
            </ul>

            <h3 className="font-medium">Hypomanic Episode:</h3>
            <p>
              Less severe than mania, often unrecognized. May appear as
              increased energy or productivity without major impairment.
            </p>

            <h3 className="font-medium">Depressive Episode (Lows):</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Persistent sadness or emptiness</li>
              <li>Low energy or fatigue</li>
              <li>Loss of interest in usual activities</li>
              <li>Sleep or appetite changes</li>
              <li>Feelings of guilt or hopelessness</li>
              <li>Suicidal thoughts or behaviors</li>
            </ul>

            <p className="italic">
              Note: Mixed episodes involve symptoms of both mania and depression
              simultaneously.
            </p>

            <h2 className="text-xl font-semibold">Causes and Risk Factors</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Genetics:</strong> Strong family history link
              </li>
              <li>
                <strong>Brain chemistry:</strong> Neurotransmitter imbalances
                (dopamine, serotonin)
              </li>
              <li>
                <strong>Stress and trauma:</strong> Can trigger episodes
              </li>
              <li>
                <strong>Substance use:</strong> May worsen symptoms
              </li>
              <li>
                <strong>Sleep disruption:</strong> Can destabilize mood
              </li>
            </ul>

            <h2 className="text-xl font-semibold">Diagnosis</h2>
            <p>
              Diagnosed by a mental health professional using clinical
              interviews, history, DSM-5/ICD-11 criteria, and tools like the
              Mood Disorder Questionnaire (MDQ). Often misdiagnosed as
              depression, especially in Bipolar II.
            </p>

            <h2 className="text-xl font-semibold">
              Treatment of Bipolar Disorder
            </h2>
            <h3 className="font-medium">1. Medications:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mood stabilizers (e.g., lithium)</li>
              <li>Antipsychotics (e.g., quetiapine, olanzapine)</li>
              <li>Antidepressants (used cautiously with stabilizers)</li>
              <li>Anticonvulsants (e.g., valproate, lamotrigine)</li>
              <li>Benzodiazepines (short-term use for agitation)</li>
            </ul>

            <h3 className="font-medium">2. Psychotherapy:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cognitive Behavioral Therapy (CBT)</li>
              <li>Interpersonal and Social Rhythm Therapy (IPSRT)</li>
              <li>Family-focused therapy</li>
              <li>Psychoeducation for patients and families</li>
            </ul>

            <h3 className="font-medium">3. Lifestyle Management:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintain consistent sleep and routines</li>
              <li>Exercise regularly</li>
              <li>Avoid drugs and alcohol</li>
              <li>Track moods and triggers</li>
              <li>Build a strong support system</li>
            </ul>

            <h3 className="font-medium">4. Other Treatments:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Electroconvulsive Therapy (ECT) for severe cases</li>
              <li>
                Transcranial Magnetic Stimulation (TMS) for bipolar depression
              </li>
            </ul>

            <h2 className="text-xl font-semibold">
              Living With Bipolar Disorder
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Adhere to treatment plans and medications</li>
              <li>Avoid self-medication with alcohol or drugs</li>
              <li>Recognize warning signs of mood shifts</li>
              <li>Have an emergency plan</li>
              <li>Engage caregivers in treatment planning</li>
            </ul>

            <h3 className="font-medium">Support Resources:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bipolar support groups (online and offline)</li>
              <li>Mental health organizations (NAMI, DBSA)</li>
              <li>Crisis lines and helplines</li>
            </ul>

            <h2 className="text-xl font-semibold">When to Seek Help</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Extreme mood changes affecting function</li>
              <li>Signs of mania, depression, or risky behavior</li>
              <li>Suicidal thoughts or actions</li>
              <li>Difficulty coping at home, school, or work</li>
            </ul>
            <p className="text-red-600 font-semibold">
              Emergency Help: If someone is in immediate danger, contact
              emergency services or a suicide prevention hotline right away.
            </p>

            <h2 className="text-xl font-semibold">Prognosis and Outlook</h2>
            <p>
              Bipolar disorder is lifelong, but with early diagnosis, consistent
              treatment, and lifestyle support, most people lead fulfilling
              lives with well-managed symptoms.
            </p>

            <h2 className="text-xl font-semibold">Conclusion</h2>
            <p>
              Bipolar disorder is a medical condition—not a character flaw. With
              understanding, compassion, and comprehensive care, those affected
              can thrive and succeed.
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

export default BipolarDisorder;
