import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/pictures/counsellingTherapy.jpeg", // Replace with your actual image path if different
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

const CounsellingandTherapy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-80 sm:h-150 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Counselling and Therapy: A Complete Guide
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <h2 className="font-semibold text-xl">What is Counselling and Therapy?</h2>
            <p>
              Counselling and therapy (also called psychotherapy) refer to professional, structured forms of psychological treatment designed to help individuals manage emotional, behavioral, and mental health issues.
            </p>
            <p>
              Counselling is often short-term support for specific issues, while therapy may involve longer-term, deeper work on behavior, trauma, or relationships.
            </p>

            <h2 className="font-semibold text-xl">Goals of Counselling and Therapy</h2>
            <ul className="list-disc pl-6">
              <li>Improve mental well-being</li>
              <li>Address emotional difficulties</li>
              <li>Develop coping strategies</li>
              <li>Improve relationships</li>
              <li>Change harmful thoughts, emotions, or behaviors</li>
              <li>Heal from past trauma or loss</li>
              <li>Support in life transitions</li>
            </ul>

            <h2 className="font-semibold text-xl">Who Can Benefit?</h2>
            <p>Counselling and therapy can support anyone — not just those in crisis.</p>
            <ul className="list-disc pl-6">
              <li>Depression, anxiety, PTSD, OCD, bipolar disorder</li>
              <li>Stress and burnout</li>
              <li>Grief and trauma</li>
              <li>Relationship issues and self-esteem challenges</li>
              <li>Substance use and anger management</li>
              <li>Personal growth and exploration</li>
            </ul>

            <h2 className="font-semibold text-xl">Types of Counselling and Therapy</h2>
            <ul className="list-disc pl-6">
              <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Restructures negative thought patterns.</li>
              <li><strong>Psychodynamic Therapy:</strong> Explores unconscious patterns and early experiences.</li>
              <li><strong>Humanistic Therapy:</strong> Emphasizes empathy and personal growth.</li>
              <li><strong>Dialectical Behavior Therapy (DBT):</strong> Helps with emotional regulation and self-harm.</li>
              <li><strong>Interpersonal Therapy (IPT):</strong> Focuses on relationships and communication.</li>
              <li><strong>Mindfulness-Based Therapies:</strong> Integrates meditation for emotional balance.</li>
              <li><strong>Couples and Family Therapy:</strong> Resolves interpersonal and family conflict.</li>
              <li><strong>Trauma-Focused Therapy:</strong> Supports recovery from PTSD and trauma.</li>
            </ul>

            <h2 className="font-semibold text-xl">How Counselling Works</h2>
            <p>The therapeutic process usually includes:</p>
            <ul className="list-disc pl-6">
              <li>Initial assessment</li>
              <li>Setting goals</li>
              <li>Ongoing sessions (usually 45–60 mins)</li>
              <li>Progress monitoring</li>
              <li>Healthy termination</li>
            </ul>
            <p>
              Sessions may be weekly or bi-weekly and can be short or long-term depending on goals.
            </p>

            <h2 className="font-semibold text-xl">Therapists and Counsellors</h2>
            <p>Qualified professionals include:</p>
            <ul className="list-disc pl-6">
              <li>Licensed counsellors and psychologists</li>
              <li>Psychiatrists (can prescribe medication)</li>
              <li>Marriage and family therapists (MFTs)</li>
              <li>Social workers trained in therapy</li>
            </ul>

            <h2 className="font-semibold text-xl">What to Expect in Therapy</h2>
            <ul className="list-disc pl-6">
              <li>A safe, confidential space</li>
              <li>Strategies to navigate stress and emotions</li>
              <li>Respect for your pace and values</li>
              <li>Support for difficult decisions and transitions</li>
            </ul>

            <h2 className="font-semibold text-xl">Benefits of Counselling and Therapy</h2>
            <ul className="list-disc pl-6">
              <li>Improved emotional health and resilience</li>
              <li>Reduced stress, anxiety, and depression</li>
              <li>Better communication and relationships</li>
              <li>Healing from trauma and grief</li>
              <li>Increased self-awareness and confidence</li>
            </ul>

            <h2 className="font-semibold text-xl">Online vs In-Person Therapy</h2>
            <p><strong>Online Therapy:</strong> Convenient and private from anywhere.</p>
            <p><strong>In-Person Therapy:</strong> More traditional, ideal for complex issues.</p>

            <h2 className="font-semibold text-xl">How to Choose the Right Therapist</h2>
            <ul className="list-disc pl-6">
              <li>Define your goals and needs</li>
              <li>Check qualifications and approach</li>
              <li>Look for comfort, safety, and respect</li>
              <li>Try more than one if needed</li>
            </ul>

            <h2 className="font-semibold text-xl">When to Seek Help</h2>
            <ul className="list-disc pl-6">
              <li>You feel overwhelmed or anxious frequently</li>
              <li>You’re struggling with major life events</li>
              <li>You notice patterns of destructive thoughts or behavior</li>
              <li>You’re dealing with trauma, grief, or relationship stress</li>
              <li>You feel stuck or lost</li>
              <li>You experience suicidal thoughts or self-harm — in which case, seek immediate help</li>
            </ul>

            <h2 className="font-semibold text-xl">Misconceptions About Therapy</h2>
            <ul className="list-disc pl-6">
              <li><strong>Myth:</strong> Therapy is only for serious problems<br /><strong>Reality:</strong> Everyone can benefit</li>
              <li><strong>Myth:</strong> Therapy is a sign of weakness<br /><strong>Reality:</strong> Seeking help is strong and brave</li>
              <li><strong>Myth:</strong> Therapy is all about blaming or judging<br /><strong>Reality:</strong> It’s supportive and non-judgmental</li>
            </ul>

            <h2 className="font-semibold text-xl">Conclusion</h2>
            <p>
              Whether you're navigating challenges or seeking personal growth, counselling and therapy provide a foundation for emotional well-being and self-discovery. With the right support, healing and transformation are possible.
            </p>
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

export default CounsellingandTherapy;
