import React from "react";

const therapyPackages = [
  { name: "Psychotherapy", cost: 1800, sixSession: 9720, tenSession: 15300 },
  { name: "CBT", cost: 1800, sixSession: 9720, tenSession: 15300 },
  { name: "DBT", cost: 1800, sixSession: 9720, tenSession: 15300 },
  { name: "MET", cost: 1800, sixSession: 9720, tenSession: 15300 },
  { name: "RPT", cost: 1800, sixSession: 9720, tenSession: 15300 },
  { name: "ST", cost: 1800, sixSession: 9720, tenSession: 15300 },
  { name: "Sex Therapy", cost: 1800, sixSession: 9720, tenSession: 15300 },
  { name: "Hypnotherapy", cost: 2000, sixSession: 10800, tenSession: 17000 },
  {
    name: "Family/Couple Therapy",
    cost: 2500,
    sixSession: 13500,
    tenSession: 21250,
  },
  { name: "MBT", cost: 1200, sixSession: 6480, tenSession: 10200 },
  { name: "JPMR", cost: 1200, sixSession: 6480, tenSession: 10200 },
];

const counsellingPackages = [
  "Career Counselling: ₹1500",
  "Family Counselling: ₹2500",
  "Personality Development Counselling: ₹1500",
  "General Health Counselling: ₹1500",
  "Play Therapy: ₹1500",
  "Sexual Therapy - ₹1800",
  "Aversion Therapy - ₹1500",
  "Group Therapy - ₹2000",
  "Supportive Psychotherapy - ₹1500",
  "CBT & DBT - ₹1800",
  "Hypnotherapy - ₹2000",
];

const relaxationExercises = [
  "MBT - ₹1200",
  "JPMR - ₹1200",
  "Deep Breathing - ₹800",
  "Guided Imagery - ₹1500",
  "Mindfulness - ₹1500",
  "Neuro-biofeedback - ₹1500",
  "Meditation - ₹800",
];

const admissionRoomCharges = [
  "Private Room - ₹3500",
  "Luxury Room - ₹5500",
];

const TherapyCounselling = () => {
  return (
    <div className="text-gray-800">
      {/* Banner */}
      <div className="flex justify-center  w-full mt-34 sm:h-110 h-52 bg-cover bg-no-repeat bg-center bg-[url('/pictures/cover2.jpeg')]">
        
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="sm:text-5xl text-3xl  font-bold mb-10 text-center">
          Therapy & Counselling Services  
        </h1>
        {/* Counselling Packages */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            Counselling Packages
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            {counsellingPackages.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Relaxation Exercises */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            Relaxation Exercises
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            {relaxationExercises.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Psychological Testing */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            Psychological Testing
          </h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-blue-600">
              Rating Scales – ₹500
            </h3>
            <p className="ml-4 mt-1 text-sm">
              BDI, BAI, HAM-A, HAM-D, BPRS, Beck Suicide Intent Scale, Y-BOCS,
              Panic Disorder Severity Scale, Liebowitz Social Anxiety Scale,
              Short PTSD Rating Scale, SANS, SAPS, GHQ, MOCE, MMSE, Socrates A
              D, Catatonia Rating Scale, Perceived Stress Scale
            </p>
          </div>
          <ul className="list-disc ml-6 space-y-2">
            <li>Personality Test (IPDE, EPQ, NEO, ZAN, BPD, BPQ) – ₹1500</li>
            <li>16 PF – ₹2500</li>
            <li>Rorschach & TAT – ₹4000</li>
            <li>
              IQ Testing (Bhatia’s Battery, MISIC, VSMS, DST, BKT, SFBT) – ₹3000
            </li>
            <li>PGI Memory Scale – ₹2000</li>
            <li>PGI BBD – ₹3500</li>
          </ul>
        </section>

        {/* Therapy Packages Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            Therapy Package (Per Session)
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-blue-300">
              <thead className="bg-blue-100 text-blue-900">
                <tr>
                  <th className="border px-4 py-2">Therapy Name</th>
                  <th className="border px-4 py-2">Per Session</th>
                  <th className="border px-4 py-2">6 Sessions (10% off)</th>
                  <th className="border px-4 py-2">10 Sessions (15% off)</th>
                </tr>
              </thead>
              <tbody>
                {therapyPackages.map((therapy, idx) => (
                  <tr key={idx} className="text-center">
                    <td className="border px-4 py-2">{therapy.name}</td>
                    <td className="border px-4 py-2">₹{therapy.cost}</td>
                    <td className="border px-4 py-2">₹{therapy.sixSession}</td>
                    <td className="border px-4 py-2">₹{therapy.tenSession}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Admission Room Charges */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            Admission Room Charges
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            {admissionRoomCharges.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TherapyCounselling;
