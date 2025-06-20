import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/Anorgasmia.jpeg", // Update if you have a specific image for Anorgasmia
  sidebarLinks: [
    { title: "Premature Ejaculation", link: "/Premature-Ejaculation" },
    { title: "Erectile Dysfunction", link: "/Erectile-Dysfunction" },
    { title: "Reduced Or High Libido", link: "/reduced-high-libido" },
    { title: "Anorgasmia", link: "/Anorgasmia" },
    { title: "DHAT Syndrome", link: "/DHAT-Syndrome" },
  ],
};

const Anorgasmia = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Anorgasmia: Understanding and Overcoming Orgasmic Dysfunction
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">Introduction</h2>
            <p>
              Anorgasmia, the persistent inability to achieve orgasm despite
              adequate sexual stimulation and desire, is a common yet often
              misunderstood condition. It can affect individuals of all genders
              and can have significant emotional and relational impacts.
            </p>

            <h2 className="font-semibold text-xl">What is Anorgasmia?</h2>
            <p>
              Anorgasmia is defined as the inability to reach orgasm during
              sexual activity. It may be lifelong or acquired and can occur in
              both men and women.
            </p>

            <h2 className="font-semibold text-xl">Types of Anorgasmia</h2>
            <ul className="list-disc pl-6">
              <li>Primary Anorgasmia: Individuals have never experienced orgasm.</li>
              <li>
                Secondary Anorgasmia: Individuals who previously experienced
                orgasm find themselves unable to do so.
              </li>
            </ul>

            <h2 className="font-semibold text-xl">Causes of Anorgasmia</h2>
            <h3 className="font-semibold text-lg">1. Psychological Factors</h3>
            <ul className="list-disc pl-6">
              <li>Stress and Anxiety: Performance anxiety or stress can inhibit sexual response.</li>
              <li>Depression: Mental health issues can significantly affect libido and function.</li>
              <li>Past Trauma: Sexual abuse or trauma can lead to difficulties in achieving orgasm.</li>
            </ul>

            <h3 className="font-semibold text-lg">2. Medical Conditions</h3>
            <ul className="list-disc pl-6">
              <li>Hormonal Imbalances: Low testosterone or estrogen levels can impact sexual response.</li>
              <li>Chronic Illnesses: Diabetes, MS, or cardiovascular disease can interfere with sexual function.</li>
              <li>Neurological Disorders: These may affect the body’s ability to respond sexually.</li>
            </ul>

            <h3 className="font-semibold text-lg">3. Medications</h3>
            <ul className="list-disc pl-6">
              <li>Antidepressants, especially SSRIs, can cause sexual dysfunction.</li>
              <li>Hormonal Treatments like birth control may also affect orgasm.</li>
            </ul>

            <h3 className="font-semibold text-lg">4. Relationship Issues</h3>
            <ul className="list-disc pl-6">
              <li>Poor Communication: A lack of openness about sexual needs can cause problems.</li>
              <li>Emotional Disconnect: Conflict or unresolved issues can impact intimacy.</li>
            </ul>

            <h2 className="font-semibold text-xl">Symptoms of Anorgasmia</h2>
            <ul className="list-disc pl-6">
              <li>Inability to achieve orgasm.</li>
              <li>Frustration or distress regarding sexual performance.</li>
              <li>Reduced sexual desire and arousal.</li>
              <li>Feelings of inadequacy or low self-esteem about sexual health.</li>
            </ul>

            <h2 className="font-semibold text-xl">Effects of Anorgasmia</h2>
            <ul className="list-disc pl-6">
              <li>Strain in relationships due to unmet needs or expectations.</li>
              <li>Emotional distress, including shame or frustration.</li>
              <li>Decreased overall sexual satisfaction and intimacy.</li>
            </ul>

            <h2 className="font-semibold text-xl">Treatment Options</h2>
            <h3 className="font-semibold text-lg">1. Medical Evaluation</h3>
            <p>
              A comprehensive check-up is essential to detect underlying medical
              or hormonal causes.
            </p>

            <h3 className="font-semibold text-lg">2. Therapy</h3>
            <ul className="list-disc pl-6">
              <li>Cognitive Behavioral Therapy (CBT): Addresses mental patterns and anxieties.</li>
              <li>Sex Therapy: Improves communication and intimacy with a partner.</li>
              <li>Mindfulness & Relaxation: Reduces stress and enhances presence in the moment.</li>
            </ul>

            <h3 className="font-semibold text-lg">3. Lifestyle Changes</h3>
            <p>
              Regular physical activity, a healthy diet, and stress reduction techniques
              can improve overall well-being and sexual function.
            </p>

            <h3 className="font-semibold text-lg">4. Medication</h3>
            <p>
              In select cases, medications may be prescribed to address hormonal or
              psychological contributors.
            </p>

            <h2 className="font-semibold text-xl">Why Choose Our Services?</h2>
            <ul className="list-disc pl-6">
              <li>Experienced Professionals: Specialists in sexual and mental health care.</li>
              <li>Holistic Approach: Addressing both mind and body.</li>
              <li>Confidential Environment: Your privacy and comfort come first.</li>
            </ul>
          </div>

          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Sexual Wellness Program
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

export default Anorgasmia;
