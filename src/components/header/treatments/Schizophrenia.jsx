import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/schizophrenia.jpeg", // Replace with the correct path
  sidebarLinks: [
    { title: "Depression", link: "/depression" },
    { title: "Anxiety", link: "/anxiety" },
    { title: "Bipolar Disorder", link: "/bipolar-disorder" },
    { title: "Schizophrenia", link: "/schizophrenia" },
    { title: "OCD", link: "/ocd" },
  ],
};

const Schizophrenia = () => {
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
          Schizophrenia: A Complete Guide
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Text Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              <strong>What is Schizophrenia?</strong>
              <br />
              Schizophrenia is a chronic and severe mental disorder that affects
              a person’s thoughts, feelings, and behavior. It involves
              distortions in thinking, perception, emotions, language, and sense
              of self. Individuals may seem out of touch with reality, which can
              be distressing for them and others.
            </p>

            <p>
              Though misunderstood, schizophrenia is treatable, and many people
              live fulfilling lives with proper care.
            </p>

            <h2 className="text-xl font-semibold">
              Key Features of Schizophrenia
            </h2>
            <ul className="list-disc pl-6">
              <li>Psychosis: Hallucinations and delusions</li>
              <li>Disorganized thinking and speech</li>
              <li>Flat emotional expression and social withdrawal</li>
              <li>Cognitive impairments</li>
            </ul>

            <h2 className="text-xl font-semibold">Types of Symptoms</h2>
            <h3 className="font-medium">1. Positive Symptoms:</h3>
            <ul className="list-disc pl-6">
              <li>Hallucinations (e.g., hearing voices)</li>
              <li>Delusions (false beliefs)</li>
              <li>Disorganized speech or behavior</li>
              <li>Catatonic behavior</li>
            </ul>

            <h3 className="font-medium">2. Negative Symptoms:</h3>
            <ul className="list-disc pl-6">
              <li>Affective flattening (limited emotion)</li>
              <li>Avolition (lack of motivation)</li>
              <li>Anhedonia (loss of pleasure)</li>
              <li>Alogia (limited speech)</li>
              <li>Social withdrawal</li>
            </ul>

            <h3 className="font-medium">3. Cognitive Symptoms:</h3>
            <ul className="list-disc pl-6">
              <li>Poor decision-making or planning</li>
              <li>Difficulty concentrating</li>
              <li>Problems with working memory</li>
            </ul>

            <h2 className="text-xl font-semibold">Causes and Risk Factors</h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>Genetics:</strong> Family history increases risk
              </li>
              <li>
                <strong>Brain chemistry:</strong> Dopamine and glutamate
                imbalances
              </li>
              <li>
                <strong>Prenatal issues:</strong> Infections, malnutrition,
                birth complications
              </li>
              <li>
                <strong>Stress/trauma:</strong> Triggers in vulnerable
                individuals
              </li>
              <li>
                <strong>Substance use:</strong> Especially cannabis, LSD, or
                amphetamines
              </li>
            </ul>

            <h2 className="text-xl font-semibold">Who Gets Schizophrenia?</h2>
            <ul className="list-disc pl-6">
              <li>Affects 1 in 100 people globally</li>
              <li>Onset typically between late teens and early 30s</li>
              <li>Slightly more common and earlier in males</li>
            </ul>

            <h2 className="text-xl font-semibold">Diagnosis</h2>
            <p>
              Diagnosed by a psychiatrist using clinical interviews and
              observation, following DSM-5/ICD-11 criteria. Requires two or more
              core symptoms (e.g., hallucinations, delusions) for at least one
              month, with six months of overall disturbance.
            </p>

            <h2 className="text-xl font-semibold">
              Schizophrenia Spectrum Disorders
            </h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>Schizoaffective Disorder:</strong> Schizophrenia with
                mood disorder symptoms
              </li>
              <li>
                <strong>Schizophreniform Disorder:</strong> Similar symptoms but
                lasts 1–6 months
              </li>
              <li>
                <strong>Brief Psychotic Disorder:</strong> Symptoms last less
                than a month
              </li>
              <li>
                <strong>Delusional Disorder:</strong> Persistent delusions
                without full psychosis
              </li>
            </ul>

            <h2 className="text-xl font-semibold">Treatment Options</h2>
            <h3 className="font-medium">1. Medications:</h3>
            <ul className="list-disc pl-6">
              <li>
                <strong>Typical Antipsychotics:</strong> Haloperidol,
                chlorpromazine
              </li>
              <li>
                <strong>Atypical Antipsychotics:</strong> Risperidone,
                olanzapine, quetiapine
              </li>
              <li>
                Manage side effects (e.g., weight gain, movement disorders)
              </li>
            </ul>

            <h3 className="font-medium">2. Psychotherapy and Support:</h3>
            <ul className="list-disc pl-6">
              <li>Cognitive Behavioral Therapy (CBT)</li>
              <li>Family therapy</li>
              <li>Social skills training</li>
              <li>Supported employment and education</li>
            </ul>

            <h3 className="font-medium">3. Hospitalization:</h3>
            <p>May be needed during severe episodes for stabilization.</p>

            <h3 className="font-medium">
              4. Rehabilitation and Community Support:
            </h3>
            <ul className="list-disc pl-6">
              <li>Case management</li>
              <li>Peer support groups</li>
              <li>Vocational training</li>
              <li>Housing assistance</li>
            </ul>

            <h2 className="text-xl font-semibold">Living With Schizophrenia</h2>
            <ul className="list-disc pl-6">
              <li>Stick to prescribed medications</li>
              <li>Avoid substances and manage stress</li>
              <li>Keep a structured daily routine</li>
              <li>Stay connected with support systems</li>
              <li>Track symptoms and triggers</li>
            </ul>

            <h2 className="text-xl font-semibold">Prognosis and Recovery</h2>
            <p>
              Schizophrenia is lifelong, but many improve significantly. About
              20% recover fully, and many others manage symptoms well with
              ongoing support and treatment.
            </p>

            <h2 className="text-xl font-semibold">
              Common Myths About Schizophrenia
            </h2>
            <table className="w-full table-auto border mt-4 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left">Myth</th>
                  <th className="border px-4 py-2 text-left">Reality</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">
                    People with schizophrenia are dangerous
                  </td>
                  <td className="border px-4 py-2">
                    Most are not violent and are more likely to be victims
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    It means a “split personality”
                  </td>
                  <td className="border px-4 py-2">
                    It does not involve multiple personalities
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    People can't live normal lives
                  </td>
                  <td className="border px-4 py-2">
                    Many live stable, fulfilling lives with treatment
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    It’s caused by bad parenting
                  </td>
                  <td className="border px-4 py-2">
                    It is a brain-based illness, not due to parenting
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-xl font-semibold">When to Seek Help</h2>
            <ul className="list-disc pl-6">
              <li>Hallucinations or delusions</li>
              <li>Paranoid or disorganized behavior</li>
              <li>Social withdrawal or severe confusion</li>
              <li>Suicidal thoughts or danger to others</li>
            </ul>

            <p>
              <strong>Emergency Help:</strong> If there is immediate danger,
              call emergency services or a mental health crisis line.
            </p>

            <h2 className="text-xl font-semibold">Conclusion</h2>
            <p>
              Schizophrenia is a serious but manageable condition. With early
              diagnosis, medical care, therapy, and support, individuals can
              live meaningful and independent lives. Compassion and
              understanding are vital in helping those affected find hope and
              stability.
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

export default Schizophrenia;
