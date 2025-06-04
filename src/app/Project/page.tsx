'use client';
import React from 'react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Shawazi PWA",
      description: "Full-stack implementation of research findings into a role-based Progressive Web Application. Applied human-centered design principles to ensure transparency in land transactions.",
      image: "/images/shawazi.png",
      technologies: ["NextJS", "User Research", "Design", "User Journey Mapping"],
      category: "Product Design & Research",
      liveUrl: "https://shawazi-magezi.vercel.app/",
      researchUrl: "https://drive.google.com/drive/folders/1l0xW5f5KOkVmJWk4cr8AkQ1vIjthQB1g?usp=drive_link",
      designUrl: "https://www.figma.com/design/uZxMXHhxB9Rwasmfo3n6bR/Shawazi-PWA?node-id=0-4&t=GU0S5AposuRPaWrw-1",
      featured: true,
      researchHighlights: ["User Research and Design", "Process Mapping", "Regulatory Research"]
    },

    {
      id: 2,
      title: "Wezesha",
      description: "Comprehensive UX research and design for a transparent land acquisition platform. Conducted stakeholder interviews, created user personas, and designed for complex multi-user workflows.",
      image: "/images/wezesha.png",
      technologies: ["NextJS", "User Research", "Service Design", "Stakeholder Mapping"],
      category: "Product Design & Research",
      liveUrl: "https://appetize.io/app/b_xwgukpnzqehusvpscgzwydgzki",
      researchUrl: "https://drive.google.com/drive/folders/1go1fnHBAsP7C0__VkVN2hMNTTCKameAH?usp=drive_link",
      designUrl: "https://www.behance.net/gallery/your-shawazi-case-study",
      featured: true,
      researchHighlights: ["Primary and Desk Research","Interviews", "Process Mapping", "Regulatory Research"]
    },

    {
      id: 3,
      title: "Shawazi Informational Website",
      description: "Comprehensive UX research and design for a transparent land acquisition platform. Conducted stakeholder interviews, created user personas, and designed for complex multi-user workflows.",
      image: "/images/shawazi-info.png",
      technologies: ["NextJS", "User Research", "Service Design", "Stakeholder Mapping"],
      category: "Product Design & Research",
      liveUrl: "https://magezi-informational-c594.vercel.app/",
      researchUrl: "https://docs.google.com/document/d/your-shawazi-research-doc",
      designUrl: "https://www.figma.com/design/M5XReGbZGKzA6X460lfyO2/Shawazi_Informational-Website-Design?node-id=0-1&t=MHei0GH95BvacPww-1",
      featured: true,
      researchHighlights: ["Stakeholder Interviews", "Process Mapping", "Regulatory Research"]
    },

    {
      id: 4,
      title: "Musica Streaming Interface",
      description: "Music discovery platform with focus on user behavior research and API integration patterns. Analyzed music consumption habits and designed intuitive discovery mechanisms.",
      image: "/images/musica.png",
      technologies: ["User Behavior Analysis", "API Design", "HTML", "CSS", "Javascript"],
      category: "Interface Design & Research",
      liveUrl: "https://musica-website-app.vercel.app/",
      designUrl: "https://www.behance.net/gallery/your-musica-case-study",
      featured: false,
      researchHighlights: ["Music Consumption Research", "API Usability Study"]
    },

    {
      id: 5,
      title: "Kipepeo Fashion Brand",
      description: "Comprehensive brand identity and UX research for a Haute Couture fashion brand. Conducted user interviews, competitive analysis, and created a complete design system inspired by butterfly transformation aesthetics.",
      image: "/images/kipepeo.png",
      technologies: ["User Research", "Brand Identity", "Figma", "Adobe Creative Suite"],
      category: "Brand Design & Research",
      designUrl: "https://www.figma.com/design/h6brtyRmfNwvbW84k8Y6vB/Kipepeo-Fashion?node-id=0-1",
      featured: false,
      researchHighlights: ["User Persona Development", "Market Analysis", "Usability Testing"]
    },

    {
      id: 6,
      title: "Mindscape Content Platform",
      description: "Research-driven design for a content platform featuring user journey mapping, information architecture, and accessibility considerations. Focused on improving reading experience and content discovery.",
      image: "/images/Magezi.PNG",
      technologies: ["UX Research", "Information Architecture", "Wireframing", "Prototyping"],
      category: "UX Research & Design",
      designUrl: "https://www.figma.com/design/kAQj2SgSvp1lhfr96VFaTD/Magezi?node-id=0-1",
      featured: false,
      researchHighlights: ["Content Strategy Research", "User Flow Analysis", "A/B Testing"]
    },

    {
      id: 7,
      title: "Mkulima Cooperative System",
      description: "Research and design for agricultural cooperative management. Conducted field research with farmers, analyzed existing workflows, and designed inclusive interfaces for diverse user groups.",
      image: "/images/mkulima.png",
      technologies: ["Ethnographic Research", "Service Design", "Inclusive Design", "Figma"],
      category: "Social Impact Design",
      designUrl: "https://www.figma.com/design/EUUV64BzyeWKSxjpG3I4xV/Mkulima-Wireframes-Design",
      featured: false,
      researchHighlights: ["Field Research", "Cultural Sensitivity Analysis", "Accessibility Research"]
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Design & Research Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Showcasing human-centered design solutions backed by comprehensive research, user insights, and strategic thinking
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">🔬 Featured Research & Design Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => p.featured).map(project => (
              <div key={project.id} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-purple-700">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Research Highlights */}
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-700 mb-2">Research Methods:</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.researchHighlights.map((highlight, index) => (
                        <span key={index} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-white border border-purple-200 text-purple-600 text-sm px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center text-sm py-3 rounded-lg font-medium hover:shadow-md hover:scale-105 transition-transform"
                    >
                      Deployed
                    </a>
                    <a
                      href={project.researchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-purple-500 text-purple-500 text-center py-3 rounded-lg font-medium text-sm hover:shadow-md hover:scale-105 transition-transform"
                    >
                      Research Docs
                    </a>
                    <a
                      href={project.designUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-purple-500 text-purple-500 text-center py-3 rounded-lg text-sm font-medium hover:bg-purple-500 hover:text-white transition-all"
                    >
                      Figma Design
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Additional Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map(project => (
              <div key={project.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 2).map((tech, index) => (
                      <span key={index} className="bg-gray-100 px-2 py-1 text-xs rounded text-gray-600">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="bg-gray-100 px-2 py-1 text-xs rounded text-gray-600">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 rounded text-sm font-medium hover:shadow-md transition-transform"
                    >
                      View
                    </a>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Methodology Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Research Approach</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔍</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Discover</h4>
                <p className="text-gray-600 text-sm">User interviews, surveys, competitive analysis, and stakeholder mapping to understand the problem space</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Define</h4>
                <p className="text-gray-600 text-sm">Synthesizing insights into personas, journey maps, and design requirements that guide solution development</p>
              </div>
              <div className="text-center">
                <div className="bg-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✅</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Validate</h4>
                <p className="text-gray-600 text-sm">Usability testing, A/B testing, and iterative design based on user feedback and data analysis</p>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Links */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Explore My Complete Portfolio</h3>
            <p className="text-gray-600 mb-6">Dive deeper into my design process, research methodologies, and case studies</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Gloria-Nyaga"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-transform hover:scale-105"
              >
                Access Github
              </a>
              <a
                href="https://drive.google.com/drive/folders/1l0xW5f5KOkVmJWk4cr8AkQ1vIjthQB1g?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white transition-transform hover:scale-105"
              >
                Case Studies Projects
              </a>
            </div>
          </div>
        </div>

        {/* Research Repository */}
        <div className="mt-10 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Research Documentation</h3>
            <p className="text-gray-600 mb-5">Access detailed research reports, user insights, and methodology documentation</p>
            <a
              href="https://drive.google.com/drive/folders/1l0xW5f5KOkVmJWk4cr8AkQ1vIjthQB1g?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="border-purple-600 border-2 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-transform hover:scale-105"
            >
              View Research 
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;