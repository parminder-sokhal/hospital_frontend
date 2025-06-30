import React from "react";

const AboutHeading = () => {
  return (
    <div className="bg-white px-6 sm:px-8 md:px-12 py-5 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full">
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          <strong>Loona Hospital</strong> is a dedicated mental health and
          wellness center offering expert care in psychiatry, sexual wellness,
          and de-addiction. Our experienced team provides personalized treatment
          in a safe & supportive environment—helping you heal, grow, and thrive.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          Our team consists of experienced psychiatrists, clinical
          psychologists, therapists, and support staff who work collaboratively
          to offer personalized treatment plans tailored to meet the unique
          needs of each patient. We understand that every journey is different,
          and we are here to support you every step of the way.
        </p>

        <h3 className="text-3xl font-bold text-blue-600 mb-4">
          Welcome to Loona Hospital
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          At Loona Hospital, we prioritize mental health above all else. Our
          dedicated hospital is committed to providing compassionate care and
          comprehensive treatment for individuals facing a wide range of mental
          health challenges. With a focus on creating a supportive and healing
          environment, we aim to empower our patients on their journey toward
          mental wellness.
        </p>

        <h3 className="text-3xl font-bold text-blue-600 mb-4">
          Comprehensive Services
        </h3>
        <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed mb-12">
          <li>
            <span className="font-semibold text-black">
              Individual Therapy:
            </span>{" "}
            Tailored sessions to address personal mental health issues.
          </li>
          <li>
            <span className="font-semibold text-black">Group Therapy:</span>{" "}
            Supportive group sessions fostering community and shared
            experiences.
          </li>
          <li>
            <span className="font-semibold text-black">
              Medication Management:
            </span>{" "}
            Careful evaluation and management of psychiatric medications.
          </li>
          <li>
            <span className="font-semibold text-black">Family Therapy:</span>{" "}
            Involving family members in the treatment process to enhance support
            systems.
          </li>
        </ul>

        <h3 className="text-3xl font-bold text-blue-600 mb-4">
          Training and Expertise
        </h3>
        <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed mb-12">
          <li>
            <span className="font-semibold text-black">
              Certified Training in Addiction Treatment:
            </span>{" "}
            Conducted by the NDDTC, AIIMS (New Delhi) in November 2023.
          </li>
          <li className="font-semibold text-black">
            Internship program for psychology students
          </li>
        </ul>

        <h3 className="text-3xl font-bold text-blue-600 mb-4">
          Memberships and Affiliations
        </h3>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-12">
          <div className="lg:w-1/2">
            <ul className="list-disc pl-6 flex flex-col gap-5 text-gray-900 text-lg leading-relaxed">
              <li>Indian Association for Sexology</li>
              <li>
                International Association of Sexual Medicine Practitioners
                (IASMP-MM)
              </li>
              <li>Indian Psychiatric Society (IPS)</li>
              <li>Indian Association of Private Psychiatry (IAPP)</li>
              <li>Indian Medical Association (IMA)</li>
              <li>Indian Psychiatric Society, North Zone</li>
            </ul>
          </div>

          <div className="lg:w-1/2 flex justify-center mx-auto">
            <img
              src="/pictures/memberships.jpeg"
              alt="Memberships and Affiliations"
              className="w-auto h-92 rounded shadow-md object-fit"
            />
          </div>
        </div>

        <h3 className="text-3xl font-bold text-blue-600 mb-4">Recognitions</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          Loona Hospital has been recognized for its commitment to mental health
          care. We are honored to have received an award from the honorable Dr.
          Balbir Singh, Health Minister of Punjab, acknowledging our efforts in
          promoting mental wellness in the community.
        </p>

        <h3 className="text-3xl font-bold text-blue-600 mb-4">
          Your Journey to Wellness
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          At Loona Hospital, we understand that seeking help for mental health
          challenges can be daunting. Our team is here to support you every step
          of the way, ensuring that you feel safe, understood, and empowered
          throughout your treatment journey.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Whether you are dealing with anxiety, depression, addiction, or any
          other mental health issue, we are dedicated to helping you achieve a
          healthier, happier life.
        </p>
      </div>
    </div>
  );
};

export default AboutHeading;
