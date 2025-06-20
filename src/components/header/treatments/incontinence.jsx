import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/incontinence.jpeg", // Replace with your actual image path if different
  sidebarLinks: [
    { title: "ADHD", link: "/ADHD" },
    { title: "Autism", link: "/autism" },
    { title: "Incontinence", link: "/incontinence" },
    { title: "Behaviour Issues", link: "/behaviour-issues" },
    { title: "Conduct Disorder", link: "/conduct-disorder" },
    { title: "Learning Disability", link: "/learning-disability" },
  ],
};

const Incontinence = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Incontinence Therapy: Managing and Overcoming Bladder and Bowel Control Issues
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">What is Incontinence?</h2>
            <p>
              Incontinence is a condition that affects the ability to control the bladder or bowels, leading to unintentional leakage. While often associated with aging, incontinence can occur at any stage of life and can affect both men and women. Common types of incontinence include urinary incontinence, fecal incontinence, and mixed incontinence.
            </p>
            <p>
              At [Your Clinic/Practice Name], we offer specialized therapy designed to help individuals manage and overcome incontinence. Our team works closely with each patient to understand the root causes and develop a personalized treatment plan to enhance their quality of life.
            </p>

            <h2 className="font-semibold text-xl">Types of Incontinence</h2>

            <h3 className="font-semibold text-lg">1. Urinary Incontinence</h3>
            <p>Urinary incontinence involves the loss of bladder control, resulting in unintentional urine leakage. It includes:</p>
            <ul className="list-disc pl-6">
              <li><strong>Stress Incontinence:</strong> Leakage occurs with physical activities like coughing, sneezing, or lifting.</li>
              <li><strong>Urge Incontinence:</strong> A sudden, intense urge to urinate followed by leakage.</li>
              <li><strong>Overflow Incontinence:</strong> Constant dribbling of urine due to incomplete bladder emptying.</li>
              <li><strong>Functional Incontinence:</strong> Caused by mobility or cognitive impairments preventing timely bathroom access.</li>
              <li><strong>Mixed Incontinence:</strong> A combination of stress and urge incontinence symptoms.</li>
            </ul>

            <h3 className="font-semibold text-lg mt-4">2. Fecal Incontinence</h3>
            <p>Fecal incontinence is the inability to control bowel movements, leading to accidental leakage of feces. Causes include:</p>
            <ul className="list-disc pl-6">
              <li><strong>Weakened Pelvic Floor Muscles:</strong> Often due to aging or childbirth.</li>
              <li><strong>Neurological Disorders:</strong> Conditions like stroke or multiple sclerosis can interfere with bowel control.</li>
              <li><strong>Constipation:</strong> Chronic constipation can lead to overflow incontinence.</li>
              <li><strong>Rectal Prolapse or Surgery:</strong> Structural issues or surgical complications can affect bowel control.</li>
            </ul>

            <h2 className="font-semibold text-xl">What Causes Incontinence?</h2>
            <ul className="list-disc pl-6">
              <li><strong>Weak Pelvic Floor Muscles:</strong> Pelvic floor muscles support bladder and bowel control.</li>
              <li><strong>Pregnancy and Childbirth:</strong> Vaginal delivery can stretch pelvic muscles, contributing to urinary incontinence.</li>
              <li><strong>Aging:</strong> Aging can reduce muscle tone and bladder capacity, leading to incontinence.</li>
              <li><strong>Neurological Disorders:</strong> Conditions like multiple sclerosis and Parkinson’s disease can impair bladder and bowel control.</li>
              <li><strong>Obesity:</strong> Excess weight adds pressure on the bladder, increasing incontinence risk.</li>
              <li><strong>Medications:</strong> Diuretics, sedatives, and antidepressants can contribute to incontinence.</li>
              <li><strong>Chronic Conditions:</strong> Diabetes, constipation, and prostate issues are also linked to incontinence.</li>
            </ul>

            <h2 className="font-semibold text-xl">Incontinence Therapy: How We Can Help</h2>
            <p>
              At [Your Clinic/Practice Name], we offer a comprehensive incontinence therapy program to address specific needs and improve bladder and bowel control. Our approach may include:
            </p>

            <h3 className="font-semibold text-lg">1. Pelvic Floor Rehabilitation</h3>
            <p>
              Strengthening the pelvic floor muscles is a primary treatment for urinary and fecal incontinence. Techniques include:
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Pelvic Floor Exercises (Kegels):</strong> Involve contracting and relaxing pelvic muscles to improve control.</li>
              <li><strong>Biofeedback Therapy:</strong> Provides real-time feedback to help patients learn effective muscle contraction and relaxation.</li>
              <li><strong>Electrical Stimulation:</strong> Stimulates pelvic muscles to improve function and tone.</li>
            </ul>

            <h3 className="font-semibold text-lg">2. Bladder and Bowel Training</h3>
            <ul className="list-disc pl-6">
              <li><strong>Timed Voiding:</strong> Regular intervals for urination or bowel movements help increase capacity.</li>
              <li><strong>Urgency Suppression:</strong> Techniques to delay urination or bowel movements when the urge arises.</li>
              <li><strong>Fluid and Diet Management:</strong> Recommendations on reducing irritants like caffeine and alcohol.</li>
            </ul>

            <h3 className="font-semibold text-lg">3. Lifestyle Modifications</h3>
            <ul className="list-disc pl-6">
              <li><strong>Weight Management:</strong> Losing weight reduces pressure on the bladder.</li>
              <li><strong>Smoking Cessation:</strong> Smoking can irritate the bladder and worsen incontinence.</li>
              <li><strong>Avoiding Constipation:</strong> A high-fiber diet and proper hydration can reduce fecal incontinence.</li>
            </ul>

            <h3 className="font-semibold text-lg">4. Medications</h3>
            <ul className="list-disc pl-6">
              <li><strong>Anticholinergic Medications:</strong> Control bladder contractions and reduce urgency.</li>
              <li><strong>Topical Estrogen:</strong> Improves elasticity of pelvic tissues, especially in menopausal women.</li>
              <li><strong>Laxatives or Stool Softeners:</strong> Help regulate bowel movements for those with fecal incontinence due to constipation.</li>
            </ul>

            <h3 className="font-semibold text-lg">5. Surgical Options</h3>
            <p>When conservative treatments fail, surgical options may include:</p>
            <ul className="list-disc pl-6">
              <li><strong>Sling Surgery:</strong> Used for stress incontinence to provide bladder support.</li>
              <li><strong>Bladder Augmentation:</strong> Enhances bladder capacity for severe incontinence.</li>
              <li><strong>Colostomy or Ileostomy:</strong> Surgical interventions for severe fecal incontinence (last resort).</li>
            </ul>

            <h3 className="font-semibold text-lg">6. Counseling and Support</h3>
            <p>
              Incontinence can impact mental health and self-esteem. We offer counseling and emotional support, including support groups, to help individuals manage the emotional aspects of incontinence.
            </p>

            <h2 className="font-semibold text-xl">Benefits of Incontinence Therapy</h2>
            <ul className="list-disc pl-6">
              <li>Improved bladder and bowel control</li>
              <li>Increased quality of life by reducing leakage and accidents</li>
              <li>Reduced reliance on incontinence products</li>
              <li>Improved physical and emotional well-being</li>
            </ul>
          </div>

          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Mental Health Issues and Children</h2>
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

export default Incontinence;
