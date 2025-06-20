import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/erectiledysfunction.jpeg", // Replace with your actual image path if different
  sidebarLinks: [
    {
      title: "Premature Ejaculation",
      link: "/Premature-Ejaculation",
    },
    { title: "Erectile Dysfunction", link: "/Erectile-Dysfunction" },
    { title: "Reduced Or High Libido", link: "/reduced-high-libido" },
    {
      title: "Anorgasmia",
      link: "/Anorgasmia",
    },
    {
      title: "DHAT Syndrome",
      link: "/DHAT-Syndrome",
    },
  ],
};

const ErectileDysfunction = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Sexual Wellness Program for Erectile Dysfunction
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">What is Erectile Dysfunction (ED)?</h2>
            <p>
              Erectile Dysfunction (ED), commonly referred to as impotence, is a condition where a man consistently struggles to achieve or maintain an erection sufficient for sexual intercourse...
            </p>
            <p>
              At [Your Clinic/Practice Name], we understand how distressing and frustrating erectile dysfunction can be...
            </p>

            <h2 className="font-semibold text-xl">Why Choose Our Sexual Wellness Program for Erectile Dysfunction?</h2>
            <ul className="list-disc pl-6">
              <li>Understand the underlying causes of ED</li>
              <li>Reduce anxiety and stress associated with ED</li>
              <li>Improve communication with your partner</li>
              <li>Regain confidence and self-esteem</li>
              <li>Enhance sexual satisfaction through techniques and strategies</li>
            </ul>

            <h2 className="font-semibold text-xl">What Causes Erectile Dysfunction?</h2>
            <h3 className="font-semibold">Physical Causes:</h3>
            <ul className="list-disc pl-6">
              <li>Cardiovascular Disease</li>
              <li>Diabetes</li>
              <li>Hormonal Imbalances</li>
              <li>Obesity</li>
              <li>Medications</li>
              <li>Neurological Conditions</li>
            </ul>

            <h3 className="font-semibold">Psychological Causes:</h3>
            <ul className="list-disc pl-6">
              <li>Performance Anxiety</li>
              <li>Depression</li>
              <li>Stress and Anxiety</li>
              <li>Relationship Issues</li>
              <li>Past Trauma or Experiences</li>
            </ul>

            <h2 className="font-semibold text-xl">How Our Sexual Wellness Program Helps Treat Erectile Dysfunction</h2>
            <h3 className="font-semibold text-lg">1. Initial Assessment and Goal Setting</h3>
            <p>
              A comprehensive review of your symptoms, history, and goals to tailor a personalized treatment plan.
            </p>

            <h3 className="font-semibold text-lg">2. Education and Awareness</h3>
            <p>
              Learn about the physical and emotional factors affecting arousal and erection to feel empowered in managing ED.
            </p>

            <h3 className="font-semibold text-lg">3. Therapeutic Techniques for Treating ED</h3>
            <ul className="list-disc pl-6">
              <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Reduce negative thought patterns and performance anxiety.</li>
              <li><strong>Mindfulness and Relaxation:</strong> Manage stress and remain present during intimacy.</li>
              <li><strong>Sex Therapy:</strong> Address relationship and intimacy concerns.</li>
              <li><strong>Pelvic Floor Exercises:</strong> Improve erectile control and blood flow.</li>
              <li><strong>Lifestyle Modifications:</strong> Improve overall health to support erectile function.</li>
            </ul>

            <h3 className="font-semibold text-lg">4. Medical Treatments (If Applicable)</h3>
            <ul className="list-disc pl-6">
              <li><strong>Oral Medications:</strong> Such as Viagra, Cialis, and Levitra.</li>
              <li><strong>Testosterone Therapy:</strong> If low testosterone is a contributing factor.</li>
              <li><strong>Vacuum Devices:</strong> To stimulate erection.</li>
              <li><strong>Penile Injections or Implants:</strong> For more severe, treatment-resistant ED.</li>
            </ul>

            <h3 className="font-semibold text-lg">5. Couples Therapy (Optional)</h3>
            <p>
              Improve intimacy and emotional connection by working together through sexual and relationship challenges.
            </p>

            <h3 className="font-semibold text-lg">6. Ongoing Support and Progress Monitoring</h3>
            <p>
              We regularly evaluate your progress and adjust the plan as needed for lasting results and support.
            </p>

            <h2 className="font-semibold text-xl">What Are the Benefits of the Sexual Wellness Program for Erectile Dysfunction?</h2>
            <ul className="list-disc pl-6">
              <li>Improved erectile function</li>
              <li>Reduced anxiety and stress</li>
              <li>Enhanced sexual satisfaction</li>
              <li>Stronger emotional intimacy</li>
              <li>Increased confidence and well-being</li>
              <li>Better overall health through lifestyle improvement</li>
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

export default ErectileDysfunction;
