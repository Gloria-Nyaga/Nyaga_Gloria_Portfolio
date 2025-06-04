import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      icon: "🎨",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
      color: "from-blue-500 to-purple-500"
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: ["Django REST-Framework", "Python", "PostgreSQL", "REST APIs"],
      color: "from-green-500 to-teal-500"
    },
    {
      category: "UI/UX Design",
      icon: "🎨",
      skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "AutoCAD"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Tools & Others",
      icon: "🛠️",
      skills: ["Git", "GitHub", "VS Code", "Agile Methodologies", "CI/CD Pipeline", "Postman", "REST APIs"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((skillGroup, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{skillGroup.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800">{skillGroup.category}</h3>
              </div>
              
              <div className="space-y-3">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className={`bg-gradient-to-r ${skillGroup.color} bg-opacity-10 px-4 py-3 rounded-lg text-center transition-all duration-200 hover:bg-opacity-20 cursor-default`}
                  >
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Always Learning</h3>
            <p className="text-gray-600 leading-relaxed">
              Technology evolves rapidly, and I am committed to staying current with the latest trends and best practices. 
              I regularly explore new frameworks, attend tech events, and contribute to open-source projects to 
              continuously expand my skill set.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;