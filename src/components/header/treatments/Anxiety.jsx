import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const data = {
  bgImage: "/pictures/Anxiety.jpg", // Replace with actual image path
  sidebarLinks: [
    { title: "Depression", link: "/depression" },
    { title: "Anxiety", link: "/anxiety" },
    { title: "Bipolar Disorder", link: "/bipolar-disorder" },
    { title: "Schizophrenia", link: "/schizophrenia" },
    { title: "OCD", link: "/ocd" },
  ],
};

const Anxiety = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* ✅ Top Image Section */}
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* ✅ Content Section */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Anxiety: A Complete Guide
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              <strong>What is Anxiety?</strong>
              <br />
              Anxiety is a natural human response to stress, characterized by
              feelings of worry, nervousness, or fear. While occasional anxiety
              is a normal part of life, anxiety disorders involve intense,
              excessive, and prolonged fear or anxiety that interferes with
              daily activities.
            </p>

            <p>
              Anxiety disorders are the most common mental health conditions,
              affecting people of all ages and backgrounds. Fortunately, they
              are highly treatable with the right support and intervention.
            </p>

            <h2 className="font-semibold text-xl mt-4">
              Difference Between Normal Anxiety and Anxiety Disorders
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Normal Anxiety:</strong> Temporary and situational; does
                not interfere significantly with life.
              </li>
              <li>
                <strong>Anxiety Disorder:</strong> Persistent, impairs daily
                functioning, can occur without clear cause, and is hard to
                control without treatment.
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">
              Types of Anxiety Disorders
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Generalized Anxiety Disorder (GAD):</strong> Excessive
                worry lasting 6 months or more.
              </li>
              <li>
                <strong>Panic Disorder:</strong> Recurrent panic attacks with
                intense physical symptoms.
              </li>
              <li>
                <strong>Social Anxiety Disorder:</strong> Fear of judgment or
                embarrassment in social settings.
              </li>
              <li>
                <strong>Specific Phobias:</strong> Extreme fear of objects or
                situations like heights or flying.
              </li>
              <li>
                <strong>Agoraphobia:</strong> Fear of places where escape might
                be difficult.
              </li>
              <li>
                <strong>Separation Anxiety Disorder:</strong> Fear of separation
                from loved ones.
              </li>
              <li>
                <strong>Selective Mutism:</strong> Inability to speak in certain
                social situations.
              </li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Symptoms of Anxiety</h2>
            <h3 className="font-medium">Psychological Symptoms:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Excessive worry</li>
              <li>Restlessness or feeling on edge</li>
              <li>Difficulty concentrating</li>
              <li>Irritability</li>
              <li>Anticipating the worst</li>
            </ul>

            <h3 className="font-medium mt-4">Physical Symptoms:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rapid heart rate or palpitations</li>
              <li>Sweating</li>
              <li>Muscle tension</li>
              <li>Trembling</li>
              <li>Dizziness or lightheadedness</li>
              <li>Nausea or stomach issues</li>
              <li>Fatigue</li>
              <li>Insomnia or poor sleep</li>
            </ul>
            <p className="italic">
              Note: Anxiety can mimic physical illness, leading people to seek
              medical rather than psychological help.
            </p>

            <h2 className="font-semibold text-xl mt-4">
              Causes and Risk Factors
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Genetics and family history</li>
              <li>Neurotransmitter imbalances (e.g., serotonin, GABA)</li>
              <li>
                Personality traits such as perfectionism or high sensitivity
              </li>
              <li>Trauma or stressful life events</li>
              <li>Chronic illnesses or hormone-related conditions</li>
              <li>Substance use (e.g., caffeine, alcohol)</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">Diagnosis</h2>
            <p>
              Typically done through clinical interviews, diagnostic criteria
              (DSM-5 or ICD-11), and standardized tools like GAD-7 or the
              Hamilton Anxiety Scale. Medical tests may help rule out physical
              causes.
            </p>

            <h2 className="font-semibold text-xl mt-4">Treatment Options</h2>

            <p>
              <strong>1. Psychotherapy:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cognitive Behavioral Therapy (CBT)</li>
              <li>Exposure Therapy</li>
              <li>Acceptance and Commitment Therapy (ACT)</li>
              <li>Mindfulness-Based Therapy</li>
            </ul>

            <p>
              <strong>2. Medications:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>SSRIs (e.g., sertraline)</li>
              <li>SNRIs (e.g., venlafaxine)</li>
              <li>Benzodiazepines (short-term use only)</li>
              <li>Beta-blockers (for physical symptoms)</li>
              <li>Buspirone</li>
            </ul>

            <p>
              <strong>3. Lifestyle and Self-Help:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Exercise regularly</li>
              <li>Eat a healthy diet and stay hydrated</li>
              <li>Limit caffeine and alcohol</li>
              <li>Practice relaxation techniques</li>
              <li>Journaling and gratitude practices</li>
              <li>Establish a sleep routine</li>
            </ul>

            <p>
              <strong>4. Support Systems:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Support groups</li>
              <li>Family therapy</li>
              <li>Educational support for loved ones</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">
              Tips for Managing Anxiety
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Break tasks into small steps</li>
              <li>Practice mindfulness daily</li>
              <li>Challenge irrational thoughts</li>
              <li>Set achievable goals</li>
              <li>Stay connected socially</li>
              <li>Face fears gradually instead of avoiding them</li>
            </ul>

            <h2 className="font-semibold text-xl mt-4">When to Seek Help</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Anxiety is persistent and overwhelming</li>
              <li>Interferes with daily life or work</li>
              <li>Panic attacks or physical distress occur</li>
              <li>Substance use is a coping mechanism</li>
              <li>Thoughts of self-harm or hopelessness</li>
            </ul>
            <p className="text-red-600 font-semibold">
              Emergency Help: If you're in crisis or feeling suicidal, contact
              emergency services or a suicide prevention helpline immediately.
            </p>

            <h2 className="font-semibold text-xl mt-4">
              Prognosis and Outlook
            </h2>
            <p>
              With proper treatment, most people recover or manage anxiety well.
              Early diagnosis improves outcomes and prevents complications such
              as depression or substance misuse.
            </p>

            <h2 className="font-semibold text-xl mt-4">Conclusion</h2>
            <p>
              Anxiety is one of the most prevalent — yet treatable — mental
              health conditions. With education, support, and the right care, it
              is entirely possible to live a calm, confident, and fulfilling
              life.
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

export default Anxiety;
