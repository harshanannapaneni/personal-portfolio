import { Code, Database, Globe, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming",
      skills: ["Python (Django, FastAPI)", "JavaScript", "Java", "SQL"],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Frontend",
      skills: ["React", "HTML5 & CSS3", "Bootstrap", "REST API Integration"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Cloud",
      skills: ["PostgreSQL", "Microsoft SQL Server", "MongoDB", "AWS (EC2, S3, RDS, Lambda)", "Azure"],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tools & DevOps",
      skills: ["Docker", "Kubernetes", "Git & GitHub", "Redis", "CloudWatch"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="skills-title">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow group"
              data-testid={`skill-category-${index}`}
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{category.title}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
