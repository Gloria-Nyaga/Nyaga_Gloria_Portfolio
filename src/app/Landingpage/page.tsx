
'use client';

import React from 'react';

const LandingPage = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-purple-50"
    >
      <div className="text-center px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-fuchsia-600 to-rose-600 bg-clip-text text-transparent mb-6">
          Bridging Code & Creativity.<br />Designing for Purpose, Building for Impact.
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-4">
            Hi, I’m Gloria —{' '}
            <span className="font-bold text-purple-600">
                UI/UX Designer
            </span>
        </p>

        <p className="text-lg md:text-xl text-gray-700 mb-8">
          I’m passionate about sustainable innovation and driven by empathy, systems thinking, and human-centered design. I thrive at the intersection of technology and design — transforming insights into purposeful, impactful solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="/documents/Gloria_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-purple-500 text-purple-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 transition-all duration-300"
          >
            Download CV
          </a>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          Scroll to explore design case studies, UX research, and passion projects 🌍✨
        </div>
      </div>
    </section>
  );
};

export default LandingPage;