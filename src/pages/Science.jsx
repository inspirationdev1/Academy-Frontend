import React from "react";
import { Link } from "react-router-dom";

export default function Science() {
  const courses = [
    {
      class: "Class 8",
      subjects:
        "General Science, Force & Pressure, Light, Sound, Crop Production, Cell Structure",
    },
    {
      class: "Class 9",
      subjects:
        "Physics, Chemistry & Biology, Motion, Atoms & Molecules, Tissues, Gravitation",
    },
    {
      class: "Class 10",
      subjects:
        "Electricity, Magnetism, Chemical Reactions, Acids & Bases, Life Processes, Heredity",
    },
    {
      class: "Class 11",
      subjects:
        "Physics, Chemistry & Biology, Mechanics, Organic Chemistry, Cell Biology, Thermodynamics",
    },
    {
      class: "Class 12",
      subjects:
        "Electrostatics, Current Electricity, Organic Chemistry, Genetics, Biotechnology, Ecology",
    },
  ];

  const features = [
    "Experienced Science Faculty",
    "Physics, Chemistry & Biology",
    "Interactive Practical Learning",
    "Weekly Tests & Assessments",
    "Doubt Solving Sessions",
    "Board Exam Preparation",
    "Study Notes & Question Banks",
    "Parent Progress Updates",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Science Coaching
              </h1>

              <h2 className="text-2xl mt-3 font-semibold text-yellow-300">
                Class 8th to 12th
              </h2>

              <p className="mt-6 text-lg leading-8">
                Discover the exciting world of Science through concept-based
                learning, practical examples, experiments, and regular practice.
                Our coaching develops analytical thinking, scientific reasoning,
                and problem-solving skills to help students excel in school,
                board examinations, and future competitive studies.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/contact"
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
                >
                  Enroll Now
                </Link>

                <Link
                  to="/about"
                  className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-700 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d"
                alt="Science Coaching"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Learn Science Through Understanding
          </h2>

          <p className="text-gray-700 text-lg leading-8">
            Our Science coaching focuses on understanding concepts rather than
            memorizing facts. Students learn through interactive explanations,
            diagrams, numerical problem-solving, experiments, and regular
            practice that strengthens their knowledge and builds confidence.
          </p>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
            Science Curriculum
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6"
              >
                <h3 className="text-2xl font-bold text-green-700">
                  {course.class}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {course.subjects}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
            Why Choose Our Science Classes?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg text-green-700">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
            Subjects Covered
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl shadow p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Physics
              </h3>

              <p className="text-gray-600 leading-7">
                Motion, Force, Electricity, Magnetism, Optics, Modern Physics,
                Numerical Problem Solving, and Board Preparation.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Chemistry
              </h3>

              <p className="text-gray-600 leading-7">
                Chemical Reactions, Organic & Inorganic Chemistry, Acids, Bases,
                Salts, Periodic Table, and Practical Applications.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Biology
              </h3>

              <p className="text-gray-600 leading-7">
                Human Physiology, Genetics, Ecology, Cell Biology,
                Biotechnology, and Environmental Science.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Method */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
            Our Teaching Methodology
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow p-8">
              <h3 className="text-xl font-bold mb-4">Concept-Based Learning</h3>

              <p className="text-gray-600 leading-7">
                Every chapter is taught using practical examples, diagrams,
                activities, and real-life applications to make learning easy and
                interesting.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-8">
              <h3 className="text-xl font-bold mb-4">Continuous Evaluation</h3>

              <p className="text-gray-600 leading-7">
                Regular tests, assignments, revision sessions, and performance
                analysis help students improve consistently throughout the year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Explore the World of Science with Confidence
          </h2>

          <p className="mt-6 text-lg leading-8">
            Join Inspiration Academy and strengthen your understanding of
            Physics, Chemistry, and Biology through expert guidance,
            personalized mentoring, regular assessments, and concept-based
            learning for Classes 8th to 12th.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Join Today
          </Link>
        </div>
      </section>
    </div>
  );
}
