import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const classes = ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"];

  const features = [
    {
      title: "Experienced Faculty",
      desc: "Learn from highly qualified and experienced Mathematics and Science teachers.",
    },
    {
      title: "Small Batch Size",
      desc: "Personal attention to every student for better understanding and performance.",
    },
    {
      title: "Regular Tests",
      desc: "Weekly tests, assignments, and performance analysis to improve results.",
    },
    {
      title: "Doubt Solving",
      desc: "Dedicated doubt-clearing sessions with one-to-one guidance.",
    },
    {
      title: "Board Exam Preparation",
      desc: "Complete syllabus coverage with previous years' question paper practice.",
    },
    {
      title: "Progress Reports",
      desc: "Regular feedback and performance updates shared with parents.",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Welcome to
                <span className="block text-yellow-300">
                  Inspiration Academy
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-100">
                Excellence in Mathematics and Science coaching for students of
                Classes <strong>8th to 12th</strong>. We help students build
                strong concepts, improve confidence, and achieve outstanding
                academic results through practical learning, regular
                assessments, and expert guidance.
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
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
                alt="Students Studying"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose Inspiration Academy?
          </h2>

          <p className="text-gray-600 text-lg leading-8">
            Our mission is to provide quality education that helps every student
            understand concepts clearly and perform confidently in school
            examinations. We combine experienced teaching, regular assessments,
            and individual attention to create a supportive learning
            environment.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-7">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Courses Offered
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {classes.map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 text-center"
              >
                <h3 className="text-2xl font-bold text-blue-700">{item}</h3>

                <p className="mt-3 text-gray-600">Mathematics & Science</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* <div>
              <h3 className="text-4xl font-bold text-blue-700">500+</h3>
              <p className="mt-2 text-gray-600">Students</p>
            </div> */}

            <div>
              <h3 className="text-4xl font-bold text-blue-700">98%</h3>
              <p className="mt-2 text-gray-600">Success Rate</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-700">15+</h3>
              <p className="mt-2 text-gray-600">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-700">100%</h3>
              <p className="mt-2 text-gray-600">Concept-Based Learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Parents & Students Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow p-6">
              <p className="text-gray-600 italic">
                "Excellent teaching methods with regular practice tests. My
                child's confidence in Mathematics has improved significantly."
              </p>

              <h4 className="mt-4 font-semibold">
                — Parent of Class 10 Student
              </h4>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <p className="text-gray-600 italic">
                "The Science classes are interactive and easy to understand.
                Teachers explain every concept with patience."
              </p>

              <h4 className="mt-4 font-semibold">— Class 12 Student</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Start Your Learning Journey Today
          </h2>

          <p className="mt-5 text-lg text-gray-100">
            Join Inspiration Academy and receive expert coaching in Mathematics
            and Science for Classes 8th to 12th with personalized attention and
            regular assessments.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
