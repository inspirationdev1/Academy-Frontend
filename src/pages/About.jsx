import React from "react";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            About Inspiration Academy
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-4xl mx-auto leading-8">
            Inspiring young minds through quality education, conceptual
            learning, and academic excellence.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">
              Who We Are
            </h2>

            <p className="text-gray-700 leading-8 text-justify mb-6">
              <strong>Inspiration Academy</strong> is dedicated to helping
              students achieve academic excellence through quality education,
              experienced teaching, and continuous guidance. We specialize in
              Mathematics and Science coaching for students from
              <strong> Class 8 to Class 12</strong>. Our mission is to create
              confident learners with strong conceptual understanding and
              excellent problem-solving skills.
            </p>

            <p className="text-gray-700 leading-8 text-justify mb-6">
              Our teaching approach combines classroom learning, regular
              assessments, doubt-solving sessions, and personalized mentoring.
              Every lesson is designed to simplify complex topics and encourage
              students to think logically, ask questions, and build confidence
              in their abilities. We focus on understanding concepts rather than
              memorizing answers, enabling students to perform well in school
              examinations and competitive tests.
            </p>

            <p className="text-gray-700 leading-8 text-justify">
              At Inspiration Academy, every student receives individual
              attention in a positive and motivating learning environment.
              Regular tests, performance analysis, parent interaction, and
              constructive feedback help students continuously improve. Our goal
              is not only to achieve outstanding academic results but also to
              develop discipline, curiosity, confidence, and a lifelong love of
              learning. We believe that every student has the potential to
              succeed with the right guidance, consistent practice, and
              encouragement.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Building Bright Futures Through Quality Education
          </h2>

          <p className="mt-6 text-lg leading-8">
            Join Inspiration Academy and experience concept-based learning,
            expert guidance, regular assessments, and a supportive environment
            that helps every student achieve academic success in Mathematics and
            Science from Class 8 to Class 12.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}
