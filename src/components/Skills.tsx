
export const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Python", color: "from-blue-500 to-cyan-500" },
        { name: "R", color: "from-blue-600 to-blue-800" },
        { name: "SQL", color: "from-orange-500 to-red-500" },
        { name: "C++", color: "from-gray-500 to-gray-700" },
        { name: "Java", color: "from-red-500 to-red-700" },
        { name: "JavaScript", color: "from-yellow-400 to-yellow-600" }
      ]
    },
    {
      category: "Libraries/Frameworks",
      skills: [
        { name: "TensorFlow", color: "from-orange-500 to-orange-700" },
        { name: "PyTorch", color: "from-red-500 to-red-700" },
        { name: "Scikit-Learn", color: "from-blue-500 to-blue-700" },
        { name: "Pandas", color: "from-purple-500 to-purple-700" },
        { name: "Keras", color: "from-pink-500 to-pink-700" },
        { name: "NumPy", color: "from-cyan-500 to-cyan-700" },
        { name: "Matplotlib", color: "from-indigo-500 to-indigo-700" },
        { name: "SciPy", color: "from-green-500 to-green-700" },
        { name: "Flask", color: "from-gray-600 to-gray-800" }
      ]
    },
    {
      category: "Databases & Tools",
      skills: [
        { name: "PostgreSQL", color: "from-blue-700 to-indigo-700" },
        { name: "MySQL", color: "from-blue-500 to-blue-700" },
        { name: "MongoDB", color: "from-green-600 to-green-800" },
        { name: "Power BI", color: "from-yellow-500 to-orange-500" },
        { name: "Tableau", color: "from-blue-500 to-blue-700" },
        { name: "AWS", color: "from-orange-400 to-orange-600" }
      ]
    },
    {
      category: "AI/ML Specializations",
      skills: [
        { name: "Machine Learning", color: "from-purple-500 to-purple-700" },
        { name: "Deep Learning", color: "from-indigo-500 to-indigo-700" },
        { name: "NLP", color: "from-green-500 to-green-700" },
        { name: "Time Series", color: "from-cyan-500 to-cyan-700" },
        { name: "Data Mining", color: "from-pink-500 to-pink-700" }
      ]
    }
    ,
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Docker", color: "from-sky-500 to-cyan-600" },
        { name: "Airflow", color: "from-orange-400 to-orange-600" },
        { name: "MLflow", color: "from-red-400 to-red-600" },
        { name: "Jenkins", color: "from-gray-600 to-gray-800" },
        { name: "CI/CD", color: "from-emerald-500 to-emerald-700" },
        { name: "Postman", color: "from-pink-400 to-pink-600" },
        { name: "Swagger", color: "from-yellow-400 to-yellow-600" },
        { name: "ServiceNow", color: "from-indigo-500 to-indigo-700" },
        { name: "Selenium", color: "from-blue-500 to-blue-700" },
        { name: "Robot Framework", color: "from-violet-500 to-violet-700" },
        { name: "JIRA", color: "from-red-500 to-red-700" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across data science, machine learning, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-6 text-center pb-2 border-b border-gray-100">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${skill.color} transition-transform hover:scale-105 hover:shadow-md`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
