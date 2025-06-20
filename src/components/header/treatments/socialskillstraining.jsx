import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/socialskillstraining.jpeg", // Replace with your actual image path if different
  sidebarLinks: [
    { title: "CBT", link: "/cbt" },
    { title: "DBT", link: "/DBT" },
    { title: "Individual Counselling", link: "/individual-counselling" },
    { title: "Stress Management", link: "/stress-management" },
    { title: "Behaviour Therapy", link: "/behaviour-therapy" },
    { title: "Relaxation Therapy", link: "/relaxation-therapy" },
    { title: "Social Skills Training", link: "/social-skills-training" },
  ],
};

const SocialSkillsTraining = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Social Skills Training (SST)
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">What Is Social Skills Training?</h2>
            <p>
              Social Skills Training (SST) is a structured form of therapy designed to help individuals improve their ability to interact effectively and appropriately with others. It focuses on developing communication, relationship-building, and interpersonal skills that are essential in daily life—whether at work, school, home, or in social settings.
            </p>
            <p>
              Social skills are learned behaviors. Just like any other skill, they can be taught, practiced, and improved with the right guidance and support. SST is especially useful for individuals who find social interaction challenging due to developmental conditions, anxiety, or past experiences.
            </p>

            <h2 className="font-semibold text-xl">Why Are Social Skills Important?</h2>
            <ul className="list-disc pl-6">
              <li>Form and maintain meaningful relationships</li>
              <li>Express thoughts, needs, and emotions clearly</li>
              <li>Handle conflicts constructively</li>
              <li>Navigate group dynamics</li>
              <li>Improve self-esteem and confidence</li>
              <li>Function better in school, work, and community settings</li>
            </ul>

            <h2 className="font-semibold text-xl">Who Can Benefit From Social Skills Training?</h2>
            <ul className="list-disc pl-6">
              <li>Autism Spectrum Disorder (ASD)</li>
              <li>Social Anxiety Disorder</li>
              <li>ADHD</li>
              <li>Learning disabilities</li>
              <li>Depression</li>
              <li>Shyness or introversion</li>
              <li>Behavioral disorders</li>
              <li>Communication difficulties</li>
              <li>Anyone wanting to improve interpersonal skills</li>
            </ul>

            <h2 className="font-semibold text-xl">What Happens in Social Skills Training?</h2>
            <p>
              SST sessions are goal-oriented and typically involve structured activities led by a trained therapist. Sessions may be conducted individually or in groups, depending on the client’s needs and preferences.
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Assessment of Current Skills</strong> – Therapist evaluates social functioning and target areas.</li>
              <li><strong>Skill Teaching and Modeling</strong> – New behaviors are taught and demonstrated.</li>
              <li><strong>Role-Playing</strong> – Practice through real-life social scenarios.</li>
              <li><strong>Feedback and Positive Reinforcement</strong> – Clients receive guidance and support.</li>
              <li><strong>Homework and Real-Life Practice</strong> – Skills are applied in day-to-day environments.</li>
              <li><strong>Problem-Solving and Coping Strategies</strong> – Tools for managing social challenges.</li>
            </ul>

            <h2 className="font-semibold text-xl">Skills Commonly Taught in SST Include:</h2>
            <ul className="list-disc pl-6">
              <li>Starting and maintaining conversations</li>
              <li>Making eye contact and using body language</li>
              <li>Active listening and empathy</li>
              <li>Asking for or offering help</li>
              <li>Managing conflicts</li>
              <li>Dealing with teasing or bullying</li>
              <li>Understanding social cues and boundaries</li>
              <li>Giving and receiving compliments</li>
              <li>Assertiveness training</li>
            </ul>

            <h2 className="font-semibold text-xl">Benefits of Social Skills Training</h2>
            <ul className="list-disc pl-6">
              <li>Improved confidence and self-esteem</li>
              <li>Better peer and family relationships</li>
              <li>Enhanced collaboration and teamwork</li>
              <li>Reduced social anxiety and isolation</li>
              <li>Greater emotional intelligence and empathy</li>
              <li>Increased academic or workplace success</li>
            </ul>
          </div>

          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Other Counselling and Therapy</h2>
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

export default SocialSkillsTraining;
