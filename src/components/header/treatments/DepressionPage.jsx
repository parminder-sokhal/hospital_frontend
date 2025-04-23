import React from 'react';
import { FaAngleRight } from "react-icons/fa6";


const data = {
  bgImage: '/images/depression.jpg', // Replace with your image URL
  sidebarLinks: [
    { title: 'Depression', link: '/depression' },
  { title: 'Anxiety', link: '/anxiety' },
  { title: 'Bipolar Disorder', link: '/bipolar-disorder' },
  { title: 'Schizophrenia', link: '/schizophrenia' },
  { title: 'OCD', link: '/ocd' },
    
  ]
};

const DepressionPage = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* ✅ Top Div */}
      <div
        className="w-full mt-34 h-92 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      {/* ✅ Bottom Div */}
      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">About Depression</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Left Div - Blog Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Get The Best Alcohol Addiction Treatment Centre in Delhi NCR. Alcohol addiction, commonly known as
              alcoholism, is characterised by a thirst for alcohol and an inability to stop drinking despite any harmful
              effects. Alcohol addiction happens when the brain adjusts its regular processes as a result of long-term
              alcohol use's chemical changes.
            </p>

            <p>
              Making an appointment for alcohol addiction treatment in Delhi NCR is a key first step if you or a loved one is
              prepared to take the courageous step toward recovery. The decision to seek assistance is a big one, and we at
              Roar Wellness Rehabilitation Centre are here to support you through it all.
            </p>

            <p>
              Our dedicated team of professionals is focused on providing individualized and sympathetic care to people who
              are suffering from alcohol addiction. We provide based on research treatment plans that take a holistic approach
              to recovery by addressing the mental, emotional, and physical elements of addiction.
            </p>

            <p>
              Simple and confidential appointment scheduling is available with us. Once you contact us, one of our intake
              specialists will walk you through the steps, address any concerns you might have, and arrange a convenient
              appointment time for your initial evaluation.
            </p>

            <p>
              At Roar Wellness Rehabilitation Centre in Delhi we put a high priority on your comfort and happiness, providing
              a calm and encouraging environment where you can concentrate on starting your recovery.
            </p>

            <p>
              Alcohol use is associated with a variety of negative health and social effects, including deterioration of
              interpersonal relationships, heart and liver disease, cancer, vehicle accidents, overdose, violence, homicide,
              and suicide.
            </p>

            <h2 className="font-semibold text-xl mt-4">The following are some signs of alcoholism:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Increased usage in both quantity and frequency.</li>
              <li>High alcohol tolerance or absence of "hangover" symptoms.</li>
              <li>Drinking in inappropriate locations like churches or workplaces.</li>
            </ul>
          </div>

          {/* ✅ Right Div - Sidebar */}
          <div className="lg:w-1/4  h-1/3  bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Psychiatry treatments
            </h2>
            <ul className="space-y-4">
              {data.sidebarLinks.map((item, index) => (
                <li key={index} className="flex items-center text-blue-600 hover:text-blue-800 cursor-pointer">
                  <FaAngleRight className="mr-2" />
                  <a href={item.link}>{item.title}</a>
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
