import { ExternalLink, Github } from "lucide-react";
import { getAssetPath } from "@/lib/asset-path";

export const Projects = () => {
  const projects = [
    {
      title: "Movie Recommendation Chatbot",
      description: "Developed a semantic-search-based chatbot using a dataset of 343K+ IMDb movies (2000–2024). Used Hugging Face embeddings + Pinecone vector DB to enable real-time recommendation retrieval with under 1-second latency. Achieved over 92% accuracy in matching user query intents.",
      image: "images/projects/movie-chatbot.png",
      tech: ["Python", "RAG", "Hugging Face", "Pinecone", "PostgreSQL", "TMDb API"],
      github: "https://github.com/mohitbhoir789/movie-recommendation-chatbot",
      live: "#",
      featured: true
    },
    {
      title: "Statistical Analysis of Corporate Takeovers",
      description: "Analyzed takeover data from 126 U.S. firms over 8 years to identify predictors of acquisition likelihood. Built classification models (Poisson regression, Random Forest, XGBoost) with logistic regression achieving AUC = 0.78 and 77% accuracy.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["Python", "Scikit-learn", "Regression", "XGBoost", "Statistical Analysis"],
      github: "https://github.com/mohitbhoir789/corporate-takeover-analysis",
      live: "#",
      featured: true
    },
    {
      title: "Cricket Analysis Dashboard",
      description: "Created an interactive Tableau dashboard using 1.2M+ ODI ball-by-ball records (2002–2023) to analyze player and team performance. Performed SQL-based ETL and implemented LOD calculations to generate 20+ KPIs for match summaries.",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=400&fit=crop",
      tech: ["SQL", "Tableau", "LOD Calculations", "KPI Metrics", "Data ETL"],
      github: "https://github.com/mohitbhoir789/cricket-analysis-dashboard",
      live: "#",
      featured: false
    },
    {
      title: "Area Code Analysis",
      description: "A data science project analyzing US area codes for insights into geographic, demographic, and telecom trends. Includes data wrangling, visualization, and interactive dashboards.",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Data Visualization"],
      github: "https://github.com/mohitbhoir789/Area-Code-Analysis",
      live: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing data science, machine learning, and software development skills
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden lg:grid lg:grid-cols-2 h-[500px]"
            >
              <div className="relative overflow-hidden h-full">
                <img
                  src={project.image.startsWith('http') ? project.image : getAssetPath(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github className="text-blue-600" size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink className="text-blue-600" size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
