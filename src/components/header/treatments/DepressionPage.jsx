import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/depression.jpg",
  sidebarLinks: [
    { title: "Depression", link: "/depression" },
    { title: "Anxiety", link: "/anxiety" },
    { title: "Bipolar Disorder", link: "/bipolar-disorder" },
    { title: "Schizophrenia", link: "/schizophrenia" },
    { title: "OCD", link: "/ocd" },
  ],
};

const DepressionPage = () => {
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
          Depression: Understanding the Mental Health Condition
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Left Div - Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              <strong>What is Depression?</strong>
              <br />
              Depression, also known as major depressive disorder (MDD), is a
              common and serious mental health condition that negatively affects
              how a person feels, thinks, and acts. It is more than just feeling
              sad or going through a rough patch — it is a persistent condition
              that can interfere with daily functioning and quality of life.
            </p>

            <h2 className="font-semibold text-xl mt-4">Types of Depression</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Major Depressive Disorder (MDD):</strong> Persistent
                sadness or loss of interest lasting at least two weeks.
              </li>
              <li>
                <strong>Persistent Depressive Disorder (Dysthymia):</strong>{" "}
                Chronic, low-level depression lasting two years or more.
              </li>
              <li>
                <strong>Bipolar Disorder:</strong> Alternating periods of
                depression and mania or hypomania.
              </li>
              <li>
                <strong>Seasonal Affective Disorder (SAD):</strong> Depression
                related to changes in seasons.
              </li>
              <li>
                <strong>Postpartum Depression:</strong> Severe, long-lasting
                depression after childbirth.
              </li>
              <li>
                <strong>Premenstrual Dysphoric Disorder (PMDD):</strong> Severe
                mood swings before menstruation.
              </li>
              <li>
                <strong>Situational Depression:</strong> Triggered by life
                events like job loss or divorce.
              </li>
              <li>
                <strong>Atypical Depression:</strong> Includes mood reactivity,
                increased appetite or sleep.
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">
              Symptoms of Depression
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Persistent sadness, emptiness, or hopelessness</li>
              <li>Loss of interest or pleasure in activities once enjoyed</li>
              <li>Changes in appetite and weight</li>
              <li>Sleep disturbances (insomnia or oversleeping)</li>
              <li>Fatigue or loss of energy</li>
              <li>Feelings of worthlessness or excessive guilt</li>
              <li>Difficulty thinking, concentrating, or making decisions</li>
              <li>Physical symptoms like headaches or digestive issues</li>
              <li>Thoughts of death or suicide</li>
            </ul>
            <p className="italic">
              Note: For a diagnosis of MDD, symptoms must last at least two
              weeks and represent a change in previous functioning.
            </p>

            <h2 className="font-semibold text-xl mt-4">
              Causes and Risk Factors
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Genetics:</strong> Family history of depression
                increases risk.
              </li>
              <li>
                <strong>Brain Chemistry:</strong> Imbalances in
                neurotransmitters like serotonin and dopamine.
              </li>
              <li>
                <strong>Hormonal Changes:</strong> Seen in pregnancy, menopause,
                thyroid issues.
              </li>
              <li>
                <strong>Trauma and Stress:</strong> Abuse, loss, or financial
                hardship.
              </li>
              <li>
                <strong>Medical Conditions:</strong> Chronic illness, pain,
                substance abuse.
              </li>
              <li>
                <strong>Personality Traits:</strong> Low self-esteem, pessimism,
                sensitivity to stress.
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Diagnosis</h2>
            <p>Diagnosis is made through:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clinical interviews</li>
              <li>Standardized questionnaires (PHQ-9, HAM-D)</li>
              <li>Symptom observation</li>
              <li>Medical history and lab tests (if needed)</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Treatment Options</h2>
            <p>
              <strong>1. Psychotherapy:</strong> CBT, IPT, MBCT, and
              psychodynamic therapy.
            </p>
            <p>
              <strong>2. Medication:</strong> SSRIs (e.g., fluoxetine), SNRIs,
              MAOIs, tricyclics.
            </p>
            <p>
              <strong>3. Lifestyle Changes:</strong> Exercise, diet, sleep
              hygiene, stress management.
            </p>
            <p>
              <strong>4. Other Treatments:</strong> ECT, TMS, ketamine therapy,
              support groups.
            </p>

            <h2 className="font-semibold text-xl mt-4">
              Prevention and Self-Care
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Strong relationships and social support</li>
              <li>Stress management and early intervention</li>
              <li>Healthy lifestyle: sleep, exercise, nutrition</li>
              <li>Limit alcohol and avoid drugs</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">When to Seek Help</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Symptoms last more than two weeks</li>
              <li>Daily functioning is affected</li>
              <li>You have thoughts of self-harm or suicide</li>
            </ul>
            <p className="text-red-600 font-semibold">
              Crisis Support: If you or someone you know is in immediate danger,
              contact emergency services or a suicide hotline immediately.
            </p>

            <h2 className="font-semibold text-xl mt-4">Conclusion</h2>
            <p>
              Depression is a serious but treatable condition. With proper care
              and support, individuals can lead fulfilling lives. Seeking help
              is a sign of strength—not weakness.
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

export default DepressionPage;
