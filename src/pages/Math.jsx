import React from "react";
import { Link } from "react-router-dom";

export default function Math() {
  const classes = [
    {
      standard: "Class 8",
      topics:
        "Integers, Algebra, Linear Equations, Geometry, Mensuration, Data Handling",
    },
    {
      standard: "Class 9",
      topics:
        "Number Systems, Polynomials, Coordinate Geometry, Triangles, Statistics",
    },
    {
      standard: "Class 10",
      topics:
        "Quadratic Equations, Trigonometry, Circles, Probability, Surface Area & Volume",
    },
    {
      standard: "Class 11",
      topics:
        "Sets, Functions, Trigonometry, Calculus, Statistics, Probability",
    },
    {
      standard: "Class 12",
      topics:
        "Relations & Functions, Calculus, Vectors, 3D Geometry, Linear Programming",
    },
  ];

  const features = [
    "Experienced Mathematics Faculty",
    "Concept-Based Teaching",
    "Small Batch Size",
    "Weekly Tests & Assignments",
    "Doubt Solving Sessions",
    "Board Exam Preparation",
    "Study Notes & Practice Papers",
    "Parent Progress Reports",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Mathematics Coaching
              </h1>

              <h2 className="text-2xl mt-3 text-yellow-300 font-semibold">
                Class 8th to 12th
              </h2>

              <p className="mt-6 text-lg leading-8">
                Develop strong mathematical concepts with expert guidance,
                structured learning, regular practice, and personalized
                attention. Our coaching helps students build confidence, improve
                analytical thinking, and achieve excellent academic results.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/contact"
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300"
                >
                  Enroll Now
                </Link>

                <Link
                  to="/about"
                  className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1509228468518-180dd4864904"
                alt="Mathematics Coaching"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Mathematics */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Learn Mathematics with Confidence
          </h2>

          <p className="text-gray-700 text-lg leading-8">
            Our Mathematics coaching program is designed to strengthen
            conceptual understanding, logical reasoning, and problem-solving
            skills. Students receive personalized guidance, regular practice,
            and continuous assessments to excel in school and board
            examinations.
          </p>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
            Mathematics Curriculum
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6"
              >
                <h3 className="text-2xl font-bold text-blue-700">
                  {item.standard}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">{item.topics}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
            Why Join Our Mathematics Classes?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg text-blue-700">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Method */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
            Our Teaching Methodology
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl shadow p-8">
              <h3 className="text-xl font-bold mb-4">Concept-Based Learning</h3>

              <p className="text-gray-600 leading-7">
                We focus on helping students understand mathematical concepts
                through clear explanations, examples, and practical applications
                instead of rote memorization.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow p-8">
              <h3 className="text-xl font-bold mb-4">Continuous Assessment</h3>

              <p className="text-gray-600 leading-7">
                Weekly tests, assignments, doubt-solving sessions, and
                performance reviews ensure continuous improvement throughout the
                academic year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Build a Strong Foundation in Mathematics
          </h2>

          <p className="mt-6 text-lg leading-8">
            Join Inspiration Academy for expert Mathematics coaching from Class
            8 to Class 12. Learn from experienced teachers, practice regularly,
            and achieve academic excellence with confidence.
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
