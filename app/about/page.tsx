import React from "react";

const AboutPage = () => {
  return (
    <div className="about-page bg-gray-50 min-h-screen py-10 px-5">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About HemansAI</h1>

        <section className="mb-10">
          <p className="text-lg text-gray-700 mb-4">
            At <strong>HemansAI</strong>, we are an{" "}
            <span className="text-indigo-600 font-semibold">
              AI Product & Service Studio
            </span>{" "}
            dedicated to empowering businesses and individuals with cutting-edge
            artificial intelligence solutions. By combining innovation with a
            structured and scalable approach, we solve complex AI challenges
            tailored to your specific needs.
          </p>
          <p className="text-lg text-gray-700">
            Whether you are an enterprise aiming to streamline operations or a
            leader seeking to enhance AI expertise,{" "}
            <span className="font-semibold">HemansAI</span> is your trusted
            partner on this transformative journey.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>AI Engineering:</strong> Designing and deploying robust AI
              solutions tailored to your goals.
            </li>
            <li>
              <strong>AI Consulting:</strong> Strategic guidance to help you
              unlock the full potential of AI.
            </li>
            <li>
              <strong>AI Development:</strong> Building custom AI tools and
              applications that deliver results.
            </li>
            <li>
              <strong>AI Education:</strong> Equipping individuals and teams
              with the skills to thrive in an AI-driven world.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
          <p className="text-lg text-gray-700 mb-4">
            Founded in <strong>2018</strong> by{" "}
            <a
              href="https://www.linkedin.com/in/hemansnation/"
              className="text-indigo-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Himanshu Ramchandani
            </a>
            , HemansAI began as a research-focused initiative providing AI
            services. Over the years, we have evolved into a comprehensive
            ecosystem for{" "}
            <strong>AI-focused products and services</strong>, continuously
            learning, growing, and innovating to stay ahead of the curve.
          </p>
          <p className="text-lg text-gray-700">
            Our mission is simple yet ambitious:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Make AI Accessible:</strong> Bringing AI within reach for
              businesses and individuals.
            </li>
            <li>
              <strong>Make AI Scalable:</strong> Developing solutions that grow
              with your needs.
            </li>
            <li>
              <strong>Make AI Impactful:</strong> Driving measurable
              improvements across industries and communities.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Let’s Work Together</h2>
          <p className="text-lg text-gray-700">
            Be part of the AI revolution with HemansAI. Together, we can shape
            a smarter, more efficient, and impactful future.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
