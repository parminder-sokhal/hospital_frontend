import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="text-gray-800">
      {/* Banner */}
      <div className="flex justify-center w-full mt-34 sm:h-92 h-52 bg-cover bg-no-repeat bg-center bg-[url('/pictures/Background.jpeg')]">
        <span className="flex justify-center items-center sm:text-6xl text-3xl font-semibold text-white  w-full">
          Privacy Policy
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Privacy Policy – Loona Hospital</h1>

        <p className="mb-4">
          Loona Hospital is committed to protecting the privacy and confidentiality of our patients. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services, especially in the areas of psychiatry, sexual wellness, and de-addiction.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-2">1. Information We Collect</h2>
        <p className="mb-2">We may collect the following types of personal and sensitive information:</p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Personal Information:</strong> Name, age, gender, contact details, ID proofs.</li>
          <li><strong>Health Information:</strong> Medical history, psychological records, therapy details, prescriptions, and diagnostic reports.</li>
          <li><strong>Usage Data:</strong> IP address, browser type, access times, and pages visited.</li>
          <li><strong>Communication Records:</strong> Messages, emails, appointment records, or feedback submitted through our platform.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">We collect and use your information for the following purposes:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>To provide medical consultation, therapy, and healthcare services.</li>
          <li>To maintain medical records as required by law.</li>
          <li>To schedule appointments and send updates or reminders.</li>
          <li>To improve our website and services.</li>
          <li>To respond to inquiries or service requests.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-2">3. Confidentiality of Sensitive Health Data</h2>
        <p className="mb-4">
          We recognize the sensitive nature of our specialties in psychiatry, sexual wellness, and de-addiction.
          All health-related information is handled with strict confidentiality and is accessible only to authorized medical professionals or as required by law.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-2">4. Sharing of Information</h2>
        <p className="mb-4">We do not sell, rent, or share your personal or health information with any third parties, except:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>With your explicit consent.</li>
          <li>With our authorized staff for healthcare delivery.</li>
          <li>As required by law enforcement or regulatory authorities.</li>
          <li>To prevent or respond to serious medical emergencies or threats to life or public health.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-2">5. Data Security</h2>
        <p className="mb-4">
          We implement appropriate administrative, technical, and physical safeguards to protect your data from unauthorized access, disclosure, alteration, or destruction.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-2">6. Your Rights</h2>
        <p className="mb-4">As a user, you have the right to:</p>
        <ul className="list-disc ml-6 mb-10">
          <li>Request access to your data.</li>
          <li>Correct any inaccurate information.</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
