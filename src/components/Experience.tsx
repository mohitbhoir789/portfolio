import { Calendar, MapPin, TrendingUp } from "lucide-react";
import { getAssetPath } from "@/lib/asset-path";

export const Experience = () => {
  const experiences = [
    {
      title: "Data Analytics: Qualitative & Quantitative Insights Extern",
      company: "Extern | Beats by Dre",
      location: "Remote",
      duration: "May 2025 - Aug 2025",
      type: "Part-time",
      logo: "images/logos/extern.png",
      achievements: [
        "Analyzed customer feedback and survey data to uncover key insights driving business decisions",
        "Performed sentiment analysis and AI-powered analytics using Python to evaluate customer responses",
        "Developed data visualizations and dashboards to effectively communicate findings to stakeholders",
        "Conducted competitor analysis and market research to inform business strategy",
        "Created comprehensive presentations synthesizing quantitative and qualitative insights",
        "Utilized AI tools for advanced data analysis and pattern recognition in consumer behavior"
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
        "Automated regression test suites using Selenium and Robot Framework, reducing release cycles by 30% and boosting deployment efficiency",
        "Engineered scalable ServiceNow workflows that eliminated ~40% of repetitive manual tasks, streamlining request processing time by 25%",
        "Built 5+ real-time dashboards in Power BI, enhancing reporting efficiency and enabling data-driven decision-making for key stakeholders",
        "Collaborated with 4+ cross-functional teams to design AI-based automation tools, improving accuracy and team productivity by 20%",
        "Integrated regression testing pipelines within development cycles, achieving 95% test accuracy and accelerating QA feedback loops",
        "Developed scripts to test APIs for Order Management System (OMS) and Customer Service Provisioning (CSP), ensuring robust backend integration"
      ]
    },
    {
      title: "Media Analytics and Network Intern",
      company: "Doordarshan, Mumbai",
      location: "Mumbai, India", 
      duration: "Dec 2019 - Jan 2020",
      type: "Internship",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Doordarshan_Logo.svg/1200px-Doordarshan_Logo.svg.png",
      achievements: [
        "Analyzed broadcast and signal data to identify viewership trends across 50+ programs",
        "Maintained electronics and network systems for 3 channels, ensuring 99.9% uptime",
        "Supported diagnostics that reduced data and signal errors by 15%"
      ]
    }
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
