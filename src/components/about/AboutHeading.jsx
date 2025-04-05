import React from 'react';

const AboutHeading = () => {
  return (
    <div className="bg-white px-8 py-16 flex flex-col items-center justify-center">
      <div className="max-w-7xl  mb-12 text-left">
        <h1 className="text-3xl  text-black mb-4 text-left">Loona Hospital</h1>
        <h2 className="text-6xl font-semibold text-black mb-8">About Us</h2>
        <h3 className="text-3xl font-semibold text-black mb-6">Our Commitment to Care</h3>
        <p className="text-black text-xl text-left ">
          Our team consists of experienced psychiatrists, psychologists, therapists, and support staff who work collaboratively to offer personalized treatment plans tailored to meet the unique needs of each patient. We understand that every journey is different, and we are here to support you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default AboutHeading;
