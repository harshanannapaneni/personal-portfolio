import { Sprout, Zap, TrendingUp, Home } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Smart Precision Agriculture",
      description: "IoT system for agriculture using sensor networks and LoRaWAN. Integrated soil sensors for real-time field data monitoring with actionable insights for farmers.",
      technologies: ["IoT", "LoRaWAN", "Python", "Sensors"],
      type: "B.Tech Major Project",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Smart Energy Meters",
      description: "Converted conventional energy meters into smart meters using LoRaWAN devices. Built web portal for remote monitoring of electricity usage and meter readings.",
      technologies: ["LoRaWAN", "RS-485", "Python", "Web Portal"],
      type: "B.Tech Minor Project",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "SVB Bank Sentiment Analysis",
      description: "Analyzed social media sentiment during Silicon Valley Bank collapse using sentiment analysis, PCA, and K-means clustering to identify public opinion patterns.",
      technologies: ["Python", "Machine Learning", "PCA", "K-means"],
      type: "Academic Project",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Developed ML classification and regression algorithms in Python for Boston house price prediction and personal loan acceptance analysis.",
      technologies: ["Python", "scikit-learn", "Regression", "Classification"],
      type: "Academic Project",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="projects-title">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic and personal projects showcasing my technical skills
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 group"
              data-testid={`project-${index}`}
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {project.icon}
              </div>
              <div className="mb-2">
                <Badge variant="secondary" className="text-xs">
                  {project.type}
                </Badge>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
