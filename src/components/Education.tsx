import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "University of Connecticut",
      location: "Storrs, Connecticut",
      period: "2024 - 2025",
      gpa: "3.79/4.0",
      details: [
        "Coursework: Machine Learning, Deep Learning, Natural Language Processing, Data Mining, Statistical Methods",
        "Projects included developing machine learning models, natural language processing applications, and data analysis solutions",
        "Enhanced technical skills in Python, R, SQL, and various data science libraries and frameworks"
      ]
    },
    {
      degree: "Bachelor of Engineering in Electronics and Telecommunication",
      institution: "Mumbai University",
      location: "Mumbai, India",
      period: "2017 - 2021",
      cgpa: "7.78/10",
      details: [
        "Coursework: Digital Signal Processing, Computer Networks, Data Structures & Algorithms, Database Management",
        "Gained foundational knowledge in programming, signal processing, and systems design",
        "Developed strong analytical and problem-solving abilities through engineering projects"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey in data science and engineering
          </p>
        </div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <GraduationCap className="text-blue-600" />
                    {edu.degree}
                  </h3>
                  <div className="text-xl text-gray-700 mt-2">{edu.institution}</div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                    {edu.period}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    {edu.location}
                  </div>
                  {edu.gpa && (
                    <div className="flex items-center text-gray-600">
                      <Award className="w-5 h-5 mr-2 text-blue-600" />
                      GPA: {edu.gpa}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-4">
                <ul className="space-y-2">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="text-gray-600 flex items-start">
                      <span className="text-blue-600 mr-2 text-lg">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
