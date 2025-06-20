import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/De-addictionS.jpeg", // Replace with your actual image path
  sidebarLinks: [
    { title: " Psychiatric Care", link: "/psychiatric-care" },
    { title: "De-addiction Programs", link: "/deaddiction" },
    { title: "Sexual Wellness Services", link: "/sexual-wellness" },
  ],
};

const DeaddictionPrograms = () => {
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
          De-addiction Programs
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Left Div - Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">Introduction</h2>
            <p>
              Overcoming addiction is a transformative journey that demands
              support, understanding, and effective strategies. Our expert
              de-addiction programs are meticulously designed to address a
              variety of substance use disorders, including alcohol, opioids,
              and stimulants. We believe that recovery is not just about
              quitting substances; it's about rebuilding lives in a safe and
              compassionate environment.
            </p>

            <h2 className="font-semibold text-xl">What We Offer</h2>

            <h3 className="font-semibold text-lg">Comprehensive Assessment</h3>
            <p>
              Our journey begins with a thorough assessment conducted by our
              experienced professionals. This evaluation helps us understand the
              unique needs of each individual, allowing us to tailor a
              personalized treatment plan that addresses specific challenges and
              goals.
            </p>

            <h3 className="font-semibold text-lg">Detoxification Services</h3>
            <p>
              Detoxification is often the first step in recovery. Our medical
              team provides safe and monitored detox services to help manage
              withdrawal symptoms effectively. We prioritize your safety and
              comfort throughout this critical phase.
            </p>

            <h3 className="font-semibold text-lg">Individual Counseling</h3>
            <p>
              One-on-one counseling sessions are at the heart of our programs.
              Our licensed therapists work closely with individuals to explore
              the root causes of addiction, develop coping strategies, and set
              achievable recovery goals.
            </p>

            <h3 className="font-semibold text-lg">Group Therapy</h3>
            <p>
              Group therapy plays a vital role in the recovery process.
              Participants engage in discussions, share experiences, and provide
              mutual support. This collaborative approach helps individuals
              realize they are not alone in their struggles and fosters a sense
              of community.
            </p>

            <h3 className="font-semibold text-lg">Holistic Approaches</h3>
            <p>
              We recognize that recovery is not solely about physical healing.
              Our programs incorporate holistic therapies, such as mindfulness,
              yoga, and art therapy, to promote emotional and spiritual
              well-being. These complementary therapies can enhance overall
              recovery and provide additional coping mechanisms.
            </p>

            <h3 className="font-semibold text-lg">Aftercare Support</h3>
            <p>
              Recovery doesn’t end after completing a program. Our aftercare
              support services help individuals transition back into everyday
              life while maintaining their sobriety. We offer ongoing
              counseling, support groups, and resources to ensure a successful
              long-term recovery.
            </p>

            <h2 className="font-semibold text-xl">Conclusion</h2>
            <p>
              Overcoming addiction is a challenging but achievable goal. With
              the right support, resources, and determination, recovery is
              possible. Let us guide you on this journey towards a brighter
              future. Your path to healing starts here.
            </p>
          </div>

          {/* ✅ Right Div - Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Other Services
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

export default DeaddictionPrograms;
