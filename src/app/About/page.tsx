
import React from 'react';
import Image from 'next/image'; // Only if you're using Next.js. Otherwise, use <img>

// Adjust path as needed

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Left */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;m a passionate full-stack developer with a love for creating beautiful, 
              functional web applications. With expertise in modern web technologies, 
              I bring ideas to life through clean code and intuitive design.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, 
              contributing to open source projects, or enjoying a good cup of coffee 
              while planning my next creative project.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full">
                <span className="text-purple-700 font-semibold">Problem Solver</span>
              </div>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full">
                <span className="text-purple-700 font-semibold">Creative Thinker</span>
              </div>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full">
                <span className="text-purple-700 font-semibold">Team Player</span>
              </div>
            </div>
          </div>

          {/* Image Right */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/gloria.png" // or use src="/images/gloria.png" if not importing
              alt="Gloria"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-xl border-4 border-pink-200"
              height={200}
              width={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;