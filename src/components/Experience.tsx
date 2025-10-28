import { Calendar, MapPin, TrendingUp } from "lucide-react";
import { getAssetPath } from "@/lib/asset-path";

export const Experience = () => {
  const experiences = [
    {
      title: "Data Science & Consumer Insights Extern (Remote)",
      company: "Beats by Dre",
      location: "Remote",
      duration: "May 2025 - Aug 2025",
      type: "Part-time",
      logo: "images/logos/extern.png",
      achievements: [
        "Performed exploratory data analysis and sentiment analysis on over 5,000 Amazon reviews using Python, BeautifulSoup, TextBlob, Pandas, and Seaborn to uncover product sentiment and brand positioning",
        "Segmented customer survey data using Pandas and NumPy to define user personas based on generation, price sensitivity, and feature prioritization",
        "Extracted key demand drivers such as bass-forward sound, battery life, and design aesthetics through polarity scores, frequency distributions, and word cloud visualizations",
        "Automated the data scraping pipeline using BeautifulSoup and OxyLabs, reducing manual data collection time by 90% and improving dataset scale and quality",
        "Translated technical findings into data-backed launch recommendations, including product specifications, pricing, and go-to-market strategy",
        "Utilized tools such as Python, Pandas, NumPy, Matplotlib, Seaborn, BeautifulSoup, TextBlob, and WordCloud throughout the analysis workflow"
      ]
    },
    {
      title: "Software Development Engineer",
      company: "Amdocs, India",
      location: "Pune, India",
      duration: "Jul 2021 - Jul 2024",
      type: "Full-time",
      logo: "images/logos/amdocs.png",
      achievements: [
        "Engineered and automated ServiceNow workflows and custom modules for AT& T’s Fiber Broadband and Gigapower platforms, improving operational efficiency and reducing manual interventions by 40%.",
        "Developed and maintained Automated Test Framework (ATF) test suites and Python-based regression scripts, integrating them with CI/CD pipelines to shorten release validation cycles by 30%.",
        "Implemented REST API integrations using Postman and Swagger to validate and synchronize CMDB, Order Management, and Service Provisioning systems across multiple microservices.",
        "Built automation scripts for regression pipelines and data validations, reducing repetitive tasks and improving test coverage by 35%.",
        "Collaborated with cross-functional Agile teams (Product Owners, Developers, and QA) to design, develop, and deliver new ServiceNow features through the full SDLC.",
        "Configured and administered ServiceNow CMDB modules, enhancing data reliability and supporting integration with external RESTful services.",
        "Created Power BI dashboards and automated email notifications for daily test summaries, improving visibility into sprint metrics and team productivity tracking.",
        "Designed and executed unit, functional, integration, and system-level tests for large-scale deployments, ensuring end-to-end reliability of AT&T’s enterprise systems.",
        "Partnered with architects to analyze requirements, write user stories, and develop scalable solutions aligned with AT&T’s enterprise architecture standards."
      ]
    },
    // Doordarshan experience removed as requested
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 3 years of professional experience in software development, automation, and data analytics
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-32 bg-gray-200 hidden md:block"></div>
              )}
              
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Timeline dot */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold shrink-0">
                    <TrendingUp size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex items-start gap-4 mb-4 lg:mb-0">
                        <img 
                          src={exp.logo.startsWith('http') ? exp.logo : getAssetPath(exp.logo)}
                          alt={`${exp.company} logo`}
                          className="w-12 h-12 object-contain"
                        />
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                          <h4 className="text-xl font-semibold text-blue-600 mb-2">{exp.company}</h4>
                        </div>
                      </div>
                      <div className="flex flex-col lg:items-end text-gray-600">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar size={16} />
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
