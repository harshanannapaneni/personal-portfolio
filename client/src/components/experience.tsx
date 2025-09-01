import { CheckCircle } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Python Developer",
      company: "Scholar IT Solutions, Duluth, GA",
      period: "AUG 2023 – MAR 2025",
      current: true,
      achievements: [
        "Implemented multi-tenant architecture for HR management platform, enabling seamless client data isolation and supporting 5+ enterprise clients",
        "Optimized user login flow with JWT-based authentication and role-based access control, reducing support tickets by 40%",
        "Developed scalable ETL pipelines using Python and SQLAlchemy, cutting manual effort by 60%",
        "Enhanced backend performance by 30% via query tuning, Redis caching, and indexing",
        "Containerized services with Docker and deployed microservices on AWS, reducing storage costs by 25%",
      ],
    },
    {
      title: "Junior Python Developer",
      company: "CROWLEY WEBB, Buffalo, NY",
      period: "FEB 2023 - JUN 2023",
      current: false,
      achievements: [
        "Developed ETL process using SQLAlchemy and PyODBC, reducing Azure SQL query time by 75%",
        "Improved data accuracy by 5% through enhanced ETL data manipulation with Pandas",
        "Automated ETL pipeline using cronjobs, ensuring consistent and timely data processing",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="experience-title">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and key achievements
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative flex flex-col md:flex-row md:items-start gap-6">
                <div className={`w-4 h-4 rounded-full relative z-10 mt-6 hidden md:block ${
                  experience.current ? "bg-primary" : "bg-muted"
                }`}></div>
                <div className="bg-card p-8 rounded-lg border border-border flex-1 shadow-sm" data-testid={`experience-${index}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-foreground">{experience.title}</h3>
                    <span className="text-muted-foreground font-medium">{experience.period}</span>
                  </div>
                  <h4 className="text-lg text-primary font-medium mb-4">{experience.company}</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-3">
                        <CheckCircle className="text-accent mt-1 w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
