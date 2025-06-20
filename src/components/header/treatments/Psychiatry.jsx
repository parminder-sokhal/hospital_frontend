import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/psychiatry.jpeg", // You may want to update this image too
  sidebarLinks: [
    { title: "Depression", link: "/depression" },
    { title: "Anxiety", link: "/anxiety" },
    { title: "Bipolar Disorder", link: "/bipolar-disorder" },
    { title: "Schizophrenia", link: "/schizophrenia" },
    { title: "OCD", link: "/ocd" },
  ],
};

const Psychiatry = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* ✅ Top Div */}
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* ✅ Bottom Div */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Psychiatry: A Comprehensive Guide
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Left Div - Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              <strong>What is Psychiatry?</strong>
              <br />
              Psychiatry is a branch of medicine focused on the diagnosis,
              treatment, and prevention of mental, emotional, and behavioral
              disorders. Psychiatrists are medical doctors (MD or DO) who
              specialize in mental health and are qualified to assess both the
              mental and physical aspects of psychological problems.
            </p>
            <p>
              Unlike psychologists, psychiatrists can prescribe medications,
              order or interpret medical tests, and provide a wide range of
              treatments, including psychotherapy.
            </p>

            <h2 className="font-semibold text-xl mt-4">
              What Do Psychiatrists Do?
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Evaluate mental and emotional health</li>
              <li>
                Diagnose mental disorders using clinical interviews, history,
                and tools (e.g., DSM-5)
              </li>
              <li>Prescribe and manage medications</li>
              <li>Provide psychotherapy and counseling</li>
              <li>
                Monitor physical health in relation to psychiatric illness
              </li>
              <li>Collaborate for comprehensive care</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">
              Common Conditions Treated by Psychiatrists
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Depression</li>
              <li>Anxiety Disorders</li>
              <li>Bipolar Disorder</li>
              <li>Schizophrenia</li>
              <li>PTSD</li>
              <li>OCD</li>
              <li>ADHD</li>
              <li>Eating Disorders</li>
              <li>Substance Use Disorders</li>
              <li>Sleep & Personality Disorders</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">
              Subspecialties in Psychiatry
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Child and Adolescent Psychiatry</li>
              <li>Geriatric Psychiatry</li>
              <li>Addiction Psychiatry</li>
              <li>Forensic Psychiatry</li>
              <li>Consultation-Liaison Psychiatry</li>
              <li>Neuropsychiatry</li>
              <li>Emergency Psychiatry</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Methods of Diagnosis</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clinical interviews and mental status exams</li>
              <li>Standardized questionnaires</li>
              <li>Neuroimaging and lab tests</li>
              <li>DSM-5 or ICD-11 criteria</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Treatment Approaches</h2>
            <p>
              <strong>1. Medication</strong> – Antidepressants, antipsychotics,
              mood stabilizers, anxiolytics, and stimulants.
            </p>
            <p>
              <strong>2. Psychotherapy</strong> – CBT, DBT, Psychodynamic, IPT,
              and more.
            </p>
            <p>
              <strong>3. Other Treatments</strong> – ECT, rTMS, VNS, Ketamine
              infusions.
            </p>

            <h2 className="font-semibold text-xl mt-4">
              The Role of Psychiatry in Integrated Healthcare
            </h2>
            <p>
              Psychiatrists work with psychologists, GPs, neurologists, and
              others to deliver holistic care.
            </p>

            <h2 className="font-semibold text-xl mt-4">
              Becoming a Psychiatrist
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Earn an MD or DO (4 years)</li>
              <li>Complete a residency in psychiatry (4 years)</li>
              <li>Optional: Fellowships in subspecialties (1–2 years)</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">
              When to See a Psychiatrist
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Persistent sadness, anxiety, or mood swings</li>
              <li>Thoughts of self-harm or suicide</li>
              <li>Substance abuse problems</li>
              <li>Symptoms interfering with daily life</li>
              <li>Ineffectiveness of therapy alone</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">
              Psychiatry vs. Psychology
            </h2>
            <table className="table-auto w-full mt-4 border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Aspect</th>
                  <th className="px-4 py-2">Psychiatry</th>
                  <th className="px-4 py-2">Psychology</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Degree</td>
                  <td className="border px-4 py-2">MD or DO</td>
                  <td className="border px-4 py-2">PhD or PsyD</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Can prescribe</td>
                  <td className="border px-4 py-2">✔️ Yes</td>
                  <td className="border px-4 py-2">❌ No</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Focus</td>
                  <td className="border px-4 py-2">Medical + Psychological</td>
                  <td className="border px-4 py-2">Psychological only</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Treatments</td>
                  <td className="border px-4 py-2">Medication + Therapy</td>
                  <td className="border px-4 py-2">Therapy only</td>
                </tr>
              </tbody>
            </table>

            <h2 className="font-semibold text-xl mt-4">Conclusion</h2>
            <p>
              Psychiatry plays a vital role in healthcare, addressing the
              intricate connections between mind and body. If you or someone you
              know is facing mental health challenges, seeking help from a
              psychiatrist could be a life-changing step.
            </p>
          </div>

          {/* ✅ Right Div - Sidebar */}
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

export default Psychiatry;
